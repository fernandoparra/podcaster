import { render, screen } from '@testing-library/react';
import { PodcastResult } from '../index';
import { podcasts } from '../../../__mocks__/podcasts';
import { Entry } from '../../../interfaces/api';
import { BrowserRouter } from 'react-router-dom';
const podcastMock = podcasts.feed.entry[1] as unknown as Entry;

test('should render the podcast result', () => {
  render(
    <BrowserRouter>
      <PodcastResult
        id={podcastMock.id.attributes['im:id']}
        name={podcastMock['im:name'].label}
        artist={podcastMock['im:artist'].label}
        image={podcastMock['im:image'][2].label}
        description={podcastMock.summary.label}
      />
    </BrowserRouter>
  );
  const episodesNumber = screen.getByText('One Song');
  expect(episodesNumber).toBeInTheDocument();
});

test('should render the podcast result image', () => {
  render(
    <BrowserRouter>
      <PodcastResult
        id={podcastMock.id.attributes['im:id']}
        name={podcastMock['im:name'].label}
        artist={podcastMock['im:artist'].label}
        image={podcastMock['im:image'][2].label}
        description={podcastMock.summary.label}
      />
    </BrowserRouter>
  );
  const image = screen.getByRole('img');
  expect(image).toBeInTheDocument();
});
