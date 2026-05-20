import type { Showcase } from '../../types';
import ShowcaseCard from '../showcase-card/showcase-card';

interface FeaturedSectionProps {
  featured: Showcase[];
}

const FeaturedSection = ({ featured }: FeaturedSectionProps) => {
  return (
    <section className="px-9 py-16">
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {featured.map(({ showcaseId, ...props }) => (
          <li key={showcaseId}>
            <ShowcaseCard variant="big" priority={true} {...props} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FeaturedSection;
