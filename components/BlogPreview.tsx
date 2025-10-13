import React from 'react';
import { BLOG_POSTS_STRUCTURE } from '../constants';
import { useTranslations } from '../hooks/useTranslations';

const BlogPreview: React.FC = () => {
  const t = useTranslations();

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900">{t.blog_title}</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            {t.blog_subtitle}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {BLOG_POSTS_STRUCTURE.map((postStructure, index) => {
            const postContent = t.blog_posts[index];
            return (
              <div key={postStructure.id} className="bg-white rounded-lg shadow-lg overflow-hidden group">
                <img src={postStructure.imageUrl} alt={postContent.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{postContent.title}</h3>
                  <p className="text-gray-600 mb-4">{postContent.excerpt}</p>
                  <a href={postStructure.link} className="font-bold text-blue-800 hover:text-yellow-500 transition-colors duration-300">
                    {t.blog_read_more} &rarr;
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;