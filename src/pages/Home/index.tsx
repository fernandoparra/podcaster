import { PodcastResult } from '../../components/PodcastResult';
import { usePodcasts } from '../../hooks/usePodcasts';

export const Home = () => {
  const { data } = usePodcasts();

  return (
    <div className="grid gap-x-8 gap-y-16 grid-cols-2 md:grid-cols-4 justify-center">
      {data.podcasts?.map(podcast =>
        <div key={podcast.id.attributes['im:id']} className="mt-8">
          <PodcastResult
            id={podcast.id.attributes['im:id']}
            name={podcast['im:name'].label}
            artist={podcast['im:artist'].label}
            image={podcast['im:image'][2].label}
          />
        </div>
      )}
      {data.podcasts?.length === 0 &&
        <div>
          Loading...
        </div>
      }
    </div>
  );
};
