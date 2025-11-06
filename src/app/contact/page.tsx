import { contactMethods } from "@/data/contact";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <header className="mb-12 space-y-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#6fffe9]">
          Stay In Touch
        </p>
        <h1 className="bg-gradient-to-r from-[#6fffe9] via-[#5bc0be] to-[#8a9bcd] bg-clip-text text-4xl font-semibold text-transparent sm:text-5xl">
          Let&apos;s Collaborate
        </h1>
        <p className="mx-auto max-w-2xl text-base text-[#d2dbe7]">
          I&apos;m just a click away <br />
          Choose the channel that works best for you
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2">
        {contactMethods.map((method) => {
          const isHttp = method.href.startsWith("http");
          return (
            <a
              key={method.label}
              href={method.href}
              target={isHttp ? "_blank" : undefined}
              rel={isHttp ? "noopener noreferrer" : undefined}
              className="group relative overflow-hidden rounded-3xl border border-[#1c2541] bg-[#111627]/70 p-6 transition hover:border-[#6fffe9]/70 hover:bg-[#1c2541]/70 focus-visible:border-[#6fffe9]/70 focus-visible:outline-none"
            >
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#5bc0be]/25 blur-3xl opacity-0 transition group-hover:opacity-100" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a9bcd]">
                {method.label}
              </span>
              <p className="mt-4 text-base font-medium text-[#e2fffb]">
                {method.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#6fffe9]">
                {method.cta}
                <span
                  aria-hidden
                  className="transition group-hover:translate-x-1"
                >
                  -&gt;
                </span>
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
