import { en, type Translations } from "./en";

export const es: Translations = {
  ...en,
  nav: {
    home: "Inicio",
    learn: "Aprender el Evangelio",
    signLanguage: "Lengua de Señas",
    scripture: "Escritura",
    printable: "Recursos Imprimibles",
    teach: "Enseñar",
    about: "Acerca de",
    contact: "Contacto",
  },
  home: {
    ...en.home,
    headline:
      "El Evangelio de Jesucristo, enseñado claramente en lengua de señas.",
    subheadline:
      "Una plataforma multilingüe sencilla de enseñanza para comunidades sordas, iglesias, familias y misioneros.",
    cta: {
      startLearning: "Comenzar a Aprender",
      downloadSheets: "Descargar Hojas de Enseñanza",
      share: "Compartir Este Recurso",
    },
  },
  common: {
    ...en.common,
    language: "Idioma",
    download: "Descargar",
    share: "Compartir",
    print: "Imprimir",
    next: "Siguiente",
    previous: "Anterior",
    completed: "Completado",
    inProgress: "En Progreso",
    notStarted: "No Iniciado",
    loading: "Cargando...",
    error: "Ocurrió un error",
    tryAgain: "Intentar de Nuevo",
    close: "Cerrar",
    open: "Abrir",
    save: "Guardar",
    cancel: "Cancelar",
    search: "Buscar",
    filter: "Filtrar",
    reset: "Restablecer",
    back: "Volver",
    continue: "Continuar",
    yes: "Sí",
    no: "No",
  },
};
