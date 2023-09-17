import { Episode } from '../../interfaces/podcasts';
import { Card } from '../Card';

export interface EpisodePlayerProps {
  episode: Episode;
};

export const EpisodePlayer = ({episode}: EpisodePlayerProps) => {
  return (
    <Card>
      <div className="flex flex-col gap-4">
        <div className="text-lg font-semibold">
          {episode.name}
        </div>
        <div
          className="text-xs whitespace-pre-wrap"
          dangerouslySetInnerHTML={{__html: episode.description}}
        >
        </div>
        <hr />
        <div>
          <audio
            className="w-full"
            controls
          >
            <source src={episode.url} type="audio/mp3" />
          </audio>
        </div>
      </div>
    </Card>
  );
};
