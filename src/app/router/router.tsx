import { createBrowserRouter } from 'react-router';

import Layout from '@app/layout/layout';

import ErrorPage from '@pages/error/error-page';

import { ROUTE_PATH } from './path';

import { Suspense } from 'react';
import HomeSkeleton from '@shared/ui/skeleton/home-skeleton';
import ShowcaseSkeleton from '@shared/ui/skeleton/showcase-skeleton';
import DeferredComponent from '@shared/ui/deferred-component';

export const router = createBrowserRouter([
  {
    Component: Layout,
    ErrorBoundary: ErrorPage,
    children: [
      {
        path: ROUTE_PATH.HOME,
        lazy: async () => {
          const { default: HomePage } = await import('@pages/home/home-page');

          return {
            Component: () => (
              <Suspense
                fallback={
                  <DeferredComponent>
                    <HomeSkeleton />
                  </DeferredComponent>
                }
              >
                <HomePage />
              </Suspense>
            ),
          };
        },
      },
      {
        path: ROUTE_PATH.SHOWCASE,
        lazy: async () => {
          const { default: ShowcasePage } =
            await import('@pages/showcase/showcase-page');

          return {
            Component: () => (
              <Suspense
                fallback={
                  <DeferredComponent>
                    <ShowcaseSkeleton />
                  </DeferredComponent>
                }
              >
                <ShowcasePage />
              </Suspense>
            ),
          };
        },
      },
      {
        path: ROUTE_PATH.PRODUCT,
        lazy: async () => {
          const { default: ProductPage } =
            await import('@pages/product/product');

          return { Component: ProductPage };
        },
      },
      {
        path: ROUTE_PATH.PRODUCT_SHORTCUT,
        lazy: async () => {
          const { default: ProductPage } =
            await import('@pages/product/product');

          return { Component: ProductPage };
        },
      },
    ],
  },
]);
