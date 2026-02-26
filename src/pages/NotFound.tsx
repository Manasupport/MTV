import { Link } from 'react-router-dom'
import Container from '../components/layout/Container'
import { Language, copy } from '../lib/i18n'

interface NotFoundProps {
  language: Language
}

export default function NotFound({ language }: NotFoundProps) {
  const t = copy[language]
  return (
    <div className="bg-[#fafaf8] min-h-[calc(100vh-64px)] flex items-center">
      <Container>
        <div className="text-center">
          <h1 className="serif-headline text-9xl text-slate-900 mb-6">404</h1>
          <p className="text-2xl text-slate-600 mb-6 font-light">
            {t.notFound.title}
          </p>
          <p className="text-lg text-slate-500 font-light mb-10 max-w-md mx-auto">
            {t.notFound.body}
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-3 px-8 py-3 bg-slate-900 text-white font-medium text-sm uppercase tracking-wide hover:bg-slate-800 transition-colors"
          >
            {t.notFound.cta}
            <span>→</span>
          </Link>
        </div>
      </Container>
    </div>
  )
}
