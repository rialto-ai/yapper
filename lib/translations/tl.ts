import { en, type Translations } from "./en";

export const tl: Translations = {
  ...en,
  nav: {
    home: "Tahanan",
    learn: "Pag-aralan ang Ebanghelyo",
    signLanguage: "Sign Language",
    scripture: "Kasulatan",
    printable: "Mga Naka-print na Mapagkukunan",
    teach: "Magturo",
    about: "Tungkol Sa Amin",
    contact: "Makipag-ugnayan",
  },
  home: {
    ...en.home,
    headline:
      "Ang Ebanghelyo ni Hesu-Kristo, itinuturo nang malinaw sa sign language.",
    subheadline:
      "Isang simpleng multilingual na platform ng pagtuturo para sa mga komunidad ng bingi, simbahan, pamilya, at misyonero.",
    cta: {
      startLearning: "Simulan ang Pag-aaral",
      downloadSheets: "I-download ang mga Aral na Papel",
      share: "Ibahagi ang Mapagkukunang Ito",
    },
  },
  common: {
    ...en.common,
    language: "Wika",
    download: "I-download",
    share: "Ibahagi",
    print: "I-print",
    next: "Susunod",
    previous: "Nakaraan",
    completed: "Nakumpleto",
    inProgress: "Isinasagawa",
    notStarted: "Hindi Pa Nagsisimula",
    loading: "Naglo-load...",
    error: "May naganap na error",
    tryAgain: "Subukan Muli",
    close: "Isara",
    open: "Buksan",
    save: "I-save",
    cancel: "Kanselahin",
    search: "Maghanap",
    filter: "I-filter",
    reset: "I-reset",
    back: "Bumalik",
    continue: "Magpatuloy",
    yes: "Oo",
    no: "Hindi",
  },
};
