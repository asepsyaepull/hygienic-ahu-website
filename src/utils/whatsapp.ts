import { SITE_CONTENT } from '../data/site-content';

export const getWhatsAppUrl = (customMessage?: string): string => {
  const defaultMessage =
    'Halo Tim Sales Engineering AHUStar, saya ingin berkonsultasi mengenai pengadaan unit Hygienic AHU untuk proyek fasilitas kami.';
  return `https://wa.me/${SITE_CONTENT.company.whatsappNumber}?text=${encodeURIComponent(
    customMessage || defaultMessage
  )}`;
};
