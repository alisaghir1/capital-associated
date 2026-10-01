"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

export default function AnimatedWrapper({
  children,
  direction = "up",
  duration = 0.8,
  delay = 0,
  className = "",
  as = "div",
  amount = 0.1,
}) {
  const Component = motion[as] || motion.div;
  return (
    <Component
      variants={fadeIn(direction, duration, delay)}
      initial="hidden"
      whileInView="show"
      // Low threshold so tall single-column sections on mobile still reveal
      viewport={{ once: true, amount }}
      className={className}
    >
      {children}
    </Component>
  );
}
