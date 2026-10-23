import React, { useState } from 'react'
import { 
  AlertOctagon, 
  Clock, 
  EyeOff, 
  TrendingDown, 
  Check, 
  X, 
  ShieldAlert, 
  Flame, 
  HardHat, 
  Sparkles,
  ArrowRight
} from 'lucide-react'

export const TheProblem: React.FC = () => {
  const [selectedHazard, setSelectedHazard] = useState<number>(0)

  const painPoints = [
    {
      icon: EyeOff,
      title: 'Human Oversight Blind Spots',
      desc: 'Factory floors span thousands of square meters across multiple bays. A safety officer walking the floor can only view a fraction of workers at any single moment, leaving critical blind spots unmonitored.'
    },
    {
      icon: Clock,
      title: 'Critical Response Delays',
      desc: 'Traditional safety audits happen in scheduled, periodic intervals hours or days apart. If a worker removes protective eyewear or a helmet near heavy machinery, the risk remains unaddressed until an accident occurs.'
    },
    {
      icon: TrendingDown,
      title: 'Severe Injury Consequences',
      desc: 'According to industrial occupational safety data, missing PPE is involved in over 60% of traumatic workplace injuries—including head concussions, corneal foreign bodies, thermal burns, and amputation hazards.'
    },
    {
      icon: AlertOctagon,
      title: 'Unverifiable Incident Records',
      desc: 'When an unsafe condition or near-miss occurs, traditional operations rely on word-of-mouth reports without objective visual evidence, making root-cause analysis and preventative coaching ineffective.'
    }
  ]

  const hazardScenarios = [
    {
      title: 'Missing Hardhat in Overhead Crane Zones',
      risk: 'High Severity • Fatal or Traumatic Brain Injury',
      traditional: 'Supervisor walks by every 3 hours. Worker removes helmet due to heat; 45 minutes later, an overhead hoist drops a component causing critical injury.',
      solution: 'AI Camera detects missing hardhat within 800ms. An immediate audio beacon chirps and supervisor receives a snapshot alert to intervene immediately.'
    },
    {
      title: 'Missing Eye Protection During Glass Scoring',
      risk: 'Critical Severity • Permanent Vision Loss',
      traditional: 'Worker takes off safety goggles to wipe fogging. Micro-cullet shards shatter from high-speed score wheel, causing ocular trauma.',
      solution: 'Computer vision identifies absent eye shield in designated thermal cutting bay and triggers a line alert before operator approaches the cutting wheel.'
    },
    {
      title: 'No High-Vis Vest in Forklift Crossings',
      risk: 'Critical Severity • Heavy Machinery Crush',
      traditional: 'Pedestrian worker cuts across the warehouse aisle in low-visibility dark clothing. Forklift driver blind spot leads to near-fatal impact.',
      solution: 'Zone perimeter camera immediately detects pedestrian without Class 2 reflective attire crossing the yellow line, flagging an instant warning to the transit monitor.'
    }
  ]

  return (
    <section id="the-problem" className="py-24 relative overflow-hidden bg-navy-950">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-red-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono font-medium">
            <AlertOctagon className="w-3.5 h-3.5" />
            <span>The Industrial Safety Dilemma</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Why Traditional Safety Monitoring <br className="hidden sm:inline" />
            <span className="text-gradient-danger">Falls Dangerously Short</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Industrial manufacturing environments are fast-paced, noisy, and intrinsically hazardous. 
            Relying solely on periodic human inspections leaves dangerous gaps that put workers at risk.
          </p>
        </div>

        {/* 4 Pain Points Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {painPoints.map((point, idx) => {
            const Icon = point.icon
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl glass-panel border border-red-500/20 hover:border-red-500/40 hover:bg-navy-900/90 transition-all duration-300 relative group"
              >
                <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-display">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            )
          })}
        </div>

        {/* Interactive Comparison: Traditional Manual Audits vs Safety Guarantee AI */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white font-display">
              Traditional Inspection vs. Safety Guarantee AI
            </h3>
            <p className="text-sm font-mono text-slate-400 mt-1">
              A paradigm shift from reactive damage control to real-time automated interception
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Traditional Monitoring Card */}
            <div className="rounded-2xl bg-navy-900/60 border border-red-500/30 p-8 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-red-500/20 text-red-400 border-b border-l border-red-500/30 rounded-bl-xl text-xs font-mono font-bold">
                TRADITIONAL AUDITING
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400">
                  <X className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white font-display">Manual Walkthroughs & Checklists</h4>
                  <p className="text-xs text-red-300 font-mono">Periodic, Intermittent & Reactive</p>
                </div>
              </div>

              <ul className="space-y-4 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-white block font-medium">Intermittent Coverage:</strong>
                    Inspectors check bays every 2–4 hours; non-compliant behavior in between remains unnoticed.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-white block font-medium">Human Fatigue & Bias:</strong>
                    Auditors experience visual fatigue in repetitive environments and miss momentary violations.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-white block font-medium">Delayed Alert Dispatch:</strong>
                    No automated notifications; findings are only logged into paper sheets or end-of-shift spreadsheets.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-white block font-medium">Zero Image Verification:</strong>
                    Disputes arise over what gear was actually worn, lacking timestamped photographic records.
                  </div>
                </li>
              </ul>
            </div>

            {/* Safety Guarantee AI Card */}
            <div className="rounded-2xl glass-panel border border-cyan-400/40 p-8 relative overflow-hidden shadow-xl shadow-cyan-950/40">
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-cyan-500/20 text-cyan-300 border-b border-l border-cyan-500/40 rounded-bl-xl text-xs font-mono font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                SAFETY GUARANTEE AI
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white font-display">Continuous Computer Vision</h4>
                  <p className="text-xs text-cyan-300 font-mono">24/7, Sub-Second & Proactive</p>
                </div>
              </div>

              <ul className="space-y-4 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-white block font-medium">100% Continuous Coverage:</strong>
                    Monitors every video frame (30 FPS) simultaneously across all integrated factory cameras.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-white block font-medium">Objective Zero-Fatigue AI:</strong>
                    Neural models run constantly without distraction, fatigue, or subjective leniency.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-white block font-medium">Sub-Second Incident Dispatch:</strong>
                    Supervisors receive real-time push notifications and zone alarms within &lt;1.5 seconds.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-white block font-medium">Cryptographic Snapshot Evidence:</strong>
                    Every flagged breach is automatically recorded with bounding boxes, zone code, and timestamp.
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Real-World Scenario Drilldown Tabs */}
        <div className="mt-16 p-8 rounded-2xl bg-navy-900/40 border border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h4 className="text-lg font-bold text-white font-display">
                Critical Hazard Scenarios
              </h4>
              <p className="text-xs font-mono text-slate-400">
                Click a scenario to see how traditional methods fail and how AI intervenes
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {hazardScenarios.map((scen, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedHazard(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    selectedHazard === idx
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold'
                      : 'bg-navy-950 text-slate-400 border border-slate-800 hover:text-white'
                  }`}
                >
                  Scenario 0{idx + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-xl bg-navy-950/80 border border-slate-800 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <h5 className="text-base font-bold text-white flex items-center gap-2">
                <HardHat className="w-4 h-4 text-amber-400" />
                {hazardScenarios[selectedHazard].title}
              </h5>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-red-950/80 text-red-400 border border-red-500/30">
                {hazardScenarios[selectedHazard].risk}
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-6 text-xs sm:text-sm">
              <div className="p-4 rounded-lg bg-red-950/20 border border-red-500/20">
                <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider block mb-1">
                  Traditional Outcome:
                </span>
                <p className="text-slate-300 leading-relaxed">
                  {hazardScenarios[selectedHazard].traditional}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-cyan-950/30 border border-cyan-500/30">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                  Safety Guarantee AI Intervention:
                </span>
                <p className="text-slate-300 leading-relaxed">
                  {hazardScenarios[selectedHazard].solution}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
