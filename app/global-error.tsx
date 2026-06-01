"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <main className="grid min-h-screen place-items-center bg-background px-6 text-foreground">
          <div className="max-w-md text-center">
            <h1 className="font-serif text-3xl">Something went sideways.</h1>
            <p className="mt-4 font-mono text-[13px] leading-relaxed text-muted">
              The page hit an unexpected error. Try again, and if it keeps happening, send me a note.
            </p>
            <button
              type="button"
              onClick={reset}
              className="mt-6 border border-foreground/10 px-4 py-2 font-mono text-[12px] transition-colors hover:border-accent/50 hover:text-accent"
            >
              Try again
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
