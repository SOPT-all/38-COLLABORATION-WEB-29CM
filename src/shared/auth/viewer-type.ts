import { useCallback, useSyncExternalStore } from 'react';

export type ViewerType = 'user' | 'guest';

const VIEWER_TYPE_STORAGE_KEY = 'viewerType';
const VIEWER_TYPE_CHANGE_EVENT = 'viewerTypeChange';

const isViewerType = (value: string | null): value is ViewerType => {
  return value === 'user' || value === 'guest';
};

export const getViewerType = (): ViewerType => {
  if (typeof window === 'undefined') return 'guest';

  const viewerType = window.localStorage.getItem(VIEWER_TYPE_STORAGE_KEY);

  return isViewerType(viewerType) ? viewerType : 'guest';
};

export const setViewerType = (viewerType: ViewerType) => {
  if (typeof window === 'undefined') return;

  window.localStorage.setItem(VIEWER_TYPE_STORAGE_KEY, viewerType);
  window.dispatchEvent(new Event(VIEWER_TYPE_CHANGE_EVENT));
};

const subscribeViewerType = (onStoreChange: () => void) => {
  const handleStorageChange = (event: StorageEvent) => {
    if (event.key === VIEWER_TYPE_STORAGE_KEY) {
      onStoreChange();
    }
  };

  window.addEventListener(VIEWER_TYPE_CHANGE_EVENT, onStoreChange);
  window.addEventListener('storage', handleStorageChange);

  return () => {
    window.removeEventListener(VIEWER_TYPE_CHANGE_EVENT, onStoreChange);
    window.removeEventListener('storage', handleStorageChange);
  };
};

const getServerViewerType = (): ViewerType => 'guest';

export const useViewerType = () => {
  const viewerType = useSyncExternalStore<ViewerType>(
    subscribeViewerType,
    getViewerType,
    getServerViewerType,
  );

  const login = useCallback(() => {
    setViewerType('user');
  }, []);

  const logout = useCallback(() => {
    setViewerType('guest');
  }, []);

  return { viewerType, login, logout };
};
