import Image from "next/image";
import Link from "next/link";
import { getServices, getProjects, getTeamMembers, getBlogPosts } from "@/lib/server-data";
import { stripHtmlTags } from "./utils/richText";
import { AnimatedH1, AnimatedP, AnimatedDiv, AnimatedSection } from "@/components/AnimatedElements";
import PublicLayout from "./PublicLayout";

// Force static generation with revalidation every 60 seconds
export const revalidate = 60;

export default async function Home() {
  // Fetch all data on the server - this becomes static HTML
  const [services, projects, teamMembers, blogPosts] = await Promise.all([
    getServices(9),
    getProjects(8),
    getTeamMembers(3),
    getBlogPosts(6)
  ]);

  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-x-hidden">
        {/* Background Image with high priority */}
        <div className="absolute inset-0">
          <Image
            src="/main.jpg"
            alt="Capital Associated Building Contracting - Leading Construction Company in Dubai"
            fill
            style={{ objectFit: "cover" }}
            priority
            fetchPriority="high"
            sizes="100vw"
          />
        </div>

        {/* Hero Content - Static HTML for SEO */}
        <div className="relative z-10 flex flex-col justify-center items-center w-full h-full">
          <AnimatedH1
            direction="down"
            delay={0.8}
            className="xl:text-4xl text-black md:text-2xl text-xl lg:text-3xl font-bold"
          >
            From Vision to Skyline
          </AnimatedH1>
          <AnimatedP
            direction="up"
            delay={0.8}
            className="xl:text-4xl text-black md:text-2xl lg:text-3xl text-xl mt-5"
          >
            Leading Developers in Dubai
          </AnimatedP>
        </div>
      </section>

      {/* About Section - Static HTML */}
      <section className="flex overflow-x-hidden bg-slate-100 flex-col xl:flex-row w-full justify-center items-center xl:w-full px-5 xl:px-20 pt-20 relative">
        {/* Left Side */}
        <AnimatedDiv
          direction="left"
          delay={0.8}
          className="xl:w-2/3 xl:p-5 rounded-lg"
        >
          <h2 className="mb-4 lg:text-3xl text-2xl xl:text-4xl font-bold border-b border-b-black pb-10 text-black">
            About Us
          </h2>
          <p className="mb-4 lg:text-3xl text-2xl xl:text-4xl font-bold pt-10 text-black">
            Capital Associated Building Contracting is a construction company in Dubai, UAE.
          </p>
          <p className="text-base leading-relaxed mt-20">
            Our extensive experience in the construction industry has established us as an essential partner in shaping Dubai&apos;s spectacular skyline and contributing to its rapid growth.
          </p>
          <p className="text-base leading-relaxed mt-5">
            Capital Associated Building Contracting in Dubai focuses on providing exceptional construction solutions while maintaining the highest levels of customer service and creativity. Our diverse portfolio comprises commercial buildings, residential towers, industrial facilities, and infrastructure projects. Each project demonstrates our knowledge and experience as an elite construction company in Dubai.
          </p>
        </AnimatedDiv>

        {/* Right Side */}
        <AnimatedDiv
          direction="right"
          delay={0.8}
          className="xl:w-2/4 w-full grid h-[70rem] xl:h-[36rem] xl:grid-cols-3 gap-5 xl:gap-2 xl:p-5 mt-[-100] xl:mt-0"
        >
          {/* First Row */}
          <div className="xl:col-span-1"></div>
          <div className="col-span-1 border hidden border-black xl:flex items-center justify-center xl:rounded-ss-full"></div>
          <div className="col-span-1 border border-black border-dashed hidden xl:flex items-center justify-center"></div>

          {/* Second Row */}
          <div className="col-span-1 border hidden border-black xl:flex items-center justify-center rounded-lg"></div>
          <div className="col-span-1 hover:bg-[url('/about1.jpg')] bg-cover bg-center transition-all duration-300 ease-out text-xl bg-black text-white flex items-center justify-center rounded-lg">
            VISION
          </div>
          <div className="col-span-1 hover:bg-[url('/about2.jpg')] bg-cover bg-center transition-all duration-300 ease-in-out text-xl bg-black text-white flex items-center justify-center rounded-lg xl:rounded-se-full">
            MISSION
          </div>

          {/* Third Row */}
          <div className="col-span-1 hover:bg-[url('/about3.jpg')] bg-cover bg-center transition-all duration-300 ease-in-out text-xl bg-black text-white flex items-center justify-center rounded-lg xl:rounded-es-full">
            QUALITY
          </div>
          <div className="col-span-1 hover:bg-[url('/about4.jpg')] bg-cover bg-center transition-all duration-300 ease-out text-xl bg-black text-white flex flex-col items-center justify-center rounded-lg xl:rounded-ee-full">
            <p>Document Control</p>
            <p>MESSAGE</p>
          </div>
          <div className="col-span-1"></div>
        </AnimatedDiv>
      </section>
      
      {/* Read More Button */}
      <div className="flex justify-center align-center mb-20 bg-slate-100">
        <Link
          className="px-4 mb-5 mt-[-50] z-20 xl:mt-0 text-center py-2 text-3xl transition-colors duration-300 ease-in-out text-black hover:text-black border-b border-b-black"
          href="/about-us"
        >
          Read More...
        </Link>
      </div>

      {/* Our Projects Section - Static HTML */}
      <section className="flex flex-col justify-center items-center gap-5 my-20">
        <AnimatedH1
          direction="down"
          delay={0.8}
          className="lg:text-3xl text-2xl xl:text-4xl"
        >
          Our Projects
        </AnimatedH1>
        <AnimatedP
          direction="up"
          delay={1}
          className="lg:text-2xl text-xl xl:text-3xl"
        >
          Designing Landmarks. Defining Skylines
        </AnimatedP>
      </section>

      <AnimatedSection
        direction="down"
        delay={1}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 px-5 xl:mx-20 mb-20"
      >
        {projects.map((project, index) => {
          const patterns = ['rounded-tl-full', 'rounded-bl-full', 'rounded-tr-full', 'rounded-tr-full', 'rounded-tl-full', 'rounded-br-full', 'rounded-tl-full', 'rounded-br-full'];
          const alignments = ['items-end pb-4', 'items-start pt-4', 'items-end pb-4', 'items-end pb-4', 'items-end pb-4', 'items-start pt-4', 'items-end pb-4', 'items-start pt-4'];
          const borderRadius = patterns[index % patterns.length];
          const alignment = alignments[index % alignments.length];

          return (
            <Link key={project.id} href={`/our-work/${project.slug}`} className="block">
              <article
                className={`relative bg-black flex transition-all duration-300 ease-in-out justify-start h-[25rem] xl:h-[36rem] bg-cover bg-center shadow-lg text-white px-4 ${borderRadius} ${alignment}`}
                style={{ backgroundImage: `url('${project.hero_image_url}')` }}
              >
                <div className="text-white xl:p-3 rounded-lg w-full text-start">
                  <h3 className="xl:text-lg text-md mb-2 font-semibold">
                    {stripHtmlTags(project.title)}
                  </h3>
                  <p className="xl:text-sm text-xs">
                    {project.location}
                  </p>
                </div>
              </article>
            </Link>
          );
        })}
      </AnimatedSection>

      <div className="flex justify-center align-center mb-20">
        <Link
          className="px-4 mb-5 z-20 xl:mt-0 text-center py-2 text-3xl transition-colors duration-300 ease-in-out text-black hover:text-black border-b border-b-black"
          href="/our-work"
        >
          View All Projects...
        </Link>
      </div>

      {/* Our Services Section - Static HTML */}
      <section className="bg-offwhite pb-10">
        <div className="flex flex-col justify-center items-center gap-5 py-20">
          <AnimatedH1
            direction="down"
            delay={0.8}
            className="lg:text-3xl text-2xl xl:text-4xl"
          >
            Our Services
          </AnimatedH1>
          <AnimatedP
            direction="up"
            delay={1}
            className="lg:text-2xl text-xl xl:text-3xl"
          >
            Strong Foundations, Exceptional Results
          </AnimatedP>
        </div>

        <AnimatedSection
          direction="down"
          delay={0.5}
          className="container mx-auto gap-5 grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 px-10 pb-10 border-b border-b-black"
        >
          {services.map((service, index) => {
            const isFirstRow = index < 3;
            const isSecondRow = index >= 3 && index < 6;
            const isThirdRow = index >= 6 && index < 9;

            return (
              <Link key={service.id} href={`/services/${service.slug}`}>
                <article className="relative group h-[20rem] w-full gap-1">
                  <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1">
                    {/* Top-left part */}
                    <div
                      className={`${isFirstRow ? 'bg-transparent border border-black group-hover:bg-black group-hover:text-white text-center flex justify-center items-center' : 'bg-black transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-40'} cursor-pointer transition-all duration-500 ease-in-out`}
                      style={!isFirstRow ? { backgroundImage: `url('${service.hero_image_url}')`, backgroundSize: "200% 200%", backgroundPosition: "0% 0%", backgroundRepeat: "no-repeat" } : undefined}
                    >
                      {isFirstRow && <span className="text-sm font-semibold px-2">{stripHtmlTags(service.title)}</span>}
                    </div>
                    {/* Top-right part */}
                    <div
                      className={`bg-black transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-40 ${isFirstRow || isSecondRow ? '' : 'rounded-se-full'} cursor-pointer`}
                      style={{ backgroundImage: `url('${service.hero_image_url}')`, backgroundSize: "200% 200%", backgroundPosition: "100% 0%", backgroundRepeat: "no-repeat" }}
                    ></div>
                    {/* Bottom-left part */}
                    <div
                      className={`${isSecondRow ? 'bg-transparent border border-black group-hover:bg-black group-hover:text-white text-center flex justify-center items-center' : 'bg-black transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-40 rounded-es-full'} cursor-pointer transition-all duration-500 ease-in-out`}
                      style={!isSecondRow ? { backgroundImage: `url('${service.hero_image_url}')`, backgroundSize: "200% 200%", backgroundPosition: "0% 100%", backgroundRepeat: "no-repeat" } : undefined}
                    >
                      {isSecondRow && <span className="text-sm font-semibold px-2">{stripHtmlTags(service.title)}</span>}
                    </div>
                    {/* Bottom-right part */}
                    <div
                      className={`${isThirdRow ? 'bg-transparent border border-black group-hover:bg-black group-hover:text-white text-center flex justify-center items-center' : 'bg-black transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-40 rounded-ee-full'} cursor-pointer transition-all duration-500 ease-in-out`}
                      style={!isThirdRow ? { backgroundImage: `url('${service.hero_image_url}')`, backgroundSize: "200% 200%", backgroundPosition: "100% 100%", backgroundRepeat: "no-repeat" } : undefined}
                    >
                      {isThirdRow && <span className="text-sm font-semibold px-2">{stripHtmlTags(service.title)}</span>}
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </AnimatedSection>

        <div className="flex justify-center align-center mt-10">
          <Link
            className="px-4 mb-5 z-20 xl:mt-0 text-center py-2 text-3xl transition-colors duration-300 ease-in-out text-black hover:text-black border-b border-b-black"
            href="/services"
          >
            View All Services...
          </Link>
        </div>
      </section>

      {/* Our Team Section - Static HTML */}
      <section className="flex flex-col justify-center items-center gap-5 py-20">
        <AnimatedH1
          direction="down"
          delay={0.8}
          className="lg:text-3xl text-2xl xl:text-4xl"
        >
          Our Team
        </AnimatedH1>
        <AnimatedP
          direction="up"
          delay={1}
          className="lg:text-2xl text-xl xl:text-3xl"
        >
          Meet the Experts Behind Every Build
        </AnimatedP>
      </section>

      <AnimatedSection
        direction="down"
        delay={0.5}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 xl:mx-20 mb-10"
      >
        {teamMembers.map((member) => (
          <Link key={member.id} href={`/our-team/${member.slug}`} className="block">
            <article className="relative group overflow-hidden rounded-lg shadow-lg">
              <Image
                src={member.image_url}
                alt={`${member.name} - ${member.position} at Capital Associated Building Contracting`}
                width={400}
                height={500}
                className="w-full h-[30rem] object-cover transition-transform duration-500 group-hover:scale-110"
                fetchPriority="high"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                <h3 className="text-white text-xl font-bold">{stripHtmlTags(member.name)}</h3>
                <p className="text-gray-300">{member.position}</p>
              </div>
            </article>
          </Link>
        ))}
      </AnimatedSection>

      <div className="flex justify-center align-center mb-20">
        <Link
          className="px-4 mb-5 z-20 xl:mt-0 text-center py-2 text-3xl transition-colors duration-300 ease-in-out text-black hover:text-black border-b border-b-black"
          href="/our-team"
        >
          Meet Our Team...
        </Link>
      </div>

      {/* Blog Section - Static HTML */}
      <section className="bg-slate-100 py-20">
        <div className="flex flex-col justify-center items-center gap-5 mb-10">
          <AnimatedH1
            direction="down"
            delay={0.8}
            className="lg:text-3xl text-2xl xl:text-4xl"
          >
            Latest Insights
          </AnimatedH1>
          <AnimatedP
            direction="up"
            delay={1}
            className="lg:text-2xl text-xl xl:text-3xl text-center px-5"
          >
            Expert Tips and Industry Knowledge from Capital Associated
          </AnimatedP>
        </div>

        <AnimatedSection
          direction="up"
          delay={0.5}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 xl:px-20"
        >
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <article className="group relative bg-gray-200 rounded-lg overflow-hidden shadow-lg h-[36rem]">
                <Image
                  src={post.hero_image_url || '/main.jpg'}
                  alt={stripHtmlTags(post.title)}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 group-hover:scale-105"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50">
                  <div className="absolute top-2 left-2 bg-white bg-opacity-80 text-black text-sm px-3 py-1 rounded">
                    {new Date(post.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}
                  </div>
                  <div className="flex flex-col items-start justify-end transition-all duration-300 ease-in-out hover:bg-offwhite hover:bg-opacity-20 gap-5 text-center p-5 h-full">
                    <h3 className="text-white text-start text-xl font-bold">
                      {stripHtmlTags(post.title)}
                    </h3>
                    <p className="text-white transition-all duration-300 ease-in-out text-lg group-hover:text-black text-start py-4 font-bold border-t-2 border-b-2 w-full">
                      Continue reading
                    </p>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </AnimatedSection>

        <div className="flex justify-center align-center mt-10">
          <Link
            className="px-4 mb-5 z-20 xl:mt-0 text-center py-2 text-3xl transition-colors duration-300 ease-in-out text-black hover:text-black border-b border-b-black"
            href="/blog"
          >
            View All Blogs...
          </Link>
        </div>
      </section>
    </PublicLayout>
  );
}
