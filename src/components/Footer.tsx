import React from 'react'
import { Shield, ChevronUp } from 'lucide-react'
import { useLanguage } from '../LanguageContext'

export const Footer: React.FC = () => {
  const { t } = useLanguage()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) {
      const topOffset = 80
      const pos = el.getBoundingClientRect().top + window.pageYOffset - topOffset
      window.scrollTo({ top: pos, behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 pt-16 pb-12 relative overflow-hidden text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800 text-start">
          
          {/* Col 1: Brand & Desc */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md">
                <Shield className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white font-display">
                {t.nav.logoName}
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed font-sans text-xs">
              {t.footer.desc}
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollTo('#home')} className="hover:text-blue-400 transition-colors">
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#about')} className="hover:text-blue-400 transition-colors">
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#challenge')} className="hover:text-blue-400 transition-colors">
                  {t.nav.challenge}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#solution')} className="hover:text-blue-400 transition-colors">
                  {t.nav.solution}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#how-it-works')} className="hover:text-blue-400 transition-colors">
                  {t.nav.howItWorks}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Sections */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">
              {t.nav.industries}
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollTo('#features')} className="hover:text-blue-400 transition-colors">
                  {t.nav.features}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#industries')} className="hover:text-blue-400 transition-colors">
                  {t.nav.industries}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#academic')} className="hover:text-blue-400 transition-colors">
                  {t.nav.academic}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#contact')} className="hover:text-blue-400 transition-colors">
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Top Action */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">
              {t.footer.contactInfo}
            </h4>
            <p className="text-blue-400 text-xs font-mono">
              safetyguarantee25@gmail.com
            </p>
            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:border-blue-500 transition-colors text-xs"
              >
                <ChevronUp className="w-3.5 h-3.5 text-blue-400" />
                <span>Top / لأعلى</span>
              </button>
            </div>
          </div>

        </div>

        {/* Academic Disclaimer */}
        <div className="py-6 border-b border-slate-800 text-[11px] leading-relaxed text-slate-400 font-sans text-start">
          <p>
            {t.footer.disclaimer}
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {t.footer.copyright}
          </div>
        </div>

      </div>
    </footer>
  )
}
