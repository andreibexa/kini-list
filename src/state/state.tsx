import React, {
  createContext, useContext, useMemo, useReducer,
} from 'react';
import { Action, State, StateProviderProps } from 'types/state';

const initialState: State = {
  country: undefined,
  favoriteProviders: [],
};

export const StateContext = createContext<[State, React.Dispatch<Action>]>([
  initialState,
  () => initialState,
]);

export function StateProvider({ reducer, children }: StateProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue = useMemo<[State, React.Dispatch<Action>]>(
    () => [state, dispatch],
    [state, dispatch],
  );

  return <StateContext.Provider value={contextValue}>{children}</StateContext.Provider>;
}

export const useStateValue = () => useContext(StateContext);
