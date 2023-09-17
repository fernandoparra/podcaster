import { render, screen } from '@testing-library/react';
import { PodcastDetail } from '../index';
import { podcast } from '../../../__mocks__/podcast';
import { EpisodeApi } from '../../../interfaces/api';
import { Episode } from '../../../interfaces/podcasts';
const episodeApi = podcast.results[0] as unknown as EpisodeApi;
const episode = new Episode(episodeApi);

test('should render the podcast detail', () => {
  render(
    <PodcastDetail
      name={episode.name}
      artist={episode.artist}
      image={episode.image}
      description={episode.description}
    />
  );
  const episodesNumber = screen.getByText('by SiriusXM');
  expect(episodesNumber).toBeInTheDocument();
});

test('should render the podcast detail image', () => {
  render(
    <PodcastDetail
      name={episode.name}
      artist={episode.artist}
      image={episode.image}
      description={episode.description}
    />
  );
  const image = screen.getByRole('img');
  expect(image).toBeInTheDocument();
});
