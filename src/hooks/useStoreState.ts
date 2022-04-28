import React, { useEffect } from 'react';
import { useStateValue } from 'state/state';
import localForage from 'localforage';
import { setState } from 'state/reducer';
import { State } from 'types/state';

const stateToStorage = (storeState: State) => localForage.setItem('state', storeState);

const useStoreState = () => {
  const [state, dispatch] = useStateValue();
  const initialRef = React.useRef(true);

  useEffect(() => {
    if (initialRef.current) {
      localForage
        .getItem('state')
        .then((storedState) => {
          if (storedState) {
            dispatch(setState(storedState as State));
          }
          return !!storedState;
        })
        .catch(() => {});

      // On first Load, get state from the browser storage - IndexedDB
      initialRef.current = false;
    }

    // Save state to the browser storage - IndexedDB
    stateToStorage(state).catch(() => {});
  }, [dispatch, state]);
};

export default useStoreState;
