import { Link } from 'react-router-dom'
import Container from '../components/layout/Container'

export default function NotFound() {
  return (
    <div className="py-32">
      <Container>
        <div className="text-center">
          <h1 className="text-8xl font-black text-slate-900 mb-4">404</h1>
          <p className="text-2xl font-bold text-slate-600 mb-6">
            Page non trouvée
          </p>
          <p className="text-slate-500 mb-8 text-lg max-w-md mx-auto">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <Link
            to="/"
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold inline-block hover:bg-blue-700 transition-colors"
          >
            Retour à l'accueil
          </Link>
        </div>
      </Container>
    </div>
  )
}
