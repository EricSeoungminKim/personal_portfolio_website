type CareerSectionProps = {
  objective: string;
};

export function CareerSection({ objective }: CareerSectionProps) {
  return (
    <section className="grid gap-8 lg:grid-cols-[1.6fr,1fr]">
      <div className="rounded-3xl border border-[#1c2541] bg-[#111627]/70 p-8 backdrop-blur">
        <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8a9bcd]">
          Career Objective
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-[#d2dbe7]">
          {objective}
        </p>
      </div>
    </section>
  );
}
