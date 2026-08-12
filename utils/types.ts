import { Prisma } from "@/myPrisma/generated/prisma/client";
export type CartItemWithProduct = Prisma.CartItemGetPayload<{
    include: { product: true };
  }>;

export type actionFunction = (
    prevState: any,
    formData: FormData
) => Promise<{ message: string }>;

export interface CartItem{
    productId: string;
    image: string;
    title: string;
    price: string;
    amount: number;
    company: string;
};

export interface CartState{
    cartItems: CartItem[];
    numItemsInCart: number;
    cartTotal: number;
    shipping: number;
    tax: number;
    orderTotal: number;
};