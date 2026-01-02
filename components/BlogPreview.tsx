import React, { useRef, useState } from 'react';
import { BLOG_POSTS_STRUCTURE } from '../constants';
import { useTranslations } from '../hooks/useTranslations';

const BlogPreview: React.FC = () => {
  const t = useTranslations();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Get the last 3 blog posts and reverse them to show newest first.
  const latestPosts = BLOG_POSTS_STRUCTURE.slice(-3).reverse();

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setActiveIndex(index);
    }
  };

  return (
    <section id="blog" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-800">{t.blog_title}</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            {t.blog_subtitle}
          </p>
        </div>

        <div className="relative">
            <div 
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex md:grid md:grid-cols-3 gap-8 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory hide-scrollbar pb-8 -mx-6 px-6 md:mx-0 md:px-0 scroll-smooth"
            >
            {latestPosts.map((postStructure) => {
                const originalIndex = BLOG_POSTS_STRUCTURE.findIndex(p => p.id === postStructure.id);
                const postContent = t.blog_posts[originalIndex];

                if (!postContent) return null;
                
                return (
                <div key={postStructure.id} className="flex-shrink-0 w-[85%] sm:w-[70%] md:w-auto snap-center bg-white rounded-lg shadow-lg overflow-hidden group">
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
                    <h3 className="text-xl font-bold text-blue-800 mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>
                        <a href={`/blog/${postStructure.slug}`} className="hover:text-yellow-500 transition-colors duration-300">
                        {postContent.title}
                        </a>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{postContent.excerpt}</p>
                    <a href={`/blog/${postStructure.slug}`} className="font-bold text-blue-800 hover:text-yellow-500 transition-colors duration-300">
                        {t.blog_read_more} &rarr;
                    </a>
                    </div>
                </div>
                )
            })}
            </div>

            {/* Pagination Dots for Mobile */}
            <div className="flex justify-center gap-2 mt-2 md:hidden">
                {latestPosts.map((_, index) => (
                <div 
                    key={index}
                    className={`h-1.5 transition-all duration-300 rounded-full ${activeIndex === index ? 'w-8 bg-blue-800' : 'w-2 bg-blue-300'}`}
                />
                ))}
            </div>
        </div>

        <div className="text-center mt-12">
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