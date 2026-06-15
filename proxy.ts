import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

// this the public route it has no restricted access and can be accessed by anyone
const isPublicRoute = createRouteMatcher(['/', '/about', '/products(.*)'])

const isAdminRoute = createRouteMatcher(['/admin(.*)']);


// restrict access to all other routes and protect them with clerk authentication
export default clerkMiddleware(async (auth, request) => {
  // checking if the user is the admin
  const isAdminUser = (await auth()).userId === process.env.ADMIN_USER_ID;
  if (isAdminRoute(request) && !isAdminUser) { 
    return NextResponse.redirect(new URL('/', request.url));
  };
  
  if (!isPublicRoute(request)) {
    await auth.protect()
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for Clerk's auto-proxy path
    '/__clerk/:path*',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};