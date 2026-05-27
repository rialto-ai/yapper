import { en, type Translations } from "./en";

export const hi: Translations = {
  ...en,
  nav: {
    home: "मुख्य पृष्ठ",
    learn: "सुसमाचार सीखें",
    signLanguage: "सांकेतिक भाषा",
    scripture: "पवित्रशास्त्र",
    printable: "प्रिंट करने योग्य संसाधन",
    teach: "सिखाएं",
    about: "हमारे बारे में",
    contact: "संपर्क करें",
  },
  home: {
    ...en.home,
    headline:
      "यीशु मसीह का सुसमाचार, सांकेतिक भाषा में स्पष्ट रूप से सिखाया गया।",
    subheadline:
      "बधिर समुदायों, कलीसियाओं, परिवारों और मिशनरियों के लिए एक सरल बहुभाषी शिक्षण मंच।",
    cta: {
      startLearning: "सीखना शुरू करें",
      downloadSheets: "शिक्षण पत्रक डाउनलोड करें",
      share: "यह संसाधन साझा करें",
    },
  },
  common: {
    ...en.common,
    language: "भाषा",
    download: "डाउनलोड",
    share: "साझा करें",
    print: "प्रिंट",
    next: "अगला",
    previous: "पिछला",
    completed: "पूर्ण",
    inProgress: "प्रगति में",
    notStarted: "शुरू नहीं हुआ",
    loading: "लोड हो रहा है...",
    error: "एक त्रुटि हुई",
    tryAgain: "पुनः प्रयास करें",
    close: "बंद करें",
    open: "खोलें",
    save: "सहेजें",
    cancel: "रद्द करें",
    search: "खोजें",
    filter: "फ़िल्टर",
    reset: "रीसेट",
    back: "वापस",
    continue: "जारी रखें",
    yes: "हाँ",
    no: "नहीं",
  },
};
