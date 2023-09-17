import { EpisodeApi } from '../../interfaces/api';
import { formatDate, formatTime } from '../../services/date';
import { Card } from '../Card';
import { Link } from 'react-router-dom';

export interface EpisodesProps {
  episodes: EpisodeApi[];
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
              key={episode.trackId}
              to={`episode/${episode.trackId}`}
              className="even:bg-neutral-200 text-xs"
            >
              <div
                key={episode.trackId}
                className="flex gap-4 justify-between px-4 py-2 border-t border-neutral-300"
              >
                <div className="grow">
                  {episode.trackName}
                </div>
                <div className="w-1/5 shrink-0 text-right">
                  {formatDate(episode.releaseDate)}
                </div>
                <div className="w-1/5 shrink-0 text-right">
                  {formatTime(episode.trackTimeMillis)}
                </div>
              </div>
            </Link>
          )}
        </div>
      </Card>
    </div>
  );
};
