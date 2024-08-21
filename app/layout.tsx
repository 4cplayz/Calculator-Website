import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/sections/Header";

const inter = Inter({ subsets: ["latin"] });
const calculatorIcon = '../assets/calculator-favicon.svg';

export const metadata: Metadata = {
  title: "Calculator Website",
  description: "New project to test my skills",
  icons: {
    icon: `${calculatorIcon}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
