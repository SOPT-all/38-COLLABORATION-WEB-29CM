export const ROUTE_PATH = {
  HOME: "/",
  SHOWCASE: "/showcase",
  PRODUCT: "/product",
} as const;

export type RoutePath = (typeof ROUTE_PATH)[keyof typeof ROUTE_PATH];
