// FRENTE 1 · o contrato da equipe. Este arquivo sai primeiro, sozinho,
// num commit só. As outras três frentes ficam paradas até ele existir.

export type Vaga = {
  // texto, não número: o que vem da URL é sempre texto
  id: string;
  titulo: string;
  empresa: string;
  // tem que existir em data/empresas.ts, escrito igualzinho
  empresaSlug: string;
  // Front-end · Back-end · Dados · Mobile · QA · Design
  area: string;
  // Estágio · Júnior · Pleno
  senioridade: string;
  // Remoto · Híbrido · Presencial + cidade
  local: string;
  aceitaIniciante: boolean;
  // no mínimo 300 caracteres: o "ver mais" precisa ter o que esconder
  descricao: string;
};

export const vagas: Vaga[] = [
  {
    id: "1",
    titulo: "Pessoa Desenvolvedora Front-end Júnior",
    empresa: "Aurora Tech",
    empresaSlug: "aurora-tech",
    area: "Front-end",
    senioridade: "Júnior",
    local: "Remoto",
    aceitaIniciante: true,
    // Uma string longa quebrada com +. Continua sendo UMA string;
    // o texto fica legível no editor e o arquivo não vira uma linha gigante.
    descricao:
      "Você vai trabalhar com React e Next.js num time de produto que já " +
      "está no ar, pareando com gente mais experiente nas primeiras semanas " +
      "e assumindo telas inteiras depois. O dia a dia é ler o código dos " +
      "outros, abrir pull request pequeno e conversar com quem desenha. Não " +
      "exigimos experiência anterior em empresa: exigimos vontade de " +
      "aprender em público e de pedir ajuda antes de travar dois dias.",
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
    descricao:
      "O time de dados cuida dos painéis que a diretoria abre toda segunda " +
      "de manhã. Você vai escrever SQL, limpar planilha que chegou torta e " +
      "montar visualização que responde uma pergunta de negócio por vez. " +
      "Metade do trabalho é técnico; a outra metade é descobrir o que a " +
      "pessoa que pediu o relatório realmente queria saber. Python é " +
      "bem-vindo e não é obrigatório para se candidatar.",
  },
  {
    id: "3",
    titulo: "Pessoa Desenvolvedora Mobile Pleno",
    empresa: "Nuvem Rosa",
    empresaSlug: "nuvem-rosa",
    area: "Mobile",
    senioridade: "Pleno",
    local: "Presencial · Olinda",
    // falso de propósito: sem mistura, o selo e as contagens
    // da frente 4 dão sempre o mesmo número
    aceitaIniciante: false,
    descricao:
      "O aplicativo da Nuvem Rosa está nas duas lojas e tem gente usando " +
      "todo dia, então a vaga é para quem já publicou app e sabe o que " +
      "acontece quando uma atualização quebra na mão de quem usa. A stack " +
      "é React Native com Expo, testes em Detox e uma esteira de release " +
      "que você vai ajudar a arrumar. Pedimos dois anos de experiência com " +
      "mobile porque hoje não há ninguém sênior no time para revisar.",
  },
  // ↑ faltam 9. O mínimo são 12 vagas, com pelo menos 4 áreas,
  //   3 senioridades e mistura de aceitaIniciante.
];