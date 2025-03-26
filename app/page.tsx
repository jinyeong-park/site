"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import LanguageSwitcher from "@/components/language-switcher"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  Figma,
  Users,
  LineChart,
  PenTool,
  Palette,
  Layout,
  Code,
} from "lucide-react"

export default function Home() {
  const { t, language } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 backdrop-blur-sm bg-background/80 border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-medium text-lg tracking-tight">{language === "en" ? "Jenny Park" : "박진영"}</div>
          <nav className="hidden md:flex gap-8">
            <Link href="#home" className="text-sm font-medium hover:text-primary transition-colors">
              {t("nav.home")}
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              {t("nav.about")}
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              {t("nav.projects")}
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              {t("nav.skills")}
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              {t("nav.contact")}
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <Link href="https://github.com/jinyeong-park" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/jennypark7/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="container py-24 md:py-32">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-2">
              <p className="text-lg text-muted-foreground">{t("hero.greeting")}</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">{t("hero.name")}</h1>
              <p className="text-xl md:text-2xl font-medium text-primary">{t("hero.title")}</p>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">{t("hero.description")}</p>
            <div className="flex gap-4 pt-2">
              <Button asChild size="lg" className="rounded-full px-6">
                <Link href="#projects">{t("hero.cta.projects")}</Link>
              </Button>
              <Button variant="outline" asChild size="lg" className="rounded-full px-6">
                <Link href="#contact">{t("hero.cta.contact")}</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-muted/30">
          <div className="container space-y-12">
            <div className="max-w-3xl mx-auto space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-center">{t("about.title")}</h2>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
              <p className="text-lg text-muted-foreground leading-relaxed">{t("about.description")}</p>
              <p className="text-lg text-muted-foreground leading-relaxed">{t("about.approach")}</p>
            </div>

            {/* Design Process */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 pt-8">
              <Card className="bg-background/50 border-primary/10 hover:border-primary/30 transition-colors">
                <CardContent className="p-6 text-center space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium">Research</h3>
                </CardContent>
              </Card>
              <Card className="bg-background/50 border-primary/10 hover:border-primary/30 transition-colors">
                <CardContent className="p-6 text-center space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <LineChart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium">Analysis</h3>
                </CardContent>
              </Card>
              <Card className="bg-background/50 border-primary/10 hover:border-primary/30 transition-colors">
                <CardContent className="p-6 text-center space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <PenTool className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium">Wireframe</h3>
                </CardContent>
              </Card>
              <Card className="bg-background/50 border-primary/10 hover:border-primary/30 transition-colors">
                <CardContent className="p-6 text-center space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Palette className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium">Design</h3>
                </CardContent>
              </Card>
              <Card className="bg-background/50 border-primary/10 hover:border-primary/30 transition-colors">
                <CardContent className="p-6 text-center space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Layout className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium">Prototype</h3>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container py-20 space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-center">{t("projects.title")}</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <Card className="hover:shadow-md transition-all duration-300 border-primary/10 hover:border-primary/30">
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{t("project1.title")}</h3>
                  <p className="text-muted-foreground">{t("project1.description")}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">UI Design</Badge>
                  <Badge variant="secondary">UX Research</Badge>
                  <Badge variant="secondary">Figma</Badge>
                </div>
                <div className="flex gap-2 pt-2">
                  <Button size="sm" asChild>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      {t("projects.case")}
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      {t("projects.demo")}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="hover:shadow-md transition-all duration-300 border-primary/10 hover:border-primary/30">
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{t("project2.title")}</h3>
                  <p className="text-muted-foreground">{t("project2.description")}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Mobile UI</Badge>
                  <Badge variant="secondary">Interaction Design</Badge>
                  <Badge variant="secondary">Prototyping</Badge>
                </div>
                <div className="flex gap-2 pt-2">
                  <Button size="sm" asChild>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      {t("projects.case")}
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      {t("projects.demo")}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="hover:shadow-md transition-all duration-300 border-primary/10 hover:border-primary/30">
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{t("project3.title")}</h3>
                  <p className="text-muted-foreground">{t("project3.description")}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Dashboard</Badge>
                  <Badge variant="secondary">Data Visualization</Badge>
                  <Badge variant="secondary">Accessibility</Badge>
                </div>
                <div className="flex gap-2 pt-2">
                  <Button size="sm" asChild>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      {t("projects.case")}
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      {t("projects.demo")}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center pt-4">
            <Button variant="outline" asChild className="rounded-full px-6">
              <Link href="https://github.com/jinyeong-park" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                {t("projects.viewAll")}
              </Link>
            </Button>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-muted/30">
          <div className="container space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-center">{t("skills.title")}</h2>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Design Skills */}
              <Card className="bg-background/50 border-primary/10">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <PenTool className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{t("skills.design")}</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      UI Design
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      Interaction Design
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      Responsive Design
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      Design Systems
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      Visual Design
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      Typography
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Research Skills */}
              <Card className="bg-background/50 border-primary/10">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{t("skills.research")}</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      User Research
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      Usability Testing
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      User Personas
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      Journey Mapping
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      A/B Testing
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      Competitive Analysis
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Tools */}
              <Card className="bg-background/50 border-primary/10">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Figma className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{t("skills.tools")}</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      Figma
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      Framer
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      Excalidraw
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      Mural
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      Asana/Jira
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      SQL
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Development */}
              <Card className="bg-background/50 border-primary/10">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{t("skills.development")}</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      HTML/CSS
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      JavaScript
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      React/Next.js
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      Tailwind CSS
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      Responsive Web
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      Accessibility
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container py-20 space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-center">{t("contact.title")}</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-center text-muted-foreground max-w-md mx-auto">{t("contact.description")}</p>
          </div>

          <div className="max-w-md mx-auto">
            <Button variant="outline" asChild className="w-full rounded-full" size="lg">
              <Link href="https://www.linkedin.com/in/jennypark7/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 mr-2" />
                {t("contact.contact")}
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div>
            <p className="text-sm text-muted-foreground">{t("footer.copyright")}</p>
          </div>
          <p className="text-sm text-muted-foreground">{t("footer.designed")}</p>
          <div className="flex gap-4">
            <Link href="https://github.com/jinyeong-park" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/jennypark7/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:jenny.park@example.com">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

