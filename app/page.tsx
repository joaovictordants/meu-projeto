// Isto também é um componente — a diferença é que ele está
// num arquivo chamado page.tsx, e por isso vira uma página.
export default function Home() {
  return (
    <section>
      <h1>Meu primeiro Next</h1>
      <p>
        O cabeçalho acima não está escrito neste arquivo — ele vem
        do layout, e aparece em todas as páginas.
      </p>
    </section>
  );
}