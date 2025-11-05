type CareerSectionProps = {
  objective: string;
};

export function CareerSection({ objective, snapshot }: CareerSectionProps) {
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
      <aside className="rounded-3xl border border-[#1c2541] bg-[#111627]/50 p-8 backdrop-blur">
        <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8a9bcd]">
          Snapshot
        </h2>
        <dl className="mt-4 space-y-4 text-sm text-[#d2dbe7]">
          {snapshot.map((item) => (
            <div key={item.label}>
              <dt className="text-xs uppercase tracking-[0.3em] text-[#8a9bcd]">
                {item.label}
              </dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </aside>
    </section>
  );
}
