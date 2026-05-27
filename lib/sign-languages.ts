export interface SignLanguageOption {
  code: string;
  name: string;
  country: string;
  type: string;
}

export const SIGN_LANGUAGES: SignLanguageOption[] = [
  { code: 'asl', name: 'American Sign Language', country: 'United States', type: 'National' },
  { code: 'bsl', name: 'British Sign Language', country: 'United Kingdom', type: 'National' },
  { code: 'auslan', name: 'Auslan', country: 'Australia', type: 'National' },
  { code: 'isl', name: 'International Sign', country: 'International', type: 'International' },
  { code: 'fsl', name: 'Filipino Sign Language', country: 'Philippines', type: 'National' },
  { code: 'lsf', name: 'French Sign Language', country: 'France', type: 'National' },
  { code: 'lse', name: 'Spanish Sign Language', country: 'Spain', type: 'National' },
];

export interface SignLanguageLesson {
  id: string;
  title: string;
  signLanguage: string;
  language: string;
  duration: string;
  topic: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

// Generate sample lessons for each sign language and each gospel topic
export const SIGN_LANGUAGE_LESSONS: SignLanguageLesson[] = [
  // Create ~20 sample lessons across different sign languages and topics
  { id: 'asl-god-holy', title: 'God is Holy', signLanguage: 'asl', language: 'English', duration: '5:30', topic: 'God\'s Holiness', difficulty: 'beginner' },
  { id: 'asl-man-sinful', title: 'Man is Sinful', signLanguage: 'asl', language: 'English', duration: '6:15', topic: 'Human Sin', difficulty: 'beginner' },
  { id: 'asl-judgment', title: 'Judgment is Real', signLanguage: 'asl', language: 'English', duration: '5:45', topic: 'Judgment', difficulty: 'beginner' },
  { id: 'asl-christ-god-man', title: 'Christ: God and Man', signLanguage: 'asl', language: 'English', duration: '7:00', topic: 'Person of Christ', difficulty: 'intermediate' },
  { id: 'asl-cross', title: 'Christ Died for Sinners', signLanguage: 'asl', language: 'English', duration: '8:20', topic: 'The Cross', difficulty: 'beginner' },
  { id: 'asl-resurrection', title: 'Christ Rose Again', signLanguage: 'asl', language: 'English', duration: '6:30', topic: 'Resurrection', difficulty: 'beginner' },
  { id: 'asl-repent', title: 'Repent and Believe', signLanguage: 'asl', language: 'English', duration: '7:45', topic: 'Repentance & Faith', difficulty: 'beginner' },
  { id: 'bsl-god-holy', title: 'God is Holy', signLanguage: 'bsl', language: 'English', duration: '5:15', topic: 'God\'s Holiness', difficulty: 'beginner' },
  { id: 'bsl-cross', title: 'Christ Died for Sinners', signLanguage: 'bsl', language: 'English', duration: '8:00', topic: 'The Cross', difficulty: 'beginner' },
  { id: 'bsl-repent', title: 'Repent and Believe', signLanguage: 'bsl', language: 'English', duration: '7:30', topic: 'Repentance & Faith', difficulty: 'beginner' },
  { id: 'auslan-god-holy', title: 'God is Holy', signLanguage: 'auslan', language: 'English', duration: '5:45', topic: 'God\'s Holiness', difficulty: 'beginner' },
  { id: 'auslan-cross', title: 'Christ Died for Sinners', signLanguage: 'auslan', language: 'English', duration: '8:10', topic: 'The Cross', difficulty: 'intermediate' },
  { id: 'isl-gospel-overview', title: 'The Gospel Overview', signLanguage: 'isl', language: 'English', duration: '12:00', topic: 'Full Gospel', difficulty: 'beginner' },
  { id: 'isl-god-holy', title: 'God is Holy', signLanguage: 'isl', language: 'English', duration: '6:00', topic: 'God\'s Holiness', difficulty: 'beginner' },
  { id: 'fsl-god-holy', title: 'Ang Diyos ay Banal', signLanguage: 'fsl', language: 'Tagalog', duration: '5:30', topic: 'God\'s Holiness', difficulty: 'beginner' },
  { id: 'fsl-cross', title: 'Si Cristo ay Namatay', signLanguage: 'fsl', language: 'Tagalog', duration: '7:45', topic: 'The Cross', difficulty: 'beginner' },
  { id: 'lsf-god-holy', title: 'Dieu est Saint', signLanguage: 'lsf', language: 'French', duration: '5:30', topic: 'God\'s Holiness', difficulty: 'beginner' },
  { id: 'lsf-cross', title: 'Christ est Mort pour les Pecheurs', signLanguage: 'lsf', language: 'French', duration: '8:15', topic: 'The Cross', difficulty: 'intermediate' },
  { id: 'lse-god-holy', title: 'Dios es Santo', signLanguage: 'lse', language: 'Spanish', duration: '5:40', topic: 'God\'s Holiness', difficulty: 'beginner' },
  { id: 'lse-cross', title: 'Cristo Murio por los Pecadores', signLanguage: 'lse', language: 'Spanish', duration: '8:00', topic: 'The Cross', difficulty: 'beginner' },
];

export const TOPICS = ['God\'s Holiness', 'Human Sin', 'Judgment', 'Person of Christ', 'The Cross', 'Resurrection', 'Repentance & Faith', 'Full Gospel'];
export const DIFFICULTIES = ['beginner', 'intermediate', 'advanced'] as const;
