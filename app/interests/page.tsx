'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ScrollFadeIn, ScrollScale } from '../components/ScrollAnimation';

function InterestSection({ title, description, images }: {
  title: string;
  description: string;
  images: Array<{ src: string; alt: string }>;
}) {
  return (
    <ScrollFadeIn className="space-y-6">
      <div>
        <h3 className="text-2xl font-light tracking-tight mb-4 text-black">
          {title}
        </h3>
        <p className="text-base text-gray-700 leading-relaxed">
          {description}
        </p>
      </div>
      
      <ScrollScale className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-64 object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </ScrollScale>
    </ScrollFadeIn>
  );
}

export default function InterestsPage() {
  const interests = [
    {
      title: "Sports",
      description: "I love being active, and it is a hobby of mine to go out to the ocean and surf. I also love watching sports such as soccer, basketball, and baseball.",
      images: [
        { src: "/images/surfingImage.jpg", alt: "Surfing" },
        { src: "/images/baseball.jpeg", alt: "Baseball" }
      ]
    },
    {
      title: "Food",
      description: "I love trying out new places to eat. For instance, I found amazing spots for sushi and ramen during my solo trip in Japan.",
      images: [
        { src: "/images/food.jpeg", alt: "Food" },
        { src: "/images/food1.jpeg", alt: "Japanese cuisine" },
        { src: "/images/food2.jpeg", alt: "Local delicacies" }
      ]
    },
    {
      title: "Traveling",
      description: "I love traveling because I can immerse myself in different cultures and sights. Some of my favorite places I have been to are Jamaica, Japan, Bahamas, and Brazil. The first picture is from Joshua Tree National Park, and it was one of the best sunsets I have seen.",
      images: [
        { src: "/images/sky.jpeg", alt: "Joshua Tree sunset" },
        { src: "/images/hiking.jpeg", alt: "Hiking adventure" },
        { src: "/images/ocean.jpeg", alt: "Ocean view" }
      ]
    }
  ];

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
                Interests
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-12"
            >
              {interests.map((interest, index) => (
                <InterestSection
                  key={index}
                  title={interest.title}
                  description={interest.description}
                  images={interest.images}
                />
              ))}
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