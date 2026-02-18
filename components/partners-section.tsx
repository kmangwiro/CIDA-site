import { Landmark, School, Users, HandHeart } from "lucide-react"

const partners = [
  {
    icon: Landmark,
    title: "Local Authorities",
    description:
      "Collaborating with provincial and district councils across Midlands and Masvingo to align community development efforts.",
  },
  {
    icon: School,
    title: "Schools",
    description:
      "Partnering with schools like Chovuronga Primary School to support early childhood development and basic education.",
  },
  {
    icon: Users,
    title: "Community Committees",
    description:
      "Working alongside irrigation scheme committees and village development groups to drive grassroots change.",
  },
  {
    icon: HandHeart,
    title: "Donors & Supporters",
    description:
      "Grateful for the generous contributions that enable our programs to reach communities in need.",
  },
]

export function PartnersSection() {
  return (
    <section className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
            Working Together
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Partners & Supporters
          </h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner) => (
            <div
              key={partner.title}
              className="flex flex-col items-center rounded-2xl border border-border bg-background p-8 text-center transition-shadow hover:shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <partner.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">
                {partner.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
