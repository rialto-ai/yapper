import { en, type Translations } from "./en";

export const id: Translations = {
  ...en,
  nav: {
    home: "Beranda",
    learn: "Pelajari Injil",
    signLanguage: "Bahasa Isyarat",
    scripture: "Kitab Suci",
    printable: "Sumber Daya Cetak",
    teach: "Mengajar",
    about: "Tentang Kami",
    contact: "Hubungi Kami",
  },
  home: {
    ...en.home,
    headline:
      "Injil Yesus Kristus, diajarkan dengan jelas dalam bahasa isyarat.",
    subheadline:
      "Platform pengajaran multibahasa yang sederhana untuk komunitas tuli, gereja, keluarga, dan misionaris.",
    cta: {
      startLearning: "Mulai Belajar",
      downloadSheets: "Unduh Lembar Pengajaran",
      share: "Bagikan Sumber Daya Ini",
    },
  },
  common: {
    ...en.common,
    language: "Bahasa",
    download: "Unduh",
    share: "Bagikan",
    print: "Cetak",
    next: "Berikutnya",
    previous: "Sebelumnya",
    completed: "Selesai",
    inProgress: "Sedang Berlangsung",
    notStarted: "Belum Dimulai",
    loading: "Memuat...",
    error: "Terjadi kesalahan",
    tryAgain: "Coba Lagi",
    close: "Tutup",
    open: "Buka",
    save: "Simpan",
    cancel: "Batal",
    search: "Cari",
    filter: "Filter",
    reset: "Atur Ulang",
    back: "Kembali",
    continue: "Lanjutkan",
    yes: "Ya",
    no: "Tidak",
  },
};
