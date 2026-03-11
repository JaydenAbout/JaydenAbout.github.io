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
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
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
                  Systems Design Engineer
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
                <span className="text-muted-foreground">
                  Systems Design Engineering @ University of Waterloo
                </span>
              </div>
            </div>

            {/* Right - Profile Photo */}
            <div className="relative w-56 h-72 md:w-64 md:h-80 rounded-2xl overflow-hidden border-2 border-border shadow-xl flex-shrink-0 mx-auto lg:mx-0">
              <Image
                src="/images/profile.jpg"
                alt="Jayden Chen"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12">
          Focus Areas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {focusAreas.map((area) => (
            <div
              key={area.title}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <area.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {area.title}
              </h3>
              <p className="text-muted-foreground">
                {area.description}
              </p>
            </div>
          ))}
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
