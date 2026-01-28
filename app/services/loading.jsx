export default function Loading() {
  return (
    <div className="min-h-screen bg-offwhite">
      {/* Hero Skeleton */}
      <div className="relative w-full h-[70vh] min-h-[500px] bg-gray-300 animate-pulse" />
      
      {/* Content Skeleton */}
      <div className="py-20">
        <div className="flex flex-col justify-center items-center gap-5 mb-12">
          <div className="w-48 h-10 bg-gray-300 rounded animate-pulse" />
          <div className="w-96 h-8 bg-gray-200 rounded animate-pulse" />
        </div>

        {/* Service Cards Grid Skeleton */}
        <div className="container mx-auto gap-20 grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 px-10 pb-10">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="relative h-[20rem] w-full">
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1">
                <div className="bg-gray-300 animate-pulse rounded-ss-lg" />
                <div className="bg-gray-400 animate-pulse rounded-se-lg" />
                <div className="bg-gray-400 animate-pulse rounded-es-lg" />
                <div className="bg-gray-300 animate-pulse rounded-ee-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
