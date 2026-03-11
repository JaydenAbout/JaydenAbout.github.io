"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Eye, Lightbulb, Wrench, TrendingUp, ChevronRight, Briefcase } from "lucide-react"

const projects = [
  {
    id: "driver-drowsiness",
    title: "Drowsiness Detection and Alert System for Driving Safety",
    icon: Eye,
    overview: "An AI-powered driver drowsiness monitoring system designed to detect early signs of driver drowsiness using computer vision and deep learning, and alarm in vision, hearing and touch.",
    problem: "Driver drowsiness is one of the major causes of traffic accidents, yet it is difficult to detect in real time before dangerous situations occur.",
    solution: "Developed a lightweight convolutional neural network (CNN) to analyze driver facial features including eye closure and mouth opening frequency for real-time drowsiness detection.",
    role: [
      "Product requirement definition",
      "CNN model design",
      "Human-machine interaction prototype",
      "Hardware and software integration"
    ],
    impact: [
      { label: "drowsiness Detection Accuracy", value: "95%" },
      { label: "Inference Latency", value: "40 ms" },
      { label: "Monitoring Capability", value: "Real-time" }
    ]
  },
  {
    id: "fitune",
    title: "Fitune AI Nutrition Project",
    icon: Lightbulb,
    overview: "Fitune is an AI-assisted nutrition and fitness tracking concept designed to simplify daily diet management and help users maintain sustainable fitness habits.",
    problem: "Most fitness tracking apps require manual calorie counting and provide limited personalized feedback, which makes long-term adherence difficult.",
    solution: "Designed an AI-assisted nutrition tracking concept that estimates calorie intake, tracks macronutrients, and provides adaptive dietary suggestions based on user goals.",
    role: [
      "Product concept design",
      "User journey design",
      "Data structure and analytics planning",
      "AI-assisted prototyping"
    ],
    futureDirection: [
      "AI-powered meal recognition",
      "Personalized nutrition recommendations",
      "Wearable device integration"
    ]
  },
  {
    id: "business-analytics",
    title: "Business Analytics Project",
    icon: TrendingUp,
    overview: "A business analytics study using financial and market data to evaluate growth opportunities in the electronics recycling industry.",
    keyWork: [
      "Analyzed financial datasets using SPSS",
      "Identified industry trends using SQL",
      "Built Power BI dashboards for data visualization",
      "Presented insights to stakeholders"
    ]
  },
  {
    id: "work-experience",
    title: "Work Experience",
    icon: Briefcase,
    isPlaceholder: true,
    overview: "Professional experience section - content coming soon.",
    placeholder: "This section will be updated with detailed work experience information."
  }
]

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState(projects[0].id)
  const currentProject = projects.find(p => p.id === activeProject)

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-24">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Projects
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
                    <span className="text-sm font-medium">{project.title}</span>
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
                <div className="flex items-center gap-3 mb-6">
                  <currentProject.icon className="h-8 w-8 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    {currentProject.title}
                  </h2>
                </div>

                {currentProject.isPlaceholder ? (
                  <div className="py-12 text-center">
                    <Briefcase className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                    <p className="text-muted-foreground">{currentProject.placeholder}</p>
                  </div>
                ) : (
                  <div className="space-y-8">
                    {/* Overview */}
                    <section>
                      <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                        Overview
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {currentProject.overview}
                      </p>
                    </section>

                    {/* Problem */}
                    {"problem" in currentProject && currentProject.problem && (
                      <section>
                        <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                          Problem
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {currentProject.problem}
                        </p>
                      </section>
                    )}

                    {/* Solution */}
                    {"solution" in currentProject && currentProject.solution && (
                      <section>
                        <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                          Solution
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {currentProject.solution}
                        </p>
                      </section>
                    )}

                    {/* My Role */}
                    {"role" in currentProject && currentProject.role && (
                      <section>
                        <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                          My Role
                        </h3>
                        <ul className="space-y-2">
                          {currentProject.role.map((item, index) => (
                            <li key={index} className="flex items-start gap-2 text-muted-foreground">
                              <span className="text-primary mt-1.5">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </section>
                    )}

                    {/* Key Work */}
                    {"keyWork" in currentProject && currentProject.keyWork && (
                      <section>
                        <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                          Key Work
                        </h3>
                        <ul className="space-y-2">
                          {currentProject.keyWork.map((item, index) => (
                            <li key={index} className="flex items-start gap-2 text-muted-foreground">
                              <span className="text-primary mt-1.5">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </section>
                    )}

                    {/* Impact */}
                    {"impact" in currentProject && currentProject.impact && (
                      <section>
                        <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                          Impact
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          {currentProject.impact.map((item, index) => (
                            <div key={index} className="bg-background rounded-lg p-4 border border-border">
                              <p className="text-2xl font-bold text-primary mb-1">{item.value}</p>
                              <p className="text-sm text-muted-foreground">{item.label}</p>
                            </div>
                          ))}
                        </div>
                      </section>
                    )}

                    {/* Future Direction */}
                    {"futureDirection" in currentProject && currentProject.futureDirection && (
                      <section>
                        <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                          Future Direction
                        </h3>
                        <ul className="space-y-2">
                          {currentProject.futureDirection.map((item, index) => (
                            <li key={index} className="flex items-start gap-2 text-muted-foreground">
                              <span className="text-primary mt-1.5">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </section>
                    )}
                  </div>
                )}
              </article>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-border">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Jayden Chen. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
