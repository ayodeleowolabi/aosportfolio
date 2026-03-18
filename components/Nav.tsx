'use client';

import { useState, useEffect } from 'react';
import styles from '../app/page.module.css';

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Close on route change / escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <>
      {/* ── HAMBURGER BUTTON — always visible on mobile ── */}
      <button
        className={`${styles.navToggle} ${open ? styles.navToggleOpen : ''}`}
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>

      {/* ── FULL-SCREEN OVERLAY ── */}
      <div
        className={`${styles.navOverlay} ${open ? styles.navOverlayOpen : ''}`}
        aria-hidden={!open}
      >
        <nav className={styles.navOverlayLinks}>
          {[
            { href: '/',          label: 'Home'     },
            { href: '/work',      label: 'Work'     },
            { href: '/about',     label: 'About'    },
            { href: '/services',  label: 'Services' },
            { href: '/contact',   label: 'Contact'  },
          ].map(({ href, label }) => (
            
            <a  key={href}
              href={href}
              className={styles.navOverlayLink}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>

      {/* ── DESKTOP NAV — unchanged ── */}
      <nav className={`${styles.metaTopRight} ${styles.desktopNav}`}>
        <a href="/">Home</a>
        <a href="/work">Work</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </nav>
    </>
  );
}