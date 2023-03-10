import { motion } from "framer-motion";

import { styles } from "../style";

import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#815eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, i'm <span className="text-[#915eff]">Piotr</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I create futuristic looking fullstack{" "}
            <br className="sm:block hidden" />
            websites with use of latest technologies
            <br className="sm:block hidden" /> such as THREE.js and MERN stack
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  );
};

export default Hero;
