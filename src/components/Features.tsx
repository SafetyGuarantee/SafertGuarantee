import React from 'react'
import { Sparkles, ShieldCheck, BellRing, Camera, Image as ImageIcon, Clock, LayoutDashboard } from 'lucide-react'
import { useLanguage } from '../LanguageContext'

export const Features: React.FC = () => {
  const { t } = useLanguage()

  const featureIcons = [ShieldCheck, BellRing, Camera, ImageIcon, Clock, LayoutDashboard]

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-slate-50/60 dark:bg-navy-950 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-cyan-500/10 border border-blue-200 dark:border-cyan-500/30 text-blue-700 dark:text-cyan-400 text-xs font-mono font-medium shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.features.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
            {t.features.title}
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            {t.features.subtitle}
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-16">
          {t.features.list.map((feat, idx) => {
            const Icon = featureIcons[idx % featureIcons.length]
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-white dark:bg-navy-900/60 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-cyan-400/40 hover:shadow-xl transition-all shadow-sm text-start flex flex-col justify-between group space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-cyan-500/10 border border-blue-200 dark:border-cyan-400/30 text-blue-600 dark:text-cyan-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-blue-50 dark:bg-navy-950 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-cyan-500/30 font-medium">
                      {feat.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 font-display">
                    {feat.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
