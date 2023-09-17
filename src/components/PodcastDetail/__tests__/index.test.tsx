import { render, screen } from '@testing-library/react';
import { PodcastDetail } from '../index';
import { podcast } from '../../../__mocks__/podcast';
import { EpisodeApi } from '../../../interfaces/api';
const podcastMock = podcast.results[0] as unknown as EpisodeApi;

test('should render the podcast detail', () => {
  render(
    <PodcastDetail
      name={podcastMock.collectionName}
      artist={podcastMock.artistName}
      image={podcastMock.artworkUrl600}
      description={podcastMock.description}
    />
  );
  const episodesNumber = screen.getByText('by SiriusXM');
  expect(episodesNumber).toBeInTheDocument();
});

test('should render the podcast detail image', () => {
  render(
    <PodcastDetail
      name={podcastMock.collectionName}
      artist={podcastMock.artistName}
      image={podcastMock.artworkUrl600}
      description={podcastMock.description}
    />
  );
  const image = screen.getByRole('img');
  expect(image).toBeInTheDocument();
});
