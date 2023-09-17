import { render, screen } from '@testing-library/react';
import { PodcastResult } from '../index';
import { podcasts } from '../../../__mocks__/podcasts';
import { Entry } from '../../../interfaces/api';
import { BrowserRouter } from 'react-router-dom';
import { Podcast } from '../../../interfaces/podcasts';
const podcastApi = podcasts.feed.entry[1] as unknown as Entry;
const podcast = new Podcast(podcastApi);

test('should render the podcast result', () => {
  render(
    <BrowserRouter>
      <PodcastResult
        id={podcast.id}
        name={podcast.name}
        artist={podcast.artist}
        image={podcast.image}
        description={podcast.summary}
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
        id={podcast.id}
        name={podcast.name}
        artist={podcast.artist}
        image={podcast.image}
        description={podcast.summary}
      />
    </BrowserRouter>
  );
  const image = screen.getByRole('img');
  expect(image).toBeInTheDocument();
});
