import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="bg-white">
        <div className="relative h-[30rem] w-full">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/main.jpg"
              alt="Background Image"
              layout="fill" // This will make the image cover the entire screen
              objectFit="cover" // Ensures the image maintains its aspect ratio while filling the screen
            />
          </div>

          {/* Content on top of the image */}
          <div className="relative z-10 flex flex-col justify-center items-center w-full h-full">
            <h1 className="xl:text-4xl text-black md:text-2xl text-xl lg:text-3xl font-bold">
              Renovation & Remodeling
            </h1>
            <p className="xl:text-4xl text-black md:text-2xl lg:text-3xl text-xl mt-5">
              Transforming Spaces, Elevating Experiences
            </p>
            <p className="absolute  bottom-10 left-10 text-white">
              Home{" "}
              <span className="text-black">
                / Our Services / Renovation & Remodeling
              </span>
            </p>
          </div>
        </div>
        <div className="container mx-auto flex flex-col gap-5 text-center px-4">
          <div className="relative mt-5 h-[300px] xl:h-[600px]">
            <Image
              src="/services/s4.jpg"
              alt="Full Width Image"
              layout="fill"
              objectFit="cover"
              className="xl:rounded-b-[300px] rounded-b-[100px] "
            />
          </div>
          <p className="mt-4">
            At Capital Associated Building Contracting, we bring years of
            experience and expertise to every project we undertake. Our team of
            seasoned professionals possesses a wealth of knowledge in
            construction, design, and project management.
          </p>
          <p className="mt-4">
            We have honed our skills through numerous successful renovations and
            remodels, ensuring that we deliver top-notch results tailored to
            your unique requirements. From concept to completion, we handle
            every aspect of your project with professionalism and precision.
          </p>
          <div className="relative mt-5 h-[300px] xl:h-[600px]">
            <Image
              src="/services/s1.jpg"
              alt="Full Width Image"
              layout="fill"
              objectFit="cover"
              className="xl:rounded-t-[300px] rounded-t-[100px]"
            />
          </div>
          <h1 className="xl:text-3xl text-2xl border-b border-b-black w-full pb-10">
            Comprehensive Renovation Services
          </h1>
          <div className="flex flex-col text-start justify-center mt-10">
            <p className="xl:text-xl text-lg font-bold mb-4">
              1- Kitchen Renovation
            </p>
            <p className="mb-4">
              Elevate your culinary experience with a fully customized kitchen
              that combines functionality, style, and efficiency. From bespoke
              cabinetry and exquisite countertops to state-of-the-art
              appliances, we create spaces that inspire creativity and delight
              the senses.
            </p>
            <div className="flex gap-5">
              <div className="relative mt-5 w-1/2 h-56 xl:h-96">
                {" "}
                {/* Add 'relative' to the parent */}
                <Image
                  src="/services/s8.jpg"
                  alt="Full Width Image"
                  layout="fill" // Ensures the image fills the container
                  objectFit="cover" // Ensures the image scales properly within the container
                  className="xl:rounded-b-[150px] rounded-b-[50px]"
                />
              </div>
              <div className="relative mt-5 w-1/2 h-56 xl:h-96">
                {" "}
                {/* Add 'relative' to the parent */}
                <Image
                  src="/services/interiorFit/s1.jpg"
                  alt="Full Width Image"
                  layout="fill" // Ensures the image fills the container
                  objectFit="cover" // Ensures the image scales properly within the container
                  className="xl:rounded-b-[150px] rounded-b-[50px]"
                />
              </div>
            </div>
            <div className="flex flex-col text-start justify-center mt-10">
              <p className="xl:text-xl text-lg font-bold mb-4">
                2- Bathroom Renovation
              </p>
              <p className="mb-4">
                Turn your bathroom into a private sanctuary of relaxation and
                rejuvenation. With meticulous attention to detail, we design and
                install luxurious fixtures, elegant tilework, and spa-like
                features, ensuring a serene and indulgent bathing experience.
              </p>
              <div className="flex gap-5">
                <div className="relative mt-5 w-1/2 h-56 xl:h-96">
                  {" "}
                  {/* Add 'relative' to the parent */}
                  <Image
                    src="/services/interiorFit/s2.jpg"
                    alt="Full Width Image"
                    layout="fill" // Ensures the image fills the container
                    objectFit="cover" // Ensures the image scales properly within the container
                    className="xl:rounded-b-[150px] rounded-b-[50px]"
                  />
                </div>
                <div className="relative mt-5 w-1/2 h-56 xl:h-96">
                  {" "}
                  {/* Add 'relative' to the parent */}
                  <Image
                    src="/services/interiorFit/s9.jpg"
                    alt="Full Width Image"
                    layout="fill" // Ensures the image fills the container
                    objectFit="cover" // Ensures the image scales properly within the container
                    className="xl:rounded-b-[150px] rounded-b-[50px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col text-start justify-center mt-10">
              <p className="xl:text-xl text-lg font-bold mb-4">
                3- Living Space Renovation
              </p>
              <p className="mb-4">
                Maximize the potential of your living areas with our
                comprehensive renovation solutions. Whether it’s a cozy family
                room, an inviting dining area, or a stylish entertainment space,
                we create environments that reflect your lifestyle and foster
                comfort and togetherness.
              </p>
              <div className="flex gap-5">
                <div className="relative mt-5 w-1/2 h-56 xl:h-96">
                  {" "}
                  {/* Add 'relative' to the parent */}
                  <Image
                    src="/services/interiorFit/s8.jpg"
                    alt="Full Width Image"
                    layout="fill" // Ensures the image fills the container
                    objectFit="cover" // Ensures the image scales properly within the container
                    className="xl:rounded-b-[150px] rounded-b-[50px]"
                  />
                </div>
                <div className="relative mt-5 w-1/2 h-56 xl:h-96">
                  {" "}
                  {/* Add 'relative' to the parent */}
                  <Image
                    src="/services/interiorFit/s10.jpg"
                    alt="Full Width Image"
                    layout="fill" // Ensures the image fills the container
                    objectFit="cover" // Ensures the image scales properly within the container
                    className="xl:rounded-b-[150px] rounded-b-[50px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col text-start justify-center mt-10">
              <p className="xl:text-xl text-lg font-bold mb-4">
                4- Flooring and Painting
              </p>
              <p className="mb-4">
                Enhance the aesthetic appeal and functionality of your home with
                our flooring and painting services. From hardwood flooring to
                sleek tile designs, and from expert color consultations to
                flawless painting execution, we help you achieve a cohesive and
                visually striking interior.
              </p>
              <div className="relative mt-5  h-64 xl:h-[30rem]">
                {" "}
                {/* Add 'relative' to the parent */}
                <Image
                  src="/services/interiorFit/s11.jpg"
                  alt="Full Width Image"
                  layout="fill" // Ensures the image fills the container
                  objectFit="cover" // Ensures the image scales properly within the container
                  className="xl:rounded-b-[150px] rounded-b-[50px]"
                />
              </div>
            </div>
            <div className="flex flex-col text-start justify-center mt-10">
              <p className="xl:text-xl text-lg font-bold mb-4">
                5- Room Additions
              </p>
              <p className="mb-4">
                Expand your living space with seamless room additions that blend
                harmoniously with your existing structure. Whether it’s an extra
                bedroom, a home office, or a dedicated entertainment area, we
                ensure a seamless integration that maintains the architectural
                integrity of your home.
              </p>
              <div className="relative mt-5  h-64 xl:h-[30rem]">
                {" "}
                {/* Add 'relative' to the parent */}
                <Image
                  src="/services/interiorFit/s4.jpg"
                  alt="Full Width Image"
                  layout="fill" // Ensures the image fills the container
                  objectFit="cover" // Ensures the image scales properly within the container
                  className="xl:rounded-b-[150px] rounded-b-[50px]"
                />
              </div>
            </div>
            <div className="flex flex-col text-start justify-center mt-10">
              <p className="xl:text-xl text-lg font-bold mb-4">
                6- Basement and Attic Remodeling
              </p>
              <p className="mb-4">
                Unlock the hidden potential of your basement or attic with our
                transformative remodeling services. From creating a versatile
                recreational space to constructing a private retreat, our
                expertise in maximizing the functionality of these areas will
                breathe new life into your home.
              </p>
              <div className="relative mt-5  h-64 xl:h-[30rem] mb-20">
                {" "}
                {/* Add 'relative' to the parent */}
                <Image
                  src="/services/interiorFit/s3.jpg"
                  alt="Full Width Image"
                  layout="fill" // Ensures the image fills the container
                  objectFit="cover" // Ensures the image scales properly within the container
                  className="xl:rounded-b-[150px] rounded-b-[50px]"
                />
              </div>
            </div>
            <div className="flex flex-col text-start justify-center mt-10">
              <p className="xl:text-xl text-lg font-bold mb-4">
                7- Exterior Remodeling
              </p>
              <p className="mb-4">
                Boost your home’s curb appeal and make a lasting impression with
                our exterior remodeling solutions. From revitalizing your façade
                to upgrading windows, doors, and roofing, we create a visually
                captivating exterior that enhances both aesthetics and
                functionality.
              </p>
              <div className="relative mt-5  h-64 xl:h-[30rem] mb-20">
                {" "}
                {/* Add 'relative' to the parent */}
                <Image
                  src="/services/interiorFit/s6.jpg"
                  alt="Full Width Image"
                  layout="fill" // Ensures the image fills the container
                  objectFit="cover" // Ensures the image scales properly within the container
                  className="xl:rounded-b-[150px] rounded-b-[50px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-100">
        <div className="container px-5 mx-auto flex flex-col items-center justify-center text-center gap-5 pt-20 pb-20">
          <h1 className="xl:text-3xl text-2xl text-center border-b border-b-black w-full pb-10">
            Contact Us for Your Renovation & Remodeling Needs
          </h1>
          <p className="mb-4">
            Ready to transform your space with our exceptional Renovation &
            Remodeling services?
          </p>
          <p className="mb-4">
            We invite you to get in touch with us today to discuss your project
            requirements and explore how Capital Associated Building Contracting
            can bring your vision to life.
          </p>
          <p className="mb-4">
            Our friendly and knowledgeable team is here to answer any questions
            you may have and provide you with personalized solutions tailored to
            your needs. We are committed to delivering outstanding results,
            exceeding your expectations, and ensuring your complete
            satisfaction.
          </p>
          <p className="mb-4">
            Contact us now to schedule a consultation and let us guide you
            through the journey of creating a remarkable interior space that
            reflects your style, enhances functionality, and leaves a lasting
            impression.
          </p>
          <p className="mb-4">
            Together, we will create an environment that inspires and
            captivates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
