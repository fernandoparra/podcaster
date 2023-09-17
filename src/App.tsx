import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Podcast } from './pages/Podcast';
import { Episode } from './pages/Episode';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col gap-4 max-w-3xl m-auto">
          <header>
            <Link to="/">
              <h1 className="inline-block text-2xl font-bold text-blue-600">
                Podcaster
              </h1>
            </Link>
          </header>
          <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/podcast/:podcastId'} element={<Podcast />} />
            <Route path={'/podcast/:podcastId/episode/:episodeId'} element={<Episode />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};
