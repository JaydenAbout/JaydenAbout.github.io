"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type Language = "en" | "zh"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.buildLog": "Build Log",
    "nav.about": "About",
    
    // Home Page
    "home.title": "Jayden Chen",
    "home.role": "AI Product Manager",
    "home.degree": "MEng in Systems Design Engineering",
    "home.tagline": "Building AI-powered products through human-centered design and rapid prototyping.",
    "home.viewProjects": "View My Projects",
    "home.focusAreas": "Focus Areas",
    "home.focus.aiProduct": "AI Product Development",
    "home.focus.aiProductDesc": "Building intelligent products that solve real-world problems",
    "home.focus.humanAI": "Human-Centered AI Systems",
    "home.focus.humanAIDesc": "Designing AI that prioritizes user experience and accessibility",
    "home.focus.rapidPrototyping": "Rapid AI Prototyping",
    "home.focus.rapidPrototypingDesc": "Turning product ideas into testable AI prototypes quickly",
    "home.focus.dataDesign": "Data-Driven Product Design",
    "home.focus.dataDesignDesc": "Leveraging data insights for informed product decisions",
    "home.footer": "All rights reserved.",
    
    // Projects Page
    "projects.title": "Projects",
    "projects.overview": "Overview",
    "projects.problem": "Problem",
    "projects.targetUsers": "Target Users",
    "projects.productIdea": "Product Idea",
    "projects.myRole": "My Role",
    "projects.keyWork": "Key Work",
    "projects.impact": "Impact",
    "projects.futureDirection": "Future Direction",
    
    // Project 1 - Drowsiness Detection
    "project.drowsiness.title": "Drowsiness Detection and Alert System for Driving Safety",
    "project.drowsiness.overview": "An AI-powered driver drowsiness monitoring system designed to detect early signs of driver drowsiness using computer vision and deep learning, and alarm in vision, hearing and touch.",
    "project.drowsiness.problem": "Driver drowsiness is one of the major causes of traffic accidents, yet it is difficult to detect in real time before dangerous situations occur.",
    "project.drowsiness.targetUsers": "Long-haul truck drivers, ride-share drivers, and fleet management companies seeking to reduce fatigue-related accidents.",
    "project.drowsiness.productIdea": "A non-intrusive, camera-based monitoring solution that continuously analyzes driver alertness and delivers timely multi-sensory alerts (visual, audio, haptic) before dangerous drowsiness levels are reached.",
    "project.drowsiness.role1": "Product requirement definition",
    "project.drowsiness.role2": "CNN model design",
    "project.drowsiness.role3": "Human-machine interaction prototype",
    "project.drowsiness.role4": "Hardware and software integration",
    "project.drowsiness.impact1": "Drowsiness Detection Accuracy",
    "project.drowsiness.impact2": "Inference Latency",
    "project.drowsiness.impact3": "Monitoring Capability",
    "project.drowsiness.impactValue3": "Real-time",
    
    // Project 2 - Fitune
    "project.fitune.title": "Fitune AI Nutrition Project",
    "project.fitune.overview": "Fitune is an AI-assisted nutrition and fitness tracking concept designed to simplify daily diet management and help users maintain sustainable fitness habits.",
    "project.fitune.problem": "Most fitness tracking apps require manual calorie counting and provide limited personalized feedback, which makes long-term adherence difficult.",
    "project.fitune.targetUsers": "Health-conscious individuals and fitness enthusiasts who want effortless diet tracking without tedious manual input.",
    "project.fitune.productIdea": "An intelligent nutrition companion that uses AI to automatically estimate meals, track macros, and deliver personalized dietary insights that adapt to each user's goals and eating patterns.",
    "project.fitune.role1": "Product concept design",
    "project.fitune.role2": "User journey design",
    "project.fitune.role3": "Data structure and analytics planning",
    "project.fitune.role4": "AI-assisted prototyping",
    "project.fitune.future1": "AI-powered meal recognition",
    "project.fitune.future2": "Personalized nutrition recommendations",
    "project.fitune.future3": "Wearable device integration",
    
    // Project 3 - Business Analytics
    "project.analytics.title": "Business Analytics Project",
    "project.analytics.overview": "A business analytics study using financial and market data to evaluate growth opportunities in the electronics recycling industry.",
    "project.analytics.work1": "Analyzed financial datasets using SPSS",
    "project.analytics.work2": "Identified industry trends using SQL",
    "project.analytics.work3": "Built Power BI dashboards for data visualization",
    "project.analytics.work4": "Presented insights to stakeholders",
    
    // Build Log Page
    "buildLog.title": "Build Log",
    "buildLog.subtitle": "How this portfolio was built using AI-assisted development.",
    "buildLog.planned": "Planned",
    "buildLog.builtWith": "Built With",
    "buildLog.v01.title": "MVP Launch",
    "buildLog.v01.item1": "Defined product structure",
    "buildLog.v01.item2": "Generated initial UI using AI coding tools",
    "buildLog.v01.item3": "Implemented Home, Projects, About and Build Log pages",
    "buildLog.v02.title": "UX Improvements",
    "buildLog.v02.item1": "Added profile photo to Hero section with responsive layout",
    "buildLog.v02.item2": "Reorganized Focus Areas next to Hero content",
    "buildLog.v02.item3": "Added time periods to project details",
    "buildLog.v02.item4": "Created Work section in About page with PwC experience",
    "buildLog.v02.item5": "Added location and time period info to Education section",
    "buildLog.v02.item6": "Fixed button click interactivity issues",
    "buildLog.v02.item7": "Removed redundant sections for cleaner layout",
    "buildLog.v03.title": "AI Module (Planned)",
    "buildLog.v03.item1": "AI portfolio assistant",
    "buildLog.v03.item2": "Interactive project explanations",
    "buildLog.v03.item3": "AI-powered portfolio exploration",
    
    // About Page
    "about.title": "About",
    "about.bio": "Bio",
    "about.bio1": "I am a Systems Design Engineering graduate from the University of Waterloo with a background in mathematics and data analysis.",
    "about.bio2": "I focus on building AI-powered products that combine data insights, machine learning, and user-centered design to solve real-world problems.",
    "about.education": "Education",
    "about.work": "Work",
    "about.skills": "Skills",
    "about.certifications": "Certifications & Awards",
    "about.contact": "Contact",
    "about.clickToView": "Click to view",
    "about.cert.iflytek": "iFLYTEK AI Engineer Certification",
    "about.cert.scholarship": "University Academic Scholarships",
    "about.cert.tune": "Fine-tuning Engineer",
    "about.cert.rag": "RAG Engineer",
    "about.cert.prompt": "Prompt Engineer",
    "about.cert.agent": "Intelligent Agent Engineer",
    
    // Education
    "edu.waterloo": "University of Waterloo",
    "edu.waterloo.degree": "Master of Engineering – Systems Design Engineering",
    "edu.truman": "Truman State University",
    "edu.truman.degree": "Bachelor of Science – Mathematics",
    "edu.truman.minor": "Minor in Statistics",
    
    // Work
    "work.pwc": "PricewaterhouseCoopers (PwC) Chengdu SDC",
    "work.pwc.title": "Associate, Data Analysis",
    
    // Skills
    "skills.aiData": "AI & Data",
    "skills.aiDev": "AI Development",
    "skills.productDesign": "Product & Design",
    "skills.analytics": "Analytics",
  },
  zh: {
    // Navigation
    "nav.home": "首页",
    "nav.projects": "项目",
    "nav.buildLog": "开发日志",
    "nav.about": "关于",
    
    // Home Page
    "home.title": "陈俊言",
    "home.role": "AI 产品经理",
    "home.degree": "系统设计工程硕士",
    "home.tagline": "通过以人为本的设计和快速原型，构建 AI 驱动的产品。",
    "home.viewProjects": "查看我的项目",
    "home.focusAreas": "专注领域",
    "home.focus.aiProduct": "AI 产品开发",
    "home.focus.aiProductDesc": "构建解决实际问题的智能产品",
    "home.focus.humanAI": "以人为本的 AI 系统",
    "home.focus.humanAIDesc": "设计优先考虑用户体验和可访问性的 AI",
    "home.focus.rapidPrototyping": "AI 快速原型",
    "home.focus.rapidPrototypingDesc": "将产品想法快速转化为可测试的 AI 原型",
    "home.focus.dataDesign": "数据驱动的产品设计",
    "home.focus.dataDesignDesc": "利用数据洞察做出明智的产品决策",
    "home.footer": "版权所有。",
    
    // Projects Page
    "projects.title": "项目",
    "projects.overview": "概述",
    "projects.problem": "问题",
    "projects.targetUsers": "目标用户",
    "projects.productIdea": "产品理念",
    "projects.myRole": "我的角色",
    "projects.keyWork": "主要工作",
    "projects.impact": "影响",
    "projects.futureDirection": "未来方向",
    
    // Project 1 - Drowsiness Detection
    "project.drowsiness.title": "驾驶安全疲劳检测与预警系统",
    "project.drowsiness.overview": "一款基于 AI 的驾驶员疲劳监测系统，利用计算机视觉和深度学习检测驾驶员早期疲劳迹象，并通过视觉、听觉和触觉方式发出警报。",
    "project.drowsiness.problem": "驾驶员疲劳是交通事故的主要原因之一，但在危险情况发生前很难实时检测。",
    "project.drowsiness.targetUsers": "长途货运司机、网约车司机以及希望减少疲劳相关事故的车队管理公司。",
    "project.drowsiness.productIdea": "一种非侵入式的摄像头监测解决方案，持续分析驾驶员警觉性，并在达到危险疲劳程度前及时发出多感官警报（视觉、听觉、触觉）。",
    "project.drowsiness.role1": "产品需求定义",
    "project.drowsiness.role2": "CNN 模型设计",
    "project.drowsiness.role3": "人机交互原型",
    "project.drowsiness.role4": "软硬件集成",
    "project.drowsiness.impact1": "疲劳检测准确率",
    "project.drowsiness.impact2": "推理延迟",
    "project.drowsiness.impact3": "监测能力",
    "project.drowsiness.impactValue3": "实时",
    
    // Project 2 - Fitune
    "project.fitune.title": "Fitune AI 营养项目",
    "project.fitune.overview": "Fitune 是一款 AI 辅助的营养和健身追踪概念，旨在简化日常饮食管理，帮助用户保持可持续的健身习惯。",
    "project.fitune.problem": "大多数健身追踪应用需要手动计算卡路里，且提供的个性化反馈有限，这使得长期坚持变得困难。",
    "project.fitune.targetUsers": "注重健康的个人和健身爱好者，希望无需繁琐的手动输入即可轻松追踪饮食。",
    "project.fitune.productIdea": "一款智能营养助手，使用 AI 自动估算餐食、追踪宏量营养素，并提供根据用户目标和饮食模式自适应的个性化饮食建议。",
    "project.fitune.role1": "产品概念设计",
    "project.fitune.role2": "用户旅程设计",
    "project.fitune.role3": "数据结构和分析规划",
    "project.fitune.role4": "AI 辅助原型设计",
    "project.fitune.future1": "AI 驱动的餐食识别",
    "project.fitune.future2": "个性化营养建议",
    "project.fitune.future3": "可穿戴设备集成",
    
    // Project 3 - Business Analytics
    "project.analytics.title": "商业分析项目",
    "project.analytics.overview": "一项使用财务和市场数据评估电子回收行业增长机会的商业分析研究。",
    "project.analytics.work1": "使用 SPSS 分析财务数据集",
    "project.analytics.work2": "使用 SQL 识别行业趋势",
    "project.analytics.work3": "构建 Power BI 仪表板进行数据可视化",
    "project.analytics.work4": "向利益相关者展示洞察",
    
    // Build Log Page
    "buildLog.title": "开发日志",
    "buildLog.subtitle": "这个作品集是如何使用 AI 辅助开发构建的。",
    "buildLog.planned": "计划中",
    "buildLog.builtWith": "技术栈",
    "buildLog.v01.title": "MVP 发布",
    "buildLog.v01.item1": "定义产品结构",
    "buildLog.v01.item2": "使用 AI 编码工具生成初始 UI",
    "buildLog.v01.item3": "实现首页、项目、关于和开发日志页面",
    "buildLog.v02.title": "用户体验改进",
    "buildLog.v02.item1": "在 Hero 区域添加响应式布局的个人照片",
    "buildLog.v02.item2": "重新组织 Hero 内容旁的专注领域",
    "buildLog.v02.item3": "为项目详情添加时间段",
    "buildLog.v02.item4": "在关于页面创建包含普华永道经历的工作区块",
    "buildLog.v02.item5": "为教育区块添加地点和时间信息",
    "buildLog.v02.item6": "修复按钮点击交互问题",
    "buildLog.v02.item7": "移除冗余区块以简化布局",
    "buildLog.v03.title": "AI 模块（计划中）",
    "buildLog.v03.item1": "AI 作品集助手",
    "buildLog.v03.item2": "交互式项目说明",
    "buildLog.v03.item3": "AI 驱动的作品集探索",
    
    // About Page
    "about.title": "关于",
    "about.bio": "简介",
    "about.bio1": "我是滑铁卢大学系统设计工程硕士毕业生，拥有数学和数据分析背景。",
    "about.bio2": "我专注于构建 AI 驱动的产品，将数据洞察、机器学习和以用户为中心的设计相结合，解决实际问题。",
    "about.education": "教育背景",
    "about.work": "工作经历",
    "about.skills": "技能",
    "about.certifications": "证书与奖项",
    "about.contact": "联系方式",
    "about.clickToView": "点击查看",
    "about.cert.iflytek": "科大讯飞 AI 工程师认证",
    "about.cert.scholarship": "大学学术奖学金",
    "about.cert.tune": "微调工程师",
    "about.cert.rag": "RAG 工程师",
    "about.cert.prompt": "Prompt 工程师",
    "about.cert.agent": "智能体工程师",
    
    // Education
    "edu.waterloo": "滑铁卢大学",
    "edu.waterloo.degree": "工程硕士 – 系统设计工程",
    "edu.truman": "杜鲁门州立大学",
    "edu.truman.degree": "理学学士 – 数学",
    "edu.truman.minor": "辅修统计学",
    
    // Work
    "work.pwc": "普华永道成都共享服务中心",
    "work.pwc.title": "数据分析助理",
    
    // Skills
    "skills.aiData": "AI 与数据",
    "skills.aiDev": "AI 开发",
    "skills.productDesign": "产品与设计",
    "skills.analytics": "数据分析",
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
