import React, { useEffect } from 'react';
import { useStateValue } from 'state/state';
import localForage from 'localforage';
import { setState } from 'state/reducer';
import { State } from 'types/state';

const useStoreState = () => {
  const [state, dispatch] = useStateValue();
  const initialRef = React.useRef(true);

  useEffect(() => {
    const stateFromStorage = () =>
      localForage.getItem('state').then((storedState) => {
        if (storedState) {
          dispatch(setState(storedState as State));
        }
        return !!storedState;
      });

    const stateToStorage = (storeState: State) => localForage.setItem('state', storeState);

    if (initialRef.current) {
      // On first Load, get state from browser storage - IndexedDB
      stateFromStorage().catch(() => {});
      initialRef.current = false;
    }

    // Save state to storage on every state change
    stateToStorage(state).catch(() => {});
  }, [dispatch, state]);
};

export default useStoreState;
