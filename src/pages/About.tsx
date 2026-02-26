import Container from '../components/layout/Container'
import { Language, copy } from '../lib/i18n'

interface AboutProps {
  language: Language
}

export default function About({ language }: AboutProps) {
  const t = copy[language]
  const about = t.about

  return (
    <div className="bg-[#fafaf8]">
      {/* Hero */}
      <section className="pt-32 pb-20 border-b border-slate-200">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Text */}
            <div className="lg:col-span-6 flex flex-col justify-start">
              <div className="mb-6">
                <span className="text-xs font-light uppercase tracking-widest text-slate-500">
                  {about.missionLabel}
                </span>
              </div>

              <h1 className="serif-headline text-4xl lg:text-6xl text-slate-900 mb-6 leading-tight">
                {about.headlineLine1}
                <br />
                <span className="text-slate-400">
                  {about.headlineLine2}
                </span>
              </h1>

              <p className="text-base lg:text-lg text-slate-600 font-light leading-relaxed max-w-xl">
                {about.missionText}
              </p>
            </div>

            {/* Visual Element */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-md">
                {/* Decorative gradient orb */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-40 blur-3xl animate-pulse"></div>

                {/* Centered text element */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-7xl lg:text-8xl font-light text-slate-400 tracking-tighter leading-none mb-3">{about.yearsCount}</div>
                    <div className="text-sm uppercase tracking-widest text-slate-400">
                      {about.yearsLabel}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Story Section */}
      <section className="py-24 border-b border-slate-200">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <span className="text-xs font-light uppercase tracking-widest text-slate-500 mb-6 block">
                {about.storyLabel}
              </span>
              <h2 className="serif-headline text-3xl lg:text-5xl text-slate-900 mb-8 leading-tight">
                {about.storyHeadline}
              </h2>
            </div>

            {/* Timeline */}
            <div className="space-y-12">
              {/* 2006 */}
              <div className="flex gap-6 lg:gap-8">
                <div className="flex flex-col items-center min-w-max">
                  <div className="w-4 h-4 rounded-full bg-slate-900 relative z-10"></div>
                  <div className="w-1 h-24 bg-gradient-to-b from-slate-900 to-transparent mt-4"></div>
                </div>
                <div className="pt-1 pb-12">
                  <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-widest mb-2">
                    {about.timeline2006Title}
                  </h3>
                  <p className="text-base text-slate-600 font-light leading-relaxed max-w-xl">
                    {about.timeline2006Body}
                  </p>
                </div>
              </div>

              {/* 2025 */}
              <div className="flex gap-6 lg:gap-8">
                <div className="flex flex-col items-center min-w-max">
                  <div className="w-4 h-4 rounded-full bg-blue-600 relative z-10"></div>
                  <div className="w-1 h-24 bg-gradient-to-b from-blue-600 to-transparent mt-4"></div>
                </div>
                <div className="pt-1 pb-12">
                  <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-widest mb-2">
                    {about.timelineNowTitle}
                  </h3>
                  <p className="text-base text-slate-600 font-light leading-relaxed max-w-xl">
                    {about.timelineNowBody}
                  </p>
                </div>
              </div>

              {/* Future */}
              <div className="flex gap-6 lg:gap-8">
                <div className="flex flex-col items-center min-w-max">
                  <div className="w-4 h-4 rounded-full bg-slate-300 relative z-10"></div>
                </div>
                <div className="pt-1">
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-2">
                    {about.timelineTomorrowTitle}
                  </h3>
                  <p className="text-base text-slate-500 font-light leading-relaxed max-w-xl italic">
                    {about.timelineTomorrowBody}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Pillars Section */}
      <section className="py-24 border-b border-slate-200">
        <Container>
          <div className="mb-16">
            <span className="text-xs font-light uppercase tracking-widest text-slate-500 mb-4 block">
              {about.valuesLabel}
            </span>
            <h2 className="serif-headline text-3xl lg:text-5xl text-slate-900">
              {about.valuesHeadline}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {about.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="group p-8 bg-white rounded-lg border border-slate-100 hover:border-slate-300 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Vision Statement */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="serif-headline text-4xl lg:text-5xl text-white mb-8 leading-tight">
              {about.visionHeadline}
            </h2>
            <p className="text-lg text-slate-300 font-light leading-relaxed mb-12">
              {about.visionBody}
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/articles"
                className="px-8 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors duration-300"
              >
                {about.ctaPrimary}
              </a>
              <a
                href="/"
                className="px-8 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-300"
              >
                {about.ctaSecondary}
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-20 border-t border-slate-200">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              {about.contactHeadline}
            </h3>
            <p className="text-slate-600 font-light mb-6">
              {about.contactBody}
            </p>
            <a
              href="mailto:hello@medtechvalley.com"
              className="inline-block px-6 py-2 text-slate-900 font-semibold hover:text-blue-600 transition-colors duration-300 underline decoration-slate-300 hover:decoration-blue-600"
            >
              hello@medtechvalley.com
            </a>
          </div>
        </Container>
      </section>
    </div>
  )
}
