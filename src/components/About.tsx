import React from 'react'
import { Target, Lightbulb, GraduationCap, Shield, Cpu, Bell, Database } from 'lucide-react'
import { useLanguage } from '../LanguageContext'

export const About: React.FC = () => {
  const { t } = useLanguage()

  const icons = [Cpu, Bell, Database, Shield]

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-50/60 dark:bg-navy-950 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-cyan-500/10 border border-blue-200 dark:border-cyan-500/30 text-blue-700 dark:text-cyan-400 text-xs font-mono font-medium shadow-sm">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{t.about.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
            {t.about.title}
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            {t.about.subtitle}
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          
          {/* Mission Card */}
          <div className="p-8 rounded-2xl bg-white dark:bg-navy-900/60 border border-slate-200 dark:border-cyan-500/20 hover:border-blue-400 dark:hover:border-cyan-500/40 hover:shadow-xl transition-all shadow-sm space-y-4 text-start">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-cyan-500/20 border border-blue-200 dark:border-cyan-400/30 flex items-center justify-center text-blue-600 dark:text-cyan-400">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
              {t.about.missionTitle}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              {t.about.missionText}
            </p>
          </div>

          {/* Vision Card */}
          <div className="p-8 rounded-2xl bg-white dark:bg-navy-900/60 border border-slate-200 dark:border-blue-500/20 hover:border-blue-400 dark:hover:border-blue-500/40 hover:shadow-xl transition-all shadow-sm space-y-4 text-start">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-500/20 border border-blue-200 dark:border-blue-400/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
              {t.about.visionTitle}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              {t.about.visionText}
            </p>
          </div>

        </div>

        {/* 4 Architectural Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {t.about.highlights.map((item, idx) => {
            const Icon = icons[idx % icons.length]
            return (
              <div 
                key={idx}
                className="p-6 rounded-xl bg-white dark:bg-navy-900/40 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-cyan-500/30 hover:shadow-lg transition-all text-start space-y-2 shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-cyan-500/10 border border-blue-200 dark:border-cyan-500/20 text-blue-600 dark:text-cyan-400 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white font-display">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>

        {/* College Project Badge Box */}
        <div className="mt-12 p-6 rounded-2xl bg-white dark:bg-navy-900/80 border border-blue-200 dark:border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-start shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-cyan-500/20 border border-blue-200 dark:border-cyan-400/40 flex items-center justify-center text-blue-600 dark:text-cyan-400 shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white font-display">
                {t.about.collegeBadgeTitle}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                {t.about.collegeBadgeText}
              </p>
            </div>
          </div>
          <div className="shrink-0 font-mono text-xs text-blue-700 dark:text-cyan-300 px-4 py-2 rounded-lg bg-blue-50 dark:bg-navy-950 border border-blue-200 dark:border-slate-800 text-center font-semibold">
            {t.academic.badge}
          </div>
        </div>

      </div>
    </section>
  )
}
