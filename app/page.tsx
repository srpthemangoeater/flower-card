// src/app/page.tsx
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useMemo } from 'react';
import flowersData from '@/data/flowers.json';
import { Flower } from '@/types/flower';

const flowers: Flower[] = flowersData as Flower[];

const PLACEHOLDER_IMAGE_URL = 'https://placehold.co/600x400/EEE/31343C'; 

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFlowers = useMemo(() => {
    if (!searchTerm) {
      return flowers;
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return flowers.filter(flower =>
      flower.englishName.toLowerCase().includes(lowerCaseSearchTerm) ||
      flower.id.includes(lowerCaseSearchTerm)
    );
  }, [searchTerm]);

  return (
    <main className="container mx-auto p-4 md:p-12">
      <h1 className="text-5xl font-extrabold mb-8 text-center text-pink-700 tracking-wider">
        🌸 The Language of Flowers Website
      </h1>

      <div className="mb-10 max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Search flowers by name, e.g., 'rose' or 'lily'..."
          className="w-full p-4 border-2 border-pink-300 rounded-lg shadow-md focus:outline-none focus:border-pink-500 transition duration-200 text-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      {filteredFlowers.length === 0 ? (
        <p className="text-center text-2xl text-gray-500 mt-16">
          No flowers found matching &quot;{searchTerm}&quot;.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredFlowers.map((flower) => (
            <Link 
              key={flower.id} 
              href={`/flower/${flower.id}`} 
              className="block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] overflow-hidden group"
            >
              <div className="relative h-64 w-full border-b-4 border-pink-100">
                <Image
                  // ถ้า flower.image ไม่มี ให้ใช้ PLACEHOLDER_IMAGE_URL
                  src={flower.image || PLACEHOLDER_IMAGE_URL} 
                  alt={flower.englishName}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="transition-opacity duration-500 group-hover:opacity-85"
                  priority={false}
                  unoptimized={!flower.image}
                />
              </div>
              
              <div className="p-5 bg-white">
                <h2 className="text-2xl font-bold text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
                  {flower.englishName}
                </h2>
                <p className="text-lg text-pink-500 mt-2 font-medium">
                  <span className="font-semibold text-pink-700">Meaning:</span> {flower.englishMeaning.split(',')[0]}...
                </p>
                <div className="mt-4 inline-block bg-pink-100 text-pink-600 text-sm font-semibold py-1 px-3 rounded-full group-hover:bg-pink-200">
                  Read More
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}