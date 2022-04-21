// eslint-disable-next-line import/no-extraneous-dependencies
import { Movie } from 'themoviedb-typescript/build/src/interfaces/movies';
import { Provider } from './watch';
import { Video } from './generic';

// eslint-disable-next-line import/no-extraneous-dependencies
export { Movies } from 'themoviedb-typescript/build/src/interfaces/movies';

export interface MovieProvider {
  link: string;
  buy?: Provider[];
  flatrate?: Provider[];
  ads?: Provider[];
  rent?: Provider[];
  free?: Provider[];
}

export interface ResultsMovieProviders {
  id: number;
  results: Record<string, MovieProvider>;
}

type ResultsVideo = {
  results: Video[];
};
export interface MovieWithVideos extends Movie {
  videos?: ResultsVideo;
  title?: string;
}
