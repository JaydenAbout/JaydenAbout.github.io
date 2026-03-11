import Link from "next/link"
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
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
              Junyan Chen
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
            <Button asChild size="lg" className="group">
              <Link href="/projects">
                View My Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I am a Systems Design Engineering graduate from the University of Waterloo with a background in mathematics and AI systems.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            My work focuses on transforming AI technologies into real-world products, combining human-centered design, data analysis, and rapid prototyping with modern AI development tools.
          </p>
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

      {/* Selected Projects CTA */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="p-8 md:p-12 rounded-2xl bg-card border border-border">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Selected AI and Data Projects
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Explore my portfolio of AI-powered products and data-driven solutions that demonstrate the intersection of technology and human-centered design.
          </p>
          <Button asChild variant="outline" size="lg" className="group">
            <Link href="/projects">
              Explore Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-border">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Junyan Chen. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
