"use client";

import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({
  position,
  company,
  address,
  companyLink = "",
  time,
  work,
}) => {
  const ref = useRef(null);

  return (
    <li
      className="my-8  first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
      ref={ref}
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="flex flex-col gap-2"
      >
        <h3 className="text-2xl font-bold capitalize sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            className="capitalize text-primary dark:text-secondary"
            target="_black"
            href={companyLink}
          >
            @{company}
          </a>
        </h3>
        <span className="font-medium capitalize text-dark/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="w-full font-medium md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};
const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-32">
      <h2 className="w-full mb-32 font-bold text-center text-8xl md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div
        className="w-[75%] mx-auto relative lg:w-[90%] md:w-[100%]"
        ref={ref}
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-secondary md:w-[2px] md:left-[30px] xs:left-[20px]"
          ref={ref}
        ></motion.div>

        <ul className="flex flex-col items-start justify-between w-full ml-4 xs:ml-6 ">
          <Details
            position="Founder & CEO"
            company="AbanTechnologies"
            time="Present"
            companyLink="#"
            address="Kampala, Uganda"
            work="Leading a technology company focused on delivering Website Development, System Development, Application Development, and Graphics Design."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
