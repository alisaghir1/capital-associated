export default function Loading() {
  return (
    <div className="min-h-screen bg-offwhite">
      {/* Hero Skeleton */}
      <div className="relative w-full h-[60vh] min-h-[450px] bg-gray-300 animate-pulse" />
      
      {/* Content Skeleton */}
      <div className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-20">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-40 h-8 bg-gray-300 rounded-full mx-auto mb-4 animate-pulse" />
            <div className="w-80 h-10 bg-gray-300 rounded mx-auto mb-4 animate-pulse" />
            <div className="w-96 h-6 bg-gray-200 rounded mx-auto animate-pulse" />
          </div>

          {/* Careers Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="h-7 bg-gray-300 rounded w-3/4 mb-2 animate-pulse" />
                    <div className="h-5 bg-gray-200 rounded w-1/2 animate-pulse" />
                  </div>
                  <div className="w-20 h-6 bg-amber-200 rounded-full animate-pulse" />
                </div>
                <div className="space-y-2 mb-4">
                  <div className="h-4 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse" />
                </div>
                <div className="flex gap-4">
                  <div className="w-24 h-5 bg-gray-200 rounded animate-pulse" />
                  <div className="w-24 h-5 bg-gray-200 rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
