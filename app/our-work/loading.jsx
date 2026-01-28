export default function Loading() {
  return (
    <div className="min-h-screen bg-offwhite">
      {/* Hero Skeleton */}
      <div className="relative w-full h-[70vh] min-h-[500px] bg-gray-300 animate-pulse" />
      
      {/* Content Skeleton */}
      <div className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-20">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-32 h-8 bg-gray-300 rounded-full mx-auto mb-4 animate-pulse" />
            <div className="w-72 h-10 bg-gray-300 rounded mx-auto mb-4 animate-pulse" />
            <div className="w-96 h-6 bg-gray-200 rounded mx-auto animate-pulse" />
          </div>

          {/* Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="relative h-72 bg-gray-300 animate-pulse" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="h-7 bg-gray-400 rounded mb-2 animate-pulse" />
                  <div className="h-5 bg-gray-400 rounded w-1/2 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
