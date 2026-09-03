import type { Metadata } from "next";
import Cabecalho from "@/components/Cabecalho";
import "./globals.css";

// vira <title> e <meta name="description"> sozinho
export const metadata: Metadata = {
  title: "Meu primeiro Next",
  description: "Projeto da aula 01 de Introdução ao Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // lang="pt-BR" importa: o leitor de tela usa pra escolher a voz
    <html lang="pt-BR">
      <body>
        {/* a peça, escrita uma vez e usada aqui */}
        <Cabecalho />

        <main className="conteudo">{children}</main>
      </body>
    </html>
  );
}
