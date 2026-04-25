import type { Metadata } from "next";
import "./globals.css";

import { Nunito, Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mundo Pet | Cuidado completo para o seu melhor amigo",
  description:
    "A Mundo Pet oferece banho e tosa, consultas veterinárias, vacinação e produtos selecionados para garantir saúde, bem-estar e felicidade ao seu pet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={cn("h-full", "antialiased", nunito.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
