import ContentSection from './components/showcase-content/content-section';
import FeaturedSection from './components/showcase-featured/featured-section';
import { MOCK_SHOWCASE_RESPONSE } from './showcase-page.mock';

const ShowcasePage = () => {
  const { featured, sections } = MOCK_SHOWCASE_RESPONSE;

  return (
    <>
      <FeaturedSection featured={featured} />

      {sections.map((section) => (
        <ContentSection key={section.sectionId} section={section} />
      ))}
    </>
  );
};

export default ShowcasePage;
