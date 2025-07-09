'use client';
import { motion } from 'framer-motion';
import Link from "next/link"
import { ArrowLeft, BarChart3 } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center text-red-500 hover:text-red-400 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to profiles
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-8">
            <div className="p-6 bg-red-600/20 rounded-full">
              <BarChart3 className="w-16 h-16 text-red-500" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Welcome to Dashboard Profile
          </h1>

          <p className="text-xl text-gray-400 leading-relaxed">
            View comprehensive analytics, statistics, and insights about my work and this website. Data-driven insights
            into my professional journey and project metrics.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 p-8 bg-gray-900/50 rounded-2xl border border-gray-800"
          >
            <p className="text-gray-300">
              Content coming soon... This section will display analytics, project statistics, and various metrics about
              my work and website performance.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
