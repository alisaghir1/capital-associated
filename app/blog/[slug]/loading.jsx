export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Skeleton */}
      <div className="relative w-full h-[60vh] lg:h-[70vh] min-h-[450px] bg-gray-300 animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-12 left-0 right-0 px-4 lg:px-20">
          <div className="container mx-auto">
            <div className="w-48 h-4 bg-gray-400 rounded mb-6 animate-pulse" />
            <div className="w-3/4 max-w-2xl h-12 bg-gray-400 rounded mb-4 animate-pulse" />
            <div className="flex gap-6">
              <div className="w-32 h-10 bg-gray-400 rounded animate-pulse" />
              <div className="w-32 h-10 bg-gray-400 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="container mx-auto px-4 lg:px-20 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Excerpt Box */}
          <div className="mb-12 p-8 bg-gray-100 rounded-2xl animate-pulse">
            <div className="h-6 bg-gray-300 rounded mb-2" />
            <div className="h-6 bg-gray-300 rounded w-3/4" />
          </div>

          {/* Content Lines */}
          <div className="space-y-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-5 bg-gray-200 rounded animate-pulse" style={{ width: `${85 + Math.random() * 15}%` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
