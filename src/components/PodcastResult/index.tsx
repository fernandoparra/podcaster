import { Link } from 'react-router-dom';
import { Card } from '../Card';
import { useContext } from 'react';
import { GlobalContext } from '../../contexts/global';

export interface PodcastResultProps {
  id: string;
  name: string;
  artist: string;
  image: string;
  description: string;
}

export const PodcastResult = ({id, name, artist, image, description}: PodcastResultProps) => {
  const {setPodcastDescription} = useContext(GlobalContext);

  const handlePodcastClick = () => {
    console.log('podcast clicked', id);
    setPodcastDescription(description);
  };

  return (
    <Link
      to={`/podcast/${id}`}
      onClick={handlePodcastClick}
    >
      <Card>
          <div
            className="flex flex-col gap-2 items-center cursor-pointer"
          >
            <div className="flex justify-center translate-y-[-50%] -mb-12">
              <img className="w-24 h-24 rounded-full" src={image} alt="" />
            </div>
            <div className="flex flex-col gap-1 text-xs text-center">
              <h2 className="font-semibold uppercase">
                {name}
              </h2>
              <div className="text-neutral-500">
                Author: {artist}
              </div>
            </div>
          </div>
      </Card>
    </Link>
  );
};
