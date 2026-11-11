import { Section } from "./Section";
import { about, site } from "@/data/site";

const linkedIn = site.socials.find((item) => item.label === "LinkedIn")?.href;

export function About() {
  return (
    <Section id="about" title="About">
      <div className="max-w-prose space-y-5">
        {about.map((p, i) => (
          <p key={p}>
            {p}
            {i === about.length - 1 && linkedIn && (
              <>
                {" "}
                <a
                  href={linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-accent underline underline-offset-4 hover:opacity-80"
                >
                  Let’s connect<span className="sr-only"> on LinkedIn</span>
                </a>
                .
              </>
            )}
          </p>
        ))}
      </div>
    </Section>
  );
}
