import React from 'react'
import { Info, BookOpen, HelpCircle } from 'lucide-react'
import { useLanguage } from '../LanguageContext'

export const AcademicInfo: React.FC = () => {
  const { t } = useLanguage()

  return (
    <section id="academic" className="py-24 relative overflow-hidden bg-slate-50/60 dark:bg-navy-950 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-cyan-500/10 border border-blue-200 dark:border-cyan-500/30 text-blue-700 dark:text-cyan-400 text-xs font-mono font-medium shadow-sm">
            <Info className="w-3.5 h-3.5" />
            <span>{t.academic.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
            {t.academic.title}
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            {t.academic.subtitle}
          </p>
        </div>

        {/* Explanation Q&A Cards */}
        <div className="mt-14 grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {t.academic.explanationCards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-navy-900/60 border border-slate-200 dark:border-cyan-500/20 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 space-y-3 text-start"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-cyan-500/20 border border-blue-200 dark:border-cyan-400/30 flex items-center justify-center text-blue-600 dark:text-cyan-400">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono text-blue-600 dark:text-cyan-400 font-semibold uppercase tracking-wider">
                  {card.tag}
                </span>
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white font-display leading-snug">
                {card.question}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {card.answer}
              </p>
            </div>
          ))}
        </div>

        {/* Project Details Grid */}
        <div className="mt-10 max-w-4xl mx-auto rounded-3xl bg-white dark:bg-navy-900/60 border border-slate-200 dark:border-cyan-500/30 p-8 sm:p-10 shadow-xl text-start space-y-8">
          
          <div className="grid sm:grid-cols-2 gap-6">
            {t.academic.details.map((item, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950/80 border border-slate-200 dark:border-slate-800 space-y-1 shadow-sm"
              >
                <span className="text-xs font-mono text-blue-600 dark:text-cyan-400 uppercase tracking-wider block font-semibold">
                  {item.label}
                </span>
                <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-display">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* Summary Statement */}
          <div className="p-6 rounded-2xl bg-blue-50/70 dark:bg-cyan-950/30 border border-blue-200 dark:border-cyan-500/30 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans shadow-sm">
            <p className="flex items-start gap-3">
              <BookOpen className="w-5 h-5 text-blue-600 dark:text-cyan-400 shrink-0 mt-0.5" />
              <span>{t.academic.summaryText}</span>
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}
