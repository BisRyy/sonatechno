"use client";
import { motion } from "framer-motion";
import React from "react";
import { toast } from "./use-toast";

const Contact = () => {
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <>
      {/* <!-- ===== Contact Start ===== --> */}
      <section id="contact" className="relative px-4 md:px-8 2xl:px-0 mb-8">
        <div className="relative mx-auto max-w-[1390px] px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          {/* Background gradient */}
          <div className="absolute left-0 top-0 -z-10 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-blue-100 dark:to-gray-800"></div>

          <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
            {/* Form Section */}
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
              className="w-full rounded-lg bg-white p-8 shadow-xl dark:bg-gray-900 dark:border dark:border-gray-700 md:w-3/5 lg:w-3/4 xl:p-12"
            >
              <h2 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white xl:text-5xl">
                Send a message
              </h2>

              <form action="https://formbold.com/s/9gOQ4" method="POST">
                <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:gap-10">
                  <input
                    type="text"
                    placeholder="Full name"
                    className="w-full border-b border-gray-300 bg-transparent py-4 focus:outline-none focus:border-blue-500 focus:placeholder:text-gray-900 dark:border-gray-600 dark:focus:border-gray-400 dark:focus:placeholder:text-white lg:w-1/2 dark:text-white"
                  />

                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full border-b border-gray-300 bg-transparent py-4 focus:outline-none focus:border-blue-500 focus:placeholder:text-gray-900 dark:border-gray-600 dark:focus:border-gray-400 dark:focus:placeholder:text-white lg:w-1/2 dark:text-white"
                  />
                </div>

                <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:gap-10">
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full border-b border-gray-300 bg-transparent py-4 focus:outline-none focus:border-blue-500 focus:placeholder:text-gray-900 dark:border-gray-600 dark:focus:border-gray-400 dark:focus:placeholder:text-white lg:w-1/2 dark:text-white"
                  />

                  <input
                    type="text"
                    placeholder="Phone number"
                    className="w-full border-b border-gray-300 bg-transparent py-4 focus:outline-none focus:border-blue-500 focus:placeholder:text-gray-900 dark:border-gray-600 dark:focus:border-gray-400 dark:focus:placeholder:text-white lg:w-1/2 dark:text-white"
                  />
                </div>

                <div className="mb-10">
                  <textarea
                    placeholder="Message"
                    rows={5}
                    className="w-full border-b border-gray-300 bg-transparent py-4 focus:outline-none focus:border-blue-500 focus:placeholder:text-gray-900 dark:border-gray-600 dark:focus:border-gray-400 dark:focus:placeholder:text-white dark:text-white"
                  ></textarea>
                </div>

                <div className="flex flex-wrap gap-6 xl:justify-between">
                  <div className="flex items-start space-x-4">
                    <input
                      id="checkbox"
                      type="checkbox"
                      className="peer mt-1 flex h-5 w-5 items-center justify-center rounded border border-gray-600 bg-gray-700 peer-checked:bg-blue-600 dark:border-gray-300 dark:bg-gray-100"
                    />
                    <label
                      htmlFor="checkbox"
                      className="cursor-pointer select-none text-md text-gray-600 dark:text-gray-400"
                    >
                      I agree to the terms and consent to cookie usage.
                    </label>
                  </div>

                  <button
                    aria-label="send message"
                    className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-gray-700 to-gray-800 px-8 py-3 text-white font-medium shadow-lg transition-all hover:bg-gradient-to-l hover:scale-105 dark:bg-gradient-to-r dark:from-blue-600 dark:to-indigo-600"
                    type="submit"
                  >
                    Send Message
                    <svg
                      className="w-4 h-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path d="M10.477 6.167L6.007 1.697 7.185.518 13.667 7 7.185 13.482 6.007 12.303l4.47-4.47H0.333V6.167h10.143z" />
                    </svg>
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Info Section */}
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
              transition={{ duration: 2, delay: 0.1 }}
              viewport={{ once: true }}
              className="w-full md:w-2/5 p-8 lg:w-[26%] xl:pt-15"
            >
              <h2 className="mb-12 text-4xl font-bold text-gray-900 dark:text-white xl:text-5xl">
                Find us
              </h2>

              <div className="mb-8">
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Our Location
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Ambo, Oromia, Ethiopia
                </p>
              </div>
              <div className="mb-8">
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Email Address
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  <a
                    href="mailto:contact@sonatechno.com"
                    className="hover:underline"
                  >
                    contact@sonatechno.com
                  </a>
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Phone Number
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  <a href="tel:+251925698349" className="hover:underline">
                    +251 923 346 343
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};

export default Contact;
