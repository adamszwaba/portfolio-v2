import { StackItem } from "./stack-item";

export type Stack = Record<string, StackItem[]>;

export const stack: Stack = {
  languages: [
    {
      name: "Typescript",
      level: "expert",
    },
    {
      name: "Javascript",
      level: "expert",
    },
    {
      name: "golang",
      level: "intermediate",
    },
  ],
  "Web frameworks": [
    {
      name: "React",
      level: "expert",
    },
    {
      name: "Next.js",
      level: "expert",
    },
    { name: "Remix", level: "advanced" },
    {
      name: "Vite",
      level: "intermediate",
    },
    {
      name: "Angular",
      level: "beginner",
    },
  ],
  testing: [
    {
      name: "Jest",
      level: "expert",
    },
    {
      name: "React Testing Library",
      level: "expert",
    },
    {
      name: "Cypress",
      level: "intermediate",
    },
    {
      name: "vitest",
      level: "advanced",
    },
  ],
  "State management": [
    {
      name: "Redux/Redux Toolkit",
      level: "expert",
    },
    {
      name: "React Query",
      level: "expert",
    },
    {
      name: "Zustand",
      level: "intermediate",
    },
  ],
  "CSS frameworks": [
    {
      name: "Material UI",
      level: "expert",
    },
    {
      name: "Tailwind CSS",
      level: "expert",
    },
    {
      name: "Chakra UI",
      level: "intermediate",
    },
    {
      name: "Styled Components",
      level: "intermediate",
    },
  ],
  Other: [
    {
      name: "GraphQL",
      level: "intermediate",
    },
    {
      name: "Docker",
      level: "intermediate",
    },
    {
      name: "Git",
      level: "advanced",
    },
    {
      name: "prisma",
      level: "intermediate",
    },
    {
      name: "drizzleORM",
      level: "intermediate",
    },
    {
      name: "d3.js",
      level: "intermediate",
    },
  ],
};
