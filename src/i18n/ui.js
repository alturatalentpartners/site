export const languages = {
  en: 'English',
  es: 'Español',
};

export const defaultLang = 'en';

// Reusable UI chrome shared across pages — nav, footer, buttons, common
// labels. Page-specific copy (headlines, paragraphs) lives in each page
// file as a small bilingual `copy` object instead, to keep this file from
// becoming an unmanageable wall of unrelated strings.
export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.industries': 'Industries',
    'nav.careers': 'Careers',
    'nav.contact': 'Contact',
    'nav.cta': 'Book a Consultation',
    'nav.openMenu': 'Open menu',
    'nav.closeMenu': 'Close menu',
    'nav.langSwitch': 'Español',

    'footer.tagline':
      'A boutique executive search and strategic recruiting firm helping growing companies across North America, LATAM and Europe build exceptional teams.',
    'footer.navigate': 'Navigate',
    'footer.company': 'Company',
    'footer.getInTouch': 'Get in touch',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.serving': 'Serving North America, LATAM & Europe',
    'footer.rights': 'All rights reserved.',
    'footer.note': 'Executive search & strategic recruiting, built for growing companies.',

    'btn.learnMore': 'Learn More',
    'btn.viewAllServices': 'View All Services',
    'btn.exploreIndustries': 'Explore Industries',
    'btn.bookConsultation': 'Book a Consultation',
    'btn.backHome': 'Back to homepage',

    'form.name': 'Full name',
    'form.email': 'Work email',
    'form.company': 'Company',
    'form.phone': 'Phone',
    'form.optional': '(optional)',
    'form.need': 'What do you need help hiring for?',
    'form.needSelect': 'Select an option',
    'form.message': 'Tell us about the role',
    'form.messagePlaceholder': "Seniority, team, timeline, location — whatever's useful.",
    'form.submit': 'Send Message',
    'form.sending': 'Sending…',
    'form.success': 'Thank you — we’ll be in touch within one business day.',
    'form.error': 'Something went wrong. Please email us directly using the link below.',
    'form.notConfigured': 'Online submission isn’t configured yet — please email us directly using the link below.',
    'form.preferEmail': 'Prefer email? Reach us directly at',

    'backToTop.label': 'Back to top',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Nosotros',
    'nav.services': 'Servicios',
    'nav.industries': 'Industrias',
    'nav.careers': 'Empleo',
    'nav.contact': 'Contacto',
    'nav.cta': 'Agendar Consulta',
    'nav.openMenu': 'Abrir menú',
    'nav.closeMenu': 'Cerrar menú',
    'nav.langSwitch': 'English',

    'footer.tagline':
      'Una firma boutique de búsqueda ejecutiva y reclutamiento estratégico que ayuda a empresas en crecimiento de Norteamérica, LATAM y Europa a construir equipos excepcionales.',
    'footer.navigate': 'Navegación',
    'footer.company': 'Empresa',
    'footer.getInTouch': 'Contacto',
    'footer.privacy': 'Aviso de Privacidad',
    'footer.terms': 'Términos de Servicio',
    'footer.serving': 'Operamos en Norteamérica, LATAM y Europa',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.note': 'Búsqueda ejecutiva y reclutamiento estratégico, pensado para empresas en crecimiento.',

    'btn.learnMore': 'Conocer Más',
    'btn.viewAllServices': 'Ver Todos los Servicios',
    'btn.exploreIndustries': 'Explorar Industrias',
    'btn.bookConsultation': 'Agendar Consulta',
    'btn.backHome': 'Volver al inicio',

    'form.name': 'Nombre completo',
    'form.email': 'Email de trabajo',
    'form.company': 'Empresa',
    'form.phone': 'Teléfono',
    'form.optional': '(opcional)',
    'form.need': '¿Para qué posición necesitás ayuda contratando?',
    'form.needSelect': 'Seleccioná una opción',
    'form.message': 'Contanos sobre la posición',
    'form.messagePlaceholder': 'Seniority, equipo, plazos, ubicación — lo que sea útil.',
    'form.submit': 'Enviar Mensaje',
    'form.sending': 'Enviando…',
    'form.success': 'Gracias — te contactaremos dentro de un día hábil.',
    'form.error': 'Algo salió mal. Por favor escribinos directamente usando el enlace de abajo.',
    'form.notConfigured': 'El envío en línea todavía no está configurado — por favor escribinos directamente usando el enlace de abajo.',
    'form.preferEmail': '¿Preferís email? Escribinos directamente a',

    'backToTop.label': 'Volver arriba',
  },
};
