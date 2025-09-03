import Card from "@/component/Card";
import { client } from "../lib/sanity";

// Use ISR with very short revalidation time for better performance
export const revalidate = 10; // Revalidate every 10 seconds
export const dynamic = 'force-static'; // Use static generation with ISR

async function getBlogs() {
  const query = `*[_type == "blog" && defined(publishedAt)] | order(publishedAt desc){
    _id,
    title,
    "image": mainImage,
    "titleDescription": titleDescription,
    "slug": slug.current,
    "author": author->name,
    publishedAt
  }`;
  
  // Use ISR-friendly caching
  return await client.fetch(query, {}, { 
    next: { revalidate: 10 }
  });
}

type Blog = {
  _id: string;
  title: string;
  image: string;
  titleDescription: string;
  slug: string;
  author: string;
  publishedAt: string;
};

export default async function AllBlog() {
  const blogs = await getBlogs();

  console.log(blogs);
  console.log("Blog slugs:", blogs.map((blog: Blog) => blog.slug));


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-12">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover insights, tips, and expert advice to advance your career
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 shadow-sm hover:shadow-md"
            />
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {blogs.map((blog: Blog) => (
            <a 
              href={`/blog/${blog.slug.trim()}`} 
              key={blog._id}
              className="group transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Card
                CoverImage={blog.image}
                Title={blog.title}
                Description={blog.titleDescription}
                Author={blog.author}
              />
            </a>
          ))}
        </div>

        {/* Empty State */}
        {blogs.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-500">Check back later for new content!</p>
          </div>
        )}
      </div>
    </div>
  );
}