import Image from "next/image"
import { Target, Eye, Users } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To leverage innovation in development of communities through empowerment.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "To engrain resilient and healthy communities.",
  },
  {
    icon: Users,
    title: "Our Team",
    description:
      "CIDA is made up of highly qualified and passionate professionals committed to humanitarian and development work in Zimbabwe.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Text */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
              About Us
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              Who We Are
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Community Innovation and Development Aid (CIDA) is a non-governmental
              organization (NGO) dedicated to enhancing the welfare of marginalized
              communities in Zimbabwe. Founded in 2021 in response to the impacts of
              COVID-19, climate change, gender-based violence, and child abuse, CIDA
              addresses interconnected challenges affecting vulnerable communities.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "Agro-ecological practices",
                "Community participation",
                "Indigenous knowledge systems",
                "Environmental sustainability",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              We currently operate in Midlands and Masvingo Provinces, with plans for
              national expansion.
            </p>
          </div>

          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/images/about-team.jpeg"
              alt="CIDA team with Chovuronga Primary School authorities and ECD class"
              width={640}
              height={440}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Mission / Vision / Team */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {values.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-background p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
