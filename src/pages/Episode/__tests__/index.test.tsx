import { render, screen } from '@testing-library/react';
import { Episode } from '../index';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Episode as EpisodeClass } from '../../../interfaces/podcasts';
import { EpisodeApi } from '../../../interfaces/api';
import { podcast } from '../../../__mocks__/podcast';
const podcastApi = podcast.results as unknown as EpisodeApi[];
const mockPodcast = new EpisodeClass(podcastApi[0]);
const mockEpisodes = podcastApi.slice(1).map(episode => new EpisodeClass(episode));

jest.mock('../../../hooks/usePodcast', () => ({
  usePodcast: () => ({
    data: {
      podcast: mockPodcast,
      episodes: mockEpisodes,
    },
    loading: false,
  }),
}));

test('should render the episode', () => {
  render(
    <MemoryRouter initialEntries={['/podcast/1696154359/episode/1000627822864']}>
      <Routes>
        <Route path="/podcast/:id/episode/:episodeId" element={<Episode />} />
      </Routes>
    </MemoryRouter>
  );
  const author = screen.getByText('by SiriusXM');
  const title = screen.getByText('"Work It"');
  expect(author).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});
