import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

import type { Language } from './translations';
import { getTranslation } from './translations';

export function openWhatsAppBooking(serviceName?: string, language: Language = 'en') {
  const phoneNumber = "4366493020595"; // WhatsApp format without + and spaces
  let message = getTranslation('whatsappBooking', language);
  
  if (serviceName) {
    message += ` ${getTranslation('whatsappService', language)}${serviceName}.`;
  }
  
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
}
