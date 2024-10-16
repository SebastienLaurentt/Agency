import type { Metadata } from "next";
import "./globals.css";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import { fontVariables } from "./lib/font";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${fontVariables} antialiased`}>
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
