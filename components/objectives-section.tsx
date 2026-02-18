import { Check } from "lucide-react"

const objectives = [
  "Enhance food security and environmental health through agro-ecology.",
  "Promote health and hygiene practices in disadvantaged communities.",
  "Ensure child safety and promote access to basic education.",
  "Prevent drug abuse among vulnerable populations.",
  "Empower women and promote gender equality.",
]

export function ObjectivesSection() {
  return (
    <section className="py-24 bg-primary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
              Our Purpose
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
              Our Objectives
            </h2>
            <p className="mt-4 leading-relaxed text-primary-foreground/70">
              Every initiative we undertake is guided by clear objectives that keep
              our efforts focused and measurable.
            </p>
          </div>

          <div className="space-y-5">
            {objectives.map((obj, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-xl bg-primary-foreground/10 p-5"
              >
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-secondary">
                  <Check className="h-4 w-4 text-secondary-foreground" />
                </div>
                <p className="leading-relaxed text-primary-foreground/90">{obj}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
