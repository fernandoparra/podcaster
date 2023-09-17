import { useParams } from 'react-router-dom';
import { PodcastDetail } from '../../components/PodcastDetail';
import { usePodcast } from '../../hooks/usePodcast';
import { EpisodePlayer } from '../../components/EpisodePlayer';

export const Episode = () => {
  const { podcastId, episodeId } = useParams();
  const { data } = usePodcast(podcastId || '');
  const episode = data.episodes?.find(episode => episode.id === episodeId);

  return (
    <div className="flex gap-8 flex-wrap md:flex-nowrap">
      <div className="w-full md:w-1/3 shrink-0">
        {data.podcast &&
          <PodcastDetail
            name={data.podcast.name}
            artist={data.podcast.artist}
            image={data.podcast.image}
            description={data.podcast.description}
          />
        }
      </div>
      {episode &&
        <div className="grow">
          <EpisodePlayer
            episode={episode}
          />
        </div>
      }
    </div>
  );
};
