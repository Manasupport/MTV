import { PropsWithChildren } from 'react'
import Header from './Header'
import Footer from './Footer'

export default function AppShell({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}
