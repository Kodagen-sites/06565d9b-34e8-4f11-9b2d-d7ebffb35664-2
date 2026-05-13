import Link from "next/link";

export default function NotFound() {
  return (
    <section className="pt-44 lg:pt-52 pb-32 px-6 lg:px-10 bg-white min-h-screen flex items-center">
      <div className="mx-auto max-w-[1400px] w-full">
        <p className="h-eyebrow text-ink-500 mb-6">/ 404</p>
        <h1 className="h-display text-5xl md:text-7xl text-ink-900 leading-[1.02] tracking-tightest max-w-[20ch]">
          Page not found.
        </h1>
        <p className="mt-6 text-ink-700 max-w-[58ch]">
          The page you&rsquo;re looking for isn&rsquo;t here. It may have moved, or never existed.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-3 px-7 py-4 bg-ink-900 text-white rounded-sm text-sm font-medium"
        >
          Return home →
        </Link>
      </div>
    </section>
  );
}
