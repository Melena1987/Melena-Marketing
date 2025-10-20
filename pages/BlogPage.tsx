import React from 'react';
import { BLOG_POSTS_STRUCTURE } from '../constants';
import { useTranslations } from '../hooks/useTranslations';

const BlogCard: React.FC<{ post: typeof BLOG_POSTS_STRUCTURE[0]; content: any; readMoreText: string }> = ({ post, content, readMoreText }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden group flex flex-col">
    <a href={`/blog/${post.slug}`} className="block">
        <img 
        src={post.imageUrl} 
        alt={content.title} 
        className="w-full h-56 object-cover bg-gray-200 transform group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
        width="384"
        height="224"
        />
    </a>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-blue-800 mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>
          <a href={`/blog/${post.slug}`} className="hover:text-yellow-500 transition-colors duration-300">{content.title}</a>
        </h3>
      <p className="text-gray-600 mb-4 flex-grow">{content.excerpt}</p>
      <a href={`/blog/${post.slug}`} className="font-bold text-blue-800 hover:text-yellow-500 transition-colors duration-300 self-start">
        {readMoreText} &rarr;
      </a>
    </div>
  </div>
);

const BlogPage: React.FC = () => {
  const t = useTranslations();
  
  React.useEffect(() => {
    document.title = `${t.blog_title} | Melena Marketing`;
    window.scrollTo(0, 0);
  }, [t]);

  const postsToShow = [...BLOG_POSTS_STRUCTURE].reverse();

  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-blue-800 uppercase" style={{fontFamily: "'Oswald', sans-serif", letterSpacing: '0.1em' }}>
            {t.blog_title}
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            {t.blog_subtitle}
          </p>
          <div className="inline-block mt-4">
            <div className="h-1 bg-yellow-400 w-32"></div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {postsToShow.map((post, index) => {
            const originalIndex = BLOG_POSTS_STRUCTURE.findIndex(p => p.id === post.id);
            const postContent = t.blog_posts[originalIndex];

            if (!postContent) return null;

            return (
              <div key={post.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <BlogCard post={post} content={postContent} readMoreText={t.blog_read_more} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;