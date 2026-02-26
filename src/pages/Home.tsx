import Container from '../components/layout/Container'
import ArticleCard from '../components/ArticleCard'
import { articles } from '../content/articles'

export default function Home() {
  const featuredArticles = articles.slice(0, 3)

  return (
    <div className="">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-blue-50 to-slate-50 py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-96 lg:h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1000"
                alt="Innovation Médicale"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <span className="bg-blue-600 px-3 py-1 text-xs font-bold uppercase tracking-widest rounded mb-3 inline-block">
                  À LA UNE
                </span>
                <h2 className="text-3xl font-bold leading-tight">
                  Percée majeure au Technion
                </h2>
              </div>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4 block">
                Intelligence Stratégique
              </span>
              <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-6 text-slate-900">
                L'IA qui prédit les rémissions
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Grâce à une collaboration inédite entre le Technion et le centre hospitalier Rambam, une nouvelle IA permet d'identifier les biomarqueurs de rémission précoce. Cette avancée majeure permet de personnaliser les traitements oncologiques dès les premières semaines.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-blue-700 transition-colors">
                Lire l'article
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* FEATURED ARTICLES */}
      <section className="py-20">
        <Container>
          <div className="mb-12">
            <h2 className="text-4xl font-black text-slate-900">
              Dernières actualités
            </h2>
            <div className="w-20 h-1 bg-blue-600 rounded-full mt-4"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </Container>
      </section>

      {/* NEWSLETTER BANNER */}
      <section className="bg-gradient-to-br from-blue-700 to-indigo-900 text-white py-20">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-5xl font-black mb-6">
              La Business Letter Hebdo
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Chaque vendredi, recevez les insights stratégiques MedTech directement dans votre boîte mail.
            </p>
            <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors">
              S'abonner - Bientôt disponible
            </button>
          </div>
        </Container>
      </section>
    </div>
  )
}
