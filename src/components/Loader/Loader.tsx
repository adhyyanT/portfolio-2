"use client";

import { useScrollTo } from "@/hooks/useScrollTo";
import { motion } from "motion/react";
import { ReactNode } from "react";
import styles from "./LoadAnimation.module.css";

export const Loader = ({ children }: { children: ReactNode }) => {
  useScrollTo(true);
  return (
    <>
      <motion.div
        className={styles.box}
        initial={{ translateY: 0, overflow: "hidden" }}
        animate={{ translateY: "-100%", overflow: "unset" }}
        transition={{ duration: 0.75, delay: 2.5, ease: [0.78, 0, 0.64, 0.62] }}
      >
        <motion.div
          className={styles.innerBox}
          animate={{ scale: [1, 0.9, 1] }}
          transition={{ duration: 3, ease: "circInOut" }}
        >
          <motion.h1
            className={styles.heading}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "backInOut" }}
          >
            Hello
          </motion.h1>
        </motion.div>
      </motion.div>
      {children}
    </>
  );
};
