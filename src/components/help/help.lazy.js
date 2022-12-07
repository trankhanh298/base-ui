import React, { lazy, Suspense } from 'react';

const LazyHelp = lazy(() => import('./Help'));

const Help = props => (
  <Suspense fallback={null}>
    <LazyHelp {...props} />
  </Suspense>
);

export default Help;
