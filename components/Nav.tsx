import styles from '../app/page.module.css';

export default function Nav() {
  return (
    <nav className={styles.metaTopRight}>
      <a href="/">Home</a>
      <a href="/work">Work</a>
      <a href="/about">About</a>
      <a href="/services">Services</a>
      <a href="/contact">Contact</a>
    </nav>
  );
}