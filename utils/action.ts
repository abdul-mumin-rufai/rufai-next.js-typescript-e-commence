'use server'

import db from '@/utils/db';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

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

export const createProductAction = async (prev: any, formaData: FormData): Promise<{ message: string }> => { 
    const user = await getAdminUser();
    try {
        const name = formaData.get('name') as string;
        const company = formaData.get('company') as string;
        // temporary
        const price = Number(formaData.get('price') as string);
        const image = formaData.get('image') as File;
        const description = formaData.get('description') as string;
        const featured = Boolean(formaData.get('featured') as string);

        await db.prisma.product.create({
            data: {
                name,
                company,
                price,
                image: '/images/product_1.jpg',
                description,
                featured,
                clerkId: user.id,
            }
        })
        return {message:'product created successfully'}
    } catch (error) {
        return renderError(error);
    }
};