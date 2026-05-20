const ShowcaseSkeleton = () => (
  <>
    {/* FeaturedSection */}
    <section className="px-9 py-16">
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {Array.from({ length: 2 }).map((_, i) => (
          <li key={i} className="flex flex-col gap-4">
            <div className="animate-skeleton-wave h-[362px] w-full" />
            <div className="flex flex-col gap-[14px] pb-[50px]">
              <div className="flex flex-col gap-[6px]">
                <div className="animate-skeleton-wave h-5 w-3/4" />
                <div className="animate-skeleton-wave h-4 w-full" />
              </div>
              <div className="animate-skeleton-wave h-3 w-1/3" />
            </div>
          </li>
        ))}
      </ul>
    </section>

    {/* ContentSection */}
    <section>
      <header className="w-full px-9 py-6">
        <div className="flex h-12 items-center gap-2.5">
          <div className="animate-skeleton-wave h-full w-16" />
          <div className="animate-skeleton-wave h-5 w-32" />
        </div>
      </header>
      <ul className="grid grid-cols-3 gap-x-4 gap-y-[45px] px-9 py-16">
        {Array.from({ length: 12 }).map((_, i) => (
          <li key={i} className="flex flex-col gap-3">
            <div className="animate-skeleton-wave h-[240px] w-full" />
            <div className="flex flex-col gap-[16px] pb-[50px]">
              <div className="flex flex-col gap-[6px]">
                <div className="animate-skeleton-wave h-4 w-3/4" />
                <div className="animate-skeleton-wave h-3 w-full" />
              </div>
              <div className="animate-skeleton-wave h-3 w-1/3" />
            </div>
          </li>
        ))}
      </ul>
    </section>
  </>
);

export default ShowcaseSkeleton;
