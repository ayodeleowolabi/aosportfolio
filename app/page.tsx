import styles from './page.module.css';
import Nav from '../components/Nav';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>

        <div className={styles.metaTopLeft}>
          <span>Ayodele Owolabi Studio</span>
        </div>

        <Nav />

        <div className={styles.heroImage}>
          <img src="/ayo-hero3.jpg" alt="Ayodele Owolabi" />
        </div>

    <h1 className={styles.heroTitle}>AOS</h1>

<div className={styles.heroBottomBlock}>
  <p className={styles.heroHeadline}>
    Websites Built to Match Your Level
  </p>

  <a href="/work" className={styles.heroCta}>
    <span>See the Work →</span>
  </a>
</div>

      </section>
    </main>
  );
}