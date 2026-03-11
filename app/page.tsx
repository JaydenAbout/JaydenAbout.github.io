import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Users, Zap, BarChart3 } from "lucide-react"

const focusAreas = [
  {
    icon: Brain,
    title: "AI Product Development",
    description: "Building intelligent products that solve real-world problems"
  },
  {
    icon: Users,
    title: "Human-Centered AI Systems",
    description: "Designing AI that prioritizes user experience and accessibility"
  },
  {
    icon: Zap,
    title: "Rapid AI Prototyping",
    description: "Fast iteration from concept to functional prototype"
  },
  {
    icon: BarChart3,
    title: "Data-Driven Product Design",
    description: "Leveraging data insights for informed product decisions"
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section with Focus Areas */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-10">
            {/* Left - Hero Content */}
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
                Jayden Chen
              </h1>
              <div className="space-y-1 mb-6">
                <p className="text-2xl md:text-3xl font-semibold text-primary">
                  AI Product Builder
                </p>
                <p className="text-xl md:text-2xl font-medium text-muted-foreground">
                  MEng in Systems Design Engineering from the University of Waterloo
                </p>
              </div>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                Building AI-powered products through human-centered design and rapid prototyping.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button asChild size="lg" className="group">
                  <Link href="/projects">
                    View My Projects
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right - Photo and Focus Areas */}
            <div className="flex flex-col items-center lg:items-end gap-6 flex-shrink-0">
              {/* Profile Photo */}
              <div className="relative w-48 h-60 rounded-xl overflow-hidden border-2 border-border shadow-lg">
                <Image
                  src="/images/profile.jpg"
                  alt="Jayden Chen"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              
              {/* Focus Areas */}
              <div className="w-full lg:w-72">
                <h2 className="text-sm font-medium text-muted-foreground mb-3">Focus Areas</h2>
                <div className="flex flex-col gap-2">
                  {focusAreas.map((area) => (
                    <div
                      key={area.title}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300"
                    >
                      <area.icon className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">
                        {area.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-border">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()}  Chen. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
