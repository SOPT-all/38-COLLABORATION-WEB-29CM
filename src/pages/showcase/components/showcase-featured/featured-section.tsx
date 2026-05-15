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
    <section className="py-16 pr-13 pl-9">
      <ul className="grid w-fit grid-cols-1 gap-4 lg:grid-cols-2">
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
