import styles from "./Nav.module.css";

const CAL_URL = "https://cal.com";

export default function Nav() {
  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <div className={`wrapper ${styles.inner}`}>
        <span className={styles.logo}>Infinite Leverage</span>
        <a href={CAL_URL} className={styles.cta} target="_blank" rel="noopener noreferrer">
          Book a Strategy Call
        </a>
      </div>
    </nav>
  );
}
