import { Section } from "./Section";
import { skills } from "@/data/site";

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
        {skills.map((s) => (
          <div key={s.group}>
            <dt className="font-display text-lg font-semibold">{s.group}</dt>
            <dd className="mt-1 text-base text-muted">{s.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
