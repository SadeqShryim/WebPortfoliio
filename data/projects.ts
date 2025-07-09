// data/projects.ts
export type Project = {
  title: string;
  image: string;
  blurb: string;
  tags: string[];
  repo?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    title: "AI-Based Book",
    image: "/images/Ai_Based_Book.png",   // file lives at public/images/ai-based-book.png
    blurb:
      "LangChain chatbot that speaks in James Clear’s voice, with FAISS-backed retrieval and short-term memory.",
    tags: ["Next.js", "LangChain", "FAISS", "OpenAI"],
    repo: "https://github.com/SadeqShryim/AI-Based-Book",
    live: "https://ai-therapist.vercel.app",
  },
];

