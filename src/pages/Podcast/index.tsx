import { Outlet, useParams } from 'react-router-dom';
import { PodcastDetail } from '../../components/PodcastDetail';
import { Episodes } from '../../components/Episodes';
import { usePodcast } from '../../hooks/usePodcast';
import { useContext, useEffect } from 'react';
import { GlobalContext } from '../../contexts/global';

export const Podcast = () => {
  const { podcastId } = useParams();
  const { data, loading } = usePodcast(podcastId || '');
  const { podcastDescription, setPageLoading } = useContext(GlobalContext);

  useEffect(() => {
    setPageLoading(loading);
  }, [loading, setPageLoading]);

  return (
    <div className="flex gap-8 flex-wrap md:flex-nowrap">
      <div className="w-full md:w-1/3 shrink-0">
        {data.podcast &&
          <PodcastDetail
            name={data.podcast.name}
            artist={data.podcast.artist}
            image={data.podcast.image}
            description={podcastDescription}
          />
        }
      </div>
      <div className="grow">
        {data.episodes &&
          <Episodes
            episodes={data.episodes}
          />
        }
      </div>
      <Outlet />
    </div>
  );
};
