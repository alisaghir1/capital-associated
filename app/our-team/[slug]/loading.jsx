export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Skeleton */}
      <div className="relative w-full h-[50vh] min-h-[400px] bg-gray-300 animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-12 left-0 right-0 px-4 lg:px-20">
          <div className="container mx-auto text-center">
            <div className="w-64 h-12 bg-gray-400 rounded mx-auto mb-4 animate-pulse" />
            <div className="w-48 h-6 bg-gray-400 rounded mx-auto animate-pulse" />
          </div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="container mx-auto px-4 lg:px-20 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Bio Section */}
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="w-48 h-48 bg-gray-300 rounded-full flex-shrink-0 mx-auto animate-pulse" />
            <div className="flex-1 space-y-4">
              <div className="h-8 bg-gray-300 rounded w-3/4 animate-pulse" />
              <div className="h-5 bg-gray-200 rounded w-1/2 animate-pulse" />
              <div className="space-y-2 mt-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-4 bg-gray-200 rounded animate-pulse" style={{ width: `${80 + Math.random() * 20}%` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
