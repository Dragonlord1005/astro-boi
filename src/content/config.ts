import { z, defineCollection } from 'astro:content'

const posts = defineCollection({
    schema: {
        draft: z.boolean().default(false),
        title: z.string(),
        description: z.string(),
        author: z.string(),
        publishDate: z.string().transform(str => new Date(str)),
        url: z.string()
    },
});

export const collections = {
    posts: posts,
};