import React, { lazy, Suspense } from 'react';

// 使用lazy函数导入懒加载的组件
const LazyComponent = lazy(() => import('../RedEnvelopeList'));

const LazyApp = () => {
  return (
    <div>
      <h1>My LazyApp</h1>
      <Suspense fallback={<div>Loading...</div>}>
        {/* 在Suspense组件中使用懒加载的组件 */}
        <LazyComponent />
      </Suspense>
    </div>
  );
};

export default LazyApp;
