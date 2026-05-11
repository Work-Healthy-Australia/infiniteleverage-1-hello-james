'use client'

import { useActionState } from 'react'
import { submitContact } from '@/app/actions/contact'

const initialState = { success: false }

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState)

  if (state.success) {
    return (
      <p
        data-testid="contact-success"
        className="text-center font-semibold"
        style={{ color: 'var(--blue)' }}
      >
        Message sent — we&apos;ll be in touch soon.
      </p>
    )
  }

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium mb-1"
          style={{ color: 'var(--ink-soft)' }}
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          data-testid="contact-name"
          className="w-full rounded-lg border px-4 py-2 text-sm outline-none focus:ring-2"
          style={{
            borderColor: 'var(--rule)',
            color: 'var(--ink)',
            background: 'var(--paper)',
          }}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium mb-1"
          style={{ color: 'var(--ink-soft)' }}
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          data-testid="contact-email"
          className="w-full rounded-lg border px-4 py-2 text-sm outline-none focus:ring-2"
          style={{
            borderColor: 'var(--rule)',
            color: 'var(--ink)',
            background: 'var(--paper)',
          }}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium mb-1"
          style={{ color: 'var(--ink-soft)' }}
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          data-testid="contact-message"
          className="w-full rounded-lg border px-4 py-2 text-sm outline-none focus:ring-2"
          style={{
            borderColor: 'var(--rule)',
            color: 'var(--ink)',
            background: 'var(--paper)',
          }}
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        data-testid="contact-submit"
        className="w-full rounded-lg px-8 py-3 font-semibold text-white hover:opacity-90 disabled:opacity-60 transition-opacity"
        style={{ background: 'var(--blue)' }}
      >
        {pending ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
