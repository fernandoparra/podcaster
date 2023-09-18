import { useEffect, useState } from 'react';
import { Entry } from '../interfaces/api';
import { Podcast } from '../interfaces/podcasts';
import { checkDifference } from '../services/date';
import { getURL } from '../services/url';
import { useLocalStorage } from './useLocalStorage';
import { CACHE_PODCASTS_KEY, CACHE_TIME } from '../constants';

export const usePodcasts = () => {
  const [podcasts, setPodcasts] = useState<Podcast[]>();
  const [loading, setLoading] = useState(false);
  const [localPodcasts, setLocalPodcasts] = useLocalStorage(CACHE_PODCASTS_KEY);

  useEffect(() => {
    const getPodcasts = async () => {
      setLoading(true);
      try {
        if (localPodcasts && checkDifference(localPodcasts.date, CACHE_TIME)) {
          setPodcasts(localPodcasts.podcasts);
          console.log('podcasts from local storage');
        } else {
          const response = await fetch(getURL(`/us/rss/toppodcasts/limit=100/genre=1310/json`));
          const data = await response.json();
          
          const mapPodcasts = data.feed.entry.map((podcast: Entry) => new Podcast(podcast));
          setLocalPodcasts({
            date: new Date().toISOString(),
            podcasts: mapPodcasts,
          });
          setPodcasts(mapPodcasts);
          console.log('podcasts from fetch');
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getPodcasts();
  }, [localPodcasts, setLocalPodcasts]);

  return {
    data: {
      podcasts,
    },
    loading,
  };
};
