import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../contexts/global';

export const Header = () => {
  const { pageLoading } = useContext(GlobalContext);

  return (
    <div className="flex flex-col gap-4">
      <header className="flex justify-between items-center">
        <Link to="/">
          <h1 className="inline-block text-2xl font-bold text-blue-600">
            Podcaster
          </h1>
        </Link>
        {pageLoading &&
          <div className="w-5 h-5 bg-blue-600 rounded-full animate-pulse">
          </div>
        }
      </header>
      <hr />
    </div>
  );
};
