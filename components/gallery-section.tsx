import Image from "next/image"

const gallery = [
  {
    src: "/images/agriculture.jpeg",
    alt: "Ruwerera irrigation scheme member showing her covo crop",
    caption: "Agriculture & Irrigation",
  },
  {
    src: "/images/irrigation.jpeg",
    alt: "Ruwerera irrigation scheme members fetching water",
    caption: "Community Farming",
  },
  {
    src: "/images/school.jpeg",
    alt: "ECD Class of 2025 inside their classroom",
    caption: "School & Child Support",
  },
  {
    src: "/images/about-team.jpeg",
    alt: "CIDA team with Chovuronga Primary School authorities",
    caption: "Community Meetings",
  },
  {
    src: "/images/wash.jpeg",
    alt: "Community clean water initiative",
    caption: "WASH Programs",
  },
  {
    src: "/images/environment.jpeg",
    alt: "Conservation and tree planting activities",
    caption: "Environmental Activities",
  },
]

export function GallerySection() {
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
            See Our Work
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Gallery
          </h2>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item) => (
            <div
              key={item.caption}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/40" />
                <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
                  <p className="text-sm font-semibold text-primary-foreground">
                    {item.caption}
                  </p>
                  <p className="mt-1 text-xs text-primary-foreground/70">
                    {item.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
