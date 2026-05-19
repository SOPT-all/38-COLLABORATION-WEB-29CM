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
  window.localStorage.setItem(VIEWER_TYPE_STORAGE_KEY, viewerType);
  window.dispatchEvent(new Event(VIEWER_TYPE_CHANGE_EVENT));
};

const subscribeViewerType = (onStoreChange: () => void) => {
  window.addEventListener(VIEWER_TYPE_CHANGE_EVENT, onStoreChange);
  window.addEventListener('storage', onStoreChange);

  return () => {
    window.removeEventListener(VIEWER_TYPE_CHANGE_EVENT, onStoreChange);
    window.removeEventListener('storage', onStoreChange);
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

  return { viewerType, login };
};
