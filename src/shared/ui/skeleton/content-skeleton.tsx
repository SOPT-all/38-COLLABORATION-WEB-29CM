const ContentSkeleton = () => (
  <section>
    <header className="w-full px-9 py-6">
      <div className="flex h-12 items-center gap-2.5">
        <div className="h-full w-16 animate-pulse bg-gray-200" />
        <div className="h-5 w-32 animate-pulse bg-gray-200" />
      </div>
    </header>

    <ul className="grid grid-cols-3 gap-x-4 gap-y-[45px] px-9 py-16">
      {Array.from({ length: 12 }).map((_, i) => (
        <li key={i} className="flex flex-col gap-3">
          <div className="h-[240px] w-full animate-pulse bg-gray-200" />
          <div className="flex flex-col gap-[16px] pb-[50px]">
            <div className="flex flex-col gap-[6px]">
              <div className="h-4 w-3/4 animate-pulse bg-gray-200" />
              <div className="h-3 w-full animate-pulse bg-gray-200" />
            </div>
            <div className="h-3 w-1/3 animate-pulse bg-gray-200" />
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default ContentSkeleton;
