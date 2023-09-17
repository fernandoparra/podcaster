import { useEffect, useState } from 'react';
import { EpisodeApi } from '../interfaces/api';
import { Episode } from '../interfaces/podcasts';

export const usePodcast = (podcastId: string) => {
  const [podcast, setPodcast] = useState<Episode>();
  const [episodes, setEpisodes] = useState<Episode[]>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPodcasts = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`);
        const data = await response.json();

        const mapPodcast = new Episode(data.results?.[0]);
        const mapEpisodes = data.results?.slice(1).map((episode: EpisodeApi) => new Episode(episode));

        setPodcast(mapPodcast);
        setEpisodes(mapEpisodes);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getPodcasts();
  }, [podcastId]);

  return {
    data: {
      podcast,
      episodes,
    },
    loading,
  };
};
