import { lazy, ComponentType } from 'react';

// Dynamic import with retry logic
export const retryableLazyImport = <T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  retries = 3,
  delay = 1000
): Promise<{ default: T }> => {
  return new Promise((resolve, reject) => {
    importFn()
      .then(resolve)
      .catch((error) => {
        if (retries === 0) {
          reject(error);
          return;
        }
        setTimeout(() => {
          retryableLazyImport(importFn, retries - 1, delay)
            .then(resolve)
            .catch(reject);
        }, delay);
      });
  });
};

// Preload component
export const preloadComponent = (importFn: () => Promise<any>) => {
  const component = lazy(() =>
    retryableLazyImport(importFn).catch((error) => {
      console.error('Failed to load component:', error);
      return { default: () => <div>Error loading component</div> };
    })
  );

  // Trigger preload
  importFn();

  return component;
};

// Route-based code splitting
export const createRouteBundle = (path: string) => {
  return {
    component: lazy(() =>
      import(`../pages/${path}`).catch((error) => {
        console.error(`Failed to load route: ${path}`, error);
        return { default: () => <div>Error loading page</div> };
      })
    ),
    preload: () => import(`../pages/${path}`)
  };
};

// Chunk load error handling
window.addEventListener('error', (event) => {
  if (event.filename?.includes('chunk')) {
    console.error('Chunk load error:', event);
    // Retry loading the chunk
    const chunkId = event.filename.match(/chunk\.([^.]+)\.js$/)?.[1];
    if (chunkId) {
      import(/* webpackChunkName: "[request]" */ `../chunks/${chunkId}`);
    }
  }
});

// Performance monitoring
export const monitorChunkLoading = () => {
  if (typeof window !== 'undefined') {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'resource' && entry.name.includes('chunk')) {
          console.log(`Chunk loaded: ${entry.name}`, {
            duration: entry.duration,
            size: entry.transferSize
          });
        }
      });
    });

    observer.observe({ entryTypes: ['resource'] });
  }
};

// Dynamic import with prefetch
export const prefetchComponent = (path: string) => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = path;
  document.head.appendChild(link);
};

// Bundle size analyzer
export const analyzeBundleSize = async (bundlePath: string) => {
  try {
    const response = await fetch(bundlePath);
    const blob = await response.blob();
    console.log(`Bundle size for ${bundlePath}: ${(blob.size / 1024).toFixed(2)}KB`);
  } catch (error) {
    console.error('Failed to analyze bundle size:', error);
  }
}; 