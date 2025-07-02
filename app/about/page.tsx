'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';


export default function AboutPage() {
  return (
    <div className="min-h-screen py-16 px-4" style={{ backgroundColor: 'var(--background)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Link 
            href="/" 
            className="text-sm text-gray-500 hover:text-black transition-colors"
          >
            Home
          </Link>
        </motion.div>

        {/* Main Content - Left Half Only */}
        <div className="grid grid-cols-2 gap-16">
          {/* Content - Left Half */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-8 text-black">
                About
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6 text-base leading-relaxed"
            >
              <p className="text-gray-700">
                Hi, my name is Kyosuke Imura.
              </p>
              
              <p className="text-gray-700">
                I'm an engineer living and working in SF. 
              </p>
              
              <p className="text-gray-700">
                In my spare time, I study emerging technologies, building new applications, 
                and enjoy exploring the intersection of technology and creativity—whether that's through 
                physical activities, trying new food spots, or traveling to immerse myself in different cultures.
              </p>
              
              <p className="text-gray-700">
                I'm a self-taught developer in many areas, UCLA graduate, and someone who values curiosity, 
                persistence, and continuous learning. I grew up with diverse experiences that have shaped 
                my perspective on technology and its potential to connect people.
              </p>
              
              <p className="text-gray-700">
                I aspire to spend my career working on projects that challenge me creatively and, 
                hopefully, make a positive impact on others along the way.
              </p>
              
              <p className="text-gray-700">
                Please reach out for project inquiries, collaboration opportunities, or just to connect.
              </p>
            </motion.div>
          </div>

          {/* Right Half - Empty for now */}
          <div className="space-y-8">
            {/* This space is intentionally left empty for future content */}
          </div>
        </div>
      </div>
    </div>
  );
} 