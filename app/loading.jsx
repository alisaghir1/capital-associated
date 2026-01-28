export default function Loading() {
  return (
    <div className="min-h-screen bg-offwhite">
      {/* Hero Section Skeleton */}
      <div className="relative w-full h-screen min-h-[600px] bg-gray-300 animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-20 left-0 right-0 px-4 lg:px-20">
          <div className="container mx-auto">
            <div className="w-32 h-6 bg-gray-400 rounded mb-4 animate-pulse" />
            <div className="w-3/4 max-w-2xl h-16 bg-gray-400 rounded mb-6 animate-pulse" />
            <div className="w-1/2 max-w-lg h-6 bg-gray-400 rounded mb-8 animate-pulse" />
            <div className="w-40 h-12 bg-amber-400/50 rounded-lg animate-pulse" />
          </div>
        </div>
      </div>

      {/* Services Section Skeleton */}
      <div className="py-20 bg-offwhite">
        <div className="container mx-auto px-4 lg:px-20">
          <div className="text-center mb-12">
            <div className="w-32 h-6 bg-gray-300 rounded-full mx-auto mb-4 animate-pulse" />
            <div className="w-64 h-10 bg-gray-300 rounded mx-auto animate-pulse" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
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

      {/* About Section Skeleton */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-96 bg-gray-300 rounded-2xl animate-pulse" />
            <div className="space-y-4">
              <div className="w-24 h-6 bg-gray-300 rounded-full animate-pulse" />
              <div className="w-3/4 h-10 bg-gray-300 rounded animate-pulse" />
              <div className="space-y-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-5 bg-gray-200 rounded animate-pulse" style={{ width: `${85 + Math.random() * 15}%` }} />
                ))}
              </div>
              <div className="w-36 h-12 bg-amber-400/50 rounded-lg animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section Skeleton */}
      <div className="py-20 bg-offwhite">
        <div className="container mx-auto px-4 lg:px-20">
          <div className="text-center mb-12">
            <div className="w-32 h-6 bg-gray-300 rounded-full mx-auto mb-4 animate-pulse" />
            <div className="w-56 h-10 bg-gray-300 rounded mx-auto animate-pulse" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="relative h-72 bg-gray-300 rounded-xl overflow-hidden animate-pulse">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="h-6 bg-gray-400 rounded w-3/4 mb-2 animate-pulse" />
                  <div className="h-4 bg-gray-400 rounded w-1/2 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section Skeleton */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-20">
          <div className="text-center mb-12">
            <div className="w-28 h-6 bg-gray-300 rounded-full mx-auto mb-4 animate-pulse" />
            <div className="w-48 h-10 bg-gray-300 rounded mx-auto animate-pulse" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-gray-100 rounded-2xl overflow-hidden">
                <div className="h-64 bg-gray-300 animate-pulse" />
                <div className="p-4 text-center">
                  <div className="h-5 bg-gray-300 rounded w-3/4 mx-auto mb-2 animate-pulse" />
                  <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Section Skeleton */}
      <div className="py-20 bg-offwhite">
        <div className="container mx-auto px-4 lg:px-20">
          <div className="text-center mb-12">
            <div className="w-24 h-6 bg-gray-300 rounded-full mx-auto mb-4 animate-pulse" />
            <div className="w-52 h-10 bg-gray-300 rounded mx-auto animate-pulse" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="h-48 bg-gray-300 animate-pulse" />
                <div className="p-6">
                  <div className="h-6 bg-gray-300 rounded mb-3 animate-pulse" />
                  <div className="h-4 bg-gray-200 rounded mb-2 animate-pulse" />
                  <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section Skeleton */}
      <div className="py-20 bg-[#222222]">
        <div className="container mx-auto px-4 lg:px-20 text-center">
          <div className="w-64 h-10 bg-gray-600 rounded mx-auto mb-4 animate-pulse" />
          <div className="w-96 h-6 bg-gray-700 rounded mx-auto mb-8 animate-pulse" />
          <div className="w-40 h-12 bg-amber-400/50 rounded-lg mx-auto animate-pulse" />
        </div>
      </div>
    </div>
  );
}
