// eslint-disable-next-line import/no-extraneous-dependencies
import { Show } from 'themoviedb-typescript/build/src/interfaces/tv';
import { Provider } from './watch';
import { Video } from './generic';

// eslint-disable-next-line import/no-extraneous-dependencies
export { Show, Shows } from 'themoviedb-typescript/build/src/interfaces/tv';

export interface ShowProvider {
  link: string;
  buy?: Provider[];
  flatrate?: Provider[];
  ads?: Provider[];
  rent?: Provider[];
  free?: Provider[];
}

export interface ResultsShowProviders {
  id: number;
  results: Record<string, ShowProvider>;
}

type ResultsVideo = {
  results: Video[];
};
export interface ShowWithVideos extends Show {
  videos?: ResultsVideo;
  tagline?: string;
}
