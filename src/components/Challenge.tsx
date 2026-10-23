import React from 'react'
import { AlertTriangle, Clock, EyeOff, ShieldAlert } from 'lucide-react'
import { useLanguage } from '../LanguageContext'

export const Challenge: React.FC = () => {
  const { t } = useLanguage()

  const challengeIcons = [EyeOff, ShieldAlert, Clock]

  return (
    <section id="challenge" className="py-24 relative overflow-hidden bg-white dark:bg-navy-950/80 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 text-red-600 dark:text-red-400 text-xs font-mono font-medium shadow-sm">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>{t.challenge.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
            {t.challenge.title}
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            {t.challenge.subtitle}
          </p>
        </div>

        {/* 3 Challenge Cards Grid (Inspired by smartstorage18.netlify.app) */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {t.challenge.cards.map((card, idx) => {
            const Icon = challengeIcons[idx % challengeIcons.length]
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-slate-50/80 dark:bg-navy-900/60 border border-slate-200 dark:border-red-500/20 hover:border-red-400 dark:hover:border-red-500/40 hover:bg-white dark:hover:bg-navy-900/90 hover:shadow-xl transition-all shadow-sm flex flex-col justify-between text-start group space-y-6"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 text-red-600 dark:text-red-400 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-display">
                    {card.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                {/* Impact Badge */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80">
                  <span className="inline-block text-xs font-mono font-medium text-red-700 dark:text-red-300 bg-red-100 dark:bg-red-950/70 border border-red-200 dark:border-red-500/30 px-3 py-1 rounded-lg">
                    {card.impact}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
