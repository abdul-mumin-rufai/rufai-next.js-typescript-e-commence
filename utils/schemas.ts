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

// call this function in the imageSchema 
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

// call this function and pass in the needed schema snd the data need as argument
export const validateWithZodSchema = <T> (schema: z.ZodType<T>, data: unknown):T  => {
    const results = schema.safeParse(data);
    if (!results.success) {
        const errors = results.error.issues.map((issue) => issue.message);
        throw new Error(errors.join(','));
    }
    return results.data;
};
 
export const reviewSchema = z.object({
    productId: z.string().refine((value) => value !== '', {
        message: 'Product ID cannot be empty',
    }),
    authorName: z.string().refine((value) => value !== '', {
        message: 'Author name cannot be empty',
    }),
    authorImageUrl: z.string().refine((value) => value !== '', {
        message: 'Author image URL cannot be empty',
    }),
    rating: z.coerce
        .number()
        .int()
        .min(1, { message: 'Rating must be at least 1' })
        .max(5, { message: 'Rating must be at most 5' }),
    comment: z
        .string()
        .min(10, { message: 'Comment must be at least 10 characters long' })
        .max(1000, { message: 'Comment must be at most 1000 characters long' }),
});