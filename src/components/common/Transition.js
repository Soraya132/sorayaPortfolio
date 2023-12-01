"use client";
import { easeInOut, motion } from "framer-motion";
const transitionVariants = {
  initial: {
    x: "100%",
    with: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
};
const Transition = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 1, ease: easeInOut }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#3b2d71]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.4, duration: 0.6, ease: easeInOut }}
      ></motion.div>
    </>
  );
};

export default Transition;
