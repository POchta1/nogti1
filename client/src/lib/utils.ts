import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function openWhatsAppBooking(serviceName?: string) {
  const phoneNumber = "4366493020595"; // WhatsApp format without + and spaces
  let message = "Привет! Хочу записаться на маникюр.";
  
  if (serviceName) {
    message += ` Интересует услуга: ${serviceName}.`;
  }
  
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
}
