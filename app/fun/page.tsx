'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { facts } from '@/data/facts';
import { photos } from '@/data/photos';

export default function FunPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 space-y-12">
      {/* ----- Fun facts block ----- */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-900/60 backdrop-blur-md rounded-xl p-8 border border-gray-800"
      >
        <h1 className="text-3xl font-bold mb-6">A few things about me</h1>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          {facts.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </motion.div>

      {/* ----- Masonry photo gallery ----- */}
      {photos.length > 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
        >
          {photos.map((ph) => (
            <a
              key={ph.full}
              href={ph.full}
              target="_blank"
              rel="noopener noreferrer"
              className="break-inside-avoid group"
            >
              <Image
                src={ph.thumb}
                alt={ph.caption}
                width={400}
                height={400}
                className="w-full mb-4 rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
              />
              <p className="text-gray-400 text-sm">{ph.caption}</p>
            </a>
          ))}
        </motion.div>
      ) : (
        <p className="text-gray-500">No photos yet — check back soon!</p>
      )}
    </section>
  );
}
