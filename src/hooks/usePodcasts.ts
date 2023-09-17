import { useEffect, useState } from 'react';
import { Entry } from '../interfaces/api';
import { Podcast } from '../interfaces/podcasts';

export const usePodcasts = () => {
  const [podcasts, setPodcasts] = useState<Podcast[]>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPodcasts = async () => {
      setLoading(true);
      try {
        // const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')}`);
        const response = await fetch(`https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json`);
        const data = await response.json();
        
        const mapPodcasts = data.feed.entry.map((podcast: Entry) => new Podcast(podcast));

        setPodcasts(mapPodcasts);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getPodcasts();
  }, []);

  return {
    data: {
      podcasts,
    },
    loading,
  };
};
