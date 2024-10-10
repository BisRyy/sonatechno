import HackyButton from "@/components/hacky-button";
import Link from "next/link";

export default function Component() {
  return (
    <section className="flex items-center justify-center w-full h-screen">
      <div className="container flex flex-col gap-4 px-4 md:px-6 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
          Coming Soon
        </h1>
        <p className="mx-auto max-w-[700px] dark:text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-gray-400">
          Our new shop platform is under construction. Stay tuned for something
          amazing!
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link href="#contact" className="z-50">
            <HackyButton text="Contact Us" />
          </Link>
          <Link href="/" className="btn btn-secondary">
            <HackyButton text="Go Back Home" />
          </Link>
        </div>
      </div>
    </section>
  );
}
