import React from 'react'
import { ShieldCheck, BellRing, Camera, LayoutDashboard, Check } from 'lucide-react'
import { useLanguage } from '../LanguageContext'

export const Solution: React.FC = () => {
  const { t } = useLanguage()

  const solutionIcons = [ShieldCheck, BellRing, Camera, LayoutDashboard]

  return (
    <section id="solution" className="py-24 relative overflow-hidden bg-slate-50/60 dark:bg-navy-950 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-cyan-500/10 border border-blue-200 dark:border-cyan-500/30 text-blue-700 dark:text-cyan-400 text-xs font-mono font-medium shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t.solution.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
            {t.solution.title}
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            {t.solution.subtitle}
          </p>
        </div>

        {/* 4 Solution Cards Grid (Inspired by smartstorage18.netlify.app) */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {t.solution.cards.map((card, idx) => {
            const Icon = solutionIcons[idx % solutionIcons.length]
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white dark:bg-navy-900/60 border border-slate-200 dark:border-cyan-500/20 hover:border-blue-500 dark:hover:border-cyan-400/50 hover:shadow-xl transition-all shadow-sm text-start flex flex-col justify-between group space-y-6"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-cyan-500/10 border border-blue-200 dark:border-cyan-400/30 text-blue-600 dark:text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-display">
                    {card.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                    {card.desc}
                  </p>

                  {/* Feature Checkmarks List */}
                  <ul className="space-y-2.5 border-t border-slate-200 dark:border-slate-800/80 pt-4">
                    {card.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-mono">
                        <span className="w-4 h-4 rounded-full bg-blue-100 dark:bg-cyan-500/20 text-blue-700 dark:text-cyan-400 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3" />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
