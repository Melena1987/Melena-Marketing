
import React from 'react';

const SocialIcons: React.FC = () => {
    const socialLinks = [
        { 
            name: 'WhatsApp', 
            href: 'https://api.whatsapp.com/send?phone=34660532823&text=', 
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M16.6 14.2c-.3-.2-1.8-1-2-1.1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.8-1-1.4-1.7-1.5-2-.2-.3 0-.5.1-.6s.3-.4.4-.5c.1-.1.2-.3.2-.4.1-.1.1-.3 0-.4-.1-.1-.7-1.7-.9-2.3-.2-.6-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.2 4.9 4.3.6.3 1.2.4 1.6.5.6.1 1.1.1 1.5-.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.6-.4z M12.1 2.1C6.6 2.1 2.2 6.5 2.2 12c0 1.8.5 3.5 1.4 5l-1.5 5.3 5.5-1.4c1.4.9 3 1.3 4.7 1.3h.1c5.5 0 9.9-4.4 9.9-9.9s-4.4-9.8-9.9-9.8zM12.1 20.2c-1.5 0-3-.4-4.3-1.1l-.3-.2-3.2.8.8-3.1-.2-.3c-.8-1.3-1.2-2.8-1.2-4.4 0-4.5 3.7-8.2 8.2-8.2 2.2 0 4.3.9 5.8 2.4 1.6 1.5 2.4 3.6 2.4 5.8.1 4.5-3.6 8.2-8.1 8.2z"/></svg>
        },
        { 
            name: 'Instagram', 
            href: 'https://www.instagram.com/manu.melenamarketing/', 
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg> 
        },
        { 
            name: 'Facebook', 
            href: 'https://www.facebook.com/Melena-100210731713512', 
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"/></svg> 
        },
        { 
            name: 'X', 
            href: 'https://x.com/Manolo_Ele', 
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.931L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298l13.312 17.404z"/></svg> 
        },
        { 
            name: 'Te Vienes', 
            href: 'https://tevienes.com/es/u/melena-marketing', 
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <text
                        x="50%"
                        y="50%"
                        dominantBaseline="central"
                        textAnchor="middle"
                        fontSize="18"
                        fontWeight="bold"
                        fill="currentColor"
                        fontFamily="Oswald, sans-serif"
                    >
                        Te
                    </text>
                </svg>
            )
        }
    ];

    return (
        <div className="flex items-center space-x-3">
            {socialLinks.map(link => (
                <a key={link.name} href={link.href} title={link.name} target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-yellow-500 transition-colors duration-300">
                    {link.icon}
                </a>
            ))}
        </div>
    );
};

export default SocialIcons;
