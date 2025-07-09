'use client';

import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects';

export default function RecruiterPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-4xl font-bold mb-10">Featured Projects</h1>

      {/* grid of project cards */}
      <div className="grid justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Link
            key={p.title}
            href={p.repo ?? '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl overflow-hidden shadow-lg border border-gray-800 bg-gray-900/60 backdrop-blur-sm transition-transform hover:-translate-y-1"
          >
            <article className="flex flex-col h-full">
              {/* ---------- thumbnail ---------- */}
              <div className="relative w-full aspect-[3/2] bg-black">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill                                  // fills wrapper div
                  className="object-contain px-4 py-4" // shows whole image
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  priority
                />
              </div>

              {/* ---------- text block ---------- */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-gray-300 text-sm flex-grow">{p.blurb}</p>

                {/* tags */}
                <div className="flex flex-wrap gap-2 my-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="bg-red-600/20 text-red-300 text-xs px-2 py-0.5 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}