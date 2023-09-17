import { Outlet, useParams } from 'react-router-dom';
import { PodcastDetail } from '../../components/PodcastDetail';
import { Episodes } from '../../components/Episodes';
import { usePodcast } from '../../hooks/usePodcast';

export const Podcast = () => {
  const { podcastId } = useParams();
  const { data } = usePodcast(podcastId || '');

  return (
    <div className="flex gap-8 flex-wrap md:flex-nowrap">
      <div className="w-full md:w-1/3 shrink-0">
        {data.podcast &&
          <PodcastDetail
            name={data.podcast.collectionName}
            artist={data.podcast.artistName}
            image={data.podcast.artworkUrl600}
            description={data.podcast.description}
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
