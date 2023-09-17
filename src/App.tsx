import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Podcast } from './pages/Podcast';
import { Episode } from './pages/Episode';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col gap-2 max-w-3xl m-auto">
          <header>
            <h1 className="text-2xl">
              Podcaster
            </h1>
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
