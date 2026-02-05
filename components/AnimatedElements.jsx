'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';

/**
 * Client-side animation wrapper component
 * This component provides animations while keeping parent components as server components
 */
export function AnimatedElement({ 
  children, 
  direction = 'up', 
  delay = 0.5, 
  className = '',
  as = 'div',
  once = true,
  amount = 0.4,
  ...props 
}) {
  const Component = motion[as] || motion.div;
  
  return (
    <Component
      variants={fadeIn(direction, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}

/**
 * Animated heading component (h1)
 */
export function AnimatedH1({ children, direction = 'down', delay = 0.8, className = '', ...props }) {
  return (
    <motion.h1
      variants={fadeIn(direction, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className={className}
      {...props}
    >
      {children}
    </motion.h1>
  );
}

/**
 * Animated paragraph component
 */
export function AnimatedP({ children, direction = 'up', delay = 0.8, className = '', ...props }) {
  return (
    <motion.p
      variants={fadeIn(direction, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className={className}
      {...props}
    >
      {children}
    </motion.p>
  );
}

/**
 * Animated section component
 */
export function AnimatedSection({ children, direction = 'down', delay = 1, className = '', ...props }) {
  return (
    <motion.section
      variants={fadeIn(direction, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
}

/**
 * Animated div wrapper
 */
export function AnimatedDiv({ children, direction = 'left', delay = 0.8, className = '', ...props }) {
  return (
    <motion.div
      variants={fadeIn(direction, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
