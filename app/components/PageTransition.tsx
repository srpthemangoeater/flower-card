// src/app/components/PageTransition.tsx
'use client'; 
import { motion, Variants } from 'framer-motion'; 
import { usePathname } from 'next/navigation';
import React from 'react';

const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut', 
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
};

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial="initial"
      animate="animate"
      variants={pageVariants}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;