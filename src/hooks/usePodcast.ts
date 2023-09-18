import { useEffect, useState } from 'react';
import { EpisodeApi } from '../interfaces/api';
import { Episode } from '../interfaces/podcasts';
import { useLocalStorage } from './useLocalStorage';
import { checkDifference } from '../services/date';
import { getURL } from '../services/url';
import { CACHE_EPISODES_KEY, CACHE_TIME } from '../constants';

export const usePodcast = (podcastId: string) => {
  const [podcast, setPodcast] = useState<Episode>();
  const [episodes, setEpisodes] = useState<Episode[]>();
  const [loading, setLoading] = useState(false);
  const [localEpisodes, setLocalEpisodes] = useLocalStorage(CACHE_EPISODES_KEY);

  useEffect(() => {
    const getPodcasts = async () => {
      setLoading(true);
      try {
        if(localEpisodes && checkDifference(localEpisodes.date, CACHE_TIME)) {
          setPodcast(localEpisodes.podcast);
          setEpisodes(localEpisodes.episodes);
          console.log('episodes from local storage');
        } else {
          const response = await fetch(getURL(`/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`));
          const data = await response.json();

          const mapPodcast = new Episode(data.results?.[0]);
          const mapEpisodes = data.results?.slice(1).map((episode: EpisodeApi) => new Episode(episode));
          
          setLocalEpisodes({
            date: new Date().toISOString(),
            podcast: mapPodcast,
            episodes: mapEpisodes,
          });

          setPodcast(mapPodcast);
          setEpisodes(mapEpisodes);
          console.log('episodes from fetch');
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getPodcasts();
  }, [podcastId, localEpisodes, setLocalEpisodes]);

  return {
    data: {
      podcast,
      episodes,
    },
    loading,
  };
};
