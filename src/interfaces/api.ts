export interface Field {
  label: string;
}

export interface Entry {
  id: {
    attributes: {
      'im:id': string;
    };
  };
  'im:name': Field;
  'im:artist': Field;
  'im:image': Field[];
  summary: Field;
}

export interface Feed {
  entry: Entry[];
}

export interface PodcastsApi {
  feed: Feed;
}

export interface EpisodeApi {
  artistName: string;
  collectionName: string;
  artworkUrl600: string;
  description: string;
  trackId: number;
  trackName: string;
  episodeUrl: string;
  releaseDate: string;
  trackTimeMillis: number;
}

export interface PodcastApi {
  results: EpisodeApi[];
}