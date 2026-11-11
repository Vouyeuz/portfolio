import { Section } from "./Section";
import { company, roles } from "@/data/site";
import { getDuration, formatDuration } from "@/lib/duration";

const dansDuration = formatDuration(getDuration(company.startDate, company.endDate));

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="max-w-prose">
        <h3 className="font-display text-xl font-semibold">{company.name}</h3>
        <p className="mt-1 text-base text-muted">
          {company.period} ({dansDuration})
        </p>
        <p className="text-base text-muted">
          {company.location}
        </p>
        <p className="mt-3">{company.description}</p>
      </div>

      <ol className="mt-12 space-y-14 border-l border-line pl-8">
        {roles.map((role) => (
          <li key={role.title} className="relative">
            <span
              aria-hidden
              className={`absolute -left-[37px] top-2 h-[9px] w-[9px] rounded-full ${
                role.current ? "live-dot bg-accent" : "bg-muted"
              }`}
            />
            <h3 className="font-display text-2xl font-semibold tracking-tight">{role.title}</h3>
            <p className="text-base text-muted">{role.period} ({formatDuration(getDuration(role.startDate, role.endDate))})</p>
            <p className="mt-1 text-base text-muted">
              {role.type}, {role.mode}.
              {role.current && <span className="ml-2 font-medium text-accent">Current</span>}
            </p>

            {role.summary && <p className="mt-4 max-w-prose">{role.summary}</p>}

            {role.projects && (
              <div className="mt-8 space-y-10">
                {role.projects.map((p) => (
                  <article key={p.name} className="max-w-prose">
                    <h4 className="font-display text-lg font-semibold">{p.name}</h4>
                    <p className="text-base text-muted">{p.period} ({formatDuration(getDuration(p.startDate, p.endDate))})</p>
                    <p className="mt-2">{p.description}</p>
                    <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-muted">
                      {p.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            )}

            <p className="mt-8 max-w-prose text-base">
              <span className="font-display font-semibold">Tech stack: </span>
              <span className="text-muted">{role.stack.join(", ")}</span>
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
