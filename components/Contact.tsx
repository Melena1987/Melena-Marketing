
import React, { useState } from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { db } from '../firebase'; // Importa la base de datos
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'; // Funciones de Firebase

const Contact: React.FC = () => {
  const t = useTranslations();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('Por favor, completa todos los campos.');
      return;
    }
    
    // Si la base de datos no está inicializada (faltan las claves), no intentar enviar.
    if (!db) {
      console.error("Firebase no está configurado. No se puede enviar el mensaje.");
      setStatus('error');
      return;
    }
    
    setStatus('sending');
    try {
      // Añade un nuevo documento a la colección "messages"
      await addDoc(collection(db, "messages"), {
        name: name,
        email: email,
        message: message,
        sentAt: serverTimestamp() // Añade la fecha de envío
      });
      setStatus('success');
      // Limpia el formulario
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error("Error al enviar el mensaje: ", error);
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-800">{t.contact_title}</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            {t.contact_subtitle}
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 bg-gray-50 p-8 rounded-lg shadow-xl">
          <div>
            <h3 className="text-2xl font-bold text-blue-800 mb-6">{t.contact_info_title}</h3>
            <div className="space-y-4 text-gray-700">
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                660 532 823
              </p>
              <a href="mailto:info@melenamarketing.com" className="flex items-center hover:text-blue-800 transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                info@melenamarketing.com
              </a>
            </div>
             <a 
              href="https://api.whatsapp.com/send?phone=34660532823&text="
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 bg-green-500 text-white font-bold py-3 px-6 rounded-md hover:bg-green-600 transition duration-300 transform hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <g transform="scale(1.1) translate(-1.2, -1.2)">
                      <path d="M16.6 14.2c-.3-.2-1.8-1-2-1.1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.8-1-1.4-1.7-1.5-2-.2-.3 0-.5.1-.6s.3-.4.4-.5c.1-.1.2-.3.2-.4.1-.1.1-.3 0-.4-.1-.1-.7-1.7-.9-2.3-.2-.6-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.2 4.9 4.3.6.3 1.2.4 1.6.5.6.1 1.1.1 1.5-.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.6-.4z M12.1 2.1C6.6 2.1 2.2 6.5 2.2 12c0 1.8.5 3.5 1.4 5l-1.5 5.3 5.5-1.4c1.4.9 3 1.3 4.7 1.3h.1c5.5 0 9.9-4.4 9.9-9.9s-4.4-9.8-9.9-9.8zM12.1 20.2c-1.5 0-3-.4-4.3-1.1l-.3-.2-3.2.8.8-3.1-.2-.3c-.8-1.3-1.2-2.8-1.2-4.4 0-4.5 3.7-8.2 8.2-8.2 2.2 0 4.3.9 5.8 2.4 1.6 1.5 2.4 3.6 2.4 5.8.1 4.5-3.6 8.2-8.1 8.2z"/>
                  </g>
              </svg>
              {t.contact_whatsapp}
            </a>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">{t.contact_form_name}</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder={t.contact_form_name} className="w-full px-4 py-3 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">{t.contact_form_email}</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t.contact_form_email} className="w-full px-4 py-3 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">{t.contact_form_message}</label>
                <textarea id="message" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} placeholder={t.contact_form_message} className="w-full px-4 py-3 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"></textarea>
              </div>
              <button type="submit" disabled={status === 'sending'} className="w-full bg-yellow-400 text-blue-800 font-bold py-3 px-6 rounded-md hover:bg-yellow-500 transition duration-300 disabled:bg-gray-400">
                {status === 'sending' ? 'Enviando...' : t.contact_form_submit}
              </button>
              {status === 'success' && <p className="text-green-600">¡Mensaje enviado con éxito!</p>}
              {status === 'error' && <p className="text-red-600">Hubo un error al enviar el mensaje. Inténtalo de nuevo.</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;