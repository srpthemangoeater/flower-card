// src/app/components/Footer.tsx
import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 bg-pink-100 border-t border-pink-300">
      <div className="container mx-auto p-6 md:p-10 text-center">
        
        {/* Main Text */}
        <p className="text-xl font-bold text-pink-700 mb-4">
          &quot;Every flower is a soul blossoming in nature.&quot;
        </p>

        {/* Copyright */}
        <p className="mt-6 text-sm text-gray-500">
          &copy; {currentYear} The Language of Flowers. All rights reserved. 
          Developed by srp-mango with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;