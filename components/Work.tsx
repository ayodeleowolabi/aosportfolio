import styles from '../app/page.module.css';
import { projects } from '../data/projects';
import Nav from '../components/Nav';

export default function Work() {
  return (
    <section className={styles.work}>
      <Nav />
      <div className={styles.workHeader}>
        <span className={styles.workLabel}>Selected Work</span>
      </div>

      <div className={styles.filmStrip}>
        {projects.map((project) => (
          
           <a key={project.url}              // ← unique key, fixes the console error
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.filmCard}
          >
            <div className={styles.filmPreview}>
              <iframe
                src={project.url}
                title={project.category}   // ← was project.client which is also empty
                scrolling="no"
                loading="lazy"
              />
              <div className={styles.filmOverlay} />
            </div>
            <div className={styles.filmMeta}>
              {/* filmNumber span removed */}
              <span className={styles.filmClient}>{project.category}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}