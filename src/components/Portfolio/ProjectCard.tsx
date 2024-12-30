import React from 'react';
import { Calendar, Tag } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  images: string[]; // Array of image URLs
  createdAt?: string; // Optional creation date
}

export function ProjectCard({ title, description, category, images, createdAt }: ProjectCardProps) {
  // Check the first image and ensure it is valid; use a fallback if not
  const firstImage = images[0]?.startsWith('http')
    ? images[0]
    : 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2071&auto=format&fit=crop';

  return (
    <div className="group bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={firstImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2071&auto=format&fit=crop';
          }} // Fallback for broken images
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
            <Tag className="w-4 h-4 mr-1" />
            {category}
          </span>
          {createdAt && (
            <span className="text-sm text-gray-500 flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {new Date(createdAt).toLocaleDateString()}
            </span>
          )}
        </div>

        {/* Title and Description */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 line-clamp-2">{description}</p>

        {/* Additional Images */}
        {images.length > 1 && (
          <div className="flex gap-2 mt-4">
            {images.slice(1).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${title} ${index + 2}`}
                className="w-12 h-12 rounded-lg object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://via.placeholder.com/48'; // Fallback for additional images
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
