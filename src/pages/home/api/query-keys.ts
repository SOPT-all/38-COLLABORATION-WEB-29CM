export const homeQueryKeys = {
  all: ['home'] as const,
  carousels: () => [...homeQueryKeys.all, 'carousels'] as const,
};
