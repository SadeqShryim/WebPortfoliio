// app/dashboard/page.tsx
'use client';

import Link from 'next/link';
import { posts } from '@/data/posts';

export default function DashboardPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 space-y-8">
      <h1 className="text-4xl font-bold">Blog & Updates</h1>

      {posts.length === 0 ? (
        <p className="text-gray-500">No posts yet — stay tuned!</p>
      ) : (
        <ul className="space-y-6">
          {posts
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/dashboard/${p.slug}`}
                  className="block rounded-lg border border-gray-800 hover:border-red-600/60 transition"
                >
                  <div className="p-6 space-y-2">
                    <h3 className="text-xl font-semibold">{p.title}</h3>
                    <p className="text-gray-400 text-sm">{p.excerpt}</p>
                    <time
                      dateTime={p.date}
                      className="text-xs text-gray-500 uppercase tracking-wide"
                    >
                      {new Date(p.date).toLocaleDateString()}
                    </time>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      )}
    </section>
  );
}
