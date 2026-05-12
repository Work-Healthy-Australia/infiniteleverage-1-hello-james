import ContactForm from '@/components/ContactForm'

// ── Protocol data ──────────────────────────────────────────────────────────────

const tracks = [
  {
    number: '01',
    name: 'Mindset',
    full: true,
    protocols: [
      { id: 'P1', text: 'Humans are the orchestrator. The real intelligence is still you.' },
      { id: 'P2', text: 'The CMS is dead. AI is the CMS.' },
      { id: 'P3', text: 'The stack: Claude, GitHub, Vercel, Supabase. Master four tools. Ship anything.' },
      { id: 'P4', text: 'Agents are folders, not magic. Structure beats novelty.' },
    ],
  },
  {
    number: '02',
    name: 'Infrastructure',
    full: false,
    protocols: [
      { id: 'P5', text: 'GitHub — version control for all code and context.' },
      { id: 'P6', text: 'Vercel — deploys only via git push. Never vercel deploy directly.' },
      { id: 'P7', text: 'Supabase — data, auth, and subscribers.' },
    ],
  },
  {
    number: '03',
    name: 'Building',
    full: false,
    protocols: [
      { id: 'P8', text: 'Design system written before any component ever gets built.' },
      { id: 'P9', text: 'Concrete step-by-step workflows that turn intent into output.' },
      { id: 'P10', text: 'Communications go out automatically via scheduled PM runs.' },
      { id: 'P11', text: 'Skills for admin so humans never have to escalate for small things.' },
    ],
  },
  {
    number: '04',
    name: 'Team and Ops',
    full: false,
    protocols: [
      { id: 'P12', text: 'DevOps escalates to a human engineer when needed — never guesses on infrastructure.' },
      { id: 'P13', text: '8 fixed agent roles. No improvising new ones.' },
      { id: 'P14', text: 'PM plans every epic with acceptance criteria before a single line of code.' },
      { id: 'P15', text: 'PM reads git history before every task — always knows what shipped yesterday.' },
    ],
  },
  {
    number: '05',
    name: 'Continuity',
    full: false,
    protocols: [
      { id: 'P16', text: 'QA knows exactly what AI can and cannot test — and flags the rest to a human.' },
      { id: 'P17', text: 'Context handed off via BRIDGE.md and the memory system — no knowledge tax between sessions.' },
      { id: 'P18', text: 'Work outlives the operator — agents repo + sync-agents means any machine can be set up from GitHub.' },
    ],
  },
]

// ── Page ───────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <main className="hj-page">

      {/* ── SECTION 1: HERO ─────────────────────────────────────────────── */}
      <section className="hero">
        <div className="wrap">
          <span className="eyebrow">Infinite Leverage</span>
          <h1>
            Hello, <em>James.</em>
          </h1>
          <p className="tagline">
            A full marketing and development team powered by AI agents — orchestrated by a human
            who guarantees the outcome.
          </p>
          <div className="ctas">
            <a href="https://cal.com" className="btn btn-accent btn-lg">
              Book a Strategy Call
            </a>
            <a href="#how-it-works" className="btn btn-ghost">
              See how it works ↓
            </a>
          </div>
          <p className="trust">No retainer lock-in · Every deliverable reviewed by a human</p>
        </div>
      </section>

      {/* ── SECTION 2: WHAT YOU GET ─────────────────────────────────────── */}
      <section className="wyg">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">What You Get</span>
            <h2>Everything a marketing team does — without the team.</h2>
          </div>
          <div className="grid">
            {/* Card 1 */}
            <div className="card">
              <div className="icon">🧠</div>
              <h3>A full marketing team that runs itself</h3>
              <p>
                Strategy, copy, design, and publishing handled by AI agents orchestrated by James.
                You get consistent, high-quality output every week — without hiring a team.
              </p>
            </div>

            {/* Card 2 */}
            <div className="card">
              <div className="icon">🛠</div>
              <h3>A dev team on demand</h3>
              <p>
                Need a landing page, booking flow, or integration? The AI development team scopes,
                builds, and ships it. No contractors, no delays, no handoff friction.
              </p>
            </div>

            {/* Card 3 */}
            <div className="card">
              <div className="icon">📈</div>
              <h3>Measurable momentum</h3>
              <p>
                Weekly content, monthly campaigns, and quarterly strategy reviews. You always know
                what shipped, what&apos;s next, and what needs your input.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: HOW IT WORKS ──────────────────────────────────────── */}
      <section id="how-it-works" className="hiw">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">How It Works</span>
            <h2>How It Works</h2>
            <p>The 18 protocols behind every Infinite Leverage team.</p>
          </div>
          <div className="tracks">
            {tracks.map((track) => (
              <div
                key={track.number}
                className={`track${track.full ? ' full' : ''}`}
              >
                <p className="track-num">Track {track.number}</p>
                <h3>{track.name}</h3>
                <ol>
                  {track.protocols.map((p) => (
                    <li key={p.id}>
                      <span className="pid">{p.id}</span>
                      <span className="ptext">{p.text}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: CONTACT FORM ──────────────────────────────────────── */}
      <section
        style={{
          padding: '96px 0',
          background: 'var(--lc-surface)',
          borderBottom: '1px solid var(--lc-line)',
        }}
      >
        <div className="wrap" style={{ maxWidth: '560px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="eyebrow">Get in Touch</span>
            <h2
              style={{
                fontFamily: 'var(--lc-serif)',
                fontWeight: 300,
                fontSize: 'clamp(32px, 4vw, 48px)',
                letterSpacing: '-0.02em',
                color: 'var(--lc-ink)',
                margin: '0 0 16px',
              }}
            >
              Ready to build your AI team?
            </h2>
            <p style={{ fontSize: '24px', color: 'var(--lc-ink-soft)', margin: 0 }}>
              Let&apos;s talk.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* ── SECTION 5: FINAL CTA ─────────────────────────────────────────── */}
      <section className="final-cta">
        <div className="wrap">
          <h2>Ready to move at the speed of AI?</h2>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <a href="https://cal.com" className="btn btn-accent btn-lg">
              Book a Strategy Call
            </a>
          </div>
          <p className="trust-line">Every deliverable reviewed by a human before it reaches you.</p>
        </div>
      </section>

    </main>
  )
}
