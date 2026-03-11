import { GraduationCap, Code, Palette, BarChart3, Award, Mail, Linkedin, Github } from "lucide-react"
import Link from "next/link"

const skills = [
  {
    category: "AI & Data",
    icon: Code,
    items: ["Python", "SQL", "R", "SPSS"]
  },
  {
    category: "AI Development",
    icon: Code,
    items: ["Keras", "OpenCV", "CNN"]
  },
  {
    category: "Product & Design",
    icon: Palette,
    items: ["Figma", "Canva", "Human Factors Design"]
  },
  {
    category: "Analytics",
    icon: BarChart3,
    items: ["Power BI", "Data Visualization"]
  }
]

const education = [
  {
    school: "University of Waterloo",
    degree: "Master of Engineering – Systems Design Engineering"
  },
  {
    school: "Truman State University",
    degree: "Bachelor of Science – Mathematics",
    minor: "Minor in Statistics"
  }
]

const certifications = [
  "iFLYTEK AI Engineer Certification",
  "University Academic Scholarships"
]

const contactLinks = [
  {
    label: "Email",
    icon: Mail,
    href: "mailto:contact@example.com"
  },
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com"
  },
  {
    label: "GitHub",
    icon: Github,
    href: "https://github.com"
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-24">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          About
        </h1>

        {/* Bio Section */}
        <section className="mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Bio
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I am a Systems Design Engineering graduate from the University of Waterloo with a background in mathematics and data analysis.
            </p>
            <p>
              My interests lie at the intersection of AI technology, human-centered design, and product development.
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-6">
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="flex gap-4 p-4 rounded-lg bg-card border border-border">
                <GraduationCap className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{edu.school}</h3>
                  <p className="text-muted-foreground">{edu.degree}</p>
                  {edu.minor && (
                    <p className="text-sm text-muted-foreground mt-1">{edu.minor}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-6">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="p-4 rounded-lg bg-card border border-border">
                <div className="flex items-center gap-2 mb-3">
                  <skill.icon className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="px-2.5 py-1 rounded bg-background border border-border text-sm text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-6">
            Certifications & Awards
          </h2>
          <div className="space-y-3">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
                <Award className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{cert}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-6">
            Contact
          </h2>
          <div className="flex flex-wrap gap-4">
            {contactLinks.map((contact, index) => (
              <Link
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-lg bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-200"
              >
                <contact.icon className="h-5 w-5" />
                <span className="font-medium">{contact.label}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-12 border-t border-border">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Jayden Chen. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
