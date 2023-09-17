import { render, screen } from '@testing-library/react';
import { Podcast } from '../index';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Episode } from '../../../interfaces/podcasts';
import { podcast } from '../../../__mocks__/podcast';
import { EpisodeApi } from '../../../interfaces/api';
const podcastApi = podcast.results as unknown as EpisodeApi[];
const mockPodcast = new Episode(podcastApi[0]);
const mockEpisodes = podcastApi.slice(1).map(episode => new Episode(episode));

jest.mock('../../../hooks/usePodcast', () => ({
  usePodcast: () => ({
    data: {
      podcast: mockPodcast,
      episodes: mockEpisodes,
    },
    loading: false,
  }),
}));

test('should render the podcast detail', () => {
  render(
    <MemoryRouter initialEntries={['/podcast/1696154359']}>
      <Routes>
        <Route path="/podcast/:id" element={<Podcast />} />
      </Routes>
    </MemoryRouter>
  );
  const podcastName = screen.getByText('One Song');
  const episode = screen.getByText('"Work It"');
  expect(podcastName).toBeInTheDocument();
  expect(episode).toBeInTheDocument();
});
