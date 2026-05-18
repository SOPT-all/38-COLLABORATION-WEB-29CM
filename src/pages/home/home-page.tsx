import BannerCarousel from './components/banner-carousel/banner-carousel';
import CategorySection from './components/home-category/category-section';
import HomeMenu from './components/home-menu/home-menu';
import ProductSelectionSection from './components/product-selection-section/product-selection-section';
import { BANNER_IMAGES, SECTIONS, SHORTCUTS } from './constants';

const HomePage = () => {
  return (
    <>
      <HomeMenu />
      <BannerCarousel images={BANNER_IMAGES} />
      <CategorySection categories={SHORTCUTS} />
      {SECTIONS.map((section) => (
        <ProductSelectionSection key={section.sectionId} section={section} />
      ))}
    </>
  );
};

export default HomePage;
