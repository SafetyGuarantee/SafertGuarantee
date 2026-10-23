import React from 'react'
import { Sliders, Cctv, Cpu, AlertTriangle, Send } from 'lucide-react'
import { useLanguage } from '../LanguageContext'

export const HowItWorks: React.FC = () => {
  const { t } = useLanguage()

  const stepIcons = [Cctv, Cpu, AlertTriangle, Send]

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-white dark:bg-navy-950/80 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-400 text-xs font-mono font-medium shadow-sm">
            <Sliders className="w-3.5 h-3.5" />
            <span>{t.howItWorks.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
            {t.howItWorks.title}
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            {t.howItWorks.subtitle}
          </p>
        </div>

        {/* 4 Steps Sequential Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {t.howItWorks.steps.map((step, idx) => {
            const Icon = stepIcons[idx % stepIcons.length]
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50/80 dark:bg-navy-900/60 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-cyan-400/50 hover:bg-white dark:hover:bg-navy-900/90 hover:shadow-xl transition-all shadow-sm text-start flex flex-col justify-between group space-y-4 relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-cyan-500/10 border border-blue-200 dark:border-cyan-400/30 text-blue-600 dark:text-cyan-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-mono font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-cyan-950 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-cyan-500/30">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 font-display">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-2">
                  <div className="w-full bg-slate-200 dark:bg-slate-800/80 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-600 dark:bg-cyan-400"
                      style={{ width: `${(idx + 1) * 25}%` }}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
