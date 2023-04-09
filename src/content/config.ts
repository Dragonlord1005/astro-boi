import { z, defineCollection } from "astro:content";

const posts = defineCollection({
  schema: z.object({
    draft: z.boolean().default(false),
    title: z.string(),
    description: z.string(),
    author: z.string(),
    publishDate: z.string().transform((str) => new Date(str)),
  }),
});

const projects = defineCollection({
  schema: z.object({
    // draft: z.boolean().default(false),
    title: z.string(),
    description: z.string(),
    githubUrl: z.string().url(),
    siteUrl: z.string().url(),
  }),
});

const miniprojects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  posts: posts,
  projects: projects,
  miniprojects: miniprojects,
};
