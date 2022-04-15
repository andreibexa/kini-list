import { Country } from 'types/api/configuration';
import { Provider } from 'types/api/watch';
import { Action, State } from 'types/state';

// Reducer
export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_STATE':
      return action.payload;
    case 'SET_COUNTRY':
      return {
        ...state,
        country: action.payload,
      };
    case 'SET_FAVORITE_PROVIDERS':
      return {
        ...state,
        favoriteProviders: action.payload,
      };
    default:
      return state;
  }
};

// Action creators
export const setState = (state: State): Action => ({
  type: 'SET_STATE',
  payload: state,
});

export const setCountry = (country: Country): Action => ({
  type: 'SET_COUNTRY',
  payload: country,
});

export const toggleFavoriteProvider = (
  provider: Provider,
  favoriteProviders: State['favoriteProviders'],
): Action => {
  const index = favoriteProviders.findIndex(
    (favorite) => favorite.provider_id === provider.provider_id,
  );

  if (index === -1) {
    favoriteProviders.unshift(provider);
  }

  if (index >= 0) {
    favoriteProviders.splice(index, 1);
  }

  return {
    type: 'SET_FAVORITE_PROVIDERS',
    payload: favoriteProviders,
  };
};
