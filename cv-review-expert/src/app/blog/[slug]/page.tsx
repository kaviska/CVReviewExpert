import Image from "next/image";
import { urlFor } from "../../lib/sanity";
import { PortableText } from "@portabletext/react";
import FAQBlog from "@/component/FAQBlog";
// import Temp from "@/component/Temp";
import Catalog from "@/component/Catalog";
import { client } from "../../lib/sanity";

// Use ISR with short revalidation time for better performance
export const revalidate = 10; // Revalidate every 10 seconds
export const dynamic = 'force-static'; // Use static generation with ISR

//comented out the import of client

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

async function getBlogBySlug(slug: string[]) {
  // Try exact match first, then try with trimmed comparison
  const query = `*[_type == "blog" && (slug.current == $slug || slug.current == $slugWithSpace)]{
    ...,
    "author": author->name,
    "authorImage": author->image,
    "image": mainImage.asset->url,
    "metaTitle": metaTitle,
    "metaDescription": metaDescription,
    "sidebar": sidebar,
    "categories": categories[]->title,
    "tags": tags[]->title
  }`;
  const queryParams = { 
    slug: slug,
    slugWithSpace: slug + " " // Try with trailing space
  };
  
  // Use ISR-friendly caching
  return await client.fetch(query, queryParams, { 
    next: { revalidate: 10 }
  });
}

// Dynamic Metadata
export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const blog = await getBlogBySlug(resolvedParams.slug);
  console.log(blog);
  if (!blog || blog.length === 0) {
    return {
      title: "Blog Post",
      description: "Blog post description",
    };
  }

  return {
    title: blog[0].metaTitle || "Blog Post",
    description: blog[0].metaDescription || "Blog post description",
    openGraph: {
      title: blog[0].metaTitle || "Blog Post",
      description: blog[0].metaDescription || "Blog post description",
      images: [
        {
          url: blog[0].image,
          width: 1200,
          height: 630,
          alt: blog[0].metaTitle || "Blog Post",
        },
      ],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const blog = await getBlogBySlug(resolvedParams.slug);

  if (!blog || blog.length === 0) {
    return (
      <div className="container mx-auto max-w-6xl px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Blog post not found
        </h1>
        <p className="text-gray-600">
          The blog post you're looking for doesn't exist.
        </p>
      </div>
    );
  }

  const isSidebarAvailable = blog[0].sidebar !== false;
  const isDownloadAvailable = blog[0].download !== false;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto max-w-6xl px-4 py-12">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {blog[0].title}
            </h1>
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Image
                  src={urlFor(blog[0].authorImage).url()}
                  alt={blog[0].author}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span className="font-medium">{blog[0].author}</span>
              </div>
              <span>•</span>
              <time>
                {new Date(blog[0].publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Article Content */}
          <article
            className={`${
              isSidebarAvailable ? "lg:w-3/4" : "w-full"
            } bg-white rounded-lg shadow-sm overflow-hidden`}
          >
            {/* Featured Image */}
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={urlFor(blog[0].mainImage).url()}
                className="w-full h-full object-cover"
                alt={blog[0].title}
              />
            </div>

            {/* Article Body */}
            <div className="p-8">
              <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900">
                <PortableText
                  value={blog[0].body}
                  components={{
                    types: {
                      image: ({ value }) => (
                        <div className="my-8">
                          <img
                            src={urlFor(value.asset).url()}
                            alt={value.alt || "Blog Image"}
                            className="w-full max-h-96 object-cover rounded-lg shadow-sm"
                          />
                          {value.alt && (
                            <p className="text-sm text-gray-500 text-center mt-2 italic">
                              {value.alt}
                            </p>
                          )}
                        </div>
                      ),
                    },
                    block: {
                      h2: ({ children, value }) => (
                        <h2
                          id={value._key}
                          className="scroll-mt-20 text-2xl font-bold text-gray-900 mt-8 mb-4"
                        >
                          {children}
                        </h2>
                      ),
                      h3: ({ children, value }) => (
                        <h3
                          id={value._key}
                          className="scroll-mt-20 text-xl font-semibold text-gray-900 mt-6 mb-3"
                        >
                          {children}
                        </h3>
                      ),
                      normal: ({ children }) => (
                        <p className="mb-4 leading-relaxed">{children}</p>
                      ),
                    },
                    list: {
                      bullet: ({ children }) => (
                        <ul className="list-disc list-inside mb-4 space-y-2 ml-4">{children}</ul>
                      ),
                      number: ({ children }) => (
                        <ol className="list-decimal list-inside mb-4 space-y-2 ml-4">{children}</ol>
                      ),
                    },
                    listItem: {
                      bullet: ({ children }) => (
                        <li className="leading-relaxed">{children}</li>
                      ),
                      number: ({ children }) => (
                        <li className="leading-relaxed">{children}</li>
                      ),
                    },
                    marks: {
                      link: ({ children, value }) => (
                        <a
                          href={value.href}
                          target={value.blank ? "_blank" : "_self"}
                          rel={value.blank ? "noopener noreferrer" : ""}
                          className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200 font-medium"
                        >
                          {children}
                        </a>
                      ),
                      strong: ({ children }) => (
                        <strong className="font-semibold text-gray-900">{children}</strong>
                      ),
                      em: ({ children }) => (
                        <em className="italic">{children}</em>
                      ),
                      code: ({ children }) => (
                        <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono">
                          {children}
                        </code>
                      ),
                    },
                  }}
                />
              </div>

              {/* FAQ Section */}
              {blog[0].faq && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <FAQBlog faq={blog[0].faq} />
                </div>
              )}
            </div>
          </article>

          {/* Sidebar */}
          {isSidebarAvailable && (
            <aside className="lg:w-1/4 space-y-6">
              {/* Table of Contents */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Table of Contents
                </h3>
                <Catalog blog={blog} />
              </div>

              {/* Author Info */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  About the Author
                </h3>
                <div className="flex items-start gap-3">
                  <Image
                    src={urlFor(blog[0].authorImage).url()}
                    alt={blog[0].author}
                    width={48}
                    height={48}
                    className="rounded-full flex-shrink-0"
                  />
                  <div>
                    <p className="font-medium text-gray-900">{blog[0].author}</p>
                    <p className="text-sm text-gray-600 mt-1">Content Writer</p>
                  </div>
                </div>
              </div>

              {/* Categories */}
              {blog[0].categories &&
                Array.isArray(blog[0].categories) &&
                blog[0].categories.length > 0 && (
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Categories
                    </h3>
                    <div className="space-y-2">
                      {blog[0].categories.map(
                        (category: string, index: number) => (
                          <span
                            key={index}
                            className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {category}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                )}

              {/* Tags */}
              {blog[0].tags &&
                Array.isArray(blog[0].tags) &&
                blog[0].tags.length > 0 && (
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {blog[0].tags.map((tag: string, index: number) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              {/* Share Section */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Share this article
                </h3>
                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                    Share
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">
                    Copy Link
                  </button>
                </div>
              </div>
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}
