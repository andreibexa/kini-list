import { Provider } from './watch';

// eslint-disable-next-line import/no-extraneous-dependencies
export * from 'themoviedb-typescript/build/src/interfaces/movies';

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
