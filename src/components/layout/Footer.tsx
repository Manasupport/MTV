import { Link } from 'react-router-dom'
import { Language, copy } from '../../lib/i18n'

interface FooterProps {
  language: Language
}

export default function Footer({ language }: FooterProps) {
  const t = copy[language]
  return (
    <footer className="bg-white border-t border-slate-200/30 mt-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-16 mb-16">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block hover:opacity-80 transition-opacity mb-4">
              <img
                src="/logo-fond-clair.png"
                alt="MedTechValley"
                className="h-10"
              />
            </Link>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {t.footer.tagline}
            </p>
            <img
              src="/ccfi-escp.png"
              alt="CCFI ESCP"
              className="h-8 opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-slate-400 mb-6">
              {t.footer.navigate}
            </h4>
            <ul className="space-y-3 text-sm font-light text-slate-600">
              <li><Link to="/" className="hover:text-slate-900 transition-colors">{t.footer.home}</Link></li>
              <li><Link to="/articles" className="hover:text-slate-900 transition-colors">{t.footer.articles}</Link></li>
              <li><Link to="/about" className="hover:text-slate-900 transition-colors">{t.footer.about}</Link></li>
              <li><Link to="/letter" className="hover:text-slate-900 transition-colors">{t.footer.letter}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-slate-400 mb-6">
              {t.footer.legal}
            </h4>
            <ul className="space-y-3 text-sm font-light text-slate-600">
              <li><a href="#" className="hover:text-slate-900 transition-colors">{t.footer.privacy}</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">{t.footer.terms}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-slate-400 mb-6">
              {t.footer.connect}
            </h4>
            <ul className="space-y-3 text-sm font-light text-slate-600">
              <li><a href="#" className="hover:text-slate-900 transition-colors">{t.footer.twitter}</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">{t.footer.linkedin}</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200/30 pt-8 text-center text-xs text-slate-500 font-light">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  )
}
