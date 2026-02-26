import { Link } from 'react-router-dom'

export interface Article {
  id: number
  slug: string
  title: string
  excerpt: string
  date: string
  theme: string
  image: string
  readTime: number
}

interface ArticleCardProps {
  article: Article
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 group">
      <div className="h-48 overflow-hidden relative bg-slate-100">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-3 py-1 text-xs font-bold rounded-full uppercase tracking-widest">
            {article.theme}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 mb-3 text-xs text-slate-500 font-medium uppercase tracking-widest">
          <span>{article.date}</span>
          <span>{article.readTime} min</span>
        </div>
        <h3 className="text-lg font-bold leading-tight mb-3 line-clamp-2">
          {article.title}
        </h3>
        <p className="text-sm text-slate-600 mb-4 line-clamp-2">
          {article.excerpt}
        </p>
        <Link
          to={`/articles/${article.slug}`}
          className="text-blue-600 font-bold text-sm uppercase tracking-wide hover:opacity-70 transition inline-flex items-center gap-2"
        >
          Lire l'article
          <span>→</span>
        </Link>
      </div>
    </div>
  )
}
