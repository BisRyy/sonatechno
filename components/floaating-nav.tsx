"use client";
import React, { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Icon } from "./icon";
const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    let direction = current - (scrollYProgress.getPrevious() || 0);

    if (scrollYProgress.get() < 0.05) {
      setVisible(true);
    } else {
      if (direction < 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });
  return (
    <AnimatePresence mode="wait">
      <div className="fixed justify-center z-10 items-center  max-w-fit  top-5 inset-x-0 mx-auto ">
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className="border border-black/[0.2] bg-gradient-to-tr from-purple-400/20 to-transparent dark:border-white/[0.2] flex flex-col items-center justify-center  max-w-sm mx-auto p-4 relative h-[55px] backdrop-blur-2xl  w-full "
        >
          <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

          <div className="flex pr-2 pl-8 py-2  items-center justify-center space-x-4 border border-transparent">
            {navItems.map((navItem: any, idx: number) => (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                className={cn(
                  "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                )}
              >
                {/* <span className="block sm:hidden">{navItem.icon}</span> */}
                <span className="hidden text-sm sm:block mr-[1.20rem]">
                  {navItem.name}
                </span>{" "}
                <Icon className=" h-6 w-6 bg-transparent text-gray-300/40 transform rotate-45 mx-20 " />
              </Link>
            ))}
            <button className="relative py-2 px-4 text-sm font-medium text-black rounded-full border dark:text-white border-neutral-200 dark:border-white/[0.2]">
              <span>Login</span>
              <span className="absolute inset-x-0 -bottom-px mx-auto w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            </button>
            {/* <ModeToggle /> */}
          </div>
        </motion.div>
        {/* </motion.div> */}
      </div>
    </AnimatePresence>
  );
};

export default FloatingNav;
