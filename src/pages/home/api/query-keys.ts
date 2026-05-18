export const homeQueryKeys = {
  all: ['home'] as const,
  carousels: () => [...homeQueryKeys.all, 'carousels'] as const,
  main: (viewerType: 'user' | 'guest') =>
    [...homeQueryKeys.all, 'main', viewerType] as const,
};
