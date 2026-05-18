export const homeQueryKeys = {
  all: ['home'] as const,
  carousels: () => [...homeQueryKeys.all, 'carousels'] as const,
  nav: () => [...homeQueryKeys.all, 'nav'] as const,
};
