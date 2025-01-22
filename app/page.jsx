import Image from "next/image";
import About from "./components/About";
import OurProjects from "./components/OurProjects";
import OurServices from "./components/OurServices";
import OurTeam from "./components/OurTeam";
import Blogs from "./components/Blogs";
import Consultation from './components/Consultation'
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src="/Mainhome.jpg" 
          alt="Background Image"
          layout="fill" // This will make the image cover the entire screen
          objectFit="cover" // Ensures the image maintains its aspect ratio while filling the screen
        />
      </div>

      {/* Content on top of the image */}
      <div className="relative z-10  flex flex-col justify-center items-center w-full h-full">
        <h1 className="xl:text-4xl text-black md:text-2xl text-xl lg:text-3xl font-bold">Building Dubai’s skyline</h1>
        <p className="xl:text-4xl text-black md:text-2xl lg:text-3xl text-xl mt-5">one exceptional project at a time</p>
      </div>
    </div>
    <About />
    <OurProjects />
    <OurServices />
    <OurTeam />
    <Blogs />
    </>
  );
}
