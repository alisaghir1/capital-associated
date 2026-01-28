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
            <div className="w-28 h-8 bg-gray-300 rounded-full mx-auto mb-4 animate-pulse" />
            <div className="w-56 h-10 bg-gray-300 rounded mx-auto mb-4 animate-pulse" />
            <div className="w-80 h-6 bg-gray-200 rounded mx-auto animate-pulse" />
          </div>

          {/* About Content Skeleton */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-4">
              <div className="h-8 bg-gray-300 rounded w-3/4 animate-pulse" />
              <div className="space-y-2">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-5 bg-gray-200 rounded animate-pulse" style={{ width: `${85 + Math.random() * 15}%` }} />
                ))}
              </div>
            </div>
            <div className="h-96 bg-gray-300 rounded-2xl animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
