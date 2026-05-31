import AnimatedText from "../../components/AnimatedText";
import Layout from "../../components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import pfp from "../../public/pfpj.jpg";
import { Montserrat } from "next/font/google";
import AnimatedNumbers from "./AnimatedNumbers";
import Experience from "../../components/Experience";
import Education from "../../components/Education";
import TransitionEffect from "../../components/TransitionEffect";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export const metadata = {
  title: "ATWIJUKIRE ABAN | About",
  description: "Contains Biography, Experience and Education of ATWIJUKIRE ABAN",
};
const page = () => {
  return (
    <>
      <TransitionEffect />
      <Head>
        <title>Aban | About Page</title>
        <meta name="description" content="ATWIJUKIRE ABAN- Web Developer" />
      </Head>
      <main
        className={`dark:text-light w-full flex-col items-center justify-center ${montserrat.className}`}
      >
        <Layout className="min-h-screen pt-16">
          <AnimatedText
            text="Passion fuels Purpose !"
            className="mb-16 text-6xl md:text-5xl xs:text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 ">
            <div className="flex flex-col items-start justify-start col-span-3 mt-5 xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase dark:text-light/75 text-dark/75">
                Biography
              </h2>
              <p>
                I am a Full Stack Developer and technology entrepreneur passionate about building innovative digital solutions that help businesses grow, automate processes, and achieve their goals through technology.
              </p>
              <p className="my-4">
                As the Founder and CEO of AbanTechnologies, I lead the development of websites, business systems, mobile applications, and digital solutions tailored to meet the needs of modern organizations.
              </p>
              <p>
                I am a 24-year-old male, a Munyankole from western Uganda, and an Anglican. I speak English fluently, as well as several Ugandan local languages including Lukiga, Lunyankole, Luganda, Lutooro, and Lunyooro. I am a God-fearing person, well behaved, and eager to learn, driven by a desire to transform ideas into real-world products.
              </p>
            </div>

            <div className="col-span-3 h-max rounded-2xl border border-solid border-dark bg-light p-8 relative border-r-[6px] border-b-[6px] dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />
              <Image
                src={pfp}
                alt="pfp"
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div className="flex flex-col items-end col-span-2 justify-evenly xl:col-span-8 xl:flex-row xl:items-center md:order-3 ">
              {/* <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-3xl'>
                  <AnimatedNumbers value={50} />
                </span>
                <h2 className='text-xl font-medium capitalize dark:text-light/75 text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm '>Satisfied Clients</h2>
              </div> */}
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-3xl">
                  <AnimatedNumbers value={15} />
                </span>
                <h2 className="text-xl font-medium capitalize dark:text-light/75 text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm ">
                  projects Completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-3xl">
                  <AnimatedNumbers value={1} decimal={0} />
                </span>
                <h2 className="text-xl font-medium capitalize dark:text-light/75 text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm ">
                  Years of Expierence
                </h2>
              </div>
            </div>
          </div>

          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default page;
