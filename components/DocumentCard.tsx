"use client";

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface DocumentCardProps {
  title: string;
  date: string;
  tag: string;
  preview: string;
  href: string;
}

export default function DocumentCard({ title, date, tag, preview, href }: DocumentCardProps) {
  return (
    <Link 
      href={href}
      className="block bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
    >
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            {/* Title */}
            <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
            
            {/* Metadata */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm text-gray-600">{date}</span>
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                {tag}
              </span>
            </div>
            
            {/* Preview Text */}
            <p className="text-blue-600 hover:text-blue-700 transition-colors duration-200">
              {preview}
            </p>
          </div>
          
          {/* Arrow Icon */}
          <div className="ml-4 flex-shrink-0">
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>
    </Link>
  );
}
