import { render, screen } from '@testing-library/react';
import { Episode } from '../index';
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
