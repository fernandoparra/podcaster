import { render, screen } from '@testing-library/react';
import { Podcast } from '../index';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { podcast } from '../../../__mocks__/podcast';
const mockPodcast = podcast;

jest.mock('../../../hooks/usePodcast', () => ({
  usePodcast: () => ({
    data: {
      podcast: mockPodcast.results[0],
      episodes: mockPodcast.results.slice(1),
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
