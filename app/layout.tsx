import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';

import './globals.css';

const poppins = Poppins({
  weight: ['900'],
  preload: true,
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const inter = Inter({
  weight: ['500'],
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
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
