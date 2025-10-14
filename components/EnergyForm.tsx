
import React, { useState, useRef } from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { db, storage } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const EnergyForm: React.FC = () => {
  const t = useTranslations();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };
  
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !termsAccepted) {
      alert(t.energy_form_validation_error);
      return;
    }

    if (!db || !storage) {
      console.error("Firebase no está configurado. No se puede enviar el formulario.");
      setStatus('error');
      return;
    }

    setStatus('sending');
    try {
      let filePath = 'No file uploaded';
      let fileDownloadURL: string | null = null;
      
      // 1. Subir el archivo a Storage si existe y obtener la URL de descarga
      if (file) {
        filePath = `energy-bills/${Date.now()}_${file.name}`;
        const fileRef = ref(storage, filePath);
        const uploadResult = await uploadBytes(fileRef, file);
        fileDownloadURL = await getDownloadURL(uploadResult.ref);
      }

      // 2. Guardar los datos en Firestore para tener un registro
      await addDoc(collection(db, "energyLeads"), {
        name: name,
        phone: phone,
        email: email,
        filePath: filePath,
        downloadURL: fileDownloadURL,
        sentAt: serverTimestamp()
      });

      // 3. Crear el documento en la colección "mail" para activar el envío de email
      await addDoc(collection(db, "mail"), {
        to: ['info@melenamarketing.com'],
        message: {
          subject: `Nueva Petición de Factura Energética - ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6;">
              <h2>Nueva petición desde el formulario de factura energética</h2>
              <p><strong>Nombre:</strong> ${name}</p>
              <p><strong>Teléfono:</strong> ${phone}</p>
              <p><strong>Email:</strong> ${email || 'No proporcionado'}</p>
              <hr>
              ${fileDownloadURL ? `<p><strong>Factura Adjunta:</strong> <a href="${fileDownloadURL}" target="_blank" rel="noopener noreferrer">Ver/Descargar Factura</a></p>` : '<p><strong>Factura Adjunta:</strong> No se adjuntó ninguna factura.</p>'}
            </div>
          `,
        },
      });


      setStatus('success');
      // Resetear el formulario
      setName('');
      setPhone('');
      setEmail('');
      setFile(null);
      setFileName('');
      setTermsAccepted(false);
      if(fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error("Error al enviar el formulario: ", error);
      setStatus('error');
    }
  };

  return (
    <section id="energy-form-section" className="bg-blue-100 py-12 scroll-mt-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800" style={{fontFamily: "'Oswald', sans-serif"}}>{t.energy_form_title}</h1>
          <p className="mt-4 text-lg text-gray-700">{t.energy_form_subtitle1}</p>
          <p className="text-lg text-gray-700 font-semibold">{t.energy_form_subtitle2}</p>
          <a href="#energy-info-section" className="mt-4 inline-flex items-center justify-center gap-2 text-gray-600 hover:text-blue-800 transition-colors duration-300 group">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span className="font-medium group-hover:underline">{t.energy_form_more_info}</span>
          </a>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6 bg-blue-100 p-0 md:p-8 rounded-lg">
          <div className="text-center">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              accept="application/pdf,image/*,.pdf,.doc,.docx,.jpg,.jpeg,.png"
              aria-label={t.energy_form_upload_label}
            />
            <button
              type="button"
              onClick={handleUploadClick}
              className="bg-blue-500 text-white font-bold py-6 px-12 rounded-2xl text-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg w-full sm:w-auto"
            >
              {t.energy_form_upload_label}
            </button>
            {fileName && <p className="mt-2 text-sm text-gray-600">Archivo seleccionado: {fileName}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder={t.contact_form_name + ' *'} required className="w-full px-4 py-3 rounded-xl border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500" />
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={t.energy_form_phone + ' *'} required className="w-full px-4 py-3 rounded-xl border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500" />
          </div>

          <div>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t.contact_form_email} className="w-full px-4 py-3 rounded-xl border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500" />
          </div>
          
          <div className="flex items-start gap-3">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 mt-1 flex-shrink-0"
              required
            />
            <label htmlFor="terms" className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: t.energy_form_terms }} />
          </div>

          <button type="submit" disabled={status === 'sending'} className="w-full bg-yellow-400 text-blue-800 font-bold py-3 px-6 rounded-md hover:bg-yellow-500 transition duration-300 disabled:bg-gray-400">
            {status === 'sending' ? t.contact_form_sending : t.contact_form_submit}
          </button>
          
          {status === 'success' && <p className="text-green-600 text-center font-semibold">{t.energy_page_send_success}</p>}
          {status === 'error' && <p className="text-red-600 text-center font-semibold">{t.energy_page_send_error}</p>}
        </form>
      </div>
    </section>
  );
};

export default EnergyForm;
