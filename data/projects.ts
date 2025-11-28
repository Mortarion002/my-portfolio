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
    slug: "student-productivity-app",
    title: "Student Productivity Hub",
    description:
      "All-in-one productivity platform for students with task management, note-taking, Pomodoro timer, and academic calendar integration.",
    tech: ["ReactNative", "Expo", "TypeScript", "Zustand", "TailwindCSS"],
    image: "/projects/Student_productivity.png",
    demo: "https://student-productivity-app-landing-pa.vercel.app/",
    source: "https://github.com/EternalKnight002/student-productivity-app",
  },
  {
    slug: "repo-mind",
    title: "RepoMind - GitHub Repository Analyzer",
    description:
      "AI-powered tool to analyze GitHub repositories, generate documentation insights, and visualize code complexity with intelligent summaries.",
    tech: ["Python", "OpenAI API", "TypeScript", "React", "GitHub API"],
    image: "/projects/api-gateway.png",
    source: "https://github.com/EternalKnight002/repo-mind",
  },
  {
    slug: "extension-marketplace",
    title: "Extension Marketplace - Developer Tools Hub",
    description:
      "Curated showcase of Chrome and VS Code extensions I've built. Browse, explore, and discover productivity tools for developers.",
    tech: ["Next.js", "React", "ManifestV3", "TypeScript", "Chrome API"],
    image: "/projects/extension.png",
    demo: "https://extension-marketplace-pink.vercel.app/",
    source: "https://github.com/EternalKnight002/extension-marketplace",
  },
  {
    slug: "skill-match-ai",
    title: "SkillMatchAI - Intelligent Job Matcher",
    description:
      "AI-driven platform that matches candidates with job opportunities based on skills, experience, and learning paths with personalized recommendations.",
    tech: ["Python", "Machine Learning", "FastAPI", "React", "Kaggle"],
    image: "/projects/skill-match-ai.png",
    source: "https://github.com/EternalKnight002/SkillMatchAI",
  },
  {
    slug: "music-sync",
    title: "MusicSync - Collaborative Playlist Manager",
    description:
      "Real-time music synchronization platform for creating and sharing playlists across Spotify, YouTube Music, and Apple Music with friends.",
    tech: ["Next.js", "WebSocket", "Electron", "NTP", "TailwindCSS"],
    image: "/projects/music-sync.png",
    demo: "https://music-sync-web.vercel.app/",
    source: "https://github.com/EternalKnight002/music-sync",
  },
  {
    slug: "terminal-history",
    title: "TerminalHistory - Command Line Time Machine",
    description:
      "Advanced terminal history manager with smart search, AI-powered command suggestions, and session replay capabilities.",
    tech: ["TypeScript", "Bash", "Zsh", "VS Code Extension API", "Node.js"],
    image: "/projects/terminal-history.png",
    source: "https://github.com/EternalKnight002/terminalHistory",
  },
];