import { Link } from 'react-router-dom'
import { Language } from '../../lib/i18n'

interface FooterProps {
  language: Language
}

export default function Footer({ language: _language }: FooterProps) {
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
            <p className="text-sm text-slate-600 leading-relaxed">
              Strategic insights on medical innovation and technology leadership.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-slate-400 mb-6">
              Navigate
            </h4>
            <ul className="space-y-3 text-sm font-light text-slate-600">
              <li><Link to="/" className="hover:text-slate-900 transition-colors">Home</Link></li>
              <li><Link to="/articles" className="hover:text-slate-900 transition-colors">Articles</Link></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Letter</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-slate-400 mb-6">
              Legal
            </h4>
            <ul className="space-y-3 text-sm font-light text-slate-600">
              <li><a href="#" className="hover:text-slate-900 transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Terms</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-slate-400 mb-6">
              Connect
            </h4>
            <ul className="space-y-3 text-sm font-light text-slate-600">
              <li><a href="#" className="hover:text-slate-900 transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200/30 pt-8 text-center text-xs text-slate-500 font-light">
          © 2026 MedTechValley. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
