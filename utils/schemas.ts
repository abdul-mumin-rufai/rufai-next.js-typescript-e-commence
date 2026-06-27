import { z } from 'zod'

export const productSchema= z.object({
    name: z.string()
        .min(2, { message: 'please name of product must be at latest 2 characters',})
        .max(100, { message: 'name must be less than 100 chaaracters',}),
    company: z.string(),
    price: z.coerce
        .number()
        .int()
        .min(0, { message: 'please price must be positive number',}),
    featured: z.coerce.boolean().default(false),
    description: z.string().refine((description) => {
        const wordCount = description.split(' ').length;
        return wordCount >= 10 && wordCount <= 1000;
    },
        {message:'please description must be more than 9 word and less than 1001 words',}
    )
});