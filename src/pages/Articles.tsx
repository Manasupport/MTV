import { useEffect, useMemo, useState } from 'react'
import Container from '../components/layout/Container'
import ArticleCard from '../components/ArticleCard'
import { getArticles } from '../content/articles'
import { Language, copy } from '../lib/i18n'

interface ArticlesProps {
  language: Language
}

export default function Articles({ language }: ArticlesProps) {
  const t = copy[language]
  const articles = getArticles(language)
  const themes = useMemo(() => {
    const uniqueThemes = new Set(articles.map((article) => article.theme))
    return Array.from(uniqueThemes)
  }, [articles])
  const [activeTheme, setActiveTheme] = useState<string>('all')
  useEffect(() => {
    setActiveTheme('all')
  }, [language])
  const filteredArticles = activeTheme === 'all'
    ? articles
    : articles.filter((article) => article.theme === activeTheme)
  return (
    <div className="bg-[#fafaf8]" id="top">
      {/* HEADER SECTION */}
      <section className="py-24 border-b border-slate-200/30">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
            <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6 block">
              {t.articlesPage.kicker}
            </span>
            <h1 className="serif-headline text-7xl mb-6 text-slate-900 text-balance leading-[0.95]">
              {t.articlesPage.title}
            </h1>
            <p className="text-xl text-slate-600 font-light leading-relaxed">
              {t.articlesPage.intro}
            </p>
            </div>
            <div className="flex items-start justify-start lg:justify-end">
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-700 border border-slate-200 rounded-full hover:border-slate-400 hover:text-slate-900 transition-colors"
              >
                <span>↑</span>
                {t.articlesPage.backToTop}
              </button>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              {t.articlesPage.filters.label}
            </span>
            <button
              type="button"
              onClick={() => setActiveTheme('all')}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-widest rounded-full border transition-colors ${
                activeTheme === 'all'
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
              }`}
            >
              {t.articlesPage.filters.all}
            </button>
            {themes.map((theme) => (
              <button
                key={theme}
                type="button"
                onClick={() => setActiveTheme(theme)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-widest rounded-full border transition-colors ${
                  activeTheme === theme
                    ? 'bg-slate-900 text-white border-slate-900'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                }`}
              >
                {theme}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* ARTICLES LIST */}
      <section className="py-24">
        <Container>
          <div className="space-y-12">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} language={language} variant="minimal" />
              ))
            ) : (
              <div className="text-center py-20">
                <p className="text-slate-600 text-lg font-light">{t.articlesPage.empty}</p>
              </div>
            )}
          </div>
        </Container>
      </section>
    </div>
  )
}
