import { render, screen } from '@testing-library/react';
import { EpisodePlayer } from '../index';
import { podcast } from '../../../__mocks__/podcast';
import { Episode } from '../../../interfaces/podcasts';
import { EpisodeApi } from '../../../interfaces/api';
const episodeApi = podcast.results[1] as unknown as EpisodeApi;
const episode = new Episode(episodeApi);

test('should render the episode title', () => {
  render(<EpisodePlayer episode={episode} />);
  const episodesNumber = screen.getByText('"Work It"');
  expect(episodesNumber).toBeInTheDocument();
});

test('should render the episode player', () => {
  const episodeElement = render(<EpisodePlayer episode={episode} />);
  const audioSource = episodeElement.container.querySelector('source');
  expect(audioSource?.src).toBe(episode.url);
});
