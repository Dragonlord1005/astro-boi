import { z, defineCollection } from 'astro:content'

const posts = defineCollection({
    schema: {
        isDraft: z.boolean().default(false),
        title: z.string(),
        description: z.string(),
        author: z.string(),
        publishDate: z.string().transform(str => new Date(str)),
    },
});

export const collections = {
    posts: posts,
};