// app/dashboard/[slug]/page.tsx
'use client';                       // this page runs on the client

import { useParams } from 'next/navigation';
import { posts } from '@/data/posts';

export default function PostPage() {
  // Next.js automatically decodes the dynamic segment for us
  const { slug } = useParams<{ slug: string }>();

  // Look up the post by slug
  const post = posts.find((p) => p.slug === slug);
  if (!post) return <p className="p-8">Post not found.</p>;

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 space-y-6">
      <h1 className="text-3xl font-bold">{post.title}</h1>

      <time className="text-gray-500 text-sm" dateTime={post.date}>
        {new Date(post.date).toLocaleDateString()}
      </time>

      <p>{post.excerpt}</p>
      {/* TODO: replace excerpt with full markdown or MDX later */}
    </article>
  );
}
