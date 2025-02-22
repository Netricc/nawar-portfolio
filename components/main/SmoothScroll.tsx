"use client";

import Lenis from "lenis";
import { useEffect } from "react";
const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.07,
      duration: 1.02,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);
  return null;
};

export default SmoothScroll;
