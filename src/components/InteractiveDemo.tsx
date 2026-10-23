import React, { useState, useEffect } from 'react'
import { 
  Cctv, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  Play, 
  Pause, 
  RotateCcw, 
  Sliders, 
  Eye, 
  EyeOff, 
  Bell, 
  Cpu, 
  Layers, 
  Maximize2, 
  X, 
  Clock, 
  Radio, 
  Zap,
  Info,
  Check,
  Sparkles
} from 'lucide-react'
import { CAMERA_FEEDS, INITIAL_WORKERS, INITIAL_ALERTS } from '../data/mockData'
import { CameraFeed, WorkerDetection, IncidentAlert } from '../types'

export const InteractiveDemo: React.FC = () => {
  const [selectedCameraId, setSelectedCameraId] = useState<string>('CAM-01')
  const [workersState, setWorkersState] = useState<Record<string, WorkerDetection[]>>(INITIAL_WORKERS)
  const [alerts, setAlerts] = useState<IncidentAlert[]>(INITIAL_ALERTS)
  const [isPlaying, setIsPlaying] = useState<boolean>(true)
  const [showBoundingBoxes, setShowBoundingBoxes] = useState<boolean>(true)
  const [showConfidence, setShowConfidence] = useState<boolean>(true)
  const [showHeatmap, setShowHeatmap] = useState<boolean>(false)
  const [selectedWorker, setSelectedWorker] = useState<WorkerDetection | null>(null)
  const [inspectAlert, setInspectAlert] = useState<IncidentAlert | null>(null)
  const [simulatedTime, setSimulatedTime] = useState<string>('14:32:08')
  const [audioBeaconActive, setAudioBeaconActive] = useState<boolean>(false)

  // Live timecode updater
  useEffect(() => {
    if (!isPlaying) return
    const interval = setInterval(() => {
      const now = new Date()
      const hrs = String(now.getHours()).padStart(2, '0')
      const mins = String(now.getMinutes()).padStart(2, '0')
      const secs = String(now.getSeconds()).padStart(2, '0')
      setSimulatedTime(`${hrs}:${mins}:${secs}`)
    }, 1000)
    return () => clearInterval(interval)
  }, [isPlaying])

  const currentCamera = CAMERA_FEEDS.find(c => c.id === selectedCameraId) || CAMERA_FEEDS[0]
  const currentWorkers = workersState[selectedCameraId] || []

  // Dynamic calculations
  const violationWorkers = currentWorkers.filter(w => w.complianceStatus === 'violation')
  const compliantWorkers = currentWorkers.filter(w => w.complianceStatus === 'compliant')
  const calculatedComplianceRate = currentWorkers.length > 0 
    ? Math.round((compliantWorkers.length / currentWorkers.length) * 100) 
    : 100

  // Trigger simulated PPE violation
  const handleTriggerViolation = () => {
    setWorkersState(prev => {
      const camWorkers = [...(prev[selectedCameraId] || [])]
      if (camWorkers.length === 0) return prev

      // Pick the first compliant worker to violate
      const workerToViolate = camWorkers.find(w => w.complianceStatus === 'compliant') || camWorkers[0]
      const updatedWorkers = camWorkers.map(w => {
        if (w.id === workerToViolate.id) {
          return {
            ...w,
            complianceStatus: 'violation' as const,
            items: w.items.map(item => {
              if (item.name === 'Hardhat' || item.name === 'High-Vis Vest') {
                return { ...item, status: 'missing' as const, confidence: 98.6 }
              }
              return item
            })
          }
        }
        return w
      })

      return {
        ...prev,
        [selectedCameraId]: updatedWorkers
      }
    })

    // Prepend new incident alert
    const newAlertId = `ALT-${Math.floor(1000 + Math.random() * 9000)}`
    const newAlert: IncidentAlert = {
      id: newAlertId,
      timestamp: simulatedTime,
      cameraName: currentCamera.name,
      cameraId: currentCamera.id,
      zone: currentCamera.zoneCode,
      workerId: currentWorkers[0]?.id || 'WRK-109',
      workerName: currentWorkers[0]?.name || 'Factory Worker',
      violationType: 'Missing Hardhat & Vest in Hazardous Zone',
      severity: 'critical',
      status: 'dispatched',
      confidence: 98.7,
      recommendedAction: 'Automated push alert sent to Shift Supervisor. Audio beacon triggered.'
    }

    setAlerts(prev => [newAlert, ...prev])
    setAudioBeaconActive(true)
    setTimeout(() => setAudioBeaconActive(false), 3500)
  }

  // Restore safe state
  const handleRestoreCompliance = () => {
    setWorkersState(prev => {
      const camWorkers = (prev[selectedCameraId] || []).map(w => ({
        ...w,
        complianceStatus: 'compliant' as const,
        items: w.items.map(item => ({
          ...item,
          status: 'present' as const,
          confidence: Math.round(95 + Math.random() * 4.5)
        }))
      }))
      return {
        ...prev,
        [selectedCameraId]: camWorkers
      }
    })
    setAudioBeaconActive(false)
  }

  return (
    <section id="interactive-demo" className="py-24 relative overflow-hidden bg-navy-950 border-t border-cyan-500/30">
      {/* Background Ambience */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-3/4 h-[500px] bg-cyan-500/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold tracking-wider shadow-lg shadow-cyan-950/50">
            <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>Interactive AI Demonstration</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Simulated Factory Safety <br className="hidden sm:inline" />
            <span className="text-gradient-cyan">Monitoring Operations Center</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Experience how Safety Guarantee detects PPE compliance, tracks workers across factory zones, 
            and dispatches instant notifications.
          </p>
        </div>

        {/* Prominent Mandatory Simulation Disclaimer */}
        <div className="mt-8 p-4 rounded-2xl bg-navy-900/90 border border-amber-500/40 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold uppercase text-amber-400 tracking-wider block">
                Demonstration Notice & Disclaimer
              </span>
              <p className="text-xs text-slate-300">
                This dashboard is an interactive simulation demonstrating the proposed AI computer vision architecture. 
                No actual live production cameras or real-world industrial systems are connected.
              </p>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-2 font-mono text-xs text-slate-400 bg-navy-950 px-3 py-1.5 rounded-lg border border-slate-800">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Simulator Mode: Active</span>
          </div>
        </div>

        {/* Audio Beacon Alert Notification Banner */}
        {audioBeaconActive && (
          <div className="mt-4 p-4 rounded-xl bg-red-950/90 border-2 border-red-500 text-white flex items-center justify-between animate-bounce shadow-2xl shadow-red-950">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-red-400 animate-pulse" />
              <div>
                <p className="font-bold font-display text-sm tracking-wide">
                  CRITICAL PPE BREACH DETECTED IN {currentCamera.zoneCode}!
                </p>
                <p className="text-xs text-red-200 font-mono">
                  Automated alert sent to Safety Supervisor. Visual evidence recorded.
                </p>
              </div>
            </div>
            <span className="text-xs font-mono bg-red-500 text-slate-950 font-extrabold px-2.5 py-1 rounded">
              SIREN DISPATCHED
            </span>
          </div>
        )}

        {/* Main Dashboard Container */}
        <div className="mt-8 rounded-3xl glass-panel border border-cyan-500/30 overflow-hidden shadow-2xl">
          
          {/* Top Bar: Camera Selector & Global Telemetry */}
          <div className="bg-navy-900/95 border-b border-cyan-500/20 p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Camera Switcher Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-slate-400 mr-1 flex items-center gap-1.5">
                <Cctv className="w-4 h-4 text-cyan-400" />
                <span>Feeds:</span>
              </span>
              {CAMERA_FEEDS.map((cam) => {
                const isSelected = selectedCameraId === cam.id
                return (
                  <button
                    key={cam.id}
                    onClick={() => {
                      setSelectedCameraId(cam.id)
                      setSelectedWorker(null)
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-2 border ${
                      isSelected
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 font-bold shadow'
                        : 'bg-navy-950/70 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-cyan-400 animate-pulse' : 'bg-slate-500'}`} />
                    <span>{cam.id}</span>
                  </button>
                )
              })}
            </div>

            {/* Quick Metrics */}
            <div className="flex items-center gap-3 text-xs font-mono">
              <div className="px-3 py-1 rounded-lg bg-navy-950 border border-slate-800 text-slate-300 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>TIME: {simulatedTime}</span>
              </div>
              <div className="px-3 py-1 rounded-lg bg-navy-950 border border-slate-800 text-emerald-400 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>30.0 FPS</span>
              </div>
            </div>

          </div>

          {/* Centerpiece Grid: Viewport on Left, Control & Alert Panel on Right */}
          <div className="grid lg:grid-cols-12 gap-0">
            
            {/* Viewport Column */}
            <div className="lg:col-span-8 p-4 sm:p-6 bg-slate-950/90 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800">
              
              {/* Feed Header Information */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3 text-xs font-mono">
                <div>
                  <h4 className="text-white font-bold text-sm">
                    {currentCamera.name}
                  </h4>
                  <p className="text-slate-400 text-[11px]">
                    Location: {currentCamera.location} • Stream: {currentCamera.streamType}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] bg-navy-900 border border-slate-800 text-cyan-300 font-bold">
                    {currentCamera.zoneCode}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    violationWorkers.length > 0 
                      ? 'bg-red-950 text-red-400 border border-red-500/40 animate-pulse' 
                      : 'bg-emerald-950 text-emerald-400 border border-emerald-500/40'
                  }`}>
                    {violationWorkers.length > 0 ? `${violationWorkers.length} VIOLATION` : 'ALL COMPLIANT'}
                  </span>
                </div>
              </div>

              {/* Viewport Canvas Screen */}
              <div className="relative aspect-[16/10] w-full rounded-2xl bg-navy-950 border border-slate-800 overflow-hidden shadow-inner select-none">
                
                {/* SVG Visual Factory Environment */}
                <svg className="w-full h-full" viewBox="0 0 600 380" fill="none">
                  <defs>
                    <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0B132B" />
                      <stop offset="100%" stopColor="#060913" />
                    </linearGradient>
                    <pattern id="feedGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#1E293B" strokeWidth="0.5" />
                    </pattern>
                  </defs>

                  {/* Floor */}
                  <rect width="600" height="380" fill="url(#bgGrad)" />
                  <rect width="600" height="380" fill="url(#feedGrid)" />

                  {/* Machinery Schematics */}
                  {selectedCameraId === 'CAM-01' && (
                    <g opacity="0.7">
                      <rect x="40" y="220" width="520" height="40" rx="4" fill="#0F172A" stroke="#334155" strokeWidth="1" strokeDasharray="6 4" />
                      <line x1="20" y1="60" x2="580" y2="60" stroke="#475569" strokeWidth="2" />
                      <rect x="250" y="45" width="100" height="25" rx="3" fill="#1E293B" stroke="#00F0FF" strokeWidth="1" />
                      <text x="270" y="62" fill="#00F0FF" fontSize="9" fontFamily="monospace">OVERHEAD CRANE</text>
                      {/* Danger floor box */}
                      <rect x="220" y="160" width="160" height="150" fill="rgba(239,68,68,0.06)" stroke="#EF4444" strokeWidth="1" strokeDasharray="6 3" />
                      <text x="235" y="180" fill="#EF4444" fontSize="8" fontFamily="monospace">RESTRICTED LOAD AREA</text>
                    </g>
                  )}

                  {selectedCameraId === 'CAM-02' && (
                    <g opacity="0.7">
                      {/* Glass Furnace outline */}
                      <rect x="50" y="80" width="200" height="180" rx="8" fill="#1C1917" stroke="#EA580C" strokeWidth="1.5" />
                      <circle cx="150" cy="170" r="45" fill="rgba(249, 115, 22, 0.15)" stroke="#F97316" strokeWidth="1" />
                      <text x="90" y="175" fill="#FB923C" fontSize="10" fontFamily="monospace" fontWeight="bold">GLASS FURNACE (1200°C)</text>
                      <rect x="280" y="210" width="280" height="35" rx="4" fill="#0F172A" stroke="#334155" strokeWidth="1" />
                      <text x="320" y="232" fill="#94A3B8" fontSize="9" fontFamily="monospace">ANNEALING LEHR CONVEYOR</text>
                    </g>
                  )}

                  {selectedCameraId === 'CAM-03' && (
                    <g opacity="0.7">
                      {/* Bottling line */}
                      <rect x="30" y="180" width="540" height="50" rx="6" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.2" strokeDasharray="8 4" />
                      <circle cx="80" cy="205" r="8" fill="#0284C7" />
                      <circle cx="160" cy="205" r="8" fill="#0284C7" />
                      <circle cx="240" cy="205" r="8" fill="#0284C7" />
                      <circle cx="320" cy="205" r="8" fill="#0284C7" />
                      <circle cx="400" cy="205" r="8" fill="#0284C7" />
                      <circle cx="480" cy="205" r="8" fill="#0284C7" />
                      <text x="210" y="250" fill="#38BDF8" fontSize="9" fontFamily="monospace">HIGH-SPEED PACKAGING CONVEYOR</text>
                    </g>
                  )}

                  {selectedCameraId === 'CAM-04' && (
                    <g opacity="0.7">
                      {/* Cleanroom suites */}
                      <rect x="60" y="70" width="220" height="200" rx="8" fill="#082F49" stroke="#0284C7" strokeWidth="1.2" />
                      <text x="85" y="100" fill="#38BDF8" fontSize="10" fontFamily="monospace" fontWeight="bold">ISO CLASS 5 AIRLOCK</text>
                      <rect x="320" y="70" width="220" height="200" rx="8" fill="#082F49" stroke="#0284C7" strokeWidth="1.2" />
                      <text x="345" y="100" fill="#38BDF8" fontSize="10" fontFamily="monospace" fontWeight="bold">FORMULATION HOOD</text>
                    </g>
                  )}

                  {/* Heatmap Overlay if toggled */}
                  {showHeatmap && (
                    <g opacity="0.4">
                      <circle cx="300" cy="200" r="130" fill="url(#heatGrad)" />
                      <defs>
                        <radialGradient id="heatGrad">
                          <stop offset="0%" stopColor="#EF4444" stopOpacity="0.8" />
                          <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                        </radialGradient>
                      </defs>
                    </g>
                  )}
                </svg>

                {/* Laser Scanning Line */}
                {isPlaying && (
                  <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60 animate-scanline pointer-events-none" />
                )}

                {/* Workers Bounding Boxes */}
                {showBoundingBoxes && currentWorkers.map((worker) => {
                  const isViolation = worker.complianceStatus === 'violation'
                  const isWorkerSelected = selectedWorker?.id === worker.id

                  return (
                    <div
                      key={worker.id}
                      onClick={() => setSelectedWorker(worker)}
                      style={{
                        left: `${worker.x}%`,
                        top: `${worker.y}%`,
                        width: `${worker.width}%`,
                        height: `${worker.height}%`
                      }}
                      className={`absolute rounded transition-all cursor-pointer group ${
                        isViolation
                          ? 'border-2 border-red-500 bg-red-500/15 shadow-[0_0_15px_rgba(239,68,68,0.4)]'
                          : 'border-2 border-emerald-400 bg-emerald-500/10 hover:border-cyan-300'
                      } ${isWorkerSelected ? 'ring-2 ring-white ring-offset-2 ring-offset-navy-950' : ''}`}
                    >
                      {/* Top Header Tag */}
                      <div className={`absolute -top-6 left-0 text-[10px] font-mono font-bold px-1.5 py-0.5 rounded flex items-center gap-1 shadow whitespace-nowrap ${
                        isViolation
                          ? 'bg-red-500 text-white animate-bounce'
                          : 'bg-emerald-500 text-slate-950'
                      }`}>
                        {isViolation ? <AlertTriangle className="w-3 h-3" /> : <CheckCircle2 className="w-3 h-3" />}
                        <span>{worker.id} • {isViolation ? 'BREACH' : 'COMPLIANT'}</span>
                      </div>

                      {/* Confidence Tag HUD */}
                      {showConfidence && (
                        <div className="absolute top-1 left-1 space-y-0.5 font-mono text-[9px] pointer-events-none">
                          {worker.items.map((item, idx) => (
                            <div 
                              key={idx}
                              className={`px-1 py-0.2 rounded border flex items-center justify-between gap-1.5 ${
                                item.status === 'missing'
                                  ? 'bg-red-950/90 text-red-300 border-red-500 font-bold'
                                  : 'bg-navy-950/80 text-emerald-400 border-emerald-500/30'
                              }`}
                            >
                              <span>{item.status === 'present' ? '✓' : '✕'} {item.name}:</span>
                              <span>{item.confidence.toFixed(1)}%</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Corner Accents */}
                      <div className={`absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 ${isViolation ? 'border-red-400' : 'border-emerald-300'}`} />
                      <div className={`absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 ${isViolation ? 'border-red-400' : 'border-emerald-300'}`} />
                      <div className={`absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 ${isViolation ? 'border-red-400' : 'border-emerald-300'}`} />
                      <div className={`absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 ${isViolation ? 'border-red-400' : 'border-emerald-300'}`} />
                    </div>
                  )
                })}

                {/* Reticle Overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Watermark in bottom left */}
                  <div className="absolute bottom-2 left-3 font-mono text-[10px] text-slate-400 bg-navy-950/80 px-2.5 py-1 rounded border border-slate-800">
                    SIMULATED INFERENCE ENGINE • ON-EDGE LOCAL PIPELINE
                  </div>

                  {/* Tracking stats in bottom right */}
                  <div className="absolute bottom-2 right-3 font-mono text-[10px] text-cyan-300 bg-navy-950/80 px-2.5 py-1 rounded border border-slate-800 flex items-center gap-1.5">
                    <Eye className="w-3 h-3 text-cyan-400" />
                    <span>{currentWorkers.length} WORKERS TRACKED</span>
                  </div>
                </div>

              </div>

              {/* Viewport Control Bar */}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2 rounded-lg bg-navy-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40 flex items-center gap-1.5"
                    title={isPlaying ? 'Pause Feed' : 'Resume Feed'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4 text-cyan-400" /> : <Play className="w-4 h-4 text-emerald-400" />}
                    <span>{isPlaying ? 'Pause' : 'Play'}</span>
                  </button>

                  <button
                    onClick={() => setShowBoundingBoxes(!showBoundingBoxes)}
                    className={`px-3 py-2 rounded-lg border flex items-center gap-1.5 transition-colors ${
                      showBoundingBoxes ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40' : 'bg-navy-900 text-slate-400 border-slate-800'
                    }`}
                  >
                    {showBoundingBoxes ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                    <span>Boxes</span>
                  </button>

                  <button
                    onClick={() => setShowConfidence(!showConfidence)}
                    className={`px-3 py-2 rounded-lg border flex items-center gap-1.5 transition-colors ${
                      showConfidence ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40' : 'bg-navy-900 text-slate-400 border-slate-800'
                    }`}
                  >
                    <Cpu className="w-3.5 h-3.5" />
                    <span>Confidence HUD</span>
                  </button>

                  <button
                    onClick={() => setShowHeatmap(!showHeatmap)}
                    className={`px-3 py-2 rounded-lg border flex items-center gap-1.5 transition-colors ${
                      showHeatmap ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' : 'bg-navy-900 text-slate-400 border-slate-800'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Risk Heatmap</span>
                  </button>
                </div>

                <div className="text-[11px] text-slate-400">
                  Click on any detected worker to inspect itemized telemetry
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Simulation Trigger & Real-Time Alert Stream */}
            <div className="lg:col-span-4 p-4 sm:p-6 bg-navy-900/60 flex flex-col justify-between space-y-6">
              
              {/* Interactive Simulation Trigger Panel */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-cyan-400" />
                    <span>Simulation Controls</span>
                  </h4>
                  <span className="text-[10px] font-mono text-slate-400">Interactive</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={handleTriggerViolation}
                    className="p-3 rounded-xl bg-red-500/20 hover:bg-red-500/30 border border-red-500/50 text-red-300 text-xs font-mono font-bold flex flex-col items-center justify-center gap-1.5 transition-all shadow-lg shadow-red-950/40 active:scale-95"
                  >
                    <AlertTriangle className="w-5 h-5 text-red-400" />
                    <span>Simulate PPE Breach</span>
                  </button>

                  <button
                    onClick={handleRestoreCompliance}
                    className="p-3 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/50 text-emerald-300 text-xs font-mono font-bold flex flex-col items-center justify-center gap-1.5 transition-all shadow-lg shadow-emerald-950/40 active:scale-95"
                  >
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    <span>Restore Safe State</span>
                  </button>
                </div>
              </div>

              {/* Worker Inspector Card if a worker is selected */}
              {selectedWorker && (
                <div className="p-4 rounded-xl bg-navy-950 border border-cyan-500/30 space-y-3 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <div>
                      <span className="text-xs font-bold text-white font-mono">{selectedWorker.id} • {selectedWorker.name}</span>
                      <p className="text-[10px] text-slate-400 font-mono">Role: {selectedWorker.role} | Zone: {selectedWorker.zone}</p>
                    </div>
                    <button 
                      onClick={() => setSelectedWorker(null)}
                      className="text-slate-400 hover:text-white p-1"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="space-y-1.5 font-mono text-xs">
                    {selectedWorker.items.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-1.5 rounded bg-navy-900/60 border border-slate-800">
                        <span className="text-slate-300">{item.name}</span>
                        <span className={`font-bold ${item.status === 'present' ? 'text-emerald-400' : 'text-red-400'}`}>
                          {item.status.toUpperCase()} ({item.confidence.toFixed(1)}%)
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Compliance KPI Gauge Bar */}
              <div className="p-4 rounded-2xl bg-navy-950/80 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">Zone Compliance Score</span>
                  <span className={`text-sm font-mono font-bold ${
                    calculatedComplianceRate < 90 ? 'text-red-400' : 'text-emerald-400'
                  }`}>
                    {calculatedComplianceRate}%
                  </span>
                </div>

                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-500 ${
                      calculatedComplianceRate < 90 
                        ? 'bg-gradient-to-r from-red-500 to-amber-500' 
                        : 'bg-gradient-to-r from-cyan-400 to-emerald-400'
                    }`}
                    style={{ width: `${calculatedComplianceRate}%` }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-400 pt-1">
                  <div>
                    <span>Tracked Workers: </span>
                    <span className="text-white font-bold">{currentWorkers.length}</span>
                  </div>
                  <div>
                    <span>Active Breaches: </span>
                    <span className={`font-bold ${violationWorkers.length > 0 ? 'text-red-400' : 'text-emerald-400'}`}>
                      {violationWorkers.length}
                    </span>
                  </div>
                </div>
              </div>

              {/* Real-Time Alert Log Feed */}
              <div className="space-y-3 flex-1 flex flex-col justify-end">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <Bell className="w-4 h-4 text-amber-400" />
                    <span>Real-Time Alert Feed</span>
                  </h4>
                  <span className="text-[10px] font-mono text-slate-400">{alerts.length} logged</span>
                </div>

                <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                  {alerts.map((alert) => (
                    <div 
                      key={alert.id}
                      className="p-3 rounded-xl bg-navy-950/90 border border-slate-800 hover:border-cyan-500/40 transition-colors font-mono text-xs space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-red-400 font-bold flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                          {alert.violationType}
                        </span>
                        <span className="text-[10px] text-slate-500">{alert.timestamp}</span>
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-slate-400">
                        <span>{alert.workerId} ({alert.zone})</span>
                        <button
                          onClick={() => setInspectAlert(alert)}
                          className="text-cyan-400 hover:text-cyan-300 underline text-[10px]"
                        >
                          Inspect Snapshot
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Snapshot Evidence Inspection Modal */}
        {inspectAlert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
            <div 
              className="relative w-full max-w-2xl rounded-3xl bg-navy-900 border border-cyan-400/50 p-6 sm:p-8 shadow-2xl text-slate-100 space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setInspectAlert(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-navy-950 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-red-400 font-bold">
                    Incident Evidence Record • {inspectAlert.id}
                  </span>
                  <h3 className="text-xl font-bold text-white font-display">
                    {inspectAlert.violationType}
                  </h3>
                </div>
              </div>

              {/* Simulated Captured Evidence Frame */}
              <div className="relative aspect-[16/9] rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden p-4 flex flex-col justify-between font-mono text-xs">
                <div className="flex justify-between items-center text-slate-400 text-[10px]">
                  <span>CAMERA: {inspectAlert.cameraName}</span>
                  <span className="text-red-400 font-bold">TIMESTAMP: {inspectAlert.timestamp}</span>
                </div>

                <div className="my-auto text-center space-y-2">
                  <div className="w-36 h-28 mx-auto border-2 border-red-500 rounded bg-red-500/20 flex flex-col items-center justify-center relative shadow-[0_0_20px_rgba(239,68,68,0.5)]">
                    <span className="text-red-300 font-bold text-xs uppercase mb-1">
                      {inspectAlert.workerId}
                    </span>
                    <span className="text-[10px] bg-red-950 px-1.5 py-0.5 rounded text-white border border-red-500">
                      NO HARDHAT [98.8%]
                    </span>
                    <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-red-400" />
                    <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-red-400" />
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Subject: {inspectAlert.workerName} • Zone: {inspectAlert.zone}
                  </p>
                </div>

                <div className="flex justify-between items-center text-[10px] text-slate-500 border-t border-slate-800 pt-2">
                  <span>HASH: SHA-256 e8f4a129c...</span>
                  <span className="text-emerald-400">CRYPTOGRAPHIC PROOF LOGGED</span>
                </div>
              </div>

              {/* Recommended Action / Notification Status */}
              <div className="p-4 rounded-xl bg-navy-950 border border-slate-800 space-y-1 font-mono text-xs">
                <span className="text-slate-400 block font-semibold text-[11px]">DISPATCHED REMEDIATION:</span>
                <p className="text-cyan-300">{inspectAlert.recommendedAction}</p>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setInspectAlert(null)}
                  className="px-5 py-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/30 text-xs font-mono font-semibold transition-all"
                >
                  Close Evidence Viewer
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  )
}
