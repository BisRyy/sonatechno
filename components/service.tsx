import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Feature } from "./services";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description } = feature;

  return (
    <>
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
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-40 rounded-lg border border-gray-700 bg-gray-900 p-8 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl dark:border-gray-200 dark:bg-white dark:hover:bg-gray-100"
      >
        <div className="relative flex h-16 w-16 items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg">
          <Image src={icon} width={36} height={36} alt={title} />
        </div>
        <h3 className="mt-7 text-xl font-bold text-gray-100 dark:text-gray-900">
          {title}
        </h3>
        <p className="mt-4 text-base text-gray-400 dark:text-gray-600">
          {description}
        </p>
      </motion.div>
    </>
  );
};

export default SingleFeature;
