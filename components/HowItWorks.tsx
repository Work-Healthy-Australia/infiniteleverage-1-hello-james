import styles from "./HowItWorks.module.css";

const protocols = [
  {
    heading: "You set the direction",
    body: "James runs a strategy session to define your goals, audience, and the outcomes that matter.",
  },
  {
    heading: "AI agents research and plan",
    body: "The team maps out content, campaigns, and builds for the quarter — no guesswork, just structured execution.",
  },
  {
    heading: "Human approves before anything goes live",
    body: "Nothing publishes without your sign-off. Every deliverable lands in your inbox for review first.",
  },
  {
    heading: "Agents execute in parallel",
    body: "Copy, design, development, and email campaigns run simultaneously — what used to take weeks takes days.",
  },
  {
    heading: "QA and DevOps verify quality",
    body: "Every deliverable is tested before it reaches you. Broken builds and bad copy are caught before they leave the team.",
  },
  {
    heading: "You review a weekly brief",
    body: "One document. What shipped, what is next, and exactly what needs your input. No noise, no surprises.",
  },
] as const;

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className={styles.section}
      aria-labelledby="hiw-heading"
    >
      <div className="wrapper">
        <h2 id="hiw-heading" className={styles.heading}>
          How It Works
        </h2>
        <ol className={styles.grid}>
          {protocols.map((item, i) => (
            <li key={item.heading} className={styles.item}>
              <div className={styles.number} aria-hidden="true">
                {i + 1}
              </div>
              <div className={styles.content}>
                <h3 className={styles.itemHeading}>{item.heading}</h3>
                <p className={styles.itemBody}>{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
