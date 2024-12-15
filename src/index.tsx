import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { LoadingSpinner } from './components/LoadingSpinner';
import { cssOptimizer } from './utils/cssOptimization';
import { cacheManager } from './utils/caching';
import { serverOptimizer } from './utils/serverOptimization';

// Lazy load main App component
const App = lazy(() => import('./App'));

// Initialize performance optimizations
const initializeOptimizations = async () => {
  // Extract and inline critical CSS
  cssOptimizer.extractCriticalCSS();
  cssOptimizer.inlineCriticalCSS({ minify: true });

  // Setup caching
  await cacheManager.set('app-config', {
    version: '1.0.0',
    theme: 'light',
    language: 'de'
  }, { type: 'local', expiry: 86400000 }); // 24 hours

  // Remove unused CSS
  cssOptimizer.removeUnusedCSS();

  // Preload important assets
  cssOptimizer.preloadCSS('/static/css/main.chunk.css');
  
  // Monitor performance
  if (process.env.NODE_ENV === 'development') {
    monitorPerformance();
  }
};

// Performance monitoring
const monitorPerformance = () => {
  // Monitor page load performance
  window.addEventListener('load', () => {
    const timing = performance.timing;
    const interactive = timing.domInteractive - timing.navigationStart;
    const dcl = timing.domContentLoadedEventEnd - timing.navigationStart;
    const complete = timing.loadEventEnd - timing.navigationStart;

    console.log({
      interactive: `${interactive}ms`,
      dcl: `${dcl}ms`,
      complete: `${complete}ms`,
    });
  });

  // Monitor runtime performance
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.entryType === 'longtask') {
        console.warn('Long task detected:', entry);
      }
    }
  });

  observer.observe({ entryTypes: ['longtask'] });
};

// Error boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: '2rem', 
          textAlign: 'center',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <h1>Oops! Etwas ist schiefgelaufen.</h1>
          <p>Bitte laden Sie die Seite neu oder versuchen Sie es später erneut.</p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              borderRadius: '8px',
              border: 'none',
              background: '#1B3C59',
              color: 'white',
              cursor: 'pointer',
              marginTop: '1rem'
            }}
          >
            Seite neu laden
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Initialize optimizations
initializeOptimizations().catch(console.error);

// Initialize performance monitoring
if (process.env.NODE_ENV === 'development') {
  const { monitorChunkLoading } = require('./utils/bundleOptimization');
  monitorChunkLoading();
}

// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('ServiceWorker registration successful');
      })
      .catch(error => {
        console.error('ServiceWorker registration failed:', error);
      });
  });
}

// Render app with all optimizations
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>
        <App />
      </Suspense>
    </ErrorBoundary>
  </React.StrictMode>
); 