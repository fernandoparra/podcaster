import { render, screen } from '@testing-library/react';
import { Home } from '../index';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { podcasts } from '../../../__mocks__/podcasts';
import { Entry } from '../../../interfaces/api';
import { Podcast } from '../../../interfaces/podcasts';
const podcastsApi = podcasts.feed.entry as unknown as Entry[];
const mockPodcasts = podcastsApi.map(podcast => new Podcast(podcast));

jest.mock('../../../hooks/usePodcasts', () => ({
  usePodcasts: () => ({
    data: {
      podcasts: mockPodcasts,
    },
    loading: false,
  }),
}));

test('should render the home page', () => {
  render(
    <MemoryRouter initialEntries={['/podcast/1696154359']}>
      <Routes>
        <Route path="/podcast/:id" element={<Home />} />
      </Routes>
    </MemoryRouter>
  );
  const podcastName = screen.getByText('One Song');
  expect(podcastName).toBeInTheDocument();
});
