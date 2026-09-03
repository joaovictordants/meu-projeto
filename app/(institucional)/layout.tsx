// app/(institucional)/layout.tsx
// Vale pra /termos e /privacidade, e pra mais nada.
export default function LayoutInstitucional({
  children,
}: {
  children: React.ReactNode;
}) {
  return <article className="texto-legal">{children}</article>;
}