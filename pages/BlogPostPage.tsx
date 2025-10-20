import React from 'react';
import { BLOG_POSTS_STRUCTURE } from '../constants';
import { useTranslations } from '../hooks/useTranslations';

interface BlogPostPageProps {
  slug: string;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ slug }) => {
  const t = useTranslations();

  const postStructure = BLOG_POSTS_STRUCTURE.find(p => p.slug === slug);
  const postIndex = BLOG_POSTS_STRUCTURE.findIndex(p => p.slug === slug);
  const postContent = postIndex !== -1 ? t.blog_posts[postIndex] : null;

  React.useEffect(() => {
    window.scrollTo(0, 0);

    if (postContent && postStructure) {
      // Set document title
      document.title = `${postContent.title} | Melena Marketing`;
      
      // Add structured data for the article
      const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": postContent.title,
        "name": postContent.title,
        "description": postContent.excerpt,
        "image": postStructure.imageUrl,
        "author": {
          "@type": "Organization",
          "name": "Melena Marketing"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Melena Marketing",
          "logo": {
            "@type": "ImageObject",
            "url": "https://melenamarketing.com/favicon.svg"
          }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://melenamarketing.com/blog/${slug}`
        },
        "datePublished": "2024-05-20", 
        "dateModified": "2024-05-20"
      };

      // Fix: Cast the element to HTMLScriptElement to allow accessing the 'type' property.
      let script = document.getElementById('seo-schema') as HTMLScriptElement | null;
      if (!script) {
          script = document.createElement('script');
          script.type = 'application/ld+json';
          script.id = 'seo-schema';
          document.head.appendChild(script);
      }
      script.innerHTML = JSON.stringify(schema);
    } else {
        document.title = "404 - Artículo no encontrado | Melena Marketing";
    }

    return () => {
        const scriptToRemove = document.getElementById('seo-schema');
        if (scriptToRemove) {
            document.head.removeChild(scriptToRemove);
        }
    };
  }, [slug, postContent, postStructure]);

  if (!postStructure || !postContent) {
    return (
      <div className="pt-32 pb-16 bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center p-6">
          <h1 className="text-4xl font-bold text-blue-800">404 - Artículo no encontrado</h1>
          <p className="mt-4 text-lg text-gray-700">El artículo que buscas no existe o ha sido movido.</p>
          <a href="/blog" className="mt-8 inline-block bg-yellow-400 text-blue-800 font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition-transform transform hover:scale-105">
            Volver al Blog
          </a>
        </div>
      </div>
    );
  }

  const contentWithStyledHeadings = postContent.content.replace(/<h2/g, '<h2 class="text-3xl font-bold text-blue-800 mt-8 mb-4" style="font-family: \'Oswald\', sans-serif;"');

  return (
    <div className="pt-32 pb-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-xl">
          <div className="mb-8">
            <a href="/blog" className="text-blue-800 hover:text-yellow-500 font-semibold transition-colors flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Volver al Blog
            </a>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-6" style={{ fontFamily: "'Oswald', sans-serif" }}>
            {postContent.title}
          </h1>
          <img 
            src={postStructure.imageUrl} 
            alt={postContent.title} 
            className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg mb-8 bg-gray-200"
          />
          <article 
            className="prose prose-lg max-w-none prose-a:text-blue-600 hover:prose-a:text-yellow-500 prose-table:w-full prose-th:bg-gray-100 prose-th:p-2 prose-td:p-2"
            dangerouslySetInnerHTML={{ __html: contentWithStyledHeadings }} 
          />
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;