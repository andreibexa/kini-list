import { ErrorBoundary } from 'react-error-boundary';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StateProvider } from 'state/state';
import { reducer } from 'state/reducer';
import RoutesComponent from 'routes/RoutesComponent';
import ErrorFallback from './components/ErrorFallback';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      refetchOnWindowFocus: false,
      useErrorBoundary: true,
      retry: process.env.NODE_ENV === 'development' ? 1 : 3,
      staleTime: 30 * 60 * 1000, // 30 minutes
      cacheTime: 60 * 60 * 1000, // 60 minutes
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <StateProvider reducer={reducer}>
          <RoutesComponent />
        </StateProvider>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default App;
