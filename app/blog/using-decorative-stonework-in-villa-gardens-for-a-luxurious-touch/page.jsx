import React from "react";
import Image from "next/image";

const DecorativeStonework = () => {
  return (
    <div className="container mx-auto px-5 pt-40">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold pb-5">Using Decorative Stonework in Villa Gardens for a Luxurious Touch</h1>
        <p className="text-black text-sm mb-20">September 2, 2025 | Posted by admin</p>
        <div className="relative h-[40rem] w-full">
          <Image
            src="/blogs/using-decorative-stonework-in-villa-gardens-for-a-luxurious-touch/1.jpg"
            alt="Decorative stonework in villa garden"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
      </header>

      <article className="flex flex-col text-start items-start justify-start gap-10">
        <section>
          <p className="text-black">Creating an elegant outdoor space for a villa often requires thoughtful planning and creative design choices. One of the most timeless and effective ways to elevate the appearance of any garden is through the use of decorative stonework.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">The Timeless Appeal of Stone in Garden Design</h2>
          <p className="text-black">Stone has long been a popular material in landscaping, thanks to its durability and versatility. Its natural look allows it to seamlessly blend with a wide variety of styles, from modern minimalist gardens to more traditional, classical designs. The range of textures and colors available offers endless possibilities for personalization, enabling homeowners to create unique spaces that reflect their taste and lifestyle.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Stone Pathways</h2>
          <p className="text-black">A well-designed pathway can serve as both a functional element and a key design feature. Using stone for pathways not only provides a sturdy and weather-resistant surface but also lends a beautiful aesthetic to the garden. Natural stone pavers, irregular flagstone, or sleek, polished slabs can all be arranged to guide visitors through the landscape, creating a sense of flow and connection between different areas of the garden.</p>

          <div className="w-full mt-4 mb-6">
            <Image src="/blogs/using-decorative-stonework-in-villa-gardens-for-a-luxurious-touch/2.jpg" alt="Stone pathways" width={1000} height={562} className="w-full h-auto rounded-lg object-contain" />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Decorative Stone Walls</h2>
          <p className="text-black">Stone walls provide not only structural integrity but also a visual anchor for garden design. Low walls can be used to divide sections of the garden or to frame a specific area, such as a patio or seating area. Taller walls can offer much-needed privacy while maintaining a natural and elegant appearance.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Incorporating Stone Benches and Seating Areas</h2>
          <p className="text-black">Integrating stone seating into the garden creates a permanent, stylish focal point. Stone benches can be both a functional and artistic element in a villa’s outdoor space. Their sturdy construction ensures they withstand the elements while offering a timeless beauty that enhances the luxurious atmosphere.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Sculptural Stone Elements for a Luxurious Touch</h2>
          <p className="text-black">Stone sculptures or fountains can elevate the design of a villa garden, turning it into a space that feels truly luxurious. These decorative elements often act as focal points, drawing attention to key areas of the garden.</p>

          <div className="w-full mt-4 mb-6">
            <Image src="/blogs/using-decorative-stonework-in-villa-gardens-for-a-luxurious-touch/3.jpg" alt="Stone fountain" width={1000} height={562} className="w-full h-auto rounded-lg object-contain" />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Layering Textures with Different Stone Types</h2>
          <p className="text-black">Mixing various stone types—such as polished marble, rough granite, or smooth limestone—creates depth and complexity, enriching the garden’s visual appeal.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Stone in Water Features</h2>
          <p className="text-black">Natural stone can be used to create the base of a fountain, line the edges of a pond, or form a cascading waterfall. The combination of water and stone not only adds a soothing ambiance but also introduces a dynamic contrast between the fluidity of water and the solidity of stone.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Choosing the Right Stone for Your Garden</h2>
          <p className="text-black">The choice of stone can significantly impact the overall feel of the garden. Carefully selecting the right stone ensures that the garden complements the villa’s architecture and surrounding landscape.</p>
        </section>

        <section className="border-b border-b-black pb-20 w-full">
          <h2 className="text-2xl font-semibold mb-3">Maintaining Stonework in a Villa Garden</h2>
          <p className="text-black">While stone is known for its durability, maintaining its appearance is essential for keeping the garden looking pristine. Periodic cleaning, sealing, and repairs will prevent discoloration and wear.</p>
        </section>
      </article>

      {/* 6-Image Gallery */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {["/blogs/using-decorative-stonework-in-villa-gardens-for-a-luxurious-touch/1.jpg","/blogs/using-decorative-stonework-in-villa-gardens-for-a-luxurious-touch/2.jpg","/blogs/using-decorative-stonework-in-villa-gardens-for-a-luxurious-touch/3.jpg","/blogs/using-decorative-stonework-in-villa-gardens-for-a-luxurious-touch/4.jpg","/blogs/using-decorative-stonework-in-villa-gardens-for-a-luxurious-touch/5.jpg","/blogs/using-decorative-stonework-in-villa-gardens-for-a-luxurious-touch/6.jpg"].map((src) => (
          <div key={src} className="w-full overflow-hidden rounded-lg" style={{ position: 'relative', paddingTop: '100%' }}>
            <Image src={src} alt="Stonework gallery" fill style={{ objectFit: 'cover', position: 'absolute', inset: 0 }} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default DecorativeStonework;
