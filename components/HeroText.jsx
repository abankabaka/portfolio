"use client";

import React from "react";
import TypewriterComponent from "typewriter-effect";

const HeroText = () => {
  return (
    <TypewriterComponent
      options={{
        strings: [
          '"Building Digital Solutions That Transform Ideas Into Reality."',
          '"Full Stack Developer & Founder of AbanTechnologies."',
          '"Nothing to Something — One Build at a Time."',
        ],
        autoStart: true,
        loop: true,
        delay: 70,
        deleteSpeed: 40,
      }}
    />
  );
};

export default HeroText;
