import React from 'react';
import ScrollToTop from 'components/ScrollToTop';
import useStoreState from 'hooks/useStoreState';
import { Route, Routes } from 'react-router-dom';
import Layout from 'layouts/Layout';
import Loader from 'components/Loader';
import Box from '@mui/material/Box';
import pageLinks from './allRoutes';

export default function RoutesComponent() {
  useStoreState();

  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Layout />}>
          {pageLinks.map((item) => (
            <Route
              key={String(item.uid)}
              path={item.path}
              element={(
                <React.Suspense fallback={<Loader />}>
                  <item.element />
                </React.Suspense>
              )}
            />
          ))}
        </Route>
        <Route
          path="*"
          element={(
            <Box sx={{ padding: '1rem' }}>
              <p>There&apos;s nothing here!</p>
            </Box>
          )}
        />
      </Routes>
    </ScrollToTop>
  );
}
