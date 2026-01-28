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
            <div className="w-36 h-8 bg-gray-300 rounded-full mx-auto mb-4 animate-pulse" />
            <div className="w-64 h-10 bg-gray-300 rounded mx-auto mb-4 animate-pulse" />
            <div className="w-80 h-6 bg-gray-200 rounded mx-auto animate-pulse" />
          </div>

          {/* Contact Form Skeleton */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="w-20 h-4 bg-gray-300 rounded mb-2 animate-pulse" />
                  <div className="h-12 bg-gray-100 rounded-lg animate-pulse" />
                </div>
                <div>
                  <div className="w-16 h-4 bg-gray-300 rounded mb-2 animate-pulse" />
                  <div className="h-12 bg-gray-100 rounded-lg animate-pulse" />
                </div>
              </div>
              <div className="mb-6">
                <div className="w-16 h-4 bg-gray-300 rounded mb-2 animate-pulse" />
                <div className="h-12 bg-gray-100 rounded-lg animate-pulse" />
              </div>
              <div className="mb-6">
                <div className="w-20 h-4 bg-gray-300 rounded mb-2 animate-pulse" />
                <div className="h-32 bg-gray-100 rounded-lg animate-pulse" />
              </div>
              <div className="h-12 bg-amber-400 rounded-lg animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
