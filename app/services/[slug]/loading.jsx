export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Skeleton */}
      <div className="relative w-full h-[60vh] lg:h-[70vh] min-h-[500px] bg-gray-300 animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        <div className="absolute top-1/2 -translate-y-1/2 left-0 px-6 lg:px-8 max-w-7xl">
          <div className="w-48 h-4 bg-gray-400 rounded mb-8 animate-pulse" />
          <div className="w-3/4 max-w-xl h-14 bg-gray-400 rounded mb-6 animate-pulse" />
          <div className="w-2/3 max-w-lg h-6 bg-gray-400 rounded mb-8 animate-pulse" />
          <div className="w-40 h-12 bg-white/30 rounded-lg animate-pulse" />
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="container mx-auto px-4 lg:px-20 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="w-48 h-8 bg-gray-300 rounded mb-8 animate-pulse" />
          <div className="space-y-4 mb-16">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-5 bg-gray-200 rounded animate-pulse" style={{ width: `${80 + Math.random() * 20}%` }} />
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Skeleton */}
      <div className="bg-offwhite py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-20">
          <div className="text-center mb-12">
            <div className="w-48 h-10 bg-gray-300 rounded mx-auto mb-4 animate-pulse" />
            <div className="w-96 h-6 bg-gray-200 rounded mx-auto animate-pulse" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="text-center p-8 bg-white rounded-2xl">
                <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-6 animate-pulse" />
                <div className="w-32 h-6 bg-gray-300 rounded mx-auto mb-3 animate-pulse" />
                <div className="w-full h-4 bg-gray-200 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
