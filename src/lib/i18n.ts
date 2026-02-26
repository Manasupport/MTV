import fr from '../i18n/fr.json'
import en from '../i18n/en.json'

export const copy = {
  fr,
  en,
} as const

export type Language = keyof typeof copy
export type CopyKey = keyof typeof copy.fr
