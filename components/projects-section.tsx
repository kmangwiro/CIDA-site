import { Sprout, School, Droplets, HeartHandshake, Users, GraduationCap, Heart, Award } from "lucide-react"

const projects = [
  {
    icon: Sprout,
    title: "Ruwerera Irrigation Scheme Support",
    description:
      "Supporting smallholder farmers with irrigation infrastructure, training in agro-ecological practices, and market access for sustainable livelihoods.",
  },
  {
    icon: School,
    title: "Chovuronga Primary School ECD Support",
    description:
      "Providing early childhood development resources, infrastructure improvement, and educational materials for rural students.",
  },
  {
    icon: Droplets,
    title: "Community WASH Initiatives",
    description:
      "Improving access to clean water and sanitation facilities while promoting hygiene awareness in underserved areas.",
  },
  {
    icon: HeartHandshake,
    title: "Youth Empowerment Programs",
    description:
      "Equipping young people with life skills, vocational training, and awareness on drug abuse and HIV/AIDS prevention.",
  },
]

const stats = [
  { icon: Users, label: "Farmers Supported", value: "500+" },
  { icon: GraduationCap, label: "Schools Assisted", value: "12" },
  { icon: Heart, label: "Women Empowered", value: "300+" },
  { icon: Award, label: "Youth Trained", value: "200+" },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
            Our Work
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Projects & Impact
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Through our focused initiatives, we are creating measurable and lasting
            change in communities across Zimbabwe.
          </p>
        </div>

        {/* Current Projects */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex gap-5 rounded-2xl border border-border bg-background p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <project.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Stats */}
        <div className="mt-16">
          <h3 className="text-center font-serif text-2xl font-bold text-foreground">
            Impact Highlights
          </h3>
          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center rounded-2xl bg-primary/5 p-8 text-center"
              >
                <stat.icon className="h-8 w-8 text-primary" />
                <span className="mt-4 text-3xl font-bold text-foreground">
                  {stat.value}
                </span>
                <span className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
