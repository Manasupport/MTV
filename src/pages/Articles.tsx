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
  return (
    <div className="bg-[#fafaf8]">
      {/* HEADER SECTION */}
      <section className="py-24 border-b border-slate-200/30">
        <Container>
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
        </Container>
      </section>

      {/* ARTICLES LIST */}
      <section className="py-24">
        <Container>
          <div className="space-y-12">
            {articles.length > 0 ? (
              articles.map((article) => (
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
