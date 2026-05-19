import type { ViewerType } from '@shared/auth/viewer-type';

export const homeQueryKeys = {
  all: ['home'] as const,
  carousels: () => [...homeQueryKeys.all, 'carousels'] as const,
  main: (viewerType: ViewerType) =>
    [...homeQueryKeys.all, 'main', viewerType] as const,
};
