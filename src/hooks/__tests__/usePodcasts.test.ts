import { renderHook, waitFor } from '@testing-library/react';
import { usePodcasts } from '../usePodcasts';
import { podcasts } from '../../__mocks__/podcasts';
import { Entry } from '../../interfaces/api';
import { Podcast } from '../../interfaces/podcasts';
const podcastsApi = podcasts.feed.entry as unknown as Entry[];
const podcastsMock = podcastsApi.map((podcast) => new Podcast(podcast));

global.fetch = (() => {
  return Promise.resolve({
    json: () =>
      Promise.resolve(podcasts),
  });
}) as Response['json'];

test('should return the usePodcasts hook data', async () => {
  const { result } = renderHook(() => usePodcasts());

  await waitFor(() => {
    expect(result.current.loading).toBe(false);
    expect(result.current.data.podcasts).toEqual(podcastsMock);
  });
});
