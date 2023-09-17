import { render, screen } from '@testing-library/react';
import { EpisodePlayer } from '../index';
import { podcast } from '../../../__mocks__/podcast';
import { EpisodeApi } from '../../../interfaces/api';
const episode = podcast.results[1] as unknown as EpisodeApi;

test('should render the episode title', () => {
  render(<EpisodePlayer episode={episode} />);
  const episodesNumber = screen.getByText('"Work It"');
  expect(episodesNumber).toBeInTheDocument();
});

test('should render the episode player', () => {
  const episodeElement = render(<EpisodePlayer episode={episode} />);
  const audioSource = episodeElement.container.querySelector('source');
  expect(audioSource?.src).toBe(episode.episodeUrl);
});
