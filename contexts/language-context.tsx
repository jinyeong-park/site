"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "ko"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",

    // Hero
    "hero.greeting": "Hello, I'm",
    "hero.name": "Jenny Park",
    "hero.title": "Technical Consultant",
    "hero.description":
      "I bring a unique perspective to technical challenges by combining user-centered design principles with robust engineering solutions.",
    "hero.cta.projects": "View Projects",
    "hero.cta.contact": "Get in Touch",

    // About
    "about.title": "About Me",
    "about.description":
      "I'm currently working as a Technical Consultant, bringing a wealth of cross-disciplinary experience from my previous roles as a UI/UX Engineer, Software Engineer, and AI Product Engineer. This diverse background allows me to approach technical challenges with a unique perspective, combining user-centered design principles with robust engineering solutions and strategic business thinking.",
    "about.approach":
      "My professional journey across different technical domains has shaped my holistic approach to problem-solving. I believe that the most effective digital solutions emerge at the intersection of thoughtful design, solid engineering, and clear business objectives—a perspective I bring to every project I undertake.",

    // Projects
    "projects.title": "Projects",
    "projects.viewAll": "View All Projects",
    "projects.github": "GitHub",
    "projects.demo": "Demo",
    "projects.case": "Case Study",

    // Project 1
    "project1.title": "E-commerce Redesign",
    "project1.description":
      "A complete redesign of an e-commerce platform focusing on improving the user journey and increasing conversion rates.",

    // Project 2
    "project2.title": "Health App UI",
    "project2.description":
      "A mobile health application designed to help users track their fitness goals and maintain healthy habits.",

    // Project 3
    "project3.title": "Finance Dashboard",
    "project3.description":
      "An intuitive dashboard for personal finance management with data visualization and insights.",

    // Skills
    "skills.title": "Skills",
    "skills.design": "Design",
    "skills.research": "Research",
    "skills.tools": "Tools",
    "skills.development": "Development",

    // Contact
    "contact.title": "Get in Touch",
    "contact.description": "Interested in working together or have a question? Feel free to reach out!",
    "contact.contact": "Contact",

    // Footer
    "footer.copyright": "© 2024 Jenny Park. All rights reserved.",
    "footer.designed": "Designed and built with care.",
  },
  ko: {
    // Navigation
    "nav.home": "홈",
    "nav.about": "소개",
    "nav.projects": "프로젝트",
    "nav.skills": "기술",
    "nav.contact": "연락처",

    // Hero
    "hero.greeting": "안녕하세요,",
    "hero.name": "박진영",
    "hero.title": "기술 컨설턴트",
    "hero.description":
      "사용자 중심 디자인 원칙과 견고한 엔지니어링 솔루션을 결합하여 기술적 과제에 독특한 관점을 제공합니다.",
    "hero.cta.projects": "프로젝트 보기",
    "hero.cta.contact": "연락하기",

    // About
    "about.title": "소개",
    "about.description":
      "저는 현재 기술 컨설턴트로 일하고 있으며, UI/UX 엔지니어, 소프트웨어 엔지니어, AI 제품 엔지니어로서의 이전 역할에서 얻은 풍부한 학제간 경험을 가지고 있습니다. 이러한 다양한 배경을 통해 사용자 중심 디자인 원칙과 견고한 엔지니어링 솔루션, 전략적 비즈니스 사고를 결합하여 기술적 과제에 독특한 관점으로 접근할 수 있습니다.",
    "about.approach":
      "다양한 기술 분야에서의 전문적인 여정은 문제 해결에 대한 저의 총체적 접근 방식을 형성했습니다. 저는 가장 효과적인 디지털 솔루션이 사려 깊은 디자인, 견고한 엔지니어링, 명확한 비즈니스 목표의 교차점에서 나온다고 믿으며, 이러한 관점을 제가 맡는 모든 프로젝트에 적용합니다.",

    // Projects
    "projects.title": "프로젝트",
    "projects.viewAll": "모든 프로젝트 보기",
    "projects.github": "깃허브",
    "projects.demo": "데모",
    "projects.case": "케이스 스터디",

    // Project 1
    "project1.title": "이커머스 리디자인",
    "project1.description": "사용자 여정을 개선하고 전환율을 높이는 데 중점을 둔 이커머스 플랫폼의 전체 리디자인.",

    // Project 2
    "project2.title": "헬스 앱 UI",
    "project2.description":
      "사용자가 피트니스 목표를 추적하고 건강한 습관을 유지하도록 도와주는 모바일 건강 애플리케이션.",

    // Project 3
    "project3.title": "금융 대시보드",
    "project3.description": "데이터 시각화와 인사이트가 포함된 개인 재무 관리를 위한 직관적인 대시보드.",

    // Skills
    "skills.title": "기술",
    "skills.design": "디자인",
    "skills.research": "리서치",
    "skills.tools": "도구",
    "skills.development": "개발",

    // Contact
    "contact.title": "연락하기",
    "contact.description": "함께 일하는 데 관심이 있거나 질문이 있으신가요? 언제든지 연락해 주세요!",
    "contact.contact": "연락하기",

    // Footer
    "footer.copyright": "© 2024 박진영. 모든 권리 보유.",
    "footer.designed": "정성껏 디자인하고 개발했습니다.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    // Check if there's a saved language preference
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ko")) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    // Save language preference
    localStorage.setItem("language", language)
    // Update HTML lang attribute
    document.documentElement.lang = language
  }, [language])

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

