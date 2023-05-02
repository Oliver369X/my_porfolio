import React from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center `}>
        Technologies that I have used {/* technologies I have worked with */}
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
        Technologies.</h2>
      </motion.div>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28 flex flex-col items-center' key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <p className="text-center tracking-wider font-medium text-[15px]">{technology.name}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "Tech");
