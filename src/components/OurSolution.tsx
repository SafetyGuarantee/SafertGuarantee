import React, { useState } from 'react'
import { 
  CheckCircle, 
  Cpu, 
  Radio, 
  Layers, 
  BellRing, 
  LayoutDashboard, 
  ArrowRight, 
  ShieldCheck, 
  SlidersHorizontal,
  Server,
  Zap,
  Lock
} from 'lucide-react'

export const OurSolution: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(2)

  const architectureStages = [
    {
      id: 0,
      step: '01',
      name: 'Camera Ingestion',
      icon: Radio,
      category: 'Input Layer',
      headline: 'Universal RTSP / ONVIF IP Stream Decoding',
      description: 'Connects directly to existing security and production cameras using hardware-accelerated H.264/H.265 decoders. Captures 1080p video streams at 30 frames per second without requiring new cameras.',
      specs: [
        'Protocol: RTSP / ONVIF Profile S & G',
        'Resolution: 1080p Full HD (Dynamic sub-streaming)',
        'Bitrate: 2–6 Mbps per camera channel',
        'Decoders: NVDEC / QuickSync Hardware Accelerated'
      ],
      dataPayload: 'Raw H.264 Video Stream ──▶ Frame Buffer Memory ──▶ RGB Tensor Conversion'
    },
    {
      id: 1,
      step: '02',
      name: 'Edge Preprocessing',
      icon: Layers,
      category: 'Processing Layer',
      headline: 'Frame Sampling, Normalization & Noise Filtering',
      description: 'Cleans, crops, and optimizes incoming frames. Corrects factory glare, steam haze, and shadows, then passes normalized tensors to the inference acceleration runtime.',
      specs: [
        'Sampling Rate: 10–30 FPS adaptive load-balancing',
        'Image Normalization: 640x640 / 1280x1280 tensors',
        'Enhancement: Contrast adaptive histogram equalization (CLAHE)',
        'Privacy Filter: Optional real-time facial blurring module'
      ],
      dataPayload: 'Frame Buffer ──▶ Tensor Normalization (1x3x640x640) ──▶ GPU Memory Queue'
    },
    {
      id: 2,
      step: '03',
      name: 'Deep Neural Detection',
      icon: Cpu,
      category: 'AI Vision Core',
      headline: 'Multi-Class PPE Localization & Classification',
      description: 'Executes customized deep learning vision models (such as YOLOv8x-Safety) to detect human workers, locate anatomical keypoints (head, torso, hands, feet), and classify PPE compliance status.',
      specs: [
        'Model Architecture: Optimized YOLOv8 / YOLOv9 Core',
        'Inference Runtime: TensorRT 8.6 / ONNX Runtime',
        'Classes Detected: Hardhat, High-Vis Vest, Glasses, Gloves, Boots, Respirator',
        'Latency: ~18–24 ms per frame on edge GPU'
      ],
      dataPayload: 'RGB Tensors ──▶ Bounding Box Prediction ──▶ Keypoint Association ──▶ Confidence Array'
    },
    {
      id: 3,
      step: '04',
      name: 'Safety Rule Engine',
      icon: SlidersHorizontal,
      category: 'Logic Engine',
      headline: 'Zone-Specific Compliance Policy Enforcement',
      description: 'Evaluates detected objects against the safety rules assigned to specific camera zones. Differentiates between hazardous crane paths, chemical mixing suites, and designated safe walkways.',
      specs: [
        'Rule Mapping: Spatial Polygon Geofences per Camera',
        'Temporal Verification: 3-frame consistency check to prevent false positives',
        'Severity Matrix: Classifies breaches as Moderate, High, or Critical',
        'Workstation Tracking: Worker ID persistence across occlusions'
      ],
      dataPayload: 'Detected Objects ──▶ Zone Rule Matrix ──▶ Breach Confirmed Flag (>90% confidence)'
    },
    {
      id: 4,
      step: '05',
      name: 'Multi-Channel Alert Dispatch',
      icon: BellRing,
      category: 'Output Layer',
      headline: 'Instant Notification & Evidence Logging',
      description: 'The moment a breach is confirmed, Safety Guarantee dispatches high-priority push notifications, SMS alerts, and visual feeds to plant safety officers within seconds.',
      specs: [
        'Notification Latency: Under 1.5 seconds from frame capture',
        'Channels: WebSocket Dashboard, Mobile Push, SMS, Webhook, Siren Beacon',
        'Evidence Package: Timestamped snapshot with annotated bounding boxes',
        'Audit Logging: Secure database recording for compliance reporting'
      ],
      dataPayload: 'Breach Event ──▶ JSON Payload + Snapshot ──▶ Supervisor Devices & Central HUD'
    }
  ]

  const activeStageData = architectureStages[activeStage]

  return (
    <section id="our-solution" className="py-24 relative overflow-hidden bg-navy-950/90 border-t border-slate-800/80">
      {/* Background Gradient Accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium">
            <Cpu className="w-3.5 h-3.5" />
            <span>Proposed System Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            How Safety Guarantee <br className="hidden sm:inline" />
            <span className="text-gradient-cyan">Protects Industrial Floors</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            By integrating existing factory surveillance with cutting-edge computer vision, 
            Safety Guarantee transforms passive cameras into an intelligent, active shield for industrial workers.
          </p>
        </div>

        {/* Interactive Architecture Flow Tabs */}
        <div className="mt-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {architectureStages.map((stage) => {
              const Icon = stage.icon
              const isSelected = activeStage === stage.id
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(stage.id)}
                  className={`p-4 rounded-xl text-left transition-all duration-300 relative group flex flex-col justify-between ${
                    isSelected
                      ? 'bg-navy-900 border-2 border-cyan-400 shadow-lg shadow-cyan-500/20'
                      : 'bg-navy-900/40 border border-slate-800 hover:border-slate-700 hover:bg-navy-900/70'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-mono font-bold ${isSelected ? 'text-cyan-400' : 'text-slate-400'}`}>
                      {stage.step}
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-navy-950 text-slate-400 border border-slate-800">
                      {stage.category}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Icon className={`w-4 h-4 ${isSelected ? 'text-cyan-300' : 'text-slate-400'}`} />
                      <h4 className={`text-sm font-bold font-display ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                        {stage.name}
                      </h4>
                    </div>
                  </div>

                  {/* Active Indicator Line */}
                  {isSelected && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-b-xl" />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Selected Stage Detail Panel */}
        <div className="mt-8 rounded-2xl glass-panel border border-cyan-500/30 p-8 shadow-2xl relative overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Stage Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-lg bg-cyan-500/20 border border-cyan-400/30 text-cyan-400 font-mono font-bold text-sm flex items-center justify-center">
                  {activeStageData.step}
                </span>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                    Pipeline Stage {activeStageData.step} • {activeStageData.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                    {activeStageData.headline}
                  </h3>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {activeStageData.description}
              </p>

              {/* Data Flow Blueprint */}
              <div className="p-4 rounded-xl bg-navy-950/80 border border-cyan-500/20 font-mono text-xs">
                <span className="text-slate-400 block mb-1 text-[11px] font-semibold">DATA FLOW PROTOCOL:</span>
                <span className="text-cyan-300">{activeStageData.dataPayload}</span>
              </div>

              {/* Technical Specifications */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                  Technical Specifications & Benchmarks:
                </h4>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {activeStageData.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-navy-900/60 border border-slate-800 text-xs text-slate-300 font-mono">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Visual Diagram / Architectural Schematic */}
            <div className="lg:col-span-5">
              <div className="rounded-xl bg-slate-950 border border-slate-800 p-6 space-y-5 font-mono text-xs relative overflow-hidden shadow-inner">
                
                {/* Tech Terminal Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-slate-300 font-semibold">ARCHITECTURE SCHEMATIC</span>
                  </div>
                  <span className="text-[10px] text-slate-500">REV 1.4-CAPSTONE</span>
                </div>

                {/* Animated Pipeline Nodes */}
                <div className="space-y-3">
                  <div className={`p-3 rounded-lg border transition-all ${activeStage === 0 ? 'bg-cyan-950/40 border-cyan-400 text-cyan-300' : 'bg-navy-900/40 border-slate-800 text-slate-400'}`}>
                    <div className="flex items-center justify-between">
                      <span className="font-bold">1. IP CAMERA STREAM</span>
                      <span className="text-[10px]">RTSP 1080p @ 30fps</span>
                    </div>
                  </div>

                  <div className="flex justify-center text-slate-600">
                    ↓
                  </div>

                  <div className={`p-3 rounded-lg border transition-all ${activeStage === 1 ? 'bg-cyan-950/40 border-cyan-400 text-cyan-300' : 'bg-navy-900/40 border-slate-800 text-slate-400'}`}>
                    <div className="flex items-center justify-between">
                      <span className="font-bold">2. TENSOR NORMALIZER</span>
                      <span className="text-[10px]">CLAHE Filter • 640x640</span>
                    </div>
                  </div>

                  <div className="flex justify-center text-slate-600">
                    ↓
                  </div>

                  <div className={`p-3 rounded-lg border transition-all ${activeStage === 2 ? 'bg-cyan-950/40 border-cyan-400 text-cyan-300' : 'bg-navy-900/40 border-slate-800 text-slate-400'}`}>
                    <div className="flex items-center justify-between">
                      <span className="font-bold">3. YOLO-v8x SAFETY MODEL</span>
                      <span className="text-[10px] text-emerald-400 font-bold">18.4ms Inference</span>
                    </div>
                  </div>

                  <div className="flex justify-center text-slate-600">
                    ↓
                  </div>

                  <div className={`p-3 rounded-lg border transition-all ${activeStage === 3 ? 'bg-cyan-950/40 border-cyan-400 text-cyan-300' : 'bg-navy-900/40 border-slate-800 text-slate-400'}`}>
                    <div className="flex items-center justify-between">
                      <span className="font-bold">4. ZONE SAFETY POLICIES</span>
                      <span className="text-[10px]">Geofence Matrix</span>
                    </div>
                  </div>

                  <div className="flex justify-center text-slate-600">
                    ↓
                  </div>

                  <div className={`p-3 rounded-lg border transition-all ${activeStage === 4 ? 'bg-cyan-950/40 border-cyan-400 text-cyan-300' : 'bg-navy-900/40 border-slate-800 text-slate-400'}`}>
                    <div className="flex items-center justify-between">
                      <span className="font-bold">5. REAL-TIME ALERT GATEWAY</span>
                      <span className="text-[10px] text-amber-400">&lt;1.2s Dispatch</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded bg-navy-900/80 border border-slate-800 text-[11px] text-slate-400">
                  <div className="flex items-center gap-2 text-cyan-400 font-semibold mb-1">
                    <Lock className="w-3.5 h-3.5" />
                    <span>On-Premise Privacy Guarantee</span>
                  </div>
                  <span>Inference executes entirely inside the factory local area network. Zero raw video is transmitted to external cloud servers.</span>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
