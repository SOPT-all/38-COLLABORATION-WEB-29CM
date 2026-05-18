const ProductSelectionSkeleton = () => (
  <section className="flex gap-6">
    <div className="sticky top-21 aspect-578/680 h-[calc(100vh-84px)] shrink-0 animate-pulse self-start bg-gray-200" />

    <div className="flex flex-1 flex-col gap-9.5">
      <div className="grid grid-cols-2 gap-y-12.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-2 p-5">
            <div className="aspect-square w-full animate-pulse bg-gray-200" />
            <div className="h-4 w-3/4 animate-pulse bg-gray-200" />
            <div className="h-3 w-1/2 animate-pulse bg-gray-200" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductSelectionSkeleton;
