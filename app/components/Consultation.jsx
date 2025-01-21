import React from 'react'
import Link from 'next/link'

const Consultation = () => {
  return (
    <section className="bg-white flex flex-col gap-10 py-20 xl:px-20 px-5 text-center w-[100%] justify-center items-center">
    <h1 className="lg:text-3xl text-2xl xl:text-4xl">
    Have something in mind
    </h1>
    <p className="lg:text-2xl text-xl xl:text-3xl">
    Partner with Us Today to Build the Future. Let&apos;s Create Something Extraordinary Together!
    </p>
    <Link href='/contact'>
    <button className="bg-black hover:bg-white hover:border border-black hover:text-black transition-all duration-200 ease-in-out text-white py-5 px-20 text-center lg:text-2xl text-xl xl:text-3xl">
    GET FREE CONSULTATION
    </button>
    </Link>
  </section>
  )
}

export default Consultation