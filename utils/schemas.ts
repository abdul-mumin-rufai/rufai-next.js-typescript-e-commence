import { z } from 'zod'

export const productSchema = z.object({
    name: z.string().min(3),
    company: z.string().min(5),
    price: z.coerce.number().int().min(0),
    featured: z.coerce.boolean().default(false),
    description:z.string()
});