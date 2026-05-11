import styles from "./FinalCta.module.css";

const CAL_URL = "https://cal.com";

export default function FinalCta() {
  return (
    <section
      id="contact"
      className={styles.section}
      aria-labelledby="cta-heading"
    >
      <div className={`wrapper ${styles.inner}`}>
        <h2 id="cta-heading" className={styles.heading}>
          Ready to run your business with leverage?
        </h2>
        <p className={styles.trust}>
          Every deliverable reviewed by a human before it reaches you.
        </p>
        <a
          href={CAL_URL}
          className={styles.ctaBtn}
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a Strategy Call
        </a>
      </div>
    </section>
  );
}
