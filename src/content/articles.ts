import frArticles from './articles.fr.json'
import enArticles from './articles.en.json'
import { Article } from '../components/ArticleCard'
import { Language } from '../lib/i18n'

const articlesByLanguage: Record<Language, Article[]> = {
  fr: frArticles as Article[],
  en: enArticles as Article[],
}

export const getArticles = (language: Language) => articlesByLanguage[language]
