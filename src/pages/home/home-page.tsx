import { useInfiniteScroll } from '@shared/hooks/use-infinite-scroll';

import { useHomeCarouselsQuery } from './api/carousels';
import { useHomeMainQuery } from './api/main';
import BannerCarousel from './components/banner-carousel/banner-carousel';
import ShortcutSection from './components/home-shortcut/shortcut-section';
import HomeMenu from './components/home-menu/home-menu';
import ProductSelectionSection from './components/product-selection-section/product-selection-section';

const HomePage = () => {
  const { data: images } = useHomeCarouselsQuery();
  const {
    data: main,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useHomeMainQuery('guest');

  const observerTargetRef = useInfiniteScroll({
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  });

  return (
    <>
      <HomeMenu />
      <BannerCarousel images={images} />
      <ShortcutSection shortcuts={main.shortcuts} />
      {main.sections.map((section) => (
        <ProductSelectionSection key={section.sectionId} section={section} />
      ))}
      <div ref={observerTargetRef} className="h-1" />
    </>
  );
};

export default HomePage;
