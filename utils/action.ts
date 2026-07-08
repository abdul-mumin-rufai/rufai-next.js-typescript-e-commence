'use server'

import db from '@/utils/db';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { imageSchema, productSchema, validateWithZodSchema } from './schemas';
import { removeImageFromSupabase, uploadImage } from './supabase';
import { revalidatePath } from 'next/cache';

// helper function to get userId
const getCurrentUser = async () => { 
    const user = await currentUser();
    if (!user) {
        redirect('/')
    }
    return user;
};

const getAdminUser = async () => { 
    const user = await getCurrentUser();
    if (user.id !== process.env.ADMIN_USER_ID) {
        redirect('/')
    }
    return user
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
    const user = await getCurrentUser();

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
                image: filePath,
                //the clerkId is not only the admin user but any user who login
                clerkId:user.id,
            }
        })
    } catch (error) {
        return renderError(error)
    }
    redirect('/admin/products')
};

export const fetchAdminProductAction = async () => { 
    await getAdminUser();
    const products = await db.prisma.product.findMany({
        orderBy: {
            createdAt:'desc'
        }
    })
    return products
};

export const deleteProductAction = async (prevState: { productId: string }) => {
    const { productId } = prevState;
    await getAdminUser(); // checking of user is the admin

    try {
        const product = await db.prisma.product.delete({
            where: {
                id: productId,
            },
        });
        await removeImageFromSupabase(product.image)
        revalidatePath('/admin/products');
        return { message: 'product removed'};
        
    } catch (error) {
        return renderError(error)
    };
};

export const fetchAdminProductDetails = async (productId: string) => { 
    await getAdminUser();
    const product = await db.prisma.product.findUnique({
        where: {
            id:productId
        }
    });
    if (!product) redirect('/admin/products');
    return product;
};

export const updateProductAction = async (prevState: any, formData: FormData) => { 
    return {message:'Product updated succesfully'}
};

export const updateProductImageAction = async (prevState: any, formData: FormData) => { 
    return {message:'Image updated succesfully'}
};