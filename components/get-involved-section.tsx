import { Heart, Handshake, UserPlus, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const ways = [
  {
    icon: Heart,
    title: "Donate",
    description:
      "Your financial contribution directly supports programs that change lives in Zimbabwe's most vulnerable communities.",
  },
  {
    icon: Handshake,
    title: "Partner With Us",
    description:
      "Organizations can collaborate with CIDA on shared goals in community development, health, and education.",
  },
  {
    icon: UserPlus,
    title: "Volunteer",
    description:
      "Share your skills and time to make a hands-on impact in the communities we serve.",
  },
  {
    icon: Gift,
    title: "Sponsor a Project",
    description:
      "Fund a specific initiative like an irrigation scheme, ECD classroom, or youth training program.",
  },
]

export function GetInvolvedSection() {
  return (
    <section id="get-involved" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
            Make a Difference
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Support Our Work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            There are many ways to join our mission and help build resilient,
            healthy communities across Zimbabwe.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ways.map((way) => {
            const Wrapper = way.title === "Donate" ? Link : "div"
            const wrapperProps =
              way.title === "Donate" ? { href: "#contact" } : {}
            return (
              <Wrapper
                key={way.title}
                {...(wrapperProps as Record<string, string>)}
                className="group flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center transition-all hover:border-primary/30 hover:shadow-lg cursor-pointer"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 transition-colors group-hover:bg-secondary/20">
                  <way.icon className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">
                  {way.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {way.description}
                </p>
              </Wrapper>
            )
          })}
        </div>

        <div className="mt-16 flex justify-center">
          <Button size="lg" asChild>
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
