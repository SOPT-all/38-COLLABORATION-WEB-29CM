import { useHomeCarouselsQuery } from './api/carousels';
import BannerCarousel from './components/banner-carousel/banner-carousel';
import CategorySection from './components/home-category/category-section';
import HomeMenu from './components/home-menu/home-menu';
import ProductSelectionSection from './components/product-selection-section/product-selection-section';
import { SECTIONS, SHORTCUTS } from './constants';

const HomePage = () => {
  const { data: carousels = [] } = useHomeCarouselsQuery();

  return (
    <>
      <HomeMenu />
      <BannerCarousel images={carousels} />
      <CategorySection categories={SHORTCUTS} />
      {SECTIONS.map((section) => (
        <ProductSelectionSection key={section.sectionId} section={section} />
      ))}
    </>
  );
};

export default HomePage;
