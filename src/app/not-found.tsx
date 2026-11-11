import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-start justify-center gap-4 px-6">
      <h1 className="font-display text-4xl font-semibold">Page not found</h1>
      <p className="text-muted">This address doesn’t exist. Go back to the portfolio home page.</p>
      <Link href="/" className="font-display font-medium text-accent underline underline-offset-4">
        Back to home
      </Link>
    </main>
  );
}
