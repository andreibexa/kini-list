export * from 'themoviedb-typescript/build/src/interfaces/configuration';

export interface Country {
  iso_3166_1: string;
  english_name: string;
  native_name?: string;
}
export declare type Countries = Country[];
