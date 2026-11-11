import { Section } from "./Section";
import { projects } from "@/data/site";

const link = "font-display font-medium text-accent underline underline-offset-4 hover:opacity-80";

export function Projects() {
  return (
    <Section id="projects" title="Personal Projects">
      <ul className="divide-y divide-line">
        {projects.map((p) => (
          <li key={p.name} className="py-8 first:pt-0 last:pb-0">
            <h3 className="font-display text-2xl font-semibold tracking-tight">{p.name}</h3>
            <p className="mt-2 max-w-prose">{p.description}</p>
            <p className="mt-3 text-base text-muted">{p.stack.join(", ")}</p>
            <p className="mt-4 flex gap-6">
              <a className={link} href={p.live} target="_blank" rel="noopener noreferrer">
                View live site<span className="sr-only"> for {p.name}</span>
              </a>
              <a className={link} href={p.code} target="_blank" rel="noopener noreferrer">
                View source code<span className="sr-only"> for {p.name}</span>
              </a>
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
