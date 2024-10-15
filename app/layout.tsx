import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import './globals.css';

const poppins = Poppins({
  weight: ['900'],
  preload: true,
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const inter = Inter({
  weight: ['500', '700'],
  preload: true,
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Coin Siren',
  description: 'Coin Siren from Hyper Hire',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
