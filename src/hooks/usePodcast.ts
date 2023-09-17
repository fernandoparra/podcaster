import { useEffect, useState } from 'react';
import { EpisodeApi } from '../interfaces/api';

export const usePodcast = (podcastId: string) => {
  const [podcast, setPodcast] = useState<EpisodeApi>();
  const [episodes, setEpisodes] = useState<EpisodeApi[]>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPodcasts = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`);
        const data = await response.json();
        setPodcast(data.results?.[0]);
        setEpisodes(data.results?.slice(1));
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
