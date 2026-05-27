import type { Translations } from "./en";
import { en } from "./en";
import { es } from "./es";
import { fr } from "./fr";
import { pt } from "./pt";
import { ar } from "./ar";
import { zh } from "./zh";
import { hi } from "./hi";
import { id } from "./id";
import { tl } from "./tl";

export type { Translations };

export const translations: Record<string, Translations> = {
  en,
  es,
  fr,
  pt,
  ar,
  zh,
  hi,
  id,
  tl,
};

export { en, es, fr, pt, ar, zh, hi, id, tl };
