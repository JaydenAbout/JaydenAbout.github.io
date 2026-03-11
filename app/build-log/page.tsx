import { Rocket, Sparkles, Bot, Check, Clock } from "lucide-react"

const versions = [
  {
    version: "v0.1",
    title: "MVP Launch",
    status: "completed",
    items: [
      "Defined product structure",
      "Generated initial UI using AI coding tools",
      "Implemented Home, Projects, About and Build Log pages"
    ]
  },
  {
    version: "v0.2",
    title: "UX Improvements",
    status: "completed",
    items: [
      "Improved content structure",
      "Refined project storytelling",
      "Optimized layout and readability"
    ]
  },
  {
    version: "v0.3",
    title: "AI Module (Planned)",
    status: "planned",
    items: [
      "AI portfolio assistant",
      "Interactive project explanations",
      "AI-powered portfolio exploration"
    ]
  }
]

function getStatusIcon(status: string) {
  if (status === "completed") {
    return <Check className="h-5 w-5 text-primary" />
  }
  return <Clock className="h-5 w-5 text-muted-foreground" />
}

export default function BuildLogPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-24">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Rocket className="h-8 w-8 text-primary" />
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Build Log
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            How this portfolio was built using AI-assisted development.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

          {/* Version Entries */}
          <div className="space-y-12">
            {versions.map((version, index) => (
              <div key={version.version} className="relative pl-12 md:pl-20">
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-4 w-8 h-8 rounded-full bg-card border-2 border-border flex items-center justify-center">
                  {getStatusIcon(version.status)}
                </div>

                {/* Content Card */}
                <div className="bg-card rounded-xl border border-border p-6 md:p-8 transition-all duration-300 hover:border-primary/30">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-mono font-semibold">
                      {version.version}
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground">
                      {version.title}
                    </h2>
                    {version.status === "planned" && (
                      <span className="px-2 py-0.5 rounded text-xs bg-muted text-muted-foreground">
                        Planned
                      </span>
                    )}
                  </div>

                  <ul className="space-y-3">
                    {version.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-muted-foreground">
                        {version.status === "completed" ? (
                          <Sparkles className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        ) : (
                          <Bot className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                        )}
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Note */}
        <div className="mt-16 p-6 rounded-xl bg-card border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-3">
            Built With
          </h3>
          <div className="flex flex-wrap gap-2">
            {["Next.js", "React", "TypeScript", "Tailwind CSS", "v0.dev"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg bg-background border border-border text-sm text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-12 border-t border-border">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Junyan Chen. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
