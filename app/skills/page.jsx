"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { easeInOut, motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Frontend Development",
    description: "React, Next.js, Tailwind",
    // href: "/",
  },

  {
    num: "02",
    title: "Backend Development",
    description: "Node.js, APIs, Databases",
    // href: "/",
  },

  {
    num: "03",
    title: "Tools & Technologies",
    description: "Git",
    // href: "/",
  },

];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((services, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center ">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {services.num}
                  </div>
                  {/* <Link href={services.href}>
                    <BsArrowDownRight />
                  </Link> */}
                </div>
                {/* title */}
                <h2>{services.title}</h2>
                {/* description */}
                <p className="text-accent font-semibold">{services.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
