import { Card } from '../Card';

export interface PodcastDetailProps {
  name: string;
  artist: string;
  image: string;
  description: string;
}

export const PodcastDetail = ({name, artist, image, description}: PodcastDetailProps) => {
  return (
    <Card>
      <div className="flex flex-col gap-4">
        <div className="flex justify-center">
          <img className="w-32 h-32" src={image} alt="" />
        </div>
        <hr />
        <div className="flex flex-col gap-1 text-xs">
          <h2 className="font-semibold">
            {name}
          </h2>
          <div className="italic">
            by {artist}
          </div>
        </div>  
        {description &&
          <>
            <hr />
            <div>
              {description}
            </div>
          </>
        }
      </div>
    </Card>
  );
};
