
import React, { useState } from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { db } from '../firebase'; // Importa la base de datos
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'; // Funciones de Firebase

const Contact: React.FC = () => {
  const t = useTranslations();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [honeypot, setHoneypot] = useState(''); // Anti-spam field
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Anti-spam honeypot check
    if (honeypot) {
      console.log("Honeypot field filled. Submission blocked as likely spam.");
      // Silently pretend success to not alert the bot
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
      setTermsAccepted(false);
      return;
    }

    if (!name || !email || !message || !termsAccepted) {
      alert(t.contact_form_validation_error);
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
      // 1. Añade un nuevo documento a la colección "messages" para tener un registro.
      await addDoc(collection(db, "messages"), {
        name: name,
        email: email,
        message: message,
        sentAt: serverTimestamp() // Añade la fecha de envío
      });

      // 2. Crea el documento en la colección "mail" para activar el envío de email.
      await addDoc(collection(db, "mail"), {
        to: ['info@melenamarketing.com'],
        message: {
          subject: `Nuevo Mensaje de Contacto - ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6;">
              <h2>Nuevo mensaje desde el formulario de contacto</h2>
              <p><strong>Nombre:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <hr>
              <p><strong>Mensaje:</strong></p>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
          `,
        },
      });

      setStatus('success');
      // Limpia el formulario
      setName('');
      setEmail('');
      setMessage('');
      setTermsAccepted(false);
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
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.84 3.08 1.32 4.79 1.32 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2M12.04 3.64c4.54 0 8.24 3.7 8.24 8.24 0 4.54-3.7 8.24-8.24 8.24-1.54 0-3.03-.42-4.31-1.22l-.3-.18-3.21.84.86-3.12-.2-.32c-.86-1.31-1.32-2.83-1.32-4.41 0-4.54 3.7-8.24 8.24-8.24m-2.12 4.2c-.22 0-.44.02-.64.06-.2.04-.46.22-.68.46-.22.24-.76.76-.76 1.83 0 1.07.78 2.11.89 2.26.11.15 1.54 2.45 3.79 3.32.55.23 1 .37 1.35.47.35.1.66.09.9-.06.24-.15 1.03-.42 1.18-.83.15-.41.15-.76.1-.83-.05-.07-.18-.11-.38-.21s-1.17-.58-1.35-.64c-.18-.07-.31-.07-.44.07s-.51.64-.63.76c-.12.13-.23.14-.44.05-.2-.1-.84-.31-1.59-1-.59-.52-1-1.17-1.11-1.37s-.01-.31.07-.41c.08-.08.18-.22.27-.32.1-.11.13-.18.2-.31.06-.13.03-.24-.01-.32-.05-.08-.44-1.06-.6-1.45-.16-.39-.32-.34-.44-.34" />
              </svg>
              {t.contact_whatsapp}
            </a>
            <a 
              href="https://qrco.de/bcuiQW"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block transition-transform transform hover:scale-105"
            >
              <img 
                src="https://cdn.qr-code-generator.com/qrcode-preview?background_color=%23ffffff&foreground_color=%23000000&marker_left_inner_color=%23000000&marker_left_outer_color=%23000000&marker_right_inner_color=%23000000&marker_right_outer_color=%23000000&marker_bottom_inner_color=%23000000&marker_bottom_outer_color=%23000000&marker_left_template=version17&marker_right_template=version17&marker_bottom_template=version17&qr_code_pattern=rounded-1&qr_code_text=https%3A%2F%2Fqrco.de%2FbcuiQW&frame_name=no-frame&frame_color=%23000000&frame_icon_name=&frame_text=SCAN%20ME&frame_text_color=%23FFFFFF&frame_text_font=&frame_text_alignment=&Expires=1761155211&Signature=WXu7zZgLnaEy-VlfG3m51~1RwKrLAILcQXCGAq5GviVRXud~tpHMx4ZTC1SQ7BXYI-i8JsXqDo5RTDGlix9nukURDf--mB1wcK307vhRFmUWAEHEycXU~f-v9HCTeGJlWinSXvMwREFPoZ~PdzCZcPbKImLiXIkUN3mfU05gGG26MCJF2VIp3ljGS8pdNavHq0A0HxVUDT28gZBbU6QWGjUtg4Ia1E4iwJv3sKfFOLyENg75Qi-7KL8vsDh0LTI7cJWAy4bE2WjO4sxB-Qi1vtheUSWQRSfai0enqF8SimEz-X-QJyPhO3eQH9bRmRrvYqVJjSgq2Dd0o3vnjo-I9w__&Key-Pair-Id=KKMPOJU8AYATR"
                alt="QR Code to contact Melena Marketing"
                className="w-32 h-32 rounded-lg shadow-md"
              />
            </a>
          </div>
          <form onSubmit={handleSubmit} noValidate>
            <div className="space-y-4">
              {/* Honeypot field for spam prevention */}
              <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                <label htmlFor="honeypot">Do not fill this out if you are human</label>
                <input 
                  type="text" 
                  id="honeypot" 
                  name="honeypot" 
                  tabIndex={-1} 
                  value={honeypot} 
                  onChange={(e) => setHoneypot(e.target.value)} 
                  autoComplete="off"
                />
              </div>
              <div>
                <label htmlFor="name" className="sr-only">{t.contact_form_name}</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder={t.contact_form_name} className="w-full px-4 py-3 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500" required />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">{t.contact_form_email}</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t.contact_form_email} className="w-full px-4 py-3 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500" required />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">{t.contact_form_message}</label>
                <textarea id="message" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} placeholder={t.contact_form_message} className="w-full px-4 py-3 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500" required></textarea>
              </div>
              <div className="flex items-start gap-3">
                <input
                  id="contact-terms"
                  name="contact-terms"
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 mt-1 flex-shrink-0"
                  required
                />
                <label htmlFor="contact-terms" className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: t.contact_form_terms }} />
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