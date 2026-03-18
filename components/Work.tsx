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
          
           <a key={project.number}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.filmCard}
          >
            <div className={styles.filmPreview}>
              <iframe
                src={project.url}
                title={project.client}
                scrolling="no"
                loading="lazy"
              />
              <div className={styles.filmOverlay} />
            </div>
            <div className={styles.filmMeta}>
              <span className={styles.filmNumber}>0{project.number}</span>
              <span className={styles.filmClient}>{project.client}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}