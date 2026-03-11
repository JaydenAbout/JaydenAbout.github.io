"use client"

import { useState } from "react"
import { GraduationCap, Briefcase, Code, Palette, BarChart3, Award, Mail, Linkedin, Github, X, ChevronLeft, ChevronRight, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

const iflytekCertImages = [
  { src: "/images/cert-tune.png", title: "Fine-tuning Engineer" },
  { src: "/images/cert-rag.png", title: "RAG Engineer" },
  { src: "/images/cert-prompt.png", title: "Prompt Engineer" },
  { src: "/images/cert-agent.png", title: "Intelligent Agent Engineer" },
]

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
    location: "Waterloo, ON, Canada",
    period: "2024 - 2025",
    degree: "Master of Engineering – Systems Design Engineering"
  },
  {
    school: "Truman State University",
    location: "Kirksville, MO, USA",
    period: "2018 - 2022",
    degree: "Bachelor of Science – Mathematics",
    minor: "Minor in Statistics"
  }
]

const workExperience = [
  {
    company: "PricewaterhouseCoopers (PwC) Chengdu SDC",
    location: "Chengdu, China",
    period: "2022 - 2023",
    title: "Associate, Data Analysis"
  }
]

const certifications = [
  { name: "iFLYTEK AI Engineer Certification", hasImages: true },
  { name: "University Academic Scholarships", hasImages: false }
]

const contactLinks = [
  {
    label: "QQ Mail",
    icon: Mail,
    href: "mailto:741263218@qq.com"
  },
  {
    label: "Outlook",
    icon: Mail,
    href: "mailto:Jaydenabout@outlook.com"
  },
  {
    label: "Phone",
    icon: Phone,
    href: "tel:13488940508"
  },
]

export default function AboutPage() {
  const [certModalOpen, setCertModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % iflytekCertImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + iflytekCertImages.length) % iflytekCertImages.length)
  }

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
              I focus on building AI-powered products that combine data insights, machine learning, and user-centered design to solve real-world problems.
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
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                    <h3 className="font-semibold text-foreground">{edu.school}</h3>
                    <span className="text-sm text-muted-foreground">{edu.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{edu.location}</p>
                  <p className="text-muted-foreground">{edu.degree}</p>
                  {edu.minor && (
                    <p className="text-sm text-muted-foreground mt-1">{edu.minor}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Work Section */}
        <section className="mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-6">
            Work
          </h2>
          <div className="space-y-6">
            {workExperience.map((work, index) => (
              <div key={index} className="flex gap-4 p-4 rounded-lg bg-card border border-border">
                <Briefcase className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                    <h3 className="font-semibold text-foreground">{work.company}</h3>
                    <span className="text-sm text-muted-foreground">{work.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{work.location}</p>
                  <p className="text-muted-foreground">{work.title}</p>
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
              <div
                key={index}
                className={`flex items-center gap-3 p-4 rounded-lg bg-card border border-border ${cert.hasImages ? 'cursor-pointer hover:border-primary/50 transition-colors' : ''}`}
                onClick={() => cert.hasImages && setCertModalOpen(true)}
              >
                <Award className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{cert.name}</span>
                {cert.hasImages && (
                  <span className="ml-auto text-xs text-muted-foreground">Click to view</span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Certificate Images Modal */}
        <Dialog open={certModalOpen} onOpenChange={setCertModalOpen}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden bg-card">
            <VisuallyHidden>
              <DialogTitle>iFLYTEK AI Certifications</DialogTitle>
            </VisuallyHidden>
            <div className="relative">
              {/* Close button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-background/80 hover:bg-background"
                onClick={() => setCertModalOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>

              {/* Image */}
              <div className="relative aspect-[1.414/1] w-full">
                <Image
                  src={iflytekCertImages[currentImageIndex].src}
                  alt={iflytekCertImages[currentImageIndex].title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Navigation */}
              <div className="absolute inset-y-0 left-0 flex items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-2 bg-background/80 hover:bg-background"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  className="mr-2 bg-background/80 hover:bg-background"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>

              {/* Caption and dots */}
              <div className="p-4 bg-card border-t border-border">
                <p className="text-center font-medium text-foreground mb-2">
                  {iflytekCertImages[currentImageIndex].title}
                </p>
                <div className="flex justify-center gap-2">
                  {iflytekCertImages.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${index === currentImageIndex ? 'bg-primary' : 'bg-muted-foreground/30'}`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

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
