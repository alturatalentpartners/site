import { ui, defaultLang } from './ui.js';

export function getLangFromUrl(url) {
  const [, maybeLang] = url.pathname.replace(import.meta.env.BASE_URL, '/').split('/');
  if (maybeLang in ui) return maybeLang;
  return defaultLang;
}

export function useTranslations(lang) {
  return function t(key) {
    return ui[lang]?.[key] ?? ui[defaultLang][key] ?? key;
  };
}

// Builds a path prefixed for the given language ('' for default/en, '/es' otherwise).
export function localizePath(path, lang) {
  const clean = path.replace(/^\//, '');
  return lang === defaultLang ? `/${clean}` : `/es/${clean}`;
}

// Strips the BASE_URL and any language prefix, returning the bare route
// (e.g. 'about/', '' for home) so it can be re-localized into any language.
export function getRouteFromUrl(url) {
  let path = url.pathname.replace(import.meta.env.BASE_URL, '');
  const [maybeLang, ...rest] = path.split('/');
  if (maybeLang === 'es') {
    path = rest.join('/');
  }
  return path;
}
