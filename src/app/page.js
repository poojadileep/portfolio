import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <div className="container mx-auto px-12 pt-4">
        <div className="mt-32">
          <HeroSection />
        </div>
        <div className="my-28">
          <AboutSection />
        </div>
        <div className="my-24">
          <ProjectsSection />
        </div>
        <div className="my-24">
          <EmailSection />
        </div>
      </div>
        <div className="mt-24 ">
          <Footer />
        </div>
      
    </main>
  );
}
