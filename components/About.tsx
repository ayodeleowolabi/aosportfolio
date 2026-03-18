import styles from '../app/page.module.css';
import Nav from './Nav';

export default function About() {
  return (
    <>
      <Nav />
      <main className={styles.aboutPage}>

        <div className={styles.aboutName}>
          <span>Ayodele</span>
          <span>Owolabi</span>
          <span>Studio</span>
        </div>

        <div className={styles.aboutRight}>
          <div className={styles.aboutBody}>
            <p>I build for creative people because I understand what's at stake. A weak website doesn't just look bad — it undermines everything you've built. Your commitment, your craft, your years of work. I've been on that stage. I know what it costs to show up at the highest level and have nothing backing you up online.</p>
            <p>I'm a web developer and interdisciplinary artist — former math and music teacher and a working artist across the US, Spain, Portugal, and the UK. I understand your world because I live in it.</p>
            <p>When we work together, your website will finally match the level you're already operating at.</p>
          </div>
          <a href="/contact" className={styles.aboutCTA}>Let's Work →</a>
        </div>

      </main>
    </>
  );
}