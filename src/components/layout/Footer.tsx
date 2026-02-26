import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="font-black text-lg mb-2">MedTechValley</h3>
            <p className="text-sm text-slate-600">
              Le portail de référence sur l'intelligence médicale et l'innovation.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-slate-400 mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-slate-600 hover:text-blue-600 transition">Accueil</Link></li>
              <li><Link to="/articles" className="text-slate-600 hover:text-blue-600 transition">Articles</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-slate-400 mb-4">Légal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition">Mentions légales</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition">Confidentialité</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 pt-8 text-center text-xs text-slate-500">
          © 2026 MedTechValley. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}
