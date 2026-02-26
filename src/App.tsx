import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import AppShell from './components/layout/AppShell'
import Home from './pages/Home'
import Articles from './pages/Articles'
import About from './pages/About'
import NotFound from './pages/NotFound'
import { Language } from './lib/i18n'

function App() {
  const [language, setLanguage] = useState<Language>(() => {
    // Load from localStorage or default to 'fr'
    const stored = localStorage.getItem('mtv-language') as Language | null
    return stored || 'fr'
  })

  useEffect(() => {
    localStorage.setItem('mtv-language', language)
  }, [language])

  return (
    <BrowserRouter>
      <AppShell language={language} setLanguage={setLanguage}>
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/articles" element={<Articles language={language} />} />
          <Route path="/about" element={<About language={language} />} />
          <Route path="/*" element={<NotFound language={language} />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  )
}

export default App

