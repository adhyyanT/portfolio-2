"use client";
import { nextTick } from "process";
import { useEffect, useRef } from "react";

export const useScrollTo = (top = false) => {
  useEffect(() => {
    nextTick(() => {
      window.scrollTo(0, 0);
      if (top) {
        document.body.style.overflow = "hidden";
        const id = setTimeout(() => {
          document.body.style.overflow = "unset";
        }, 3000);
        return () => clearTimeout(id);
      }
    });
  }, []);
};
