import Container from '../components/layout/Container'
import ArticleCard from '../components/ArticleCard'
import { articles } from '../content/articles'

export default function Articles() {
  return (
    <div className="py-20">
      <Container>
        <div className="mb-12">
          <h1 className="text-5xl font-black text-slate-900 mb-4">
            Tous les articles
          </h1>
          <p className="text-lg text-slate-600">
            Explorez notre collection complète d'articles sur l'innovation médicale et technologique.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {articles.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-600 text-lg">Aucun article disponible pour le moment.</p>
          </div>
        )}
      </Container>
    </div>
  )
}
