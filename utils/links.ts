interface NavLinks { 
    href: string;
    label: string;
};

export const links: NavLinks[] = [
    { href: '/', label: 'home' },
    { href: '/about', label: 'about' },
    { href: '/products', label: 'products' },
    { href: '/favourites', label: 'favourites' },
    { href: '/cart', label: 'cart' },
    { href: '/orders', label: 'orders' },
];