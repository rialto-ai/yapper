export interface Lesson {
  id: string;
  number: number;
  slug: string;
  icon: string; // lucide icon name
}

export const LESSONS: Lesson[] = [
  { id: 'god-is-holy', number: 1, slug: 'god-is-holy', icon: 'Flame' },
  { id: 'man-is-sinful', number: 2, slug: 'man-is-sinful', icon: 'Heart' },
  { id: 'judgment-is-real', number: 3, slug: 'judgment-is-real', icon: 'Scale' },
  { id: 'christ-is-god-and-man', number: 4, slug: 'christ-is-god-and-man', icon: 'Crown' },
  { id: 'christ-died-for-sinners', number: 5, slug: 'christ-died-for-sinners', icon: 'Cross' },
  { id: 'christ-rose', number: 6, slug: 'christ-rose', icon: 'Sun' },
  { id: 'repent-and-believe', number: 7, slug: 'repent-and-believe', icon: 'RotateCcw' },
];
