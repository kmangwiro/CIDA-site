import Image from "next/image"
import { Sprout, Briefcase, Droplets, Apple, HeartHandshake, Shield, Globe } from "lucide-react"

const areas = [
  {
    icon: Sprout,
    title: "Community Resilience & Agro-Ecology",
    bullets: [
      "Promote agro-ecological practices",
      "Enhance food security",
      "Strengthen Natural Resources Management",
      "Combat climate change impacts",
      "Promote sustainable farming systems",
    ],
    image: "/images/agriculture.jpeg",
    alt: "Ruwerera irrigation scheme member with covo crop",
  },
  {
    icon: Briefcase,
    title: "Poverty Reduction & Agribusiness Development",
    bullets: [
      "Enterprise development initiatives",
      "Irrigation scheme support",
      "Income-generating activities",
      "Smallholder farmer empowerment",
    ],
    image: "/images/wash.jpeg",
    alt: "Irrigation members fetching water",
  },
  {
    icon: Droplets,
    title: "Water, Sanitation & Hygiene (WASH)",
    bullets: [
      "Improve water access in disadvantaged communities",
      "Promote hygiene awareness",
      "Support sanitation infrastructure development",
    ],
    image: "/images/irrigation.jpeg",
    alt: "Community clean water access point",
  },
  {
    icon: Apple,
    title: "Wellness & Nutrition",
    bullets: [
      "Promote balanced nutrition",
      "Support community gardens",
      "Improve child nutrition outcomes",
      "Health awareness campaigns",
    ],
    image: "/images/agriculture.jpeg",
    alt: "Community garden producing nutritious food",
  },
  {
    icon: HeartHandshake,
    title: "Youth Empowerment & HIV/AIDS Advocacy",
    bullets: [
      "Youth skills training",
      "Drug abuse prevention programs",
      "HIV and AIDS awareness",
      "Life skills education",
    ],
    image: "/images/school.jpeg",
    alt: "Youth empowerment session",
  },
  {
    icon: Shield,
    title: "Child Protection & Gender Equality",
    bullets: [
      "Prevent gender-based violence",
      "Promote women's empowerment",
      "Child safeguarding programs",
      "Support basic education",
    ],
    image: "/images/school.jpeg",
    alt: "Chovuronga Primary School pupils and ECD classroom",
  },
  {
    icon: Globe,
    title: "Environmental Protection",
    bullets: [
      "Promote sustainable land use",
      "Encourage conservation practices",
      "Climate change mitigation activities",
    ],
    image: "/images/environment.jpeg",
    alt: "Tree planting and conservation efforts",
  },
]

export function ThematicAreasSection() {
  return (
    <section id="thematic-areas" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
            What We Do
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Our Thematic Areas
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            CIDA addresses interconnected challenges through seven key thematic areas,
            each designed to create lasting positive change in Zimbabwe&apos;s communities.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, i) => (
            <div
              key={area.title}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg ${
                i === 6 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={area.image}
                  alt={area.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/30" />
                <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-foreground/90">
                  <area.icon className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground">{area.title}</h3>
                <ul className="mt-4 space-y-2">
                  {area.bullets.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
