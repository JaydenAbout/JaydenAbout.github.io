"use client"

import { useState } from "react"
import { GraduationCap, Briefcase, Code, Palette, BarChart3, Award, Mail, Phone, X, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { useLanguage } from "@/lib/language-context"

export default function AboutPage() {
  const { t } = useLanguage()
  const [certModalOpen, setCertModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const iflytekCertImages = [
    { src: "/images/cert-tune.png", titleKey: "about.cert.tune" },
    { src: "/images/cert-rag.png", titleKey: "about.cert.rag" },
    { src: "/images/cert-prompt.png", titleKey: "about.cert.prompt" },
    { src: "/images/cert-agent.png", titleKey: "about.cert.agent" },
  ]

  const skills = [
    {
      categoryKey: "skills.aiData",
      icon: Code,
      items: ["Python", "SQL", "R", "SPSS"]
    },
    {
      categoryKey: "skills.aiDev",
      icon: Code,
      items: ["Keras", "OpenCV", "CNN"]
    },
    {
      categoryKey: "skills.productDesign",
      icon: Palette,
      items: ["Figma", "Canva", "Human Factors Design"]
    },
    {
      categoryKey: "skills.analytics",
      icon: BarChart3,
      items: ["Power BI", "Data Visualization"]
    }
  ]

  const education = [
    {
      schoolKey: "edu.waterloo",
      location: "Waterloo, ON, Canada",
      period: "2024 - 2025",
      degreeKey: "edu.waterloo.degree"
    },
    {
      schoolKey: "edu.truman",
      location: "Kirksville, MO, USA",
      period: "2018 - 2022",
      degreeKey: "edu.truman.degree",
      minorKey: "edu.truman.minor"
    }
  ]

  const workExperience = [
    {
      companyKey: "work.pwc",
      location: "Chengdu, China",
      period: "2022 - 2023",
      titleKey: "work.pwc.title"
    }
  ]

  const certifications = [
    { nameKey: "about.cert.iflytek", hasImages: true },
    { nameKey: "about.cert.scholarship", hasImages: false }
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
          {t("about.title")}
        </h1>

        {/* Bio Section */}
        <section className="mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            {t("about.bio")}
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>{t("about.bio1")}</p>
            <p>{t("about.bio2")}</p>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-6">
            {t("about.education")}
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="flex gap-4 p-4 rounded-lg bg-card border border-border">
                <GraduationCap className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                    <h3 className="font-semibold text-foreground">{t(edu.schoolKey)}</h3>
                    <span className="text-sm text-muted-foreground">{edu.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{edu.location}</p>
                  <p className="text-muted-foreground">{t(edu.degreeKey)}</p>
                  {edu.minorKey && (
                    <p className="text-sm text-muted-foreground mt-1">{t(edu.minorKey)}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Work Section */}
        <section className="mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-6">
            {t("about.work")}
          </h2>
          <div className="space-y-6">
            {workExperience.map((work, index) => (
              <div key={index} className="flex gap-4 p-4 rounded-lg bg-card border border-border">
                <Briefcase className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                    <h3 className="font-semibold text-foreground">{t(work.companyKey)}</h3>
                    <span className="text-sm text-muted-foreground">{work.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{work.location}</p>
                  <p className="text-muted-foreground">{t(work.titleKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-6">
            {t("about.skills")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="p-4 rounded-lg bg-card border border-border">
                <div className="flex items-center gap-2 mb-3">
                  <skill.icon className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">{t(skill.categoryKey)}</h3>
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
            {t("about.certifications")}
          </h2>
          <div className="space-y-3">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 p-4 rounded-lg bg-card border border-border ${cert.hasImages ? 'cursor-pointer hover:border-primary/50 transition-colors' : ''}`}
                onClick={() => cert.hasImages && setCertModalOpen(true)}
              >
                <Award className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{t(cert.nameKey)}</span>
                {cert.hasImages && (
                  <span className="ml-auto text-xs text-muted-foreground">{t("about.clickToView")}</span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Certificate Images Modal */}
        <Dialog open={certModalOpen} onOpenChange={setCertModalOpen}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden bg-card">
            <VisuallyHidden>
              <DialogTitle>{t("about.cert.iflytek")}</DialogTitle>
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
                  alt={t(iflytekCertImages[currentImageIndex].titleKey)}
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
                  {t(iflytekCertImages[currentImageIndex].titleKey)}
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
            {t("about.contact")}
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
          © {new Date().getFullYear()} {t("home.title")}. {t("home.footer")}
        </p>
      </footer>
    </div>
  )
}
