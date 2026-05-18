import { useHomeCarouselsQuery } from './api/carousels';
import BannerCarousel from './components/banner-carousel/banner-carousel';
import CategorySection from './components/home-category/category-section';
import { CATEGORIES } from './components/home-menu/constants';
import HomeMenu from './components/home-menu/home-menu';
import ProductSelectionSection from './components/product-selection-section/product-selection-section';
import { SECTIONS, SHORTCUTS } from './constants';
import DeferredComponent from '@shared/ui/deferred-component';
import { Suspense } from 'react';
import ProductSelectionSkeleton from '@shared/ui/skeleton/product-selection-skeleton';

const HomePage = () => {
  const { data: carousels = [] } = useHomeCarouselsQuery();

  return (
    <>
      <HomeMenu categories={CATEGORIES} />
      <BannerCarousel images={carousels} />
      <CategorySection categories={SHORTCUTS} />
      {SECTIONS.map((section) => (
        <Suspense
          key={section.sectionId}
          fallback={
            <DeferredComponent>
              <ProductSelectionSkeleton />
            </DeferredComponent>
          }
        >
          <ProductSelectionSection section={section} />
        </Suspense>
      ))}
    </>
  );
};

export default HomePage;
