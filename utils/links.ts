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
    { href: '/admin/sales', label: 'dashboard' }
];

export const adminLinks: NavLinks[] = [
    { href: '/admin/sales', label: 'sales' },
    { href: '/admin/products', label: 'admin products' },
    { href: '/admin/products/create', label: 'create products'},
]