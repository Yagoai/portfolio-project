"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { easeInOut, motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "This is Web Development",
    href: "/",
  },

  {
    num: "02",
    title: "UI/UX Design",
    description: "This is 2nd service",
    href: "/",
  },

  {
    num: "03",
    title: "Logo Design",
    description: "This is 3rd service",
    href: "/",
  },

  {
    num: "04",
    title: "Web SEo",
    description: "This is 4th service",
    href: "/",
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
        >
          {services.map((services, index) =>{
            return (
            <div key={index}>
              {/* top */}
              <div>
                <div>{services.num}</div>
                <Link href={services.href}>
                  <BsArrowDownRight/>
                </Link>
              </div>
              {/* title */}
              <h2>{services.title}</h2>
              {/* description */}
              <p>{services.description}</p>
              {/* border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
