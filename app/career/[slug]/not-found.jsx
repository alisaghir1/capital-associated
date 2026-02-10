import Link from 'next/link'

export default function CareerNotFound() {
  return (
    <div className="min-h-screen bg-slate-100 pt-32 pb-12">
      <div className="flex items-center justify-center">
        <div className="text-center max-w-md p-12 bg-white rounded-2xl shadow-lg border border-gray-200">
          <div className="w-20 h-20 bg-black rounded-full mx-auto mb-8 flex items-center justify-center">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.291-1.1-5.591-2.709M15 11.5a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-black mb-4">Career Not Found</h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            The job posting you&apos;re looking for doesn&apos;t exist or is no longer available.
          </p>
          <Link
            href="/career"
            className="inline-flex items-center bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-all duration-200 font-medium shadow-lg hover:shadow-xl group"
          >
            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            View All Careers
          </Link>
        </div>
      </div>
    </div>
  )
}
