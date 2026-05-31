import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className={`font-mont w-full border-t-2 border border-dark border-x-0 font-medium text-lg dark:text-light dark:border-light sm:text-base sm:mt-10`}
    >
      <Layout className="flex items-center justify-between py-8 lg:flex-col lg:py-6 lg:gap-2 ">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className="flex items-center">
          Build with{" "}
          <span className="p-1 text-xl text-primary dark:text-secondary">
            💝{" "}
          </span>{" "}
          by &nbsp;
          <Link
            href="/"
            className="text-primary dark:text-secondary"
            target="_blank"
          >
            Aban
          </Link>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
