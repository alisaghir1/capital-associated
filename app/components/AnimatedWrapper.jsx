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
}) {
  const Component = motion[as] || motion.div;
  return (
    <Component
      variants={fadeIn(direction, duration, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className={className}
    >
      {children}
    </Component>
  );
}
