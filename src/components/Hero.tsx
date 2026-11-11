import { site, stats } from "@/data/site";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-20 pt-20 md:pb-28 md:pt-32">
      <div className="hero-rise">
        <p className="font-display text-lg text-muted">{site.name}</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl">
          I build the interfaces enterprise teams rely on every day.
        </h1>
        <p className="mt-8 max-w-xl text-xl text-muted">
          {site.role} with five years of experience across B2B, B2C, and sales enablement for enterprise-level products, now expanding into full-stack development.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 font-display">
          <a href="#contact" className="rounded-full bg-accent px-6 py-3 font-medium text-bg transition-opacity hover:opacity-90">
            Get in touch
          </a>
          <a href="#experience" className="rounded-full border border-line px-6 py-3 font-medium transition-colors hover:border-accent">
            See my experience
          </a>
        </div>
      </div>

      <dl className="mt-20 grid gap-8 border-t border-line pt-8 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.value}>
            <dt className="font-display text-2xl font-semibold tracking-tight">{s.value}</dt>
            <dd className="mt-1 text-base text-muted">{s.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
