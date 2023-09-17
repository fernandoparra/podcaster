import { useEffect, useState } from 'react';
import { PodcastResult } from '../../components/PodcastResult';
import { Search } from '../../components/Search';
import { usePodcasts } from '../../hooks/usePodcasts';

export const Home = () => {
  const { data } = usePodcasts();
  const [search, setSearch] = useState('');
  const [podcasts, setPodcasts] = useState(data.podcasts);

  useEffect(() => {
    console.log('data', data.podcasts);
    setPodcasts(data.podcasts);
  }, [data.podcasts ]);

  const handleSearch = (search: string) => {
    setSearch(search);
    const searchLower = search.toLowerCase();
    const filtered = data.podcasts?.filter(podcast => {
      return podcast['im:name'].label.toLowerCase().includes(searchLower) ||
        podcast['im:artist'].label.toLowerCase().includes(searchLower);
    });
    setPodcasts(filtered);
  };

  return (
    <div className="flex flex-col gap-4">
      {data.podcasts && podcasts &&
        <div className="flex gap-2 items-center justify-end">
          <div className="bg-blue-600 text-neutral-100 text-xs font-semibold px-1 rounded-sm">
            {podcasts.length}
          </div>
          <Search
            search={search}
            onSearch={handleSearch}
          />
        </div>
      }
      <div className="grid gap-x-8 gap-y-16 grid-cols-2 md:grid-cols-4 justify-center">
        {podcasts?.map(podcast =>
          <div key={podcast.id.attributes['im:id']} className="mt-8">
            <PodcastResult
              id={podcast.id.attributes['im:id']}
              name={podcast['im:name'].label}
              artist={podcast['im:artist'].label}
              image={podcast['im:image'][2].label}
            />
          </div>
        )}
        {!data.podcasts &&
          <div>
            Loading...
          </div>
        }
      </div>
    </div>
  );
};
