import React, { useState } from 'react'
import { 
  ShieldCheck, 
  BellRing, 
  Camera, 
  Image as ImageIcon, 
  Clock, 
  LayoutDashboard, 
  ArrowUpRight, 
  X, 
  Check, 
  Cpu, 
  Sparkles,
  Layers
} from 'lucide-react'
import { KEY_FEATURES } from '../data/mockData'
import { KeyFeature } from '../types'

export const KeyFeatures: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<KeyFeature | null>(null)

  const getFeatureIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck': return ShieldCheck
      case 'BellRing': return BellRing
      case 'Camera': return Camera
      case 'Image': return ImageIcon
      case 'Clock': return Clock
      case 'LayoutDashboard': return LayoutDashboard
      default: return ShieldCheck
    }
  }

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-navy-950/80 border-t border-slate-800/80">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Intelligent Core Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Engineered for <br className="hidden sm:inline" />
            <span className="text-gradient-cyan">Mission-Critical Safety</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Six foundational capabilities designed to transform existing camera feeds 
            into an autonomous, proactive safety shield.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-16">
          {KEY_FEATURES.map((feature) => {
            const Icon = getFeatureIcon(feature.icon)
            return (
              <div
                key={feature.id}
                className="rounded-2xl glass-panel border border-slate-800 hover:border-cyan-400/50 p-7 flex flex-col justify-between group transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/50 relative overflow-hidden"
              >
                {/* Subtle gradient hover highlight */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-bl-full group-hover:bg-cyan-500/15 transition-all duration-300 pointer-events-none" />

                <div>
                  {/* Top Bar: Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500/20 group-hover:border-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-950/40">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-navy-950 text-cyan-300 border border-cyan-500/30 font-medium">
                      {feature.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-2.5 font-display group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {feature.shortDesc}
                  </p>
                </div>

                {/* Card Footer: Metric & Deep Dive trigger */}
                <div className="border-t border-slate-800/80 pt-4 flex items-center justify-between text-xs font-mono">
                  <div>
                    <span className="text-slate-400 block text-[10px]">{feature.visualMetric.label}</span>
                    <span className="text-cyan-400 font-bold text-sm">{feature.visualMetric.value}</span>
                  </div>

                  <button
                    onClick={() => setSelectedFeature(feature)}
                    className="flex items-center gap-1 text-slate-300 hover:text-cyan-300 bg-navy-900/80 hover:bg-cyan-950/60 px-3 py-1.5 rounded-lg border border-slate-800 hover:border-cyan-500/40 transition-all"
                  >
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Modal / Deep Dive Drawer */}
        {selectedFeature && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div 
              className="relative w-full max-w-2xl rounded-3xl bg-navy-900 border border-cyan-400/50 p-8 shadow-2xl text-slate-100 space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Close Button */}
              <button
                onClick={() => setSelectedFeature(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-navy-950 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shrink-0">
                  {React.createElement(getFeatureIcon(selectedFeature.icon), { className: 'w-7 h-7' })}
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                    Feature Deep Dive • {selectedFeature.badge}
                  </span>
                  <h3 className="text-2xl font-bold text-white font-display">
                    {selectedFeature.title}
                  </h3>
                </div>
              </div>

              {/* Detailed Description */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {selectedFeature.detailedDesc}
              </p>

              {/* Technical Specifications */}
              <div className="space-y-3 bg-navy-950 p-5 rounded-2xl border border-slate-800">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <span>Proposed Engineering Specifications:</span>
                </h4>
                <div className="space-y-2">
                  {selectedFeature.technicalSpecs.map((spec, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metric & Close Button */}
              <div className="flex items-center justify-between pt-2">
                <div className="font-mono text-xs">
                  <span className="text-slate-400">{selectedFeature.visualMetric.label}: </span>
                  <span className="text-cyan-400 font-bold">{selectedFeature.visualMetric.value}</span>
                </div>

                <button
                  onClick={() => setSelectedFeature(null)}
                  className="px-5 py-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/30 text-xs font-mono font-semibold transition-all"
                >
                  Close Specification
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  )
}
