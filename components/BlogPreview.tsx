

import React from 'react';
import { BLOG_POSTS_STRUCTURE } from '../constants';
import { useTranslations } from '../hooks/useTranslations';

const BlogPreview: React.FC = () => {
  const t = useTranslations();
  
  // Get the last 3 blog posts and reverse them to show newest first.
  const latestPosts = BLOG_POSTS_STRUCTURE.slice(-3).reverse();

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-800">{t.blog_title}</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            {t.blog_subtitle}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {latestPosts.map((postStructure) => {
            // Find the index of the post in the original array to get the correct translation
            const originalIndex = BLOG_POSTS_STRUCTURE.findIndex(p => p.id === postStructure.id);
            const postContent = t.blog_posts[originalIndex];

            // If for some reason content is not found, skip rendering
            if (!postContent) return null;
            
            return (
              <div key={postStructure.id} className="bg-white rounded-lg shadow-lg overflow-hidden group">
                <a href={`/blog/${postStructure.slug}`} className="block">
                  <img 
                    src={postStructure.imageUrl} 
                    alt={postContent.title} 
                    className="w-full h-48 object-cover bg-gray-200"
                    loading="lazy"
                    width="288"
                    height="192"
                  />
                </a>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">
                    <a href={`/blog/${postStructure.slug}`} className="hover:text-yellow-500 transition-colors duration-300">
                      {postContent.title}
                    </a>
                  </h3>
                  <p className="text-gray-600 mb-4">{postContent.excerpt}</p>
                  <a href={`/blog/${postStructure.slug}`} className="font-bold text-blue-800 hover:text-yellow-500 transition-colors duration-300">
                    {t.blog_read_more} &rarr;
                  </a>
                </div>
              </div>
            )
          })}
        </div>
        <div className="text-center mt-16">
          <a
            href="/blog"
            className="inline-block bg-yellow-400 text-blue-800 font-bold py-3 px-10 rounded-full text-lg hover:bg-yellow-500 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          >
            {t.blog_view_all}
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;