import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/globals/Container";
import Providers from "./providers";


const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rufai-Next.js-E-Commence",
  description: "A comprehensive next.js e-commence app with typescript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en" suppressHydrationWarning={true}
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body
        data-new-gr-c-s-check-loaded="14.1295.0"
        data-gr-ext-installed=""
      >
        <Providers>
          <Navbar />
          <Container className='py-10'>
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  );
}
