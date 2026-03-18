'use client';

import { useState } from 'react';
import styles from './page.module.css';
import Nav from '../../components/Nav';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const pkg = formData.get('package') as string;
    const message = formData.get('message') as string;

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, package: pkg, message }),
      });

      if (res.ok) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <main className={styles.main}>
      <Nav />

      <section className={styles.header}>
        <p className={styles.label}>Get In Touch</p>
        <h1 className={styles.title}>Contact</h1>
        <div className={styles.rule} />
      </section>

      <section className={styles.body}>

        <div className={styles.left}>
          <p className={styles.intro}>
            Ready to build something that matches the level you operate at?
            Tell us about your project and we'll be in touch within 48 hours.
          </p>
          <div className={styles.details}>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Response Time</span>
              <span className={styles.detailValue}>Within 48 Hours</span>
            </div>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Starting At</span>
              <span className={styles.detailValue}>$300</span>
            </div>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Turnaround</span>
              <span className={styles.detailValue}>1 Week</span>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          {status === 'sent' ? (
            <div className={styles.successMessage}>
              <p>Message received.</p>
              <p>We'll be in touch within 48 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>

              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="name">Name</label>
                <input
                  className={styles.fieldInput}
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your Name"
                  autoComplete="off"
                />
              </div>

              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="email">Email</label>
                <input
                  className={styles.fieldInput}
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  autoComplete="off"
                />
              </div>

              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="package">Package</label>
                <select
                  className={styles.fieldSelect}
                  id="package"
                  name="package"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>Select a Package</option>
                  <option value="Starter — $300">Starter — $300</option>
                  <option value="Studio — Starting at $500">Studio — Starting at $500</option>
                  <option value="Signature — Starting at $950">Signature — Starting at $950</option>
                  <option value="Not Sure Yet">Not Sure Yet</option>
                </select>
              </div>

              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="message">Message</label>
                <textarea
                  className={styles.fieldTextarea}
                  id="message"
                  name="message"
                  required
                  placeholder="Tell us about your project, your vision, your world..."
                  rows={5}
                />
              </div>

              {status === 'error' && (
                <p className={styles.errorMessage}>
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message →'}
              </button>

            </form>
          )}
        </div>

      </section>
    </main>
  );
}