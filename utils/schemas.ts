import { fi } from '@faker-js/faker';
import { z, } from 'zod'

// validating the products input 
export const productSchema= z.object({
    name: z.string()
        .min(2, { message: 'please name of product must be at least 2 characters',})
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

const validateImageFile = () => { 
    const maxFileSize = 1024 * 1024;
    const acceptedFileTypes = ['image/'];
    return z.instanceof(File).refine((file) => {
        return !file || file.size <= maxFileSize
    }, 'Please file size must not exceed 1MB').refine((file) => {
        return (
            !file || acceptedFileTypes.some((type) => file.type.startsWith(type))
        )
    }, 'Please file must be image')
};

export const imageSchema = z.object({
    image: validateImageFile(),
});

export const validateWithZodSchema = <T> (schema: z.ZodType<T>, data: unknown):T  => {
    const results = schema.safeParse(data);
    if (!results.success) {
        const errors = results.error.issues.map((issue) => issue.message);
        throw new Error(errors.join(','));
    }
    return results.data;
 };