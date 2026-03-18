import styles from './page.module.css';
import Nav from '../../components/Nav';
import Link from 'next/link';

export default function Services() {
  return (
    <main className={styles.main}>
      <Nav />

      <section className={styles.header}>
        <p className={styles.label}>What We Build</p>
        <h1 className={styles.title}>Services</h1>
        <div className={styles.rule} />
      </section>

      <section className={styles.intro}>
        <p>
          Every project starts with who you are. Send us your inspiration,
          your vision, your world — and we build a site that finally matches
          the level you operate at. Custom coded. Fully deployed. No templates.
        </p>
      </section>

      <section className={styles.packages}>

        <div className={styles.package}>
          <div className={styles.packageHeader}>
            <span className={styles.packageNumber}>01</span>
            <span className={styles.packageName}>Starter</span>
            <span className={styles.packagePrice}>$300</span>
          </div>
          <div className={styles.packageDivider} />
          <ul className={styles.packageList}>
            <li>3 Pages — Home, About, Contact</li>
            <li>Custom Design — you send the inspo</li>
            <li>Mobile Responsive</li>
            <li>Contact Form</li>
            <li>Live Deployment</li>
            <li>1 Round of Revisions</li>
            <li>1 Week Turnaround</li>
          </ul>
          <Link href="/contact" className={styles.packageCta}>
            Start a Project →
          </Link>
        </div>

        <div className={`${styles.package} ${styles.packageFeatured}`}>
          <div className={styles.packageHeader}>
            <span className={styles.packageNumber}>02</span>
            <span className={styles.packageName}>Studio</span>
            <span className={styles.packagePrice}>Starting at $500</span>
          </div>
          <div className={styles.packageDivider} />
          <ul className={styles.packageList}>
            <li>5 Pages — Full Site</li>
            <li>Everything in Starter</li>
            <li>Basic SEO Setup</li>
            <li>2 Rounds of Revisions</li>
            <li>10 Day Turnaround</li>
          </ul>
          <Link href="/contact" className={styles.packageCta}>
            Start a Project →
          </Link>
        </div>

        <div className={styles.package}>
          <div className={styles.packageHeader}>
            <span className={styles.packageNumber}>03</span>
            <span className={styles.packageName}>Signature</span>
            <span className={styles.packagePrice}>Starting at $950</span>
          </div>
          <div className={styles.packageDivider} />
          <ul className={styles.packageList}>
            <li>Up to 8 Pages</li>
            <li>Everything in Studio</li>
            <li>Motion & Animation</li>
            <li>3 Rounds of Revisions</li>
            <li>30-Day Post-Launch Support</li>
            <li>2–3 Week Turnaround</li>
          </ul>
          <Link href="/contact" className={styles.packageCta}>
            Start a Project →
          </Link>
        </div>

      </section>

      <section className={styles.bottomCta}>
        <p className={styles.bottomCtaText}>
          Not sure which package fits? Let's talk.
        </p>
        <Link href="/contact" className={styles.bottomCtaBtn}>
          Get in Touch →
        </Link>
      </section>

    </main>
  );
}