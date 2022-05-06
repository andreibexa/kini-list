import localForage from 'localforage';
import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import theme from './layouts/theme';
import App from './App';

localForage.config({
  driver: [localForage.INDEXEDDB, localForage.LOCALSTORAGE, localForage.WEBSQL],
  name: 'kini-list', // These fields
  version: 1.0, // are totally optional
});

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
