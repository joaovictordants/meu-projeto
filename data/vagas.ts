// O "type" descreve o formato de uma vaga. Serve pro editor te avisar
// quando você escrever "titlo" em vez de "titulo".
export type Vaga = {
  id: string;
  titulo: string;
  empresa: string;
  empresaSlug: string;
  area: string;
  senioridade: string;
  local: string;
  aceitaIniciante: boolean;
  descricao: string;
};

export const vagas: Vaga[] = [
  {
    // texto, não número: o que vem da URL é sempre texto
    id: "1",
    titulo: "Pessoa Desenvolvedora Front-end Júnior",
    empresa: "Aurora Tech",
    empresaSlug: "aurora-tech",
    area: "Front-end",
    senioridade: "Júnior",
    local: "Remoto",
    aceitaIniciante: true,
    descricao: "Trabalhar com React e Next.js num time de produto.",
  },
  {
    id: "2",
    titulo: "Analista de Dados Júnior",
    empresa: "Aurora Tech",
    empresaSlug: "aurora-tech",
    area: "Dados",
    senioridade: "Júnior",
    local: "Híbrido · Recife",
    aceitaIniciante: true,
    descricao: "SQL, planilhas e construção de painéis.",
  },
  // ...pelo menos mais quatro
];