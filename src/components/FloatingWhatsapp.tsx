import React from 'react';

const WA_NUMBER = '62811854581';
const WA_LINK = `https://wa.me/${WA_NUMBER}`;

const trackEvent = (name: string, params?: Record<string, any>) => {
  try {
    // @ts-ignore
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      // @ts-ignore
      (window as any).gtag('event', name, params || {});
    }
  } catch (err) {
    // ignore
  }
};

const FloatingWhatsApp: React.FC = () => {
  const onClick = () => {
    trackEvent('whatsapp_click', {
      event_category: 'engagement',
      event_label: 'floating_whatsapp_bubble',
      phone: WA_NUMBER,
    });
    // open WA in new tab (mobile will open whatsapp app)
    window.open(WA_LINK, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={onClick}
      aria-label="Chat via WhatsApp"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl z-50 flex items-center justify-center transition-transform transform hover:scale-105 focus:outline-none"
    >
      {/* Pulse ring */}
      <span className="absolute -inset-1 rounded-full opacity-0 animate-ping bg-green-400" aria-hidden />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 relative"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.52 3.48A11.82 11.82 0 0 0 12 0C5.37 0 0 5.37 0 12a11.9 11.9 0 0 0 1.68 6.04L0 24l6.27-1.64A11.86 11.86 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.18-1.24-6.17-3.48-8.52zM12 21.6c-1.9 0-3.73-.55-5.31-1.59l-.38-.24-3.72.97L3 17.66l-.25-.4A9.57 9.57 0 0 1 2.4 12c0-5.29 4.31-9.6 9.6-9.6 2.57 0 5.02 1 6.88 2.83A9.58 9.58 0 0 1 21.6 12c0 5.29-4.31 9.6-9.6 9.6zm5.02-7.86c-.27-.14-1.62-.8-1.87-.89-.25-.09-.43-.14-.61.14-.18.27-.7.89-.86 1.07-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.34-.79-.7-1.32-1.56-1.48-1.83-.16-.27-.02-.42.12-.56.13-.13.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.28 0 1.34.99 2.64 1.13 2.82.14.18 1.95 3.02 4.71 4.24.66.28 1.17.45 1.57.57.66.21 1.27.18 1.75.11.53-.08 1.62-.66 1.85-1.3.23-.64.23-1.19.16-1.3-.07-.11-.25-.18-.52-.32z"/>
      </svg>
    </button>
  );
};

export default FloatingWhatsApp;
