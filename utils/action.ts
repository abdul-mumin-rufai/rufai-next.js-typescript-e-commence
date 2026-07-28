'use server'

import db from '@/utils/db';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { imageSchema, productSchema, reviewSchema, validateWithZodSchema } from './schemas';
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

// this is the action for the formContainer in order to use useActionState
export const updateProductAction = async (prevState: any, formData: FormData) => { 
    try {
        const productId = formData.get('id') as string;
        const rawData = Object.fromEntries(formData.entries());
        const validatedData = validateWithZodSchema(productSchema, rawData);

        await db.prisma.product.update({
            where: {
                id:productId,
            },
            data: {
                ...validatedData
            }
        })
        revalidatePath(`/admin/products/${productId}/edit`)
        return {message:'Product updated succesfully'}        
    } catch (error) {
        return renderError(error);
    }

};

// this is the action for the formContainer in order to use useActionState form the image
export const updateProductImageAction = async (prevState: any, formData: FormData) => { 
    await getAdminUser();
    try {
        const productId = formData.get('id') as string;
        const image = formData.get('image') as File;
        const oldImageUrl = formData.get('url') as string;

        // validate image file
        const validateImageFile = validateWithZodSchema(imageSchema, { image });
        const filePath = await uploadImage(validateImageFile.image);
        await removeImageFromSupabase(oldImageUrl) // removed the old image url

        // updating the image here
        await db.prisma.product.update({
            where: {
                id:productId,
            },
            data: {
                image: filePath,
            }
        })
        revalidatePath(`/admin/products/${productId}/edit`)
        return {message:'Image updated succesfully'}
    } catch (error) {
        return renderError(error)
    };
};

export const fetchFavoriteId = async ({ productId }: { productId: string }) => {
    const user = await getCurrentUser();
    // when there is productId and clerkId user.id then in the facvorite model the we set the id to true
    const favorite = await db.prisma.favorite.findFirst({
        where: {
            productId,
            clerkId:user.id,
        },
        select: {
            id:true,
        }
    })
    return favorite?.id || null;
};

export const favoriteToggleAction = async (prevState: { productId: string; favoriteId: string | null; pathName: string }) => {
    const user = await getCurrentUser();
    const {productId,favoriteId, pathName } = prevState;
    try {
        if (favoriteId) {
            await db.prisma.favorite.delete({
                where: {
                    id:favoriteId,
                },
            })
        } else {
            await db.prisma.favorite.create({
                data: {
                    productId,
                    clerkId:user.id,
                },
            })
        }
        revalidatePath(pathName)
        return { message: favoriteId ? 'Removed from favorite' : 'Added to favorite' };
    } catch (error) {
        return renderError(error);
    }
};

export const fetchUserFavorite = async () => { 
    const user = await getCurrentUser();
    const favorite = await db.prisma.favorite.findMany({
        where: {
            clerkId:user.id,
        },
        include: {
            product:true,
        },
    });
    return favorite
};

export const createReviewAction = async (prevState: any, formData: FormData): Promise<{ message: string }> => {
    const user = await getCurrentUser();
    try {
        const rawData = Object.fromEntries(formData.entries());
        const validatedData = validateWithZodSchema(reviewSchema, rawData);
        await db.prisma.review.create({
            data: {
                ...validatedData,
                clerkId:user.id,
            },
        });
        revalidatePath(`/products/${validatedData.productId}`);
        return {message:'Review submitted...Thank you for your time'}
    } catch (error) {
        return renderError(error)
    }
};

export const fetchProductReviews = async (productId:string ) => {
    const productsReviews = await db.prisma.review.findMany({
        where: {
            productId,
        },
        orderBy: {
            createdAt: 'desc',
        }
    });
    return productsReviews;
};
export const fetchProductReviewsByUser = async () => {};
export const deleteReviewAction = async () => {};
export const findExistingReview = async () => {};
export const fetchProductRating = async () => {};