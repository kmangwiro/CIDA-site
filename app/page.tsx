import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ThematicAreasSection } from "@/components/thematic-areas-section"
import { ObjectivesSection } from "@/components/objectives-section"
import { ProjectsSection } from "@/components/projects-section"
import { GallerySection } from "@/components/gallery-section"
import { PartnersSection } from "@/components/partners-section"
import { GetInvolvedSection } from "@/components/get-involved-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ThematicAreasSection />
        <ObjectivesSection />
        <ProjectsSection />
        <GallerySection />
        <PartnersSection />
        <GetInvolvedSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
