const HomeMenuSkeleton = () => (
  <div className="flex h-[42px] items-end gap-[15px] px-9 pb-[10px]">
    {Array.from({ length: 7 }).map((_, i) => (
      <div key={i} className="animate-skeleton-wave h-4 w-12" />
    ))}
  </div>
);

const BannerCarouselSkeleton = () => (
  <div className="animate-skeleton-wave aspect-20/9 w-full" />
);

const ShortcutSectionSkeleton = () => (
  <section className="grid grid-cols-6 gap-x-4.5 gap-y-5 px-9.5 py-18">
    {Array.from({ length: 12 }).map((_, i) => (
      <div key={i} className="animate-skeleton-wave aspect-2/1 w-full" />
    ))}
  </section>
);

const ProductSectionSkeleton = () => (
  <section className="flex gap-6">
    <div className="animate-skeleton-wave aspect-578/680 h-[calc(100vh-84px)] shrink-0" />
    <div className="grid flex-1 grid-cols-2 gap-y-12.5">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex flex-col gap-3">
          <div className="animate-skeleton-wave h-[300px] w-full" />
          <div className="animate-skeleton-wave h-4 w-3/4" />
          <div className="animate-skeleton-wave h-3 w-1/2" />
        </div>
      ))}
    </div>
  </section>
);

const HomeSkeleton = () => (
  <>
    <HomeMenuSkeleton />
    <BannerCarouselSkeleton />
    <ShortcutSectionSkeleton />
    <ProductSectionSkeleton />
  </>
);

export default HomeSkeleton;
