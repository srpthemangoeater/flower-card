// src/app/layout.tsx

import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '🌷 The Language of Flowers',
  description: 'A collection of flower meanings and their symbolism.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en"> 
      <body className="font-sans bg-pink-50 text-gray-800 min-h-screen">
        {children}
      </body>
    </html>
  );
}