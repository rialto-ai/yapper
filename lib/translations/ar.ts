import { en, type Translations } from "./en";

export const ar: Translations = {
  ...en,
  nav: {
    home: "الرئيسية",
    learn: "تعلّم الإنجيل",
    signLanguage: "لغة الإشارة",
    scripture: "الكتاب المقدس",
    printable: "موارد قابلة للطباعة",
    teach: "التعليم",
    about: "من نحن",
    contact: "اتصل بنا",
  },
  home: {
    ...en.home,
    headline:
      "إنجيل يسوع المسيح، يُعلَّم بوضوح بلغة الإشارة.",
    subheadline:
      "منصة تعليمية متعددة اللغات وبسيطة للمجتمعات الصمّاء والكنائس والعائلات والمرسلين.",
    cta: {
      startLearning: "ابدأ التعلّم",
      downloadSheets: "تحميل أوراق التعليم",
      share: "شارك هذا المورد",
    },
  },
  common: {
    ...en.common,
    language: "اللغة",
    download: "تحميل",
    share: "مشاركة",
    print: "طباعة",
    next: "التالي",
    previous: "السابق",
    completed: "مكتمل",
    inProgress: "قيد التنفيذ",
    notStarted: "لم يبدأ",
    loading: "جارٍ التحميل...",
    error: "حدث خطأ",
    tryAgain: "حاول مرة أخرى",
    close: "إغلاق",
    open: "فتح",
    save: "حفظ",
    cancel: "إلغاء",
    search: "بحث",
    filter: "تصفية",
    reset: "إعادة تعيين",
    back: "رجوع",
    continue: "متابعة",
    yes: "نعم",
    no: "لا",
  },
};
