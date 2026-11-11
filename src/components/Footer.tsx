import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-6 text-base text-muted">
        <p>© {new Date().getFullYear()} {site.name}. {site.location}.</p>
        <a href="#top" className="font-display hover:text-fg">Back to top</a>
      </div>
    </footer>
  );
}
