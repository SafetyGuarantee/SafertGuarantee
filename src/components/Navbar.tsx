import React, { useState } from 'react'
import { Shield, Globe, Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../LanguageContext'
import { useTheme } from '../ThemeContext'

export const Navbar: React.FC = () => {
  const { t, language, toggleLanguage, isRtl } = useLanguage()
  const { isDark, toggleTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.challenge, href: '#challenge' },
    { name: t.nav.solution, href: '#solution' },
    { name: t.nav.howItWorks, href: '#how-it-works' },
    { name: t.nav.features, href: '#features' },
    { name: t.nav.industries, href: '#industries' },
    { name: t.nav.academic, href: '#academic' },
    { name: t.nav.contact, href: '#contact' },
  ]

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      const topOffset = 80
      const pos = el.getBoundingClientRect().top + window.pageYOffset - topOffset
      window.scrollTo({ top: pos, behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-navy-950/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 transition-all shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleScroll(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-all">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
                  {t.nav.logoName}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                {t.nav.logoSub}
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-100/80 dark:bg-navy-900/60 p-1.5 rounded-full border border-slate-200 dark:border-slate-800">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="px-3 py-1.5 rounded-full text-xs font-semibold text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 shadow-none hover:shadow-sm transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons: Language Switcher, Theme Switcher & Contact CTA */}
          <div className="hidden xl:flex items-center gap-2.5">
            
            {/* Theme Toggle (Light / Dark) */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-navy-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-all shadow-sm"
              title={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-navy-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-cyan-300 hover:text-blue-600 dark:hover:text-cyan-200 transition-all shadow-sm"
              title={language === 'en' ? 'التحويل للغة العربية' : 'Switch to English'}
            >
              <Globe className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
              <span>{t.nav.langToggle}</span>
            </button>

            {/* Contact CTA */}
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-600 rounded-lg shadow-md shadow-blue-500/20 transition-all"
            >
              <span>{t.nav.contact}</span>
              <ArrowUpRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
            </a>
          </div>

          {/* Mobile Buttons */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-navy-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-navy-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-cyan-300"
            >
              <Globe className="w-3 h-3 text-blue-600 dark:text-cyan-400" />
              <span>{language === 'en' ? 'عربي' : 'EN'}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-navy-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/95 dark:bg-navy-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-6 py-5 space-y-2 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-navy-900 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-cyan-300"
            >
              <Globe className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
              <span>{t.nav.langToggle}</span>
            </button>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="text-xs font-semibold text-white bg-blue-600 px-4 py-2 rounded-lg shadow-sm"
            >
              {t.nav.contact}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
