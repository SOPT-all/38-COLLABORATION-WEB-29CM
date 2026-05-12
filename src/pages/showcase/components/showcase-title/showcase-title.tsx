interface ShowcaseSectionTitleProps {
  theme: string;
  title: string;
}

const ShowcaseSectionTitle = ({ theme, title }: ShowcaseSectionTitleProps) => {
  return (
    <div className="w-full px-9 py-6">
      <div className="flex h-12 items-center gap-2.5">
        <div className="text-heading-02 flex h-full items-center bg-gray-900 px-2.5 text-white">
          {theme}
        </div>
        <span className="text-title-02">{title}</span>
      </div>
    </div>
  );
};

export default ShowcaseSectionTitle;
