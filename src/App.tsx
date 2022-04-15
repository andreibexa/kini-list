import { CssBaseline, ThemeProvider } from '@mui/material';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClient, QueryClientProvider } from 'react-query';
import { StateProvider } from 'state/state';
import { reducer } from 'state/reducer';
import RoutesComponent from 'routes/RoutesComponent';
import ErrorFallback from './components/ErrorFallback';
import theme from './layouts/theme';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
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
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <StateProvider reducer={reducer}>
            <RoutesComponent />
          </StateProvider>
        </ErrorBoundary>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
