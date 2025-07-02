'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

interface TextRevealProps {
  children: string;
  href: string;
  className?: string;
  number?: string;
}

export default function TextReveal({ children, href, className = '', number }: TextRevealProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      href={href}
      className={`relative inline-block overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="flex items-baseline"
        initial={{ y: 0 }}
        animate={{ y: isHovered ? '-100%' : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {number && (
          <span className="text-2xl md:text-3xl font-medium text-gray-400 mr-6 font-mono">
            {number}
          </span>
        )}
        <span className="text-2xl md:text-3xl font-medium">
          {children}
        </span>
      </motion.div>
      
      <motion.div
        className="absolute left-0 top-0 flex items-baseline"
        initial={{ y: '100%' }}
        animate={{ y: isHovered ? 0 : '100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {number && (
          <span className="text-2xl md:text-3xl font-medium text-gray-400 mr-6 font-mono">
            {number}
          </span>
        )}
        <span className="text-2xl md:text-3xl font-medium">
          {children}
        </span>
      </motion.div>
    </Link>
  );
} 