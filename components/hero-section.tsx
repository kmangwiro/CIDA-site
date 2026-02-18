import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <Image
        src="/images/hero.jpeg"
        alt="Lush community garden with irrigation channels in rural Zimbabwe"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-foreground/60" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32">
        <div className="max-w-2xl">
          <div className="mb-6 flex items-center gap-4">
            <Image
              src="/images/cida-original.png"
              alt="CIDA Logo"
              width={80}
              height={80}
              className="h-20 w-20 object-contain brightness-0 invert"
            />
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
                Community Innovation and Development Aid
              </p>
            </div>
          </div>
          <h1 className="text-balance font-serif text-4xl font-bold leading-tight text-primary-foreground md:text-6xl lg:text-7xl">
            Empowering Communities Through Innovation
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-primary-foreground/80">
            Building resilient, healthy and sustainable communities across Zimbabwe.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link href="#about">Learn More</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
              <Link href="#get-involved">Get Involved</Link>
            </Button>
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90" asChild>
              <Link href="#contact">Donate</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
