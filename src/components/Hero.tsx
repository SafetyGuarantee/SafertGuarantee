import React from 'react'
import { ArrowRight, ShieldCheck, Zap, Radio, ChevronDown } from 'lucide-react'
import { useLanguage } from '../LanguageContext'

export const Hero: React.FC = () => {
  const { t, isRtl } = useLanguage()

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) {
      const topOffset = 80
      const pos = el.getBoundingClientRect().top + window.pageYOffset - topOffset
      window.scrollTo({ top: pos, behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-gradient-to-b from-blue-50/70 via-slate-50 to-white dark:from-navy-950 dark:via-navy-900 dark:to-navy-950 transition-colors duration-300">
      {/* Background Soft Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-blue-500/10 dark:bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-cyan-400/10 dark:bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Status Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-navy-900 border border-blue-200 dark:border-cyan-500/30 text-xs text-blue-700 dark:text-cyan-300 font-mono shadow-sm">
          <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-cyan-400 animate-pulse" />
          <span>{t.hero.badge}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display leading-[1.12] max-w-4xl mx-auto">
          {t.hero.titlePart1} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-500 dark:from-cyan-400 dark:via-blue-400 dark:to-blue-500">
            {t.hero.titlePart2}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal">
          {t.hero.subtitle}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={() => scrollTo('#solution')}
            className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-600 rounded-xl shadow-lg shadow-blue-600/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>{t.hero.exploreBtn}</span>
            <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
          </button>

          <button
            onClick={() => scrollTo('#how-it-works')}
            className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-navy-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl shadow-sm transition-all"
          >
            <span>{t.hero.howItWorksBtn}</span>
            <ChevronDown className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
          </button>
        </div>

        {/* Key Value Stat Pills (Centered 3-column grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-10 border-t border-slate-200 dark:border-slate-800/80 max-w-4xl mx-auto text-start">
          <div className="p-4 rounded-2xl bg-white dark:bg-navy-900/60 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-2 text-blue-600 dark:text-cyan-400 mb-1.5">
              <ShieldCheck className="w-5 h-5" />
              <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">{t.hero.stat1Label}</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{t.hero.stat1Desc}</p>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-navy-900/60 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-2 text-amber-500 dark:text-amber-400 mb-1.5">
              <Zap className="w-5 h-5" />
              <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">{t.hero.stat2Label}</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{t.hero.stat2Desc}</p>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-navy-900/60 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 mb-1.5">
              <Radio className="w-5 h-5" />
              <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">{t.hero.stat3Label}</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{t.hero.stat3Desc}</p>
          </div>
        </div>

      </div>
    </section>
  )
}
