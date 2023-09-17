import { renderHook, waitFor } from '@testing-library/react';
import { usePodcasts } from '../usePodcasts';
import { podcasts } from '../../__mocks__/podcasts';

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
    expect(result.current.data.podcasts).toEqual(podcasts.feed.entry);
  });
});
