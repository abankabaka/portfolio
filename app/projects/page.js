import AnimatedText from "../../components/AnimatedText";
import { GithubIcon } from "../../components/Icons";
import Layout from "../../components/Layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/pro1.jpeg";
import pro2 from "../../public/pro2.jpeg";
import pro3 from "../../public/pro3.jpeg";
import yt from "../../public/yt.jpeg";
import uber from "../../public/uber.jpeg";

import linksta from "../../public/linksta.png";
import expenseTrack from "../../public/expense-track.png";
import ArticlesPage from "../../components/ArticlesPage";
import TransitionEffect from "../../components/TransitionEffect";
export const metadata = {
  title: "ATWIJUKIRE ABAN | Projects",
  description: "This page contains all the projects created by ATWIJUKIRE ABAN.",
};

const FeaturedProjects = ({ type, title, summary, img }) => {
  return (
    <article className="relative flex items-center justify-between w-full p-12 border border-solid shadow-2xl rounded-br-2xl rounded-3xl border-dark bg-light dark:bg-dark dark:border-light dark:text-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]" />
      <div className="w-1/2 overflow-hidden rounded-lg lg:w-full">
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
        />
      </div>

      <div className="flex flex-col items-start justify-center w-1/2 pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-secondary xs:text-base">
          {type}
        </span>
        <h2 className="w-full my-2 text-3xl font-bold text-left sm:text-base">
          {title}
        </h2>
        <p className="my-2 font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {summary}
        </p>
      </div>
    </article>
  );
};

const Project = ({ title, type, img }) => {
  return (
    <article className="relative flex flex-col items-center justify-center w-full gap-4 p-4 border border-solid shadow-2xl rounded-3xl rounded-br-2xl border-dark bg-light dark:bg-dark dark:border-light dark:text-light xs:p-4 h-full">
      <div className="absolute top-1 -right-3 -z-10 w-[102%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-[100%]  md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <div className="w-full overflow-hidden rounded-lg">
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
        />
      </div>

      <div className="flex flex-col items-start justify-between w-full flex-grow">
        <span className="text-xl font-medium text-primary dark:text-secondary lg:text-lg md:text-base mt-2">
          {type}
        </span>
        <h2 className="w-full my-2 text-3xl font-bold text-left lg:text-2xl sm:text-xl">
          {title}
        </h2>
      </div>
    </article>
  );
};

const page = () => {
  return (
    <>
      <TransitionEffect />
      <main className="flex flex-col items-center justify-center w-full">
        <Layout className="pt-16 md:pt-8 sm:pd-4 xs:pt-2">
          <AnimatedText
            className="py-8 lg:text-7xl sm:text-6xl xs:text-4xl"
            text="Imagination trumphs Knowledge !"
          />

          <div className="grid grid-cols-12 gap-24 mb-10 xl:gap-x-16 lg:gap-x-8 sm:gap-x-0 md:gap-y-16">
            <div className="col-span-12">
              <FeaturedProjects
                title="Digital Evidence Verification System (DEVS)"
                summary="A robust digital verification platform."
                type="Featured Project"
                img={project1}
              />
            </div>

            <div className="col-span-12">
              <FeaturedProjects
                title="School Management System"
                summary="Comprehensive management system for educational institutions."
                type="Featured Project"
                img={pro2}
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Hospital Management System"
                type="Featured Project"
                img={pro3}
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="POS System"
                type="Featured Project"
                img={yt}
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Hotel Booking Website"
                type="Featured Project"
                img={linksta}
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Chess Application"
                type="Featured Project"
                img={uber}
              />
            </div>

            <div className="col-span-12">
              <FeaturedProjects
                title="Calculator Mobile Application"
                summary="A functional and reliable calculator app."
                type="Featured Project"
                img={expenseTrack}
              />
            </div>
          </div>
        </Layout>
      </main>

      <ArticlesPage />
    </>
  );
};

export default page;
