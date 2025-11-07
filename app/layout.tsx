// src/app/layout.tsx

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import PageTransition from './components/PageTransition';
const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: '🌷 FLORIOGRAPHY | The Language of Flowers',
  description: 'A collection of flower meanings.',
  themeColor: '#FF69B4',
  openGraph: {
    title: 'FLORIOGRAPHY | The Language of Flowers',
    description: 'A collection of flower meanings.',
    url: 'https://flower-card.netlify.app/', // เปลี่ยนเป็น URL จริงของคุณ
    siteName: 'Floriography',
    images: [
      {
        url: '/images/social-preview.png', // 👈 ใส่พาธของรูปภาพที่คุณต้องการให้แสดง
        width: 1200,
        height: 630,
        alt: 'The Language of Flowers Website Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-pink-50 text-gray-800 min-h-screen`}>
        
        {/* === Hero Background Section === */}
        <header className="relative h-64 md:h-80 overflow-hidden shadow-lg mb-8">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
            
            style={{ backgroundImage: 'url(/images/hero-bg.png)' }} 
            aria-hidden="true" 
          />
          <div className="absolute inset-0 bg-pink-900 opacity-30"></div>
          
          <div className="relative z-10 flex items-center justify-center h-full">
             <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg tracking-wider">
               FLORIOGRAPHY
             </h1>
          </div>
        </header>
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}