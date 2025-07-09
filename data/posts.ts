// data/posts.ts
export type Post = {
  title: string;
  excerpt: string;
  date: string;  // ISO format: "2025-07-09"
  slug: string;  // Used for the URL: /dashboard/[slug]
};

export const posts: Post[] = [
  {
    title: "Switching from Ollama to GPT-3.5",
    excerpt: "Why I migrated my local model to the OpenAI API and how I keep costs predictable.",
    date: "2025-07-07",
    slug: "ollama-to-gpt35",
  },
  // 👉 add more posts here
];
