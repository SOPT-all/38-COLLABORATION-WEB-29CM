import { createBrowserRouter } from "react-router";

import Layout from "@app/layout/layout";

import { ROUTE_PATH } from "./path";

const fallback = () => <div>Loading...</div>;

export const router = createBrowserRouter([
  {
    Component: Layout,
    HydrateFallback: fallback,
    children: [
      {
        path: ROUTE_PATH.HOME,
        lazy: async () => {
          const { default: HomePage } = await import("@pages/home/home-page");

          return { Component: HomePage };
        },
      },
      {
        path: ROUTE_PATH.SHOWCASE,
        lazy: async () => {
          const { default: ShowcasePage } =
            await import("@pages/showcase/showcase-page");

          return { Component: ShowcasePage };
        },
      },
      {
        path: ROUTE_PATH.PRODUCT,
        lazy: async () => {
          const { default: ProductPage } =
            await import("@pages/product/product");

          return { Component: ProductPage };
        },
      },
    ],
  },
]);
