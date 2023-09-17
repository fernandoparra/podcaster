import { EpisodeApi } from '../../interfaces/api';
import { Card } from '../Card';

export interface EpisodePlayerProps {
  episode: EpisodeApi;
};

export const EpisodePlayer = ({episode}: EpisodePlayerProps) => {
  return (
    <Card>
      <div className="flex flex-col gap-4">
        <div className="text-lg font-semibold">
          {episode.trackName}
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
            <source src={episode.episodeUrl} type="audio/mp3" />
          </audio>
        </div>
      </div>
    </Card>
  );
};
