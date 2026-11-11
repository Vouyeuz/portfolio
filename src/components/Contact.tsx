import Image from "next/image";
import { Section } from "./Section";
import { site } from "@/data/site";

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="max-w-prose text-xl">
        I’m open to full-time and freelance frontend engineering work, and to full-stack opportunities. Send me a message and I’ll reply.
      </p>
      <a
        href={`mailto:${site.email}`}
        className="mt-8 inline-block break-all font-display text-2xl font-semibold tracking-tight text-accent underline underline-offset-8 sm:text-4xl"
      >
        {site.email}
      </a>
      <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-display">
        {site.socials.map((s) => (
          <li className="flex gap-x-2" key={s.label}>
            <Image src={s.icon} alt={s.label} width={20} height={20} />
            <a href={s.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-accent">
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
