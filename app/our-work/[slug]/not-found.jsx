import Link from 'next/link'

export default function ProjectNotFound() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Project not found</h2>
        <p className="text-gray-600 mb-6">The project you are looking for does not exist.</p>
        <Link href="/our-work" className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors">Back to Our Work</Link>
      </div>
    </div>
  )
}
