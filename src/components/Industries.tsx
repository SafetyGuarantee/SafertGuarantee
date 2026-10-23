import React from 'react'
import { Factory, Flame, Utensils, Beer, Pill, Building2, AlertTriangle, ShieldCheck } from 'lucide-react'
import { useLanguage } from '../LanguageContext'

export const Industries: React.FC = () => {
  const { t } = useLanguage()

  const industryIcons = [Flame, Utensils, Beer, Pill, Building2]

  return (
    <section id="industries" className="py-24 relative overflow-hidden bg-white dark:bg-navy-950/80 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-cyan-500/10 border border-blue-200 dark:border-cyan-500/30 text-blue-700 dark:text-cyan-400 text-xs font-mono font-medium shadow-sm">
            <Factory className="w-3.5 h-3.5" />
            <span>{t.industries.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
            {t.industries.title}
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            {t.industries.subtitle}
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-16">
          {t.industries.sectors.map((sector, idx) => {
            const Icon = industryIcons[idx % industryIcons.length]
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-slate-50/80 dark:bg-navy-900/60 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-cyan-400/40 hover:bg-white dark:hover:bg-navy-900/90 hover:shadow-xl transition-all shadow-sm text-start flex flex-col justify-between group space-y-4"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-cyan-500/10 border border-blue-200 dark:border-cyan-400/30 text-blue-600 dark:text-cyan-400 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-display">
                    {sector.name}
                  </h3>

                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3.5 rounded-xl bg-amber-50/80 dark:bg-navy-950/80 border border-amber-200 dark:border-amber-500/20 text-slate-800 dark:text-slate-300">
                      <span className="text-amber-700 dark:text-amber-400 font-bold block mb-1 flex items-center gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        Hazards / المخاطر:
                      </span>
                      <p className="font-sans text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        {sector.hazards}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-blue-50/80 dark:bg-navy-950/80 border border-blue-200 dark:border-cyan-500/20 text-slate-800 dark:text-slate-300">
                      <span className="text-blue-700 dark:text-cyan-400 font-bold block mb-1 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Required PPE / المعدات:
                      </span>
                      <p className="font-sans text-xs sm:text-sm text-blue-900 dark:text-cyan-200 font-medium">
                        {sector.ppe}
                      </p>
                    </div>
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
