import { renderHook, waitFor } from '@testing-library/react';
import { usePodcast } from '../usePodcast';
import { podcast } from '../../__mocks__/podcast';
import { Episode } from '../../interfaces/podcasts';
import { EpisodeApi } from '../../interfaces/api';
const episodesApi = podcast.results as unknown as EpisodeApi[];
const episodes = episodesApi.slice(1).map((episode) => new Episode(episode));

global.fetch = (() => {
  return Promise.resolve({
    json: () =>
      Promise.resolve(podcast),
  });
}) as Response['json'];

test('should return the usePodcast hook data', async () => {
  const { result } = renderHook(() => usePodcast('1696154359'));  

  await waitFor(() => {
    expect(result.current.loading).toBe(false);
    expect(result.current.data.episodes).toEqual(episodes);
  });
});
