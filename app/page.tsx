import HeroSection from "@/components/hero-section";
import Lamper from "@/components/lamp";
import Contact from "@/components/contact";
import Feature from "@/components/services";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-6 font-subalt !overflow-x-hidden">
      <HeroSection />
      <Lamper />
      <Feature />
      <Contact />
    </div>
  );
}
