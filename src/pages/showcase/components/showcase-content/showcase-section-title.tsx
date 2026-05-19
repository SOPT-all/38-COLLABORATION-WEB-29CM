interface ShowcaseSectionTitleProps {
  theme: string;
  title: string;
}

const ShowcaseSectionTitle = ({ theme, title }: ShowcaseSectionTitleProps) => {
  return (
    <header className="w-full px-9 py-6">
      <div className="flex h-12 items-center gap-2.5">
        <span className="text-heading-02 flex h-full items-center bg-gray-900 px-2.5 text-white">
          {theme}
        </span>
        <h2 className="text-title-02">{title}</h2>
      </div>
    </header>
  );
};

export default ShowcaseSectionTitle;
