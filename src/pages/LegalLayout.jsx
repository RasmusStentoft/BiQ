import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function LegalLayout({ eyebrow, title, updated, sections }) {
  useEffect(() => window.scrollTo(0, 0), [])

  return (
    <div className="min-h-screen bg-background">
      <header className="px-6 sm:px-10 lg:px-16 pt-8">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link to="/" aria-label="BiQ forside">
            <img src="/logo.png" alt="BiQ" className="h-8 w-auto" />
          </Link>
          <Link to="/" className="lift-on-hover inline-flex items-center gap-1.5 text-sm text-muted hover:text-primary transition">
            <ArrowLeft className="h-4 w-4" /> Tilbage til forsiden
          </Link>
        </div>
      </header>

      <main className="px-6 sm:px-10 lg:px-16 py-20">
        <article className="max-w-3xl mx-auto">
          <span className="text-sm font-semibold text-accent-dark">{eyebrow}</span>
          <h1 className="font-semibold text-4xl sm:text-5xl text-ink mt-4 tracking-tight">{title}</h1>
          <p className="text-xs text-muted mt-4">Senest opdateret: {updated}</p>

          <div className="mt-12 space-y-10">
            {sections.map((s) => (
              <section key={s.h}>
                <h2 className="font-semibold text-xl text-ink mb-3">{s.h}</h2>
                <p className="text-muted leading-relaxed">{s.p}</p>
              </section>
            ))}
          </div>
        </article>
      </main>
    </div>
  )
}
