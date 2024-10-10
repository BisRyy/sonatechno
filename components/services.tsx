"use client";
import React from "react";
import { motion } from "framer-motion";
import SingleFeature from "./service";
import { TextGenerateEffect } from "./text-gen";

type HeaderInfo = {
  title: string;
  subtitle: string;
  description: string;
};

const SectionHeader = ({ headerInfo }: { headerInfo: HeaderInfo }) => {
  const { title, subtitle, description } = headerInfo;

  return (
    <>
      {/* <!-- Section Title Start --> */}
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
        className="animate_top mx-auto text-center"
      >
        <div className="mb-4 inline-block rounded-full bg-gray-900 px-4.5 py-1.5 dark:border dark:border-gray-200 dark:bg-white">
          <span className="text-white font-medium dark:text-black">
            {title}
          </span>
        </div>
        <h2 className="mx-auto mb-4 text-3xl font-bold text-gray-100 dark:text-gray-900 md:w-4/5 xl:w-1/2 xl:text-4xl">
          {subtitle}
        </h2>
        <p className="mx-auto text-gray-300 dark:text-gray-600 md:w-4/5 lg:w-3/5 xl:w-[46%]">
          {description}
        </p>
      </motion.div>
      {/* <!-- Section Title End --> */}
    </>
  );
};

const Feature = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <h1 className="relative z-10 text-lg md:text-7xl font-headingAlt  bg-clip-text text-transparent bg-gradient-to-b from-purple-300/90 to-white/90  text-center font-bold">
            <TextGenerateEffect
              words="SERVICES WE PROVIDE"
              className=" text-lg md:text-6xl font-headingAlt  bg-clip-text text-transparent bg-gradient-to-b from-purple-300/90 to-white/90  text-center "
            />
          </h1>
          <SectionHeader
            headerInfo={{
              title: "",
              subtitle: "",
              description: `We dedicated to provide quality services to our customers. Our company has been operational for 4+ years and is still doing amazing services.`,
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 xl:mt-20 xl:gap-10">
            {featuresData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;

export type Feature = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

const featuresData: Feature[] = [
  {
    id: 1,
    icon: "/icon-01.svg",
    title: "01.Networking",
    description: "We provide Excellent computer networking service.",
  },
  {
    id: 2,
    icon: "/icon-02.svg",
    title: "02.Consultancy",
    description:
      "Our company has been providing consultancy services for mare than 4 years.",
  },
  {
    id: 3,
    icon: "/icon-03.svg",
    title: "03.Web development",
    description:
      "We have very talented and skilled web developers, whom had worked on lots of different projects.",
  },
  {
    id: 4,
    icon: "/icon-04.svg",
    title: "04.Web design",
    description:
      "Our team of designers are quite exceptional in providing web design services",
  },
  {
    id: 5,
    icon: "/icon-05.svg",
    title: "05.Maintenance",
    description: "We have excellent maintenance services.",
  },
  {
    id: 6,
    icon: "/icon-06.svg",
    title: "06.Branding and Logo design",
    description:
      "Our designer team is also excellent in branding and logo design",
  },
];
