import type { Metadata } from "next";

// Rota sem [param] não precisa de função: o título não depende de dado.
// Um objeto exportado basta, e ele substitui o title do layout nesta rota.
export const metadata: Metadata = {
  title: "Empresas · Leque de Vagas",
  description: "As empresas que publicam vagas para quem está migrando para tecnologia.",
};