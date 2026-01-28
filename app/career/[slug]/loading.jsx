export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Skeleton */}
      <div className="relative w-full h-[50vh] min-h-[400px] bg-gray-300 animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-12 left-0 right-0 px-4 lg:px-20">
          <div className="container mx-auto">
            <div className="w-32 h-6 bg-gray-400 rounded mb-4 animate-pulse" />
            <div className="w-3/4 max-w-xl h-10 bg-gray-400 rounded mb-4 animate-pulse" />
            <div className="flex gap-4">
              <div className="w-24 h-6 bg-gray-400 rounded animate-pulse" />
              <div className="w-24 h-6 bg-gray-400 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="container mx-auto px-4 lg:px-20 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Job Details Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-6">
                <div className="w-10 h-10 bg-gray-300 rounded-full mb-3 animate-pulse" />
                <div className="w-20 h-4 bg-gray-300 rounded mb-2 animate-pulse" />
                <div className="w-32 h-5 bg-gray-200 rounded animate-pulse" />
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="mb-12">
            <div className="w-48 h-8 bg-gray-300 rounded mb-6 animate-pulse" />
            <div className="space-y-3">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-5 bg-gray-200 rounded animate-pulse" style={{ width: `${80 + Math.random() * 20}%` }} />
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div className="mb-12">
            <div className="w-40 h-8 bg-gray-300 rounded mb-6 animate-pulse" />
            <div className="space-y-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-gray-300 rounded-full animate-pulse" />
                  <div className="h-4 bg-gray-200 rounded animate-pulse flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
