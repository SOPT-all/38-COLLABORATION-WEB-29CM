export const API_ENDPOINTS = {
  HOME: {
    MAIN: '/v1/home',
    CAROUSELS: '/v1/home/carousels',
  },
  PRODUCTS: {
    LIKE: (productId: number) => `/v1/products/${productId}/like`,
  },
  COMMON: {
    NOTICES: '/v1/notices',
    NAV: '/v1/nav',
  },
  SHOWCASES: {
    LIST: '/v1/showcases',
  },
} as const;
