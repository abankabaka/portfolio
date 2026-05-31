"use client";

import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);

  return (
    <li
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
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
          {type}&nbsp;
        </h3>
        <span className="font-medium capitalize dark:text-light/75 text-dark/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="w-full font-medium md:text-sm dark:text-gray-400">
          {info}
        </p>
      </motion.div>
    </li>
  );
};
const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-10">
      <h2 className="w-full mb-32 font-bold text-center text-8xl md:text-6xl xs:text-4xl md:mb-16">
        Education
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
            type="Bachelor of Computer Science"
            time="2023 - November 2026"
            place="Kampala International University (KIU)"
            info="Currently pursuing a Bachelor of Computer Science in Kampala district, gaining comprehensive knowledge in programming, algorithms, software engineering, and system development."
          />

          <Details
            type="Networking & Configuration / Repair & Maintenance"
            time="May 2025 - August 2025"
            place="CAL College of Computing, Kabalagala"
            info="Completed two certificates in Network & Configuration and Computer Repair & Maintenance during my internship."
          />

          <Details
            type="High School (Senior 3 - Senior 6)"
            time="2018 - 2023"
            place="Bishop McAllister College Kyogera"
            info="Completed my advanced level high school education, building a strong academic foundation."
          />

          <Details
            type="High School (Senior 1 - Senior 3)"
            time="2016 - 2018"
            place="Ntare School - Mbarara District"
            info="Began my secondary education journey, focusing on core academic subjects."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
