"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;
const spring = { type: "spring" as const, stiffness: 380, damping: 24, mass: 0.7 };

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: reduced ? 0 : 0.7, delay, ease }}>{children}</motion.div>;
}

export function Stagger({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : "hidden"} whileInView="visible" viewport={{ once: true, margin: "-70px" }} variants={{ hidden: {}, visible: { transition: { staggerChildren: reduced ? 0 : 0.1 } } }}>{children}</motion.div>;
}

export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} variants={{ hidden: reduced ? {} : { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: reduced ? 0 : 0.6, ease } } }}>{children}</motion.div>;
}

export function BounceCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  const bounce = { type: "spring" as const, stiffness: 300, damping: 10, mass: 0.8 };
  return (
    <motion.div
      className={className}
      variants={{
        hidden: reduced ? {} : { opacity: 0, y: 50, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1, transition: reduced ? { duration: 0 } : bounce },
      }}
      whileHover={reduced ? undefined : { scale: 1.05, y: -10, zIndex: 10 }}
      whileTap={reduced ? undefined : { scale: 0.95 }}
      transition={bounce}
    >
      {children}
    </motion.div>
  );
}

export function SpringLink({ children, className = "", ...props }: HTMLMotionProps<"a">) {
  const reduced = useReducedMotion();
  return <motion.a className={className} whileHover={reduced ? undefined : { scale: 1.035, y: -2 }} whileTap={reduced ? undefined : { scale: 0.97 }} transition={spring} {...props}>{children}</motion.a>;
}

export function HoverCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} whileHover={reduced ? undefined : { y: -7 }} transition={spring}>{children}</motion.div>;
}
