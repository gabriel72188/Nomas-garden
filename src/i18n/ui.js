export const ui = {
    es: {
        'plato.desde': 'desde',
        'plato.alergenos': 'Alérgenos',
        'plato.eligeTamano': 'Elige el tamaño',
        'plato.obligatorio': 'Obligatorio',
        'plato.extras': 'Extras',
        'nav.carta': 'Carta',
        'nav.contacto': 'Contacto',
    },
    en: {
        'plato.desde': 'from',
        'plato.alergenos': 'Allergens',
        'plato.eligeTamano': 'Choose size',
        'plato.obligatorio': 'Required',
        'plato.extras': 'Extras',
        'nav.carta': 'Menu',
        'nav.contacto': 'Contact',
    },
    fr: {
        'plato.desde': 'à partir de',
        'plato.alergenos': 'Allergènes',
        'plato.eligeTamano': 'Choisissez la taille',
        'plato.obligatorio': 'Obligatoire',
        'plato.extras': 'Suppléments',
        'nav.carta': 'Menu',
        'nav.contacto': 'Contact',
    },
    de: {
        'plato.desde': 'ab',
        'plato.alergenos': 'Allergene',
        'plato.eligeTamano': 'Größe wählen',
        'plato.obligatorio': 'Erforderlich',
        'plato.extras': 'Extras',
        'nav.carta': 'Speisekarte',
        'nav.contacto': 'Kontakt',
    }
};

// Esta función nos ayudará a extraer la palabra correcta según el idioma
export function useTranslations(lang) {
    return function t(key) {
        return ui[lang][key] || ui['es'][key];
    }
}