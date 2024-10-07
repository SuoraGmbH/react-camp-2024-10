// Funktioniert nicht, weil localization nicht für jeden beliebigen string einen Wert kennt
// function sayGoodMorning(country: string) {
//   return <i>{localization[country]}</i>;
// }

// Gibt einen Fehler weil es nk auf localization nicht gibt
// function sayGoodMorning(country: "de" | "nk" | "en") {
//   return <i>{localization[country]}</i>;
// }

// Funktioniert
// function sayGoodMorning(country: "de" | "nl" | "en") {
//   return <i>{localization[country]}</i>;
// }

function sayGoodMorning(country: keyof typeof localization) {
  return <i>{localization[country]}</i>;
}

const localization = {
  de: "Guten Morgen",
  nl: "Goedemorgen",
  en: "Good morning",
  fr: "Buondsakodsakosd",
};

export const element = <h1>{sayGoodMorning("fr")}, Sara!</h1>;
