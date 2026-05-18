import ContentSection from './components/showcase-content/content-section';
import FeaturedSection from './components/showcase-featured/featured-section';
import { MOCK_SHOWCASE_RESPONSE } from './showcase-page.mock';
import DeferredComponent from '@shared/ui/deferred-component';
import ContentSkeleton from '@shared/ui/skeleton/content-skeleton';
import { Suspense } from 'react';

const ShowcasePage = () => {
  const { featured, sections } = MOCK_SHOWCASE_RESPONSE;

  return (
    <>
      <FeaturedSection featured={featured} />

      {sections.map((section) => (
        <Suspense
          key={section.sectionId}
          fallback={
            <DeferredComponent>
              <ContentSkeleton />
            </DeferredComponent>
          }
        >
          <ContentSection section={section} />
        </Suspense>
      ))}
    </>
  );
};

export default ShowcasePage;
