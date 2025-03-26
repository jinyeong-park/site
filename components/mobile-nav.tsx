"use client"

import { useState } from "react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function MobileNav() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4 mt-8">
          <Link
            href="#home"
            className="text-lg font-medium py-2 hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            {t("nav.home")}
          </Link>
          <Link
            href="#about"
            className="text-lg font-medium py-2 hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            {t("nav.about")}
          </Link>
          <Link
            href="#projects"
            className="text-lg font-medium py-2 hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            {t("nav.projects")}
          </Link>
          <Link
            href="#skills"
            className="text-lg font-medium py-2 hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            {t("nav.skills")}
          </Link>
          <Link
            href="#contact"
            className="text-lg font-medium py-2 hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            {t("nav.contact")}
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

