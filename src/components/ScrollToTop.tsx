import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component:
 * - When pathname changes, scroll to top (instant).
 * - If there is a hash, we let Index.tsx handle the fragment scrolling.
 *   However, if the fragment isn't found after a short delay, fall back to top.
 */

const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash fragment, wait a bit to allow the target element to mount.
    // Let Index.tsx handle scrolling to the fragment. If not found, fallback to top.
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (!el) {
          window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        }
      }, 120);
      return;
    }

    // No hash: scroll to top on route change
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
