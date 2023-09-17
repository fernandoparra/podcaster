import { fireEvent, render, screen } from '@testing-library/react';
import { Episodes } from '../index';
import { podcast } from '../../../__mocks__/podcast';
import { BrowserRouter } from 'react-router-dom';
import { Episode } from '../../../interfaces/podcasts';
import { EpisodeApi } from '../../../interfaces/api';
const episodesApi = podcast.results.slice(1) as unknown as EpisodeApi[];
const episodes = episodesApi.map(episode => new Episode(episode));

test('should render the episodes list', () => {
  render(
    <BrowserRouter>
      <Episodes episodes={episodes} />
    </BrowserRouter>
  );
  const episodesNumber = screen.getByText('Episodes: 10');
  expect(episodesNumber).toBeInTheDocument();
});

test('should go to the episode player', () => {
  render(
    <BrowserRouter>
      <Episodes episodes={episodes} />
    </BrowserRouter>
  );
  const episode = screen.getByText('"Work It"');
  fireEvent.click(episode);
  expect(location.href).toMatch(/\/episode\/1000627822864$/);
});
