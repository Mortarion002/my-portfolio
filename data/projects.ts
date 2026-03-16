// data/projects.ts

export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  href?: string;
  demo?: string;
  source?: string;
  image: string;
  comingSoon?: boolean;
};

export const projects: Project[] = [
  {
    slug: "production-rag",
    title: "Production-rag",
    description:
      "A self-correcting RAG system built with LangGraph, Langsmith and FastAPI that employs a \"retrieve-grade-generate\" workflow to ensure high-accuracy answers.",
    tech: ["LangGraph", "LangSmith", "FastAPI", "Python", "RAG"],
    image: "/projects/prodRag.png",
    // demo: "https://student-productivity-app-landing-pa.vercel.app/",
    source: "https://github.com/Mortarion002/Production-rag",
  },
  {
    slug: "gig-marketplace",
    title: "Gig-Marketplace",
    description:
      "A full-stack distributed gig economy platform that connects customers with nearby providers in real-time using Redis geo-spatial routing, WebSockets, and an interactive OpenStreetMap.",
    tech: ["Next.js", "React Native", "Node.js", "PostgreSQL", "Prisma", "Redis", "WebSockets"],
    image: "/projects/gig.png",
    source: "https://github.com/Mortarion002/Gig-Marketplace",
  },
  {
    slug: "agentic-ai",
    title: "Agentic-AI",
    description:
      "Advanced AI workflow and smart agent orchestrations built via Vercel AI-SDK @v5.",
    tech: ["Vercel AI SDK", "TypeScript", "Next.js", "LLMs"],
    image: "/projects/agentic.png",
    // demo: "https://extension-marketplace-pink.vercel.app/",
    source: "https://github.com/Mortarion002/Agentic-AI",
  },
  {
    slug: "rag-vercel",
    title: "Rag-Vercel",
    description:
      "RAG Chatbot that stores data in a vector database allowing users to interactively query and analyze custom documents.",
    tech: ["RAG", "Vector Database", "Next.js", "Vercel"],
    image: "/projects/verrag.png",
    source: "https://github.com/Mortarion002/Rag-Vercel",
  },
  {
    slug: "subscription-a2a",
    title: "Subscription_A2A",
    description:
      "A proof of concept agentic workflow to automate subscription cancellation seamlessly using Agent-to-Agent (A2A) protocols.",
    tech: ["Agentic AI", "A2A Protocol", "Python"],
    image: "/projects/subpoc.png",
    // demo: "https://music-sync-web.vercel.app/",
    source: "https://github.com/Mortarion002/Subscription_A2A",
  },
  {
    slug: "music-sync-windows",
    title: "music-sync",
    description:
      "A Windows specific app that synchronizes the playback of music across all the Windows devices it is running on.",
    tech: ["Windows", "Electron", "WebSockets"],
    image: "/projects/music-sync.png",
    source: "https://github.com/Mortarion002/music-sync",
  },
];