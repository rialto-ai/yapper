import { en, type Translations } from "./en";

export const fr: Translations = {
  ...en,
  nav: {
    home: "Accueil",
    learn: "Apprendre l'Évangile",
    signLanguage: "Langue des Signes",
    scripture: "Écriture",
    printable: "Ressources Imprimables",
    teach: "Enseigner",
    about: "À Propos",
    contact: "Contact",
  },
  home: {
    ...en.home,
    headline:
      "L'Évangile de Jésus-Christ, enseigné clairement en langue des signes.",
    subheadline:
      "Une plateforme pédagogique multilingue simple pour les communautés sourdes, les églises, les familles et les missionnaires.",
    cta: {
      startLearning: "Commencer à Apprendre",
      downloadSheets: "Télécharger les Fiches",
      share: "Partager Cette Ressource",
    },
  },
  common: {
    ...en.common,
    language: "Langue",
    download: "Télécharger",
    share: "Partager",
    print: "Imprimer",
    next: "Suivant",
    previous: "Précédent",
    completed: "Terminé",
    inProgress: "En Cours",
    notStarted: "Non Commencé",
    loading: "Chargement...",
    error: "Une erreur est survenue",
    tryAgain: "Réessayer",
    close: "Fermer",
    open: "Ouvrir",
    save: "Enregistrer",
    cancel: "Annuler",
    search: "Rechercher",
    filter: "Filtrer",
    reset: "Réinitialiser",
    back: "Retour",
    continue: "Continuer",
    yes: "Oui",
    no: "Non",
  },
};
