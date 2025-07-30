"use client";

import Link from 'next/link';
import { Header } from '@/components/header';
import { Typewriter } from 'react-simple-typewriter';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-4">
        {/* Tagline */}
        <h1 className="text-5xl md:text-6xl font-light text-center mb-8">
          <Typewriter
            words={['The Cursor for DevOps engineers.']}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={10000}
          />
        </h1>
        
        {/* Call to Action Button */}
        <Link href="/demo" className="bg-gray-300 text-black px-8 py-4 rounded-lg font-semibold uppercase hover:bg-gray-400 transition-colors">
          Book a Demo
        </Link>
      </main>
    </div>
  );
}
