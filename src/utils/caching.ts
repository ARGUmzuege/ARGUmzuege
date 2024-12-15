// Cache types
type CacheType = 'memory' | 'session' | 'local' | 'indexedDB';

interface CacheOptions {
  type?: CacheType;
  expiry?: number; // in milliseconds
  version?: string;
  compression?: boolean;
}

class CacheManager {
  private static instance: CacheManager;
  private memoryCache: Map<string, any>;
  private readonly defaultOptions: CacheOptions = {
    type: 'memory',
    expiry: 3600000, // 1 hour
    version: '1.0',
    compression: false
  };

  private constructor() {
    this.memoryCache = new Map();
  }

  public static getInstance(): CacheManager {
    if (!CacheManager.instance) {
      CacheManager.instance = new CacheManager();
    }
    return CacheManager.instance;
  }

  // Set cache item
  public async set(
    key: string,
    value: any,
    options: CacheOptions = {}
  ): Promise<void> {
    const mergedOptions = { ...this.defaultOptions, ...options };
    const cacheItem = {
      value,
      timestamp: Date.now(),
      expiry: mergedOptions.expiry,
      version: mergedOptions.version
    };

    switch (mergedOptions.type) {
      case 'memory':
        this.memoryCache.set(key, cacheItem);
        break;
      case 'session':
        sessionStorage.setItem(
          key,
          JSON.stringify(cacheItem)
        );
        break;
      case 'local':
        localStorage.setItem(
          key,
          JSON.stringify(cacheItem)
        );
        break;
      case 'indexedDB':
        await this.setIndexedDB(key, cacheItem);
        break;
    }
  }

  // Get cache item
  public async get(
    key: string,
    options: CacheOptions = {}
  ): Promise<any> {
    const mergedOptions = { ...this.defaultOptions, ...options };

    let cacheItem;
    switch (mergedOptions.type) {
      case 'memory':
        cacheItem = this.memoryCache.get(key);
        break;
      case 'session':
        const sessionData = sessionStorage.getItem(key);
        cacheItem = sessionData ? JSON.parse(sessionData) : null;
        break;
      case 'local':
        const localData = localStorage.getItem(key);
        cacheItem = localData ? JSON.parse(localData) : null;
        break;
      case 'indexedDB':
        cacheItem = await this.getIndexedDB(key);
        break;
    }

    if (!cacheItem) return null;

    // Version check
    if (cacheItem.version !== mergedOptions.version) {
      await this.remove(key, options);
      return null;
    }

    // Expiry check
    if (
      cacheItem.expiry &&
      Date.now() - cacheItem.timestamp > cacheItem.expiry
    ) {
      await this.remove(key, options);
      return null;
    }

    return cacheItem.value;
  }

  // Remove cache item
  public async remove(
    key: string,
    options: CacheOptions = {}
  ): Promise<void> {
    const mergedOptions = { ...this.defaultOptions, ...options };

    switch (mergedOptions.type) {
      case 'memory':
        this.memoryCache.delete(key);
        break;
      case 'session':
        sessionStorage.removeItem(key);
        break;
      case 'local':
        localStorage.removeItem(key);
        break;
      case 'indexedDB':
        await this.removeIndexedDB(key);
        break;
    }
  }

  // Clear all cache
  public async clear(options: CacheOptions = {}): Promise<void> {
    const mergedOptions = { ...this.defaultOptions, ...options };

    switch (mergedOptions.type) {
      case 'memory':
        this.memoryCache.clear();
        break;
      case 'session':
        sessionStorage.clear();
        break;
      case 'local':
        localStorage.clear();
        break;
      case 'indexedDB':
        await this.clearIndexedDB();
        break;
    }
  }

  // IndexedDB operations
  private async setIndexedDB(key: string, value: any): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open('AppCache', 1);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        const db = request.result;
        const transaction = db.transaction(['cache'], 'readwrite');
        const store = transaction.objectStore('cache');
        store.put(value, key);
        resolve();
      };
      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        db.createObjectStore('cache');
      };
    });
  }

  private async getIndexedDB(key: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open('AppCache', 1);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        const db = request.result;
        const transaction = db.transaction(['cache'], 'readonly');
        const store = transaction.objectStore('cache');
        const getRequest = store.get(key);
        getRequest.onsuccess = () => resolve(getRequest.result);
      };
    });
  }

  private async removeIndexedDB(key: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open('AppCache', 1);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        const db = request.result;
        const transaction = db.transaction(['cache'], 'readwrite');
        const store = transaction.objectStore('cache');
        store.delete(key);
        resolve();
      };
    });
  }

  private async clearIndexedDB(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open('AppCache', 1);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        const db = request.result;
        const transaction = db.transaction(['cache'], 'readwrite');
        const store = transaction.objectStore('cache');
        store.clear();
        resolve();
      };
    });
  }
}

// Export singleton instance
export const cacheManager = CacheManager.getInstance(); 