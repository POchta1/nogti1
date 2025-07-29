import type { Language } from './translations';

const WHATSAPP_NUMBER = '+43 664 93020595';

interface WhatsAppMessages {
  [key: string]: {
    booking: string;
    service: string;
    consultation: string;
  };
}

const whatsappMessages: WhatsAppMessages = {
  de: {
    booking: 'Hallo! Ich möchte einen Termin für eine Maniküre buchen.',
    service: 'Interessiert an der Dienstleistung: ',
    consultation: 'Beratung',
  },
  en: {
    booking: 'Hello! I want to book a manicure appointment.',
    service: 'Interested in service: ',
    consultation: 'Consultation',
  },
  uk: {
    booking: 'Привіт! Хочу записатися на манікюр.',
    service: 'Цікавить послуга: ',
    consultation: 'Консультація',
  },
};

export function openWhatsAppBooking(language: Language, serviceName?: string) {
  const messages = whatsappMessages[language];
  let message = messages.booking;
  
  if (serviceName) {
    message += `\n${messages.service}${serviceName}`;
  }
  
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
}

export function openWhatsAppConsultation(language: Language) {
  const messages = whatsappMessages[language];
  const message = `${messages.booking}\n${messages.service}${messages.consultation}`;
  
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
}