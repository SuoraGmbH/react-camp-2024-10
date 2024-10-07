// AnyCaseString is a type that takes a literal string type and returns a type that represents all possible cases of the string.
export type AnyCaseString<T extends string> =
  T extends `${infer First}${infer Rest}`
    ?
        | `${Lowercase<First>}${AnyCaseString<Rest>}`
        | `${Uppercase<First>}${AnyCaseString<Rest>}`
    : T;

const foo: AnyCaseString<"hello">[] = ["hello", "HELLO", "HeLLo", "hELLo"];
console.log(foo);

export const anyCaseStringToLowerCase = <T extends string>(
  str: AnyCaseString<T>,
): Lowercase<T> => {
  return str.toLowerCase() as Lowercase<T>;
};
