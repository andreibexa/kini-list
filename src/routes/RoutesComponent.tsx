import { Suspense } from 'react';
import useStoreState from 'hooks/useStoreState';
import { Route, Routes } from 'react-router-dom';
import Layout from 'layouts/Layout';
import Loader from 'components/Loader';
import pageLinks from './pageLinks';

export default function RoutesComponent() {
  useStoreState();

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {pageLinks.map((item) => (
            <Route
              key={item.label}
              path={item.path}
              element={<item.element />}
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
    </Suspense>
  );
}
