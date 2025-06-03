'use client';

import { useEffect } from 'react';

export default function MobileMenu() {
  useEffect(() => {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }

    return () => {
      if (mobileMenuButton) {
        mobileMenuButton.removeEventListener('click', () => {
          mobileMenu?.classList.toggle('hidden');
        });
      }
    };
  }, []);

  return null;
} 