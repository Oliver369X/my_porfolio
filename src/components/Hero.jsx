import { motion } from "framer-motion";

import { styles } from "../styles";
import { Futuristic_cityCanvas } from "./canvas";
const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        
        

        <div style={{position: 'relative', zIndex: 1}}>
  <h1 className={`${styles.heroHeadText} text-white`}>
    Hi, I'm <span className="text-[#915EFF]">Diego</span>
  </h1>
  <p className={`${styles.heroSubText} mt-2 text-white-100`}>
    backend developer, passionate <br className="sm:block hidden" />
    about data science and artificial intelligence
  </p>
</div>


      </div>

    <Futuristic_cityCanvas />

  <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
    <a href="#about">
      <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
        <motion.div
          animate={{
            y: [0, 24, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="w-3 h-3 rounded-full bg-secondary mb-1"
        />
      </div>
    </a>
  </div>
</section>

  );
};

export default Hero;
