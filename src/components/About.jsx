import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       I’m Ankur- coder by day, tinkerer by night, and a lifelong believer that tech should solve problems and spark joy. Whether I’m wiring up a Raspberry Pi or crafting AI tools, I love bridging the gap between software and hardware to create things that matter.

At Ronin Labs, I combined my obsession with AI and IoT to build Sketchbot, turning doodles into precise SVG art, and IoT Cup, a quirky real-time chat system powered by a tiny Raspberry Pi. Freelancing let me geek out on rapid prototypes—like a Lightning Strike Counter built in a week (yes, thunderstorms fascinate me!). My projects, from the VR Glove Controller (with haptic feedback!) to DAMS, a doctor’s booking app, are all about making tech feel human.

When I’m not coding, I’m probably dissecting new tools—like Stable Diffusion for AI art or Solana for blockchain—or contributing to open-source communities. I thrive on collaboration, curiosity, and coffee.

Let’s chat about robots, React, or your next big idea!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
