import styles from "./WhatYouGet.module.css";

const outcomes = [
  {
    icon: "🤖",
    heading: "A full marketing team that runs itself",
    body: "Strategy, copy, design, and publishing handled by AI agents orchestrated by James. You get consistent output without hiring a team.",
  },
  {
    icon: "⚡",
    heading: "A dev team on demand",
    body: "Need a landing page, booking flow, or integration? The AI development team scopes, builds, and ships it. No contractors, no delays.",
  },
  {
    icon: "📈",
    heading: "Measurable momentum",
    body: "Weekly content, monthly campaigns, and quarterly strategy reviews. You always know what is happening and what is coming next.",
  },
] as const;

export default function WhatYouGet() {
  return (
    <section className={styles.section} aria-labelledby="wyg-heading">
      <div className="wrapper">
        <h2 id="wyg-heading" className={styles.heading}>
          What You Get
        </h2>
        <div className={styles.grid}>
          {outcomes.map((item) => (
            <article key={item.heading} className={styles.card}>
              <div className={styles.icon} aria-hidden="true">
                {item.icon}
              </div>
              <h3 className={styles.cardHeading}>{item.heading}</h3>
              <p className={styles.cardBody}>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
