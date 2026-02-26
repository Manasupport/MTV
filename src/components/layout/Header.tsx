import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { Language, copy } from '../../lib/i18n'

const TOPICS = [
  {
    label: 'Biotech',
    subtopics: ['Gene therapy', 'CRISPR', 'Biologics'],
  },
  {
    label: 'Research',
    subtopics: ['Clinical trials', 'Universities', 'Institutes'],
  },
  {
    label: 'MedTech',
    subtopics: ['Devices', 'Diagnostics', 'Digital Health'],
  },
  {
    label: 'Surgery',
    subtopics: ['Robotics', 'Minimally invasive', 'AI-guided'],
  },
  {
    label: 'Oncology',
    subtopics: ['Immunotherapy', 'Precision medicine', 'Drug development'],
  },
]

interface HeaderProps {
  language: Language
  setLanguage: (lang: Language) => void
}

export default function Header({ language, setLanguage }: HeaderProps) {
  const [isTopicsOpen, setIsTopicsOpen] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const t = copy[language]

  // Close dropdown on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsTopicsOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setIsTopicsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-[#fafaf8]/95 backdrop-blur-md border-b border-slate-200/30">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* LEFT: LOGO */}
        <Link
          to="/"
          className="flex-shrink-0 flex flex-col items-start -space-y-0.5 hover:opacity-70 transition-opacity"
        >
          <span className="text-xs font-black tracking-widest uppercase text-slate-900">
            MedTechValley
          </span>
          <span className="text-[10px] font-light tracking-widest text-slate-500 uppercase">
            Editorial
          </span>
        </Link>

        {/* CENTER: PRIMARY NAV (hidden on mobile) */}
        <nav className="hidden md:flex items-center gap-8 flex-1 justify-center text-sm">
          {/* Topics Dropdown */}
          <div className="relative">
            <button
              ref={triggerRef}
              onClick={() => setIsTopicsOpen(!isTopicsOpen)}
              className="group flex items-center gap-1.5 py-2 px-2 text-slate-600 hover:text-slate-900 transition-colors focus:outline-none relative"
            >
              {t.topics}
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  isTopicsOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
              {/* Underline animation on hover */}
              <span className="absolute bottom-1 left-2 right-2 h-0.5 bg-slate-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </button>

            {/* Dropdown Panel */}
            {isTopicsOpen && (
              <div
                ref={dropdownRef}
                className="dropdown-enter absolute top-full left-1/2 -translate-x-1/2 mt-3 w-max bg-white border border-slate-200/50 rounded-xl shadow-xl p-6 backdrop-blur-sm"
              >
                <div className="grid grid-cols-2 gap-8">
                  {TOPICS.map((topic) => (
                    <div key={topic.label}>
                      <h3 className="text-xs font-bold text-slate-900 mb-3 uppercase tracking-widest">
                        {topic.label}
                      </h3>
                      <ul className="space-y-2">
                        {topic.subtopics.map((subtopic) => (
                          <li key={subtopic}>
                            <a
                              href="#"
                              className="text-xs text-slate-600 hover:text-slate-900 transition-colors font-light"
                            >
                              {subtopic}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            to="/articles"
            className="group flex items-center gap-1.5 py-2 px-2 text-slate-600 hover:text-slate-900 transition-colors relative"
          >
            {t.articles}
            <span className="absolute bottom-1 left-2 right-2 h-0.5 bg-slate-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </Link>

          <a
            href="#"
            className="group flex items-center gap-1.5 py-2 px-2 text-slate-600 hover:text-slate-900 transition-colors relative"
          >
            {t.letter}
            <span className="absolute bottom-1 left-2 right-2 h-0.5 bg-slate-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </a>

          <a
            href="#"
            className="group flex items-center gap-1.5 py-2 px-2 text-slate-600 hover:text-slate-900 transition-colors relative"
          >
            {t.about}
            <span className="absolute bottom-1 left-2 right-2 h-0.5 bg-slate-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </a>
        </nav>

        {/* RIGHT: LANGUAGE + CTA */}
        <div className="flex-shrink-0 flex items-center gap-4">
          {/* Language Toggle */}
          <div className="hidden sm:flex items-center border border-slate-300/40 rounded-lg p-1 bg-white/50 backdrop-blur-sm">
            <button
              onClick={() => setLanguage('fr')}
              className={`px-2.5 py-1 text-xs font-medium tracking-wide transition-all rounded ${
                language === 'fr'
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              FR
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2.5 py-1 text-xs font-medium tracking-wide transition-all rounded ${
                language === 'en'
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              EN
            </button>
          </div>

          {/* Subscribe CTA */}
          <button className="hidden sm:inline-flex px-4 py-2 bg-slate-900 text-white text-xs font-bold uppercase tracking-wide rounded-lg hover:bg-slate-800 transition-all hover:shadow-md">
            {t.subscribe}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-1 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileOpen && (
        <div className="md:hidden border-t border-slate-200/30 bg-white/90 backdrop-blur-sm animate-fadeIn">
          <div className="max-w-[1280px] mx-auto px-6 py-4 space-y-3">
            <button className="w-full text-left px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100 rounded transition-colors">
              {t.topics}
            </button>
            <Link to="/articles" className="block px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100 rounded transition-colors">
              {t.articles}
            </Link>
            <a href="#" className="block px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100 rounded transition-colors">
              {t.letter}
            </a>
            <a href="#" className="block px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100 rounded transition-colors">
              {t.about}
            </a>
            <div className="border-t border-slate-200/30 pt-3 mt-3 flex items-center gap-2 px-2">
              <button
                onClick={() => setLanguage('fr')}
                className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
                  language === 'fr'
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
                  language === 'en'
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
