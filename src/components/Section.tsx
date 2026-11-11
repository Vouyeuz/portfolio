export function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-line py-16 md:py-24">
      <div className="mx-auto grid max-w-5xl gap-8 px-6 md:grid-cols-[180px_1fr] md:gap-12">
        <h2
          id={`${id}-title`}
          className="font-display text-2xl font-semibold tracking-tight md:sticky md:top-24 md:self-start"
        >
          {title}
        </h2>
        <div>{children}</div>
      </div>
    </section>
  );
}
