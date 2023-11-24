export const dynamic = 'force-dynamic';

import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/lib/providers/next-theme-provider';
import { DM_Sans } from 'next/font/google';
import { twMerge } from 'tailwind-merge';
import AppStateProvider from '@/lib/providers/state-provider';
import { SupabaseUserProvider } from '@/lib/providers/supabase-user-provider';
import { Toaster } from '@/components/ui/toaster';
import { SocketProvider } from '@/lib/providers/socket-provider';

const inter = DM_Sans({ subsets: ['latin'] });

type Metadata = {
  title: string;
  description: string;
  imageUrl?: string;
  twitter?: {
    cardType: string;
    site?: string;
    creator?: string;
  };
  openGraph?: {
    title: string;
    type: string;
    url: string;
    image: string;
    description: string;
    site_name: string;
  };
};

export const metadata: Metadata = {
  title: 'Notionary - Revolutionize Your Note-Taking',
  description: 'Notionary brings your note-taking experience to the next level. Organize, share, and collaborate on your notes and documents, all in one place.',
  imageUrl: 'https://notionary.vercel.app/_next/static/media/cypresslogo.ab70973a.svg', // Replace with your app's Open Graph image URL
  twitter: {
    cardType: 'summary_large_image',
    site: '@YourTwitterHandle', // Replace with your app's Twitter handle
    creator: '@huntermacias_', // Replace with the creator's Twitter handle
  },
  openGraph: {
    title: 'Notionary - Revolutionize Your Note-Taking',
    type: 'website',
    url: 'https://yourdomain.com', // Replace with your app's URL
    image: 'https://yourdomain.com/images/notionary-og-image.jpg',
    description: 'Notionary brings your note-taking experience to the next level. Organize, share, and collaborate on your notes and documents, all in one place.',
    site_name: 'Notionary',
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={twMerge('bg-background', inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          <AppStateProvider>
            <SupabaseUserProvider>
              <SocketProvider>
                {children}
                <Toaster />
              </SocketProvider>
            </SupabaseUserProvider>
          </AppStateProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
