import BannerCarousel from './components/banner-carousel/banner-carousel';
import ShortcutSection from './components/home-shortcut/shortcut-section';
import HomeMenu from './components/home-menu/home-menu';
import ProductSelectionSection from './components/product-selection-section/product-selection-section';
import { Suspense } from 'react';
import { useHomeMainQuery } from './api/main';
import { useInfiniteScroll } from '@shared/hooks/use-infinite-scroll';

const HomePage = () => {
  const {
    data: main,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useHomeMainQuery('guest');

  const observerTargetRef = useInfiniteScroll({
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  });

  if (isLoading) {
    return null;
  }

  if (isError) {
    return <div className="px-9 py-16">데이터를 불러오지 못했습니다.</div>;
  }
  return (
    <>
      <HomeMenu />
      <BannerCarousel />
      <ShortcutSection shortcuts={main.shortcuts} />
      {main.sections.map((section) => (
        <ProductSelectionSection key={section.sectionId} section={section} />
      ))}
      <div ref={observerTargetRef} className="h-1" />
    </>
  );
};

export default HomePage;
