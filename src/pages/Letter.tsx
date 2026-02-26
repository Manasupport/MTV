import Container from '../components/layout/Container'
import { Language, copy } from '../lib/i18n'

interface LetterProps {
  language: Language
}

export default function Letter({ language }: LetterProps) {
  const t = copy[language]
  const letter = t.letterPage

  return (
    <div className="bg-[#fafaf8]">
      {/* HERO */}
      <section className="pt-28 pb-20 border-b border-slate-200/30">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6 block">
                {letter.kicker}
              </span>
              <h1 className="serif-headline text-5xl lg:text-7xl text-slate-900 leading-[0.95] mb-6">
                {letter.title}
              </h1>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">
                {letter.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-slate-900 text-white text-sm font-bold uppercase tracking-wide rounded-lg hover:bg-slate-800 transition-colors">
                  {letter.ctaPrimary}
                </button>
                <button className="px-8 py-3 border border-slate-300 text-slate-900 text-sm font-bold uppercase tracking-wide rounded-lg hover:bg-slate-100 transition-colors">
                  {letter.ctaSecondary}
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative bg-white border border-slate-200/60 rounded-2xl p-8 lg:p-10 shadow-xl">
                <div className="absolute -top-6 right-6 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                  {letter.priceBadge}
                </div>
                <div className="mb-6">
                  <p className="text-sm uppercase tracking-widest text-slate-500 mb-3">
                    {letter.priceLabel}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-semibold text-slate-900">{letter.priceValue}</span>
                    <span className="text-lg text-slate-500">{letter.priceUnit}</span>
                  </div>
                  <p className="text-sm text-slate-500 mt-2">{letter.billingNote}</p>
                </div>
                <ul className="space-y-4 text-sm text-slate-600 font-light">
                  {letter.pricePoints.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-slate-900">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* BENEFITS */}
      <section className="py-20">
        <Container>
          <div className="mb-12">
            <h2 className="serif-headline text-4xl lg:text-5xl text-slate-900 mb-4">
              {letter.benefitsTitle}
            </h2>
            <p className="text-lg text-slate-600 font-light max-w-2xl">
              {letter.benefitsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {letter.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-8 bg-white border border-slate-200/60 rounded-2xl hover:border-slate-300 transition-colors"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-600 font-light leading-relaxed">
                  {benefit.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="serif-headline text-4xl lg:text-5xl mb-6">
              {letter.finalTitle}
            </h3>
            <p className="text-lg text-slate-300 font-light mb-10">
              {letter.finalBody}
            </p>
            <button className="px-10 py-3 bg-white text-slate-900 text-sm font-bold uppercase tracking-wide rounded-lg hover:bg-slate-100 transition-colors">
              {letter.finalCta}
            </button>
          </div>
        </Container>
      </section>
    </div>
  )
}
