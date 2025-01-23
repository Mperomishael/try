'use client';

import { Power } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.location.href = 'https://tinyurl.com/tech-wave-ughelli';
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-60"
        animate={{
          background: [
            'linear-gradient(45deg, #0A192F 0%, #6B46C1 50%, #60A5FA 100%)',
            'linear-gradient(225deg, #60A5FA 0%, #6B46C1 50%, #0A192F 100%)',
          ],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Power button with glow effect */}
        <motion.button
          className="relative p-8 rounded-full bg-transparent border-4 border-purple-500 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          animate={{
            boxShadow: isHovered
              ? [
                  '0 0 20px #6B46C1',
                  '0 0 40px #6B46C1',
                  '0 0 20px #6B46C1',
                ]
              : '0 0 0px #6B46C1',
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          onClick={handleClick}
        >
          <Power 
            size={48}
            className="text-purple-500"
            style={{
              filter: isHovered ? 'drop-shadow(0 0 8px #6B46C1)' : 'none',
            }}
          />
        </motion.button>

        {/* Animated text */}
        <motion.p
          className="text-xl font-medium text-white"
          animate={{
            opacity: [0.5, 1, 0.5],
            textShadow: [
              '0 0 8px #6B46C1',
              '0 0 16px #6B46C1',
              '0 0 8px #6B46C1',
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          tap the switch to continue
        </motion.p>
      </div>
    </main>
  );
}
