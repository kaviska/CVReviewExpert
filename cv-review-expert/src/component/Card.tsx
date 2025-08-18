// filepath: c:\xampp\htdocs\My Project\CVReviewExpert\cv-review-expert\src\component\Card.tsx
import Image from "next/image";
import { urlFor } from "../app/lib/sanity";
import ReaderImage from "../../public/reader.jpg";
import ProfileImage from "../../public/profile.avif";

interface CardProps {
  CoverImage: string;
  Title: string;
  Description: string;
  Author: string;
}

export default function Card({ CoverImage, Title, Description, Author }: CardProps) {
  const imageUrl = CoverImage ? urlFor(CoverImage).width(400).height(250).url() : ReaderImage.src;

  return (
    <article className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:border-blue-200 transition-all duration-300 group h-full flex flex-col">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img 
          src={imageUrl} 
          alt={Title}
          className="w-full h-48 sm:h-52 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content Container */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
          {Title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
          {Description}
        </p>

        {/* Author Section */}
        <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
          <div className="relative">
            <Image
              src={ProfileImage}
              alt="Author profile"
              width={32}
              height={32}
              className="rounded-full ring-2 ring-gray-100"
            />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-700">{Author}</p>
            <p className="text-xs text-gray-500">Author</p>
          </div>
          
          {/* Read More Arrow */}
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </article>
  );
}