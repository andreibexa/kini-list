// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable import/no-extraneous-dependencies */
import {
  MovieListResultWithMediaType,
  TVListResultWithMediaType,
  PersonListResult,
  Results,
} from 'themoviedb-typescript/build/src/interfaces/generic';

export * from 'themoviedb-typescript/build/src/interfaces/generic';

export interface PersonListResultWithMediaType extends PersonListResult {
  media_type: 'person';
}

export declare type MultiMediaType =
  | MovieListResultWithMediaType
  | TVListResultWithMediaType
  | PersonListResultWithMediaType;

export declare type MultiMediaTypeResults = Results<MultiMediaType>;
