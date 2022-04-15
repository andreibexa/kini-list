import localForage from 'localforage';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App';

localForage.config({
  driver: [localForage.INDEXEDDB, localForage.LOCALSTORAGE, localForage.WEBSQL],
  name: 'myApp', // These fields
  version: 1.0, // are totally optional
});

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
