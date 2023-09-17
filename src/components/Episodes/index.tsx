import { Episode } from '../../interfaces/podcasts';
import { formatDate, formatTime } from '../../services/date';
import { Card } from '../Card';
import { Link } from 'react-router-dom';

export interface EpisodesProps {
  episodes: Episode[];
}

export const Episodes = ({episodes}: EpisodesProps) => {
  return (
    <div className="flex flex-col gap-8">
      <Card>
        <div className="text-lg font-semibold">
          Episodes: {episodes.length}
        </div>
      </Card>
      <Card>
        <div className="flex flex-col text-sm">
          <div className="flex gap-4 font-semibold text-center px-4 py-2">
            <div className="grow text-left">
              Title
            </div>
            <div className="w-1/5">
              Date
            </div>
            <div className="w-1/5 text-right">
              Duration
            </div>
          </div>
          {episodes.map((episode) =>
            <Link
              key={episode.id}
              to={`episode/${episode.id}`}
              className="even:bg-neutral-200 text-xs"
            >
              <div className="flex gap-4 justify-between px-4 py-2 border-t border-neutral-300">
                <div className="grow">
                  {episode.name}
                </div>
                <div className="w-1/5 shrink-0 text-right">
                  {formatDate(episode.releaseDate)}
                </div>
                <div className="w-1/5 shrink-0 text-right">
                  {formatTime(episode.duration)}
                </div>
              </div>
            </Link>
          )}
        </div>
      </Card>
    </div>
  );
};
