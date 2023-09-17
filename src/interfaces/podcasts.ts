import { Entry, EpisodeApi } from './api';

export interface PodcastI {
  id: string;
  name: string;
  artist: string;
  image: string;
  summary: string;
}

export class Podcast implements PodcastI {
  id: string;
  name: string;
  artist: string;
  image: string;
  summary: string;

  constructor(podcast: Entry) {
    this.id = podcast.id.attributes['im:id'];
    this.name = podcast['im:name'].label;
    this.artist = podcast['im:artist'].label;
    this.image = podcast['im:image'][2].label;
    this.summary = podcast.summary.label;
  }
}

export interface EpisodeI {
  id: string;
  name: string;
  artist: string;
  image: string;
  description: string;
  duration: number;
  releaseDate: string;
  url: string;
}

export class Episode implements EpisodeI {
  id: string;
  name: string;
  artist: string;
  image: string;
  description: string;
  duration: number;
  releaseDate: string;
  url: string;

  constructor(episode: EpisodeApi) {
    this.id = episode.trackId.toString();
    this.name = episode.trackName;
    this.artist = episode.artistName;
    this.image = episode.artworkUrl600;
    this.description = episode.description;
    this.duration = episode.trackTimeMillis;
    this.releaseDate = episode.releaseDate;
    this.url = episode.episodeUrl;
  }
}
