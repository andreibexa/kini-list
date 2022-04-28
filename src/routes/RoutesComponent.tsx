import React from 'react';
import ScrollToTop from 'components/ScrollToTop';
import useStoreState from 'hooks/useStoreState';
import { Route, Routes } from 'react-router-dom';
import Layout from 'layouts/Layout';
import pageLinks from './allRoutes';

export default function RoutesComponent() {
  useStoreState();

  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Layout />}>
          {pageLinks.map((item) => (
            <Route
              key={item.label}
              path={item.path}
              element={(
                <React.Suspense fallback="">
                  <item.element />
                </React.Suspense>
              )}
              index={item.index}
            />
          ))}
        </Route>
        <Route
          path="*"
          element={(
            <main style={{ padding: '1rem' }}>
              <p>There&apos;s nothing here!</p>
            </main>
          )}
        />
      </Routes>
    </ScrollToTop>
  );
}
