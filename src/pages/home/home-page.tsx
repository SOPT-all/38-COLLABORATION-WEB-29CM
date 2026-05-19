import { useNavigate } from 'react-router';

import { useInfiniteScroll } from '@shared/hooks/use-infinite-scroll';

import { useHomeCarouselsQuery } from './api/carousels';
import { useHomeMainQuery } from './api/main';
import BannerCarousel from './components/banner-carousel/banner-carousel';
import { CATEGORIES } from './components/home-menu/constants';
import HomeMenu from './components/home-menu/home-menu';
import ShortcutSection from './components/home-shortcut/shortcut-section';
import ProductSelectionSection from './components/product-selection-section/product-selection-section';

const HomePage = () => {
  const navigate = useNavigate();
  const { data: carousels = [] } = useHomeCarouselsQuery();
  const {
    data: main = { sections: [], shortcuts: [] },
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
    <div className="min-w-[1440px]">
      <HomeMenu categories={CATEGORIES} />
      <BannerCarousel images={carousels} />
      <ShortcutSection shortcuts={main.shortcuts} />
      {main.sections.map((section) => (
        <ProductSelectionSection
          key={section.sectionId}
          section={section}
          onClickMore={() => navigate('/product')}
        />
      ))}
      <div ref={observerTargetRef} className="h-1" />
    </div>
  );
};

export default HomePage;
