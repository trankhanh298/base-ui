import React, { lazy, Suspense } from 'react';

const LazyVerticalSideBar = lazy(() => import('./VerticalSideBar'));

const VerticalSideBar = props => (
  <Suspense fallback={null}>
    <LazyVerticalSideBar {...props} />
  </Suspense>
);

export default VerticalSideBar;
