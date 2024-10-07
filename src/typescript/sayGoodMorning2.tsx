import { AnyCaseString, anyCaseStringToLowerCase } from "./Anycase";

const foo: AnyCaseString<"hello"> = "hellO";
console.log(foo);

function sayGoodMorning(country: AnyCaseString<keyof typeof localization>) {
  const lowerCaseCountry = anyCaseStringToLowerCase(country);

  return <i>{localization[lowerCaseCountry]}</i>;
}

const localization = {
  de: "Guten Morgen",
  nl: "Goedemorgen",
  en: "Good morning",
  fr: "Buondsakodsakosd",
};

export const element = <h1>{sayGoodMorning("dE")}, Sara!</h1>;
