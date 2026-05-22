export const ROUTE_PATH = {
  HOME: "/",
  SHOWCASE: "/showcase",
  PRODUCT: "/product",
  PRODUCT_SHORTCUT: "/product/:shortcutName",
} as const;

export type RoutePath = (typeof ROUTE_PATH)[keyof typeof ROUTE_PATH];

export const createProductShortcutPath = (shortcutName: string) =>
  `${ROUTE_PATH.PRODUCT}/${encodeURIComponent(shortcutName.toLowerCase())}`;
