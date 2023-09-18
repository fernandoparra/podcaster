import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Podcast } from './pages/Podcast';
import { Episode } from './pages/Episode';
import { GlobalContextProvider } from './contexts/global';
import { Header } from './components/Header';

export const App = () => {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <div className="flex flex-col gap-4 max-w-3xl m-auto">
          <Header />
          <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/podcast/:podcastId'} element={<Podcast />} />
            <Route path={'/podcast/:podcastId/episode/:episodeId'} element={<Episode />} />
          </Routes>
        </div>
      </BrowserRouter>
    </GlobalContextProvider>
  );
};
