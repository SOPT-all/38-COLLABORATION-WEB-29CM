interface ShowcaseSectionTitleProps {
  theme: string;
  title: string;
}

const ShowcaseSectionTitle = ({ theme, title }: ShowcaseSectionTitleProps) => {
  return (
    <header className="w-full px-9 py-6">
      <div className="flex h-12 items-center gap-2.5">
        <h2 className="text-heading-02 flex h-full items-center bg-gray-900 px-2.5 text-white">
          {theme}
        </h2>
        <span className="text-title-02">{title}</span>
      </div>
    </header>
  );
};

export default ShowcaseSectionTitle;
