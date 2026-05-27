import { en, type Translations } from "./en";

export const pt: Translations = {
  ...en,
  nav: {
    home: "Início",
    learn: "Aprender o Evangelho",
    signLanguage: "Língua de Sinais",
    scripture: "Escritura",
    printable: "Recursos para Impressão",
    teach: "Ensinar",
    about: "Sobre",
    contact: "Contato",
  },
  home: {
    ...en.home,
    headline:
      "O Evangelho de Jesus Cristo, ensinado claramente em língua de sinais.",
    subheadline:
      "Uma plataforma de ensino multilíngue simples para comunidades surdas, igrejas, famílias e missionários.",
    cta: {
      startLearning: "Começar a Aprender",
      downloadSheets: "Baixar Fichas de Ensino",
      share: "Compartilhar Este Recurso",
    },
  },
  common: {
    ...en.common,
    language: "Idioma",
    download: "Baixar",
    share: "Compartilhar",
    print: "Imprimir",
    next: "Próximo",
    previous: "Anterior",
    completed: "Concluído",
    inProgress: "Em Andamento",
    notStarted: "Não Iniciado",
    loading: "Carregando...",
    error: "Ocorreu um erro",
    tryAgain: "Tentar Novamente",
    close: "Fechar",
    open: "Abrir",
    save: "Salvar",
    cancel: "Cancelar",
    search: "Pesquisar",
    filter: "Filtrar",
    reset: "Redefinir",
    back: "Voltar",
    continue: "Continuar",
    yes: "Sim",
    no: "Não",
  },
};
