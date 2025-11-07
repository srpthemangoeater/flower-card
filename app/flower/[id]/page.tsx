// src/app/flower/[id]/page.tsx

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import flowersData from '@/data/flowers.json';
import { Flower } from '@/types/flower';

const PLACEHOLDER_IMAGE_URL = 'https://placehold.co/800x600/EEE/31343C'; 
const flowers: Flower[] = flowersData as Flower[];

interface FlowerDetailPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return flowers.map((flower) => ({
    id: flower.id,
  }));
}


export default async function FlowerDetailPage({ params }: FlowerDetailPageProps) {
  
  const { id } = await params; 
  const flower = flowers.find((f) => f.id === id);

  if (!flower) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4 md:p-10 max-w-4xl">
      <Link 
        href="/" 
        className="inline-flex items-center text-lg text-pink-600 hover:text-pink-800 font-semibold mb-6 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to Flower List
      </Link>

      <div className="bg-white shadow-2xl rounded-xl overflow-hidden border border-pink-100">
        
        {/* Image Section */}
        <div className="relative h-[450px] w-full">
          <Image
            src={flower.image || PLACEHOLDER_IMAGE_URL} 
            alt={flower.englishName}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-500 hover:scale-105"
            priority 
            unoptimized={!flower.image}
          />
        </div>
        
        {/* Content Section */}
        <div className="p-8">
          <h1 className="text-6xl font-black mb-3 text-pink-700">
            {flower.englishName}
          </h1>
          <hr className="border-pink-200 mb-6 w-1/4" />
          
          <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-400">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Flower Meaning
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed font-medium">
              {flower.englishMeaning}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}