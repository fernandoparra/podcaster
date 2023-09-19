beforeEach(() => {
  jest.resetModules();
});

test('should return the url without proxy', async () => {
  jest.mock('../../constants', () => ({
    PROXY_URL: null,
    API_URL: 'https://itunes.apple.com',
  }));

  let url;
  try {
    const { getURL } = await import('../../services/url');
    url = getURL(`/us/rss/toppodcasts/limit=100/genre=1310/json`);
  } catch (error) {
    console.log(error);
  }

  expect(url).toBe('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json');
});

test('should return the url with proxy', async () => {
  jest.mock('../../constants', () => ({
    PROXY_URL: 'https://api.allorigins.win/raw?url=',
    API_URL: 'https://itunes.apple.com',
  }));

  let url;
  try {
    const podcastId = '1696154359';
    const { getURL } = await import('../../services/url');
    url = getURL(`/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`);
  } catch (error) {
    console.log(error);
  }

  expect(url).toBe('https://api.allorigins.win/raw?url=https%3A%2F%2Fitunes.apple.com%2Flookup%3Fid%3D1696154359%26media%3Dpodcast%26entity%3DpodcastEpisode%26limit%3D20');
});
