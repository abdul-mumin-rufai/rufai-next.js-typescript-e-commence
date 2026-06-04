import db from '@/utils/db';

export const fetchFeaturedProductFn = async () => { 
    const featuredProducts = await db.prisma.product.findMany({
        where: {
            featured: true,
        },
    });
    return featuredProducts;
};

export const fetchAllProducts = async () => { 
    const allProducts = await db.prisma.product.findMany({
        orderBy: {
            createdAt: 'desc',
        },
    });
    return allProducts;
};