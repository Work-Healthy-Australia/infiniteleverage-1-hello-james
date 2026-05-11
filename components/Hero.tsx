import styles from "./Hero.module.css";

const CAL_URL = "https://cal.com";

export default function Hero() {
  return (
    <section className={styles.section} aria-labelledby="hero-heading">
      <div className={`wrapper ${styles.inner}`}>
        <p className={styles.eyebrow}>James Murray — Operator</p>
        <h1 id="hero-heading" className={styles.heading}>
          Infinite Leverage
        </h1>
        <p className={styles.tagline}>
          A full marketing and development team powered by AI agents —
          orchestrated by a human who guarantees the outcome.
        </p>
        <div className={styles.actions}>
          <a
            href={CAL_URL}
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Strategy Call
          </a>
          <a href="#how-it-works" className={styles.secondary}>
            See how it works
          </a>
        </div>
      </div>
    </section>
  );
}
