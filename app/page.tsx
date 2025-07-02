'use client';

import { motion } from 'framer-motion';
import TextReveal from './components/TextReveal';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--background)' }}>
      {/* Main Content */}
      <div className="flex-1 flex items-center px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight mb-8 text-black">
              : )
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight mb-4 text-black max-w-3xl">
              this is kyosuke, currently building something new
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            className="space-y-8"
          >
            <div className="space-y-8">
              <div>
                <TextReveal 
                  href="/about" 
                  number="01"
                  className="text-black hover:text-gray-600 transition-colors"
                >
                  ABOUT
                </TextReveal>
              </div>
              
              <div>
                <TextReveal 
                  href="/interests" 
                  number="02"
                  className="text-black hover:text-gray-600 transition-colors"
                >
                  INTERESTS
                </TextReveal>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Fixed Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
        className="px-8 md:px-16 lg:px-24 pb-8"
      >
        <div className="flex justify-start space-x-8 text-sm">
          <a
            href="https://www.linkedin.com/in/kyosuke-imura/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-black transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/kyoimura"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-black transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://drive.google.com/file/d/1jg5nDfykY3Y0cYtQKn_-dAX_QY9S5Y_X/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-black transition-colors"
          >
            Resume
          </a>
        </div>
      </motion.footer>
    </div>
  );
} 