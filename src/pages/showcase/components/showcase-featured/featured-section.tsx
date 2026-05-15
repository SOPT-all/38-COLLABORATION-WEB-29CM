import ShowcaseCard from '../showcase-card/showcase-card';

interface FeaturedItem {
  showcaseId: number;
  title: string;
  description: string;
  imageUrl: string;
  startDate: string;
  endDate: string;
}

interface FeaturedSectionProps {
  featured: FeaturedItem[];
}

const FeaturedSection = ({ featured }: FeaturedSectionProps) => {
  return (
    <section className="px-9 py-16">
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {featured.map(({ showcaseId, ...props }) => (
          <li key={showcaseId}>
            <ShowcaseCard variant="big" {...props} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FeaturedSection;
