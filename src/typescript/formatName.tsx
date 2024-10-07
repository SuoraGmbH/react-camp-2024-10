import * as React from "react";

interface User {
  firstName: string;
  lastName: string;
}

function formatName(user: User): string | 4711 {
  if (user.firstName === "Marius") {
    // return 4712; // would not be allowed
    return 4711;
  }

  return `${user.firstName} ${user.lastName}`;
}

export let wuerfelWert: 1 | 2 | 3 | 4 | 5 | 6 = 6;

wuerfelWert = 3;
wuerfelWert = 1;
// wuerfelWert = 7; // not allowed

const user: User = {
  firstName: "Miriam",
  lastName: "Janssen",
};

export const element: React.ReactNode = <h1>👋, {formatName(user)}!</h1>;

// Not allowed, because 4711 does not support toUpperCase
// export const element: React.ReactNode = (
//   <h1>👋, {formatName(user).toUpperCase()}!</h1>
// );
