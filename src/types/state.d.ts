import { Country } from "./api/configuration";
import { Provider } from "./api/watch";

export type Action =
  | {
    type: 'SET_STATE';
    payload: State;
  }
  | {
    type: 'SET_COUNTRY';
    payload: Country;
  }
  | {
    type: 'SET_FAVORITE_PROVIDERS';
    payload: Provider[];
  };

export type State = {
  country: Country | undefined;
  favoriteProviders: Provider[];
};

export type StateProviderProps = {
  reducer: React.Reducer<State, Action>;
  children: React.ReactElement;
};
