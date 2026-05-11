import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`wrapper ${styles.inner}`}>
        <span className={styles.copy}>
          &copy; {year} Infinite Leverage. James Murray.
        </span>
        <span className={styles.tagline}>Human decides. AI delivers.</span>
      </div>
    </footer>
  );
}
