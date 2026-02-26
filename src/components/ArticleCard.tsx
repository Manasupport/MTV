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
  variant?: 'minimal' | 'featured'
}

export default function ArticleCard({ article, variant = 'minimal' }: ArticleCardProps) {
  if (variant === 'featured') {
    return (
      <div className="group">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4 block">
              {article.theme}
            </span>
            <h3 className="serif-headline text-6xl mb-6 text-slate-900 leading-[0.95]">
              {article.title}
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 font-light">
              {article.excerpt}
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-500 font-light">
              <span>{article.date}</span>
              <span>•</span>
              <span>{article.readTime} min read</span>
            </div>
          </div>
          <div className="relative h-96 lg:h-full min-h-96 overflow-hidden rounded-lg">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <Link to={`/articles/${article.slug}`} className="article-link group block pb-12 border-b border-slate-200/30 opacity-100 hover:opacity-75 transition-opacity">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3 block">
            {article.theme}
          </span>
          <h3 className="serif-headline text-3xl mb-3 text-slate-900 leading-tight group-hover:opacity-80 transition-opacity">
            {article.title}
          </h3>
          <p className="text-base text-slate-600 leading-relaxed font-light mb-4">
            {article.excerpt}
          </p>
          <div className="flex items-center gap-4 text-sm text-slate-500 font-light">
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime} min</span>
          </div>
        </div>
        <div className="h-48 lg:h-auto overflow-hidden rounded-lg bg-slate-100">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </div>
    </Link>
  )
}
