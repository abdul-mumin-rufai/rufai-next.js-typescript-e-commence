'use server'

import db from '@/utils/db';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { imageSchema, productSchema, validateWithZodSchema } from './schemas';
import { uploadImage } from './supabase';

// helper function to get userId
const getAdminUser = async () => { 
    const user = await currentUser();
    if (!user) {
        throw new Error('Please Rufai is the admin')
    }
    return user;
};
// error helper function
const renderError = (error: unknown): { message: string } => {
    console.log(error);
    return {message: error instanceof Error? error.message:'please an error occuried'}
};

export const fetchFeaturedProductFn = async () => { 
    const featuredProducts = await db.prisma.product.findMany({
        where: {
            featured: true,
        },
    });
    return featuredProducts;
};

export const fetchAllProducts = async ({search=''}:{search:string}) => { 
    const allProducts = await db.prisma.product.findMany({
        where: {
            OR: [
                { name: { contains: search, mode: 'insensitive' } },
                { company: { contains: search, mode: 'insensitive' } },
            ],
        },
        orderBy: {
            createdAt: 'desc',
        },
    });
    return allProducts;
};

export const fetchSingleProduct = async (productId :string) => { 
    const singleProduct = await db.prisma.product.findUnique({
        where: {
            id: productId
        }
    })
    if (!singleProduct) {
        redirect('/products')
    };
    return singleProduct;
};

// this is the createProductAction it take the input data and create a new product
export const createProductAction = async (prev: any, formaData: FormData): Promise<{ message: string }> => { 
    const user = await getAdminUser();

    try {
        //getting the input data
        const rawData = Object.fromEntries(formaData.entries());
        const imageFile = formaData.get('image') as File;
        // pass imageFile as object to look like the one in the imageSchema
        const validatedImage = validateWithZodSchema(imageSchema, { image: imageFile });
        const validatedData = validateWithZodSchema(productSchema, rawData);
        const filePath = await uploadImage(validatedImage.image);
        


        await db.prisma.product.create({
            data: {
                ...validatedData,
                image:filePath,
                clerkId:user.id,
            }
        })
    } catch (error) {
        return renderError(error)
    }
    redirect('/admin/products')
};