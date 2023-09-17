import { render, screen } from '@testing-library/react';
import { Home } from '../index';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { podcasts } from '../../../__mocks__/podcasts';
const mockPodcasts = podcasts;

jest.mock('../../../hooks/usePodcasts', () => ({
  usePodcasts: () => ({
    data: {
      podcasts: mockPodcasts.feed.entry,
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
