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
  <p>I build websites for people who take their work seriously.</p>
  <p>Whether you're a creative, a small business owner, or an independent professional, if you've put in the years building something real, your website should reflect that. Not a template. Not something generic. Something that actually looks like you and works like a business.</p>
  <p>A weak website doesn't just look bad, it undermines everything you've built. Your commitment, your craft, your reputation. I know what it costs to show up at the highest level and have nothing backing you up online.</p>
  <p>I'm Ayo, founder of AOS Studio. I'm a web developer and working artist who has performed at the Kennedy Center, the Apollo Theater, and the White House, and toured internationally across the US, Spain, Portugal, and the UK. I understand what it means to have a brand, a presence, and a story worth telling because I live that life too.</p>
  <p>Every project starts with who you are. You send me your vision, your world, your inspiration and I will build something custom, fully coded, and fully deployed.</p>
</div>
          <a href="/contact" className={styles.aboutCTA}>Let's Work →</a>
        </div>

      </main>
    </>
  );
}