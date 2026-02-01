export default function Loading() {
  return (
    <div className="min-h-screen bg-offwhite pt-32 pb-16">
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="relative w-16 h-16 mx-auto mb-4">
            <div className="absolute inset-0 border-4 border-gray-300 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
          </div>
          <p className="text-gray-600 text-lg font-medium">Loading team...</p>
        </div>
      </div>
    </div>
  );
}
