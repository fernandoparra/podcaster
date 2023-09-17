import { renderHook, waitFor } from '@testing-library/react';
import { usePodcast } from '../usePodcast';
import { podcast } from '../../__mocks__/podcast';

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
    expect(result.current.data.episodes).toEqual(podcast.results.slice(1));
  });
});
