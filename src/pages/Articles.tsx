import Container from '../components/layout/Container'
import ArticleCard from '../components/ArticleCard'
import { articles } from '../content/articles'
import { Language } from '../lib/i18n'

interface ArticlesProps {
  language: Language
}

export default function Articles({ language: _language }: ArticlesProps) {
  return (
    <div className="bg-[#fafaf8]">
      {/* HEADER SECTION */}
      <section className="py-24 border-b border-slate-200/30">
        <Container>
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6 block">
              Editorial
            </span>
            <h1 className="serif-headline text-7xl mb-6 text-slate-900 text-balance leading-[0.95]">
              All articles
            </h1>
            <p className="text-xl text-slate-600 font-light leading-relaxed">
              Comprehensive coverage of medical innovation, healthcare technology, and biomedical research leadership.
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
                <ArticleCard key={article.id} article={article} variant="minimal" />
              ))
            ) : (
              <div className="text-center py-20">
                <p className="text-slate-600 text-lg font-light">No articles available yet.</p>
              </div>
            )}
          </div>
        </Container>
      </section>
    </div>
  )
}
