import { useState, type FormEvent } from 'react'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { socialLinks } from '../data/social'

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <Container className="py-24">
      <SectionHeading
        eyebrow="Contact"
        title="Let's work together"
        description="Have a project in mind or just want to say hello? I'd love to hear from you."
        align="center"
      />

      <div className="mx-auto grid max-w-4xl gap-12 lg:grid-cols-5">
        <Card className="lg:col-span-3">
          {submitted ? (
            <div className="py-12 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <svg
                  className="h-6 w-6 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Message sent!</h3>
              <p className="mt-2 text-zinc-400">
                Thanks for reaching out. I&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-zinc-300">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-surface-border bg-surface px-4 py-2.5 text-white placeholder-zinc-600 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-zinc-300">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-surface-border bg-surface px-4 py-2.5 text-white placeholder-zinc-600 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-zinc-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full resize-none rounded-lg border border-surface-border bg-surface px-4 py-2.5 text-white placeholder-zinc-600 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  placeholder="Tell me about your project..."
                />
              </div>
              <Button type="submit" size="lg" className="w-full sm:w-auto">
                Send Message
              </Button>
            </form>
          )}
        </Card>

        <div className="space-y-6 lg:col-span-2">
          <div>
            <h3 className="mb-2 text-sm font-medium text-zinc-500">Email</h3>
            <a
              href="mailto:hello@example.com"
              className="text-white transition-colors hover:text-accent-hover"
            >
              hello@example.com
            </a>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-medium text-zinc-500">Location</h3>
            <p className="text-white">Remote / Worldwide</p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-medium text-zinc-500">Connect</h3>
            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 transition-colors hover:text-accent-hover"
                >
                  {link.label} &rarr;
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
