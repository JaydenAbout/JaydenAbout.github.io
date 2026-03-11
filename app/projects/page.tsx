"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Eye, Lightbulb, TrendingUp, ChevronRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function ProjectsPage() {
  const { t } = useLanguage()
  const [activeProject, setActiveProject] = useState("driver-drowsiness")

  const projects = [
    {
      id: "driver-drowsiness",
      titleKey: "project.drowsiness.title",
      period: "2024 - 2025",
      icon: Eye,
      overviewKey: "project.drowsiness.overview",
      problemKey: "project.drowsiness.problem",
      targetUsersKey: "project.drowsiness.targetUsers",
      productIdeaKey: "project.drowsiness.productIdea",
      roleKeys: [
        "project.drowsiness.role1",
        "project.drowsiness.role2",
        "project.drowsiness.role3",
        "project.drowsiness.role4"
      ],
      impact: [
        { labelKey: "project.drowsiness.impact1", value: "95%" },
        { labelKey: "project.drowsiness.impact2", value: "40 ms" },
        { labelKey: "project.drowsiness.impact3", valueKey: "project.drowsiness.impactValue3" }
      ]
    },
    {
      id: "fitune",
      titleKey: "project.fitune.title",
      period: "2025 - 2026",
      icon: Lightbulb,
      overviewKey: "project.fitune.overview",
      problemKey: "project.fitune.problem",
      targetUsersKey: "project.fitune.targetUsers",
      productIdeaKey: "project.fitune.productIdea",
      roleKeys: [
        "project.fitune.role1",
        "project.fitune.role2",
        "project.fitune.role3",
        "project.fitune.role4"
      ],
      futureDirectionKeys: [
        "project.fitune.future1",
        "project.fitune.future2",
        "project.fitune.future3"
      ]
    },
    {
      id: "business-analytics",
      titleKey: "project.analytics.title",
      period: "2024",
      icon: TrendingUp,
      overviewKey: "project.analytics.overview",
      keyWorkKeys: [
        "project.analytics.work1",
        "project.analytics.work2",
        "project.analytics.work3",
        "project.analytics.work4"
      ]
    }
  ]

  const currentProject = projects.find(p => p.id === activeProject)

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-24">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          {t("projects.title")}
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Panel - Project Navigation */}
          <nav className="lg:w-80 flex-shrink-0">
            <ul className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0">
              {projects.map((project) => (
                <li key={project.id}>
                  <button
                    onClick={() => setActiveProject(project.id)}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 whitespace-nowrap lg:whitespace-normal",
                      activeProject === project.id
                        ? "bg-primary/10 text-primary border border-primary/30"
                        : "bg-card text-muted-foreground hover:bg-card/80 hover:text-foreground border border-transparent"
                    )}
                  >
                    <project.icon className="h-5 w-5 flex-shrink-0" />
                    <span className="text-sm font-medium">{t(project.titleKey)}</span>
                    <ChevronRight className={cn(
                      "h-4 w-4 ml-auto hidden lg:block transition-transform",
                      activeProject === project.id && "text-primary"
                    )} />
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Panel - Project Details */}
          <div className="flex-1 min-w-0">
            {currentProject && (
              <article className="bg-card rounded-xl border border-border p-6 md:p-8">
                <div className="flex items-start gap-3 mb-6">
                  <currentProject.icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      {t(currentProject.titleKey)}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">{currentProject.period}</p>
                  </div>
                </div>

                <div className="space-y-8">
                  {/* Overview */}
                  <section>
                    <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                      {t("projects.overview")}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {t(currentProject.overviewKey)}
                    </p>
                  </section>

                  {/* Problem */}
                  {"problemKey" in currentProject && (
                    <section>
                      <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                        {t("projects.problem")}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {t(currentProject.problemKey)}
                      </p>
                    </section>
                  )}

                  {/* Target Users */}
                  {"targetUsersKey" in currentProject && (
                    <section>
                      <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                        {t("projects.targetUsers")}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {t(currentProject.targetUsersKey)}
                      </p>
                    </section>
                  )}

                  {/* Product Idea */}
                  {"productIdeaKey" in currentProject && (
                    <section>
                      <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                        {t("projects.productIdea")}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {t(currentProject.productIdeaKey)}
                      </p>
                    </section>
                  )}

                  {/* My Role */}
                  {"roleKeys" in currentProject && (
                    <section>
                      <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                        {t("projects.myRole")}
                      </h3>
                      <ul className="space-y-2">
                        {currentProject.roleKeys.map((key, index) => (
                          <li key={index} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-primary mt-1.5">•</span>
                            {t(key)}
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}

                  {/* Key Work */}
                  {"keyWorkKeys" in currentProject && (
                    <section>
                      <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                        {t("projects.keyWork")}
                      </h3>
                      <ul className="space-y-2">
                        {currentProject.keyWorkKeys.map((key, index) => (
                          <li key={index} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-primary mt-1.5">•</span>
                            {t(key)}
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}

                  {/* Impact */}
                  {"impact" in currentProject && (
                    <section>
                      <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                        {t("projects.impact")}
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {currentProject.impact.map((item, index) => (
                          <div key={index} className="bg-background rounded-lg p-4 border border-border">
                            <p className="text-2xl font-bold text-primary mb-1">
                              {"valueKey" in item ? t(item.valueKey) : item.value}
                            </p>
                            <p className="text-sm text-muted-foreground">{t(item.labelKey)}</p>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Future Direction */}
                  {"futureDirectionKeys" in currentProject && (
                    <section>
                      <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                        {t("projects.futureDirection")}
                      </h3>
                      <ul className="space-y-2">
                        {currentProject.futureDirectionKeys.map((key, index) => (
                          <li key={index} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-primary mt-1.5">•</span>
                            {t(key)}
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}
                </div>
              </article>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-border">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {t("home.title")}. {t("home.footer")}
        </p>
      </footer>
    </div>
  )
}
