'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { Briefcase, Gamepad2, BarChart3 } from 'lucide-react';

const profiles = [
  {
    id: 'recruiter',
    title: 'Recruiter',
    description: 'See my work & résumé',
    icon: Briefcase,
    href: '/recruiter',
  },
  {
    id: 'fun',
    title: 'Fun',
    description: 'Personal projects & hobbies',
    icon: Gamepad2,
    href: '/fun',
  },
  {
    id: 'dashboard',
    title: 'Dashboard',
    description: 'Stats & site analytics',
    icon: BarChart3,
    href: '/dashboard',
  },
];

/* ---------- Framer-motion variants ---------- */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, staggerChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.33, 1, 0.68, 1], // cubic-bezier ≈ “easeOut”  ✅ type-safe
    },
  },
};
/* ------------------------------------------- */

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background image + overlays */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/placeholder.svg?height=1080&width=1920')` }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            Sadeq Shryim
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light">Choose your profile</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full"
        >
          {profiles.map(({ id, title, description, icon: Icon, href }) => (
            <motion.div
              key={id}
              variants={cardVariants}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(220,38,38,0.5)' }}
              whileTap={{ scale: 0.98 }}
              className="group"
            >
              <Link href={href}>
                <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-800 hover:border-red-600/50 transition-all duration-300 cursor-pointer h-full">
                  <div className="flex flex-col items-center text-center space-y-6">
                    <div className="p-4 bg-red-600/20 rounded-full group-hover:bg-red-600/30 transition-colors duration-300">
                      <Icon className="w-12 h-12 text-red-500" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                        {title}
                      </h3>
                      <p className="text-gray-400 text-lg leading-relaxed">{description}</p>
                    </div>

                    <div className="w-full pt-4">
                      <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-red-600 rounded-full"
                          initial={{ width: 0 }}
                          whileHover={{ width: '100%' }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-sm">
            Click on a profile to explore different aspects of my work
          </p>
        </motion.div>
      </div>
    </div>
  );
}
