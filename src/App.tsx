import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppShell from './components/layout/AppShell'
import Home from './pages/Home'
import Articles from './pages/Articles'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <AppShell>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  )
}

export default App
