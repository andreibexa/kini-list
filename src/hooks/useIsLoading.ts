import React from 'react';

import { notifyManager, useQueryClient } from 'react-query';

/**
 * Get the state of the API connection.
 *
 * Returns true if a query or a mutation is pending.
 */
export default function useIsLoading(): boolean {
  const client = useQueryClient();
  const mountedRef = React.useRef(false);
  const isFetchingRef = React.useRef(client.isFetching() > 0);
  const isMutatingRef = React.useRef(client.isMutating() > 0);

  const [isLoading, setIsLoading] = React.useState<boolean>(
    isFetchingRef.current || isMutatingRef.current,
  );

  React.useEffect(() => {
    mountedRef.current = true;

    const unsubscribeQueryCache = client.getQueryCache().subscribe(
      notifyManager.batchCalls(() => {
        if (mountedRef.current) {
          isFetchingRef.current = client.isFetching() > 0;
          setIsLoading(isFetchingRef.current || isMutatingRef.current);
        }
      }),
    );

    const unsubscribeMutationCache = client.getMutationCache().subscribe(
      notifyManager.batchCalls(() => {
        if (mountedRef.current) {
          isMutatingRef.current = client.isMutating() > 0;
          setIsLoading(isFetchingRef.current || isMutatingRef.current);
        }
      }),
    );

    return () => {
      mountedRef.current = false;
      unsubscribeQueryCache();
      unsubscribeMutationCache();
    };
  }, [client]);

  return isLoading;
}
