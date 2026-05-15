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
  sections: ShowcaseSection[];
}

const ContentSection = ({ sections }: ContentSectionProps) => {
  return (
    <section>
      {sections.map(({ sectionId, theme, title, showcases }) => (
        <article key={sectionId}>
          <ShowcaseSectionTitle theme={theme} title={title} />
          <ul className="grid grid-cols-3 gap-x-4 gap-y-[45px] py-16 pr-[50px] pl-9">
            {showcases.map(({ showcaseId, ...props }) => (
              <li key={showcaseId}>
                <ShowcaseCard variant="small" {...props} />
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
};

export default ContentSection;
