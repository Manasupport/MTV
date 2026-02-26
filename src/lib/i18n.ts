export const copy = {
  fr: {
    // Navigation
    topics: 'Thèmes',
    articles: 'Articles',
    letter: 'Business Letter',
    about: 'À propos',
    subscribe: 'S\'abonner',
    
    // Hero
    heroKicker: 'Intelligence Stratégique',
    heroTitle: 'L\'innovation médicale intelligente pour les leaders.',
    heroBody: 'Analyses stratégiques, recherches approfondies et couverture exclusive de l\'innovation technologique médicale, de la recherche biomédicale et des dispositifs médicaux façonnant l\'avenir de la médecine.',
    heroExplore: 'Explorer les articles',
    
    // Sections
    featuredStory: 'Histoire en vedette',
    exploreTopics: 'Explorer les thèmes',
    latestInsights: 'Derniers insights',
    viewAll: 'Voir tous les articles',
    weeklyLetter: 'Lettre hebdomadaire',
    strategyInbox: 'Stratégie livrée à votre boîte mail.',
    letterDesc: 'Abonnez-vous à notre lettre d\'affaires hebdomadaire pour une analyse stratégique, des insights d\'investissement et une intelligence de marché sur la technologie médicale et l\'innovation.',
    noSpam: 'Pas de spam. Désinscrivez-vous à tout moment.',
    readFullStory: 'Lire l\'histoire complète',
  },
  en: {
    // Navigation
    topics: 'Topics',
    articles: 'Articles',
    letter: 'Business Letter',
    about: 'About',
    subscribe: 'Subscribe',
    
    // Hero
    heroKicker: 'Strategic Intelligence',
    heroTitle: 'Medical innovation intelligence for leaders.',
    heroBody: 'Strategic analysis, in-depth research, and exclusive coverage of medical technology innovation, biomedical research, and medical devices shaping the future of medicine.',
    heroExplore: 'Explore articles',
    
    // Sections
    featuredStory: 'Featured story',
    exploreTopics: 'Explore topics',
    latestInsights: 'Latest insights',
    viewAll: 'View all articles',
    weeklyLetter: 'Weekly letter',
    strategyInbox: 'Strategy delivered to your inbox.',
    letterDesc: 'Subscribe to our weekly business letter for strategic analysis, investment insights, and market intelligence on medical technology and innovation.',
    noSpam: 'No spam. Unsubscribe anytime.',
    readFullStory: 'Read full story',
  },
}

export type Language = 'fr' | 'en'
export type CopyKey = keyof typeof copy.fr
