export default function Loading() {
  return (
    <div className="min-h-screen">
      {/* Hero Skeleton */}
      <div className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] min-h-[400px] bg-gray-300 animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
        <div className="absolute bottom-8 sm:bottom-12 left-0 right-0 px-4 sm:px-6">
          <div className="w-full max-w-4xl mx-auto text-center">
            <div className="w-32 h-8 bg-gray-400 rounded-full mx-auto mb-6 animate-pulse" />
            <div className="w-3/4 h-12 bg-gray-400 rounded mx-auto mb-6 animate-pulse" />
            <div className="w-48 h-6 bg-gray-400 rounded mx-auto animate-pulse" />
          </div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto mb-3 animate-pulse" />
                <div className="w-20 h-5 bg-gray-300 rounded mx-auto mb-2 animate-pulse" />
                <div className="w-32 h-4 bg-gray-200 rounded mx-auto animate-pulse" />
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="max-w-4xl mx-auto text-center mb-8">
            <div className="w-48 h-8 bg-gray-300 rounded mx-auto mb-6 animate-pulse" />
            <div className="space-y-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-5 bg-gray-200 rounded animate-pulse" style={{ width: `${85 + Math.random() * 15}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
