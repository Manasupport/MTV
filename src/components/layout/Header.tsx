import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex flex-col">
          <span className="text-2xl font-black tracking-tight">MedTechValley</span>
          <span className="text-xs font-medium tracking-widest text-slate-500 uppercase">
            Intelligence en innovation médicale
          </span>
        </Link>
        <nav className="hidden md:flex gap-12 text-sm font-bold uppercase tracking-wider opacity-70">
          <Link to="/" className="hover:text-blue-600 transition">
            Accueil
          </Link>
          <Link to="/articles" className="hover:text-blue-600 transition">
            Articles
          </Link>
        </nav>
      </div>
    </header>
  )
}
