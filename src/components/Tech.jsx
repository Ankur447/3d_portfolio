import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import uniqid from 'uniqid'


const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Tech Skills.
        </h2>
      </motion.div>
      <br />
      <br />
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <li key={uniqid()} className='skills__list-item btn btn--plain text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800'>
        {technology.name}
        {technologies.icons}
      </li>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
