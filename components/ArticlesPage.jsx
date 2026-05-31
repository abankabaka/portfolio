"use client";

import React, { useRef } from "react";
import Layout from "./Layout";
import AnimatedText from "./AnimatedText";
import Link from "next/link";
import Image from "next/image";
import closure from "../public/closu.png";
import article2 from "../public/art2.webp";
import { motion, useMotionValue } from "framer-motion";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const ref = useRef(null);

  function handleMouse(event) {
    ref.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }
  function handleMouseLeave(event) {
    ref.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="text-xl font-semibold capitalize hover:underline sm:text-lg">
        {title}
      </h2>

      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={ref}
        src={img}
        alt={title}
        className="md:!hidden w-96 z-10 h-auto hidden absolute rounded-lg"
      />
    </Link>
  );
};

const Article = ({ title, img, link, readTime }) => {
  return (
    <motion.li
      viewport={{ once: true }}
      className="relative flex items-center justify-between w-full p-4 py-6 my-4 border border-b-4 border-r-4 border-solid rounded-xl text-dark bg-light first:mt-0 border-dark dark:bg-dark dark:text-white dark:border-white sm:flex-col"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="pl-4 font-semibold text-primary dark:text-secondary sm:self-start sm:pl-0 xs:text-sm">
        {readTime}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative w-full col-span-1 p-4 border border-solid bg-light border-dark rounded-2xl dark:bg-dark dark:border-light dark:text-light">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full h-[60%] cursor-pointer overflow-hidden rounded-lg relative"
      >
        <Image
          src={img}
          alt={title}
          className="w-full duration-300 rounded-lg hover:scale-105"
        />
      </Link>

      <Link href={link} target="_blank" className="flex flex-col gap-2">
        <h2 className="my-2 text-2xl font-bold capitalize hover:underline underline-offset-2 xs:text-lg">
          {title}
        </h2>

        <p className="text-sm mb-2dark:text-white/75">{summary}</p>
        <span className="font-semibold text-primary dark:text-secondary">
          {time}
        </span>
      </Link>
    </li>
  );
};

const ArticlesPage = () => {
  return (
    <main className="flex flex-col w-full overflow-hidden dark:text-white">
      <Layout className="pt-16">
        <AnimatedText
          text="Words can change the World! "
          className="mb-16 lg:text-7xl sm:mb-8 sm:text-6xl xs:text-4xl"
        />
        <ul className="grid grid-cols-2 gap-16 mb-16 md:grid-cols-1 lg:gap-8 lg:mb-8 md:gap-y-16">
          <FeaturedArticle
            title="Understanding JavaScript Closures"
            time="5 min read"
            img={closure}
            link="https://medium.com/@jayp37679/closures-in-javascript-4bd0ac45037a"
            summary="Imagine you have a function inside another function. The inner function has access to the variables of the outer function. When the outer function is executed, it returns the inner function. The inner function keeps a reference to the outer function’s variables, creating a closure."
          />

          {/* <FeaturedArticle
            title="Scraping NEET 2024 Results (DOS attack on NEET website)"
            time="7 min read"
            img={neetArticle}
            link="https://medium.com/@pateltejas.2005/scraping-neet-2024-results-dos-attack-on-neet-result-website-78f2a578b321"
            summary="Article on how to scrape data from websites through nodejs."
          /> */}
        </ul>
      </Layout>
    </main>
  );
};

export default ArticlesPage;
