
import React from 'react';
import { BLOG_POSTS } from '../constants';

const BlogPreview: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900">Desde Nuestro Blog</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Ideas, consejos y estrategias para que tu PYME destaque en el mundo digital.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a href={post.link} className="font-bold text-blue-800 hover:text-yellow-500 transition-colors duration-300">
                  Leer más &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
