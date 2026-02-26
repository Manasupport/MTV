import Container from '../components/layout/Container'
import ArticleCard from '../components/ArticleCard'
import { articles } from '../content/articles'
import { Link } from 'react-router-dom'
import { Language, copy } from '../lib/i18n'

const TOPICS_CATEGORIES = [
  { name: 'Santé & Pharma', color: 'from-blue-50 to-blue-100/50' },
  { name: 'Recherche & Health Tech', color: 'from-purple-50 to-purple-100/50' },
  { name: 'IA & Data', color: 'from-green-50 to-green-100/50' },
  { name: 'Médecine d\'urgence', color: 'from-orange-50 to-orange-100/50' },
  { name: 'Médecine & Tradition Juive', color: 'from-red-50 to-red-100/50' },
  { name: 'Événements', color: 'from-pink-50 to-pink-100/50' },
]

interface HomeProps {
  language: Language
}

export default function Home({ language }: HomeProps) {
  const featuredArticle = articles[0]
  const otherArticles = articles.slice(1)
  const t = copy[language]

  return (
    <div className="bg-[#fafaf8]">
      {/* HERO SECTION — Improved grid layout */}
      <section className="relative overflow-hidden pt-16 pb-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* TEXT BLOCK — LEFT 5-6 COLS */}
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6 block">
                {t.heroKicker}
              </span>
              <h1 className="serif-headline text-6xl lg:text-7xl mb-6 text-slate-900 leading-[1]">
                {t.heroTitle}
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed font-light mb-8 max-w-lg">
                {t.heroBody}
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <Link 
                  to="/articles" 
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-medium text-sm uppercase tracking-wide hover:bg-slate-800 transition-all"
                >
                  {t.heroExplore}
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <button className="px-6 py-3 border border-slate-300 text-slate-900 font-medium text-sm uppercase tracking-wide hover:bg-slate-100 transition-colors">
                  {t.subscribe}
                </button>
              </div>
            </div>

            {/* IMAGE BLOCK — RIGHT 7 COLS */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden shadow-xl h-96 md:h-[500px]">
                <img
                  src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1000"
                  alt="Medical Innovation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#fafaf8]/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="h-px bg-gradient-to-r from-slate-200/0 via-slate-200/30 to-slate-200/0"></div>

      {/* FEATURED ARTICLE SECTION */}
      <section className="py-20 lg:py-24">
        <Container>
          <div className="relative bg-white rounded-2xl overflow-hidden border border-slate-200/50 p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="flex flex-col justify-center">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4 block">
                  {t.featuredStory}
                </span>
                <h2 className="serif-headline text-5xl lg:text-6xl mb-6 text-slate-900 leading-[0.95]">
                  {featuredArticle.title}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed font-light mb-6">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-slate-500 font-light mb-8">
                  <span>{featuredArticle.date}</span>
                  <span>•</span>
                  <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-medium">
                    {featuredArticle.theme}
                  </span>
                </div>
                <Link
                  to={`/articles/${featuredArticle.slug}`}
                  className="group inline-flex items-center gap-2 font-medium text-slate-900 hover:opacity-60 transition-opacity w-fit"
                >
                  {t.readFullStory}
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
              <div className="relative h-96 lg:h-full min-h-96 overflow-hidden rounded-lg">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* DIVIDER */}
      <div className="h-px bg-gradient-to-r from-slate-200/0 via-slate-200/30 to-slate-200/0"></div>

      {/* TOPICS SECTION */}
      <section className="py-20 lg:py-24">
        <Container>
          <div className="mb-12">
            <h2 className="serif-headline text-5xl mb-4 text-slate-900">
              {t.exploreTopics}
            </h2>
            <p className="text-lg text-slate-600 font-light max-w-2xl">
              Deep dive into specialized innovation categories shaping medicine and technology.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TOPICS_CATEGORIES.map((topic) => (
              <a
                key={topic.name}
                href={`#topic-${topic.name.toLowerCase()}`}
                className={`group p-8 rounded-xl bg-gradient-to-br ${topic.color} border border-slate-200/40 hover:border-slate-300 hover:shadow-md transition-all article-card-hover`}
              >
                <h3 className="font-bold text-lg text-slate-900 group-hover:opacity-75 transition-opacity">
                  {topic.name}
                </h3>
                <p className="text-sm text-slate-600 font-light mt-2">
                  Latest coverage and insights
                </p>
                <span className="inline-block mt-4 text-xs font-bold uppercase tracking-widest text-slate-700 group-hover:translate-x-1 transition-transform">
                  Explore →
                </span>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* DIVIDER */}
      <div className="h-px bg-gradient-to-r from-slate-200/0 via-slate-200/30 to-slate-200/0"></div>

      {/* LATEST ARTICLES SECTION */}
      <section className="py-20 lg:py-24">
        <Container>
          <div className="mb-16">
            <h2 className="serif-headline text-5xl text-slate-900 text-balance mb-4">
              {t.latestInsights}
            </h2>
            <p className="text-lg text-slate-600 font-light max-w-2xl">
              Recent analysis, research updates, and innovation breakthroughs.
            </p>
          </div>

          <div className="space-y-12">
            {otherArticles.map((article) => (
              <ArticleCard key={article.id} article={article} variant="minimal" />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/articles"
              className="group inline-flex items-center gap-2 px-8 py-3 bg-slate-900 text-white font-medium text-sm uppercase tracking-wide hover:bg-slate-800 transition-all"
            >
              {t.viewAll}
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </Container>
      </section>

      {/* DIVIDER */}
      <div className="h-px bg-gradient-to-r from-slate-200/0 via-slate-200/30 to-slate-200/0"></div>

      {/* BUSINESS LETTER CTA */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 block">
              {t.weeklyLetter}
            </span>
            <h2 className="serif-headline text-6xl lg:text-7xl mb-6 text-white text-balance leading-[0.95]">
              {t.strategyInbox}
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed font-light mb-10 max-w-xl mx-auto">
              {t.letterDesc}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-grow px-6 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm font-light focus:outline-none focus:border-white/40 focus:bg-white/20 backdrop-blur-sm transition-all rounded-lg"
              />
              <button className="px-8 py-3 bg-white text-slate-900 font-bold text-sm uppercase tracking-wide hover:bg-slate-100 transition-all hover:shadow-lg">
                {t.subscribe}
              </button>
            </div>
            <p className="text-xs text-slate-400 font-light mt-6">
              {t.noSpam} <a href="#" className="underline hover:opacity-70">privacy policy</a>.
            </p>
          </div>
        </Container>
      </section>
    </div>
  )
}
