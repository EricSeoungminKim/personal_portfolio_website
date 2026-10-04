"use client";

import { motion, useInView, useReducedMotion, useScroll } from "framer-motion";
import { useRef, useSyncExternalStore, type ReactNode } from "react";

const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />;
}

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });
  const ready = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={!ready || reducedMotion ? { opacity: 1, y: 0 } : { opacity: inView ? 1 : 0, y: inView ? 0 : 28 }}
      transition={{ duration: reducedMotion ? 0 : 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
