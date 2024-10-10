import HeroSection from "@/components/hero-section";
import Lamper from "@/components/lamp";
import { BackgroundBeamsDemo } from "@/components/background-beam";
import { ModeToggle } from "@/components/mode-toggle";
import { PostCard } from "@/components/card-binary";
import Contact from "@/components/contact";
import Feature from "@/components/services";

export default function Home() {
  const posts = [
    {
      _id: "1",
      title: "Hello World",
      description: "This is a description",
      date: "2022-01-01",
      slug: "hello-world",
    },
    {
      _id: "2",
      title: "Hello World 2",
      description: "This is a description",
      date: "2022-01-01",
      slug: "hello-world-2",
    },
    {
      _id: "3",
      title: "Hello World 3",
      description: "This is a description",
      date: "2022-01-01",
      slug: "hello-world-3",
    },
    {
      _id: "4",
      title: "Hello World 4",
      description: "This is a description",
      date: "2022-01-01",
      slug: "hello-world-4",
    },
    {
      _id: "5",
      title: "Hello World 5",
      description: "This is a description",
      date: "2022-01-01",
      slug: "hello-world-5",
    },
    {
      _id: "6",
      title: "Hello World 6",
      description: "This is a description",
      date: "2022-01-01",
      slug: "hello-world-6",
    },
  ];
  return (
    <div className="w-full flex flex-col justify-center items-center gap-6 font-subalt !overflow-x-hidden">
      <HeroSection />
      <Lamper />
      <Feature />
      <Contact />
    </div>
  );
}
