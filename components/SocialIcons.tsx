
import React from 'react';

interface SocialIconsProps {
  variant?: 'light' | 'dark';
}

const SocialIcons: React.FC<SocialIconsProps> = ({ variant = 'dark' }) => {
    const colorClasses = variant === 'dark'
      ? 'text-blue-800 hover:text-yellow-500'
      : 'text-white hover:text-yellow-400';

    const socialLinks = [
        { 
            name: 'WhatsApp', 
            href: 'https://api.whatsapp.com/send?phone=34660532823&text=', 
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.84 3.08 1.32 4.79 1.32 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2M12.04 3.64c4.54 0 8.24 3.7 8.24 8.24 0 4.54-3.7 8.24-8.24 8.24-1.54 0-3.03-.42-4.31-1.22l-.3-.18-3.21.84.86-3.12-.2-.32c-.86-1.31-1.32-2.83-1.32-4.41 0-4.54 3.7-8.24 8.24-8.24m-2.12 4.2c-.22 0-.44.02-.64.06-.2.04-.46.22-.68.46-.22.24-.76.76-.76 1.83 0 1.07.78 2.11.89 2.26.11.15 1.54 2.45 3.79 3.32.55.23 1 .37 1.35.47.35.1.66.09.9-.06.24-.15 1.03-.42 1.18-.83.15-.41.15-.76.1-.83-.05-.07-.18-.11-.38-.21s-1.17-.58-1.35-.64c-.18-.07-.31-.07-.44.07s-.51.64-.63.76c-.12.13-.23.14-.44.05-.2-.1-.84-.31-1.59-1-.59-.52-1-1.17-1.11-1.37s-.01-.31.07-.41c.08-.08.18-.22.27-.32.1-.11.13-.18.2-.31.06-.13.03-.24-.01-.32-.05-.08-.44-1.06-.6-1.45-.16-.39-.32-.34-.44-.34" />
                </svg>
            )
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
                        fontSize="20"
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
        <div className="flex items-center space-x-4">
            {socialLinks.map(link => (
                <a key={link.name} href={link.href} title={link.name} target="_blank" rel="noopener noreferrer" className={`${colorClasses} transition-colors duration-300`}>
                    {link.icon}
                </a>
            ))}
        </div>
    );
};

export default SocialIcons;