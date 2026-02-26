import { PropsWithChildren } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Language } from '../../lib/i18n'

interface AppShellProps extends PropsWithChildren {
  language: Language
  setLanguage: (lang: Language) => void
}

export default function AppShell({ children, language, setLanguage }: AppShellProps) {
  return (
    <div className="flex flex-col min-h-screen bg-[#fafaf8]">
      <Header language={language} setLanguage={setLanguage} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer language={language} />
    </div>
  )
}
