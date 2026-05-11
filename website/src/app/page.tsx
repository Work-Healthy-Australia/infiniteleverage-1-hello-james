import ContactForm from '@/components/ContactForm'

// ── Protocol data ──────────────────────────────────────────────────────────────

const tracks = [
  {
    number: '01',
    name: 'Mindset',
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
    protocols: [
      { id: 'P5', text: 'GitHub — version control for all code and context.' },
      { id: 'P6', text: 'Vercel — deploys only via git push. Never vercel deploy directly.' },
      { id: 'P7', text: 'Supabase — data, auth, and subscribers.' },
    ],
  },
  {
    number: '03',
    name: 'Building',
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
    <main>
      {/* ── SECTION 1: HERO ─────────────────────────────────────────────── */}
      <section
        className="min-h-screen flex flex-col items-center justify-center px-6 py-24 text-white text-center"
        style={{ background: 'var(--ink)' }}
      >
        <h1 className="text-5xl font-bold tracking-tight mb-6">
          Hello, James.
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed mb-10" style={{ color: 'var(--gray-3)' }}>
          A full marketing and development team powered by AI agents — orchestrated by a human
          who guarantees the outcome.
        </p>
        <a
          href="https://cal.com"
          className="inline-block px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity mb-6 text-white"
          style={{ background: 'var(--blue)' }}
        >
          Book a Strategy Call
        </a>
        <a
          href="#protocols"
          className="text-sm underline underline-offset-4 transition-opacity hover:opacity-70"
          style={{ color: 'var(--gray-1)' }}
        >
          See how it works ↓
        </a>
      </section>

      {/* ── SECTION 2: WHAT YOU GET ─────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--cream)' }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl font-bold tracking-tight text-center mb-12"
            style={{ color: 'var(--ink)' }}
          >
            What You Get
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div
              className="rounded-2xl p-8"
              style={{ background: 'var(--paper)', border: '1px solid var(--rule)' }}
            >
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--ink)' }}>
                A full marketing team that runs itself
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--gray-2)' }}>
                Strategy, copy, design, and publishing handled by AI agents orchestrated by James.
                You get consistent, high-quality output every week — without hiring a team.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="rounded-2xl p-8"
              style={{ background: 'var(--paper)', border: '1px solid var(--rule)' }}
            >
              <div className="text-4xl mb-4">🛠</div>
              <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--ink)' }}>
                A dev team on demand
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--gray-2)' }}>
                Need a landing page, booking flow, or integration? The AI development team scopes,
                builds, and ships it. No contractors, no delays, no handoff friction.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="rounded-2xl p-8"
              style={{ background: 'var(--paper)', border: '1px solid var(--rule)' }}
            >
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--ink)' }}>
                Measurable momentum
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--gray-2)' }}>
                Weekly content, monthly campaigns, and quarterly strategy reviews. You always know
                what shipped, what&apos;s next, and what needs your input.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: THE 18 PROTOCOLS ─────────────────────────────────── */}
      <section id="protocols" className="py-24 px-6" style={{ background: 'var(--paper)' }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl font-bold tracking-tight text-center mb-3"
            style={{ color: 'var(--ink)' }}
          >
            The 18 Protocols
          </h2>
          <p className="text-center mb-12" style={{ color: 'var(--gray-2)' }}>
            The operating system behind every Infinite Leverage team.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tracks.map((track, index) => (
              <div
                key={track.number}
                className={`rounded-2xl p-8${index === 0 ? ' md:col-span-2' : ''}`}
                style={{
                  background: 'var(--blue-soft)',
                  border: '1px solid var(--rule)',
                }}
              >
                <p
                  className="text-xs font-mono font-semibold uppercase tracking-widest mb-1"
                  style={{ color: 'var(--blue)' }}
                >
                  Track {track.number}
                </p>
                <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--ink)' }}>
                  {track.name}
                </h3>
                <ol className="space-y-2">
                  {track.protocols.map((p) => (
                    <li key={p.id} className="flex gap-3 text-sm">
                      <span className="font-mono font-bold shrink-0" style={{ color: 'var(--blue)' }}>
                        {p.id}
                      </span>
                      <span style={{ color: 'var(--ink-soft)' }}>{p.text}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: CONTACT FORM ──────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--cream)' }}>
        <div className="max-w-xl mx-auto">
          <h2
            className="text-3xl font-bold tracking-tight text-center mb-3"
            style={{ color: 'var(--ink)' }}
          >
            Get in Touch
          </h2>
          <p className="text-center mb-10" style={{ color: 'var(--gray-2)' }}>
            Ready to build your AI team? Let&apos;s talk.
          </p>
          <ContactForm />
        </div>
      </section>

      {/* ── SECTION 5: FINAL CTA ─────────────────────────────────────────── */}
      <section
        className="py-24 px-6 text-center text-white"
        style={{ background: 'var(--ink)' }}
      >
        <a
          href="https://cal.com"
          className="inline-block px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity mb-6 text-white"
          style={{ background: 'var(--blue)' }}
        >
          Book a Strategy Call
        </a>
        <p className="text-sm" style={{ color: 'var(--gray-1)' }}>
          Every deliverable reviewed by a human before it reaches you.
        </p>
      </section>
    </main>
  )
}
