export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="section container mx-auto">
      {title ? <h2 className="section-title">{title}</h2> : null}
      {children}
    </section>
  );
}
