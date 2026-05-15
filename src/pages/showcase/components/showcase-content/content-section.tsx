import ShowcaseSectionTitle from './showcase-section-title';
import ShowcaseCard from '../showcase-card/showcase-card';

interface Showcase {
  showcaseId: number;
  title: string;
  description: string;
  imageUrl: string;
  startDate: string;
  endDate: string;
}

interface ShowcaseSection {
  sectionId: number;
  theme: string;
  title: string;
  showcases: Showcase[];
}

interface ContentSectionProps {
  section: ShowcaseSection;
}

const ContentSection = ({ section }: ContentSectionProps) => {
  const { theme, title, showcases } = section;
  return (
    <section>
      <ShowcaseSectionTitle theme={theme} title={title} />
      <ul className="grid grid-cols-3 gap-x-4 gap-y-[45px] px-9 py-16">
        {showcases.map(({ showcaseId, ...props }) => (
          <li key={showcaseId}>
            <ShowcaseCard variant="small" {...props} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ContentSection;
