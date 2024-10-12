import localFont from "next/font/local";

const switzer = localFont({
  src: "../fonts/Switzer-Variable.ttf",
  variable: "--font-switzer",
});

const plein = localFont({
  src: "../fonts/Plein-Variable.ttf",
  variable: "--font-plein",
});

export const fontVariables = `${switzer.variable} ${plein.variable}`;
