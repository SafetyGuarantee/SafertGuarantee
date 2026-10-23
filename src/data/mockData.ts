import { CameraFeed, WorkerDetection, IncidentAlert, IndustryData, KeyFeature, HowItWorksStep } from '../types'

export const CAMERA_FEEDS: CameraFeed[] = [
  {
    id: 'CAM-01',
    name: 'Camera 01: Heavy Assembly Line',
    location: 'Assembly Bay Alpha',
    zoneCode: 'ZONE-A12',
    fps: 30,
    resolution: '1920x1080',
    bitrate: '4.8 Mbps',
    status: 'active',
    complianceRate: 97.4,
    totalWorkers: 3,
    violationCount: 0,
    description: 'Robotic welding stations and overhead gantry cranes requiring continuous hardhat and high-visibility vest compliance.',
    streamType: 'RTSP / H.264 (Simulated Stream)'
  },
  {
    id: 'CAM-02',
    name: 'Camera 02: Glass Furnace & Annealing',
    location: 'Thermal Processing Hall',
    zoneCode: 'ZONE-B04',
    fps: 30,
    resolution: '1920x1080',
    bitrate: '5.2 Mbps',
    status: 'warning',
    complianceRate: 85.0,
    totalWorkers: 3,
    violationCount: 1,
    description: 'High-temperature glass annealing lehrs with flying cullet hazards requiring mandatory face shields, Kevlar sleeves, and heat helmets.',
    streamType: 'RTSP / H.265 (Simulated Stream)'
  },
  {
    id: 'CAM-03',
    name: 'Camera 03: High-Speed Bottling Hall',
    location: 'Liquid Filling & Packaging',
    zoneCode: 'ZONE-C08',
    fps: 30,
    resolution: '1920x1080',
    bitrate: '4.5 Mbps',
    status: 'active',
    complianceRate: 98.8,
    totalWorkers: 2,
    violationCount: 0,
    description: 'Conveyor lines and washdown zones with wet slip hazards and high-noise decibels requiring ear protection and anti-slip boots.',
    streamType: 'RTSP / H.264 (Simulated Stream)'
  },
  {
    id: 'CAM-04',
    name: 'Camera 04: Pharma Cleanroom Formulation',
    location: 'Aseptic Filling Suite 3',
    zoneCode: 'ZONE-D02',
    fps: 30,
    resolution: '1920x1080',
    bitrate: '4.1 Mbps',
    status: 'active',
    complianceRate: 99.2,
    totalWorkers: 2,
    violationCount: 0,
    description: 'Class A/B cleanroom zone monitoring sterile suit integrity, particulate masks, nitrile gloves, and hair covers.',
    streamType: 'RTSP / H.264 (Simulated Stream)'
  }
]

export const INITIAL_WORKERS: Record<string, WorkerDetection[]> = {
  'CAM-01': [
    {
      id: 'WRK-101',
      name: 'M. Larson (Technician)',
      zone: 'Bay A-1',
      role: 'Welding Operator',
      x: 18,
      y: 28,
      width: 18,
      height: 48,
      complianceStatus: 'compliant',
      items: [
        { name: 'Hardhat', status: 'present', confidence: 99.2 },
        { name: 'High-Vis Vest', status: 'present', confidence: 98.4 },
        { name: 'Safety Glasses', status: 'present', confidence: 96.1 },
        { name: 'Gloves', status: 'present', confidence: 94.8 }
      ]
    },
    {
      id: 'WRK-102',
      name: 'J. Chen (Assembly Specialist)',
      zone: 'Bay A-2',
      role: 'Chassis Assembler',
      x: 52,
      y: 35,
      width: 17,
      height: 45,
      complianceStatus: 'compliant',
      items: [
        { name: 'Hardhat', status: 'present', confidence: 98.7 },
        { name: 'High-Vis Vest', status: 'present', confidence: 99.1 },
        { name: 'Gloves', status: 'present', confidence: 95.3 },
        { name: 'Steel-Toe Boots', status: 'present', confidence: 97.0 }
      ]
    },
    {
      id: 'WRK-103',
      name: 'R. Vance (Safety Inspector)',
      zone: 'Aisle 3',
      role: 'Area Supervisor',
      x: 78,
      y: 22,
      width: 16,
      height: 42,
      complianceStatus: 'compliant',
      items: [
        { name: 'Hardhat', status: 'present', confidence: 99.5 },
        { name: 'High-Vis Vest', status: 'present', confidence: 99.0 },
        { name: 'Safety Glasses', status: 'present', confidence: 97.4 }
      ]
    }
  ],
  'CAM-02': [
    {
      id: 'WRK-201',
      name: 'D. Kovacs (Furnace Tender)',
      zone: 'Furnace Door #2',
      role: 'Primary Operator',
      x: 24,
      y: 25,
      width: 20,
      height: 52,
      complianceStatus: 'compliant',
      items: [
        { name: 'Hardhat', status: 'present', confidence: 98.9 },
        { name: 'High-Vis Vest', status: 'present', confidence: 97.6 },
        { name: 'Gloves', status: 'present', confidence: 96.2 }
      ]
    },
    {
      id: 'WRK-202',
      name: 'T. Miller (Material Loader)',
      zone: 'Cullet Hopper #1',
      role: 'Material Handler',
      x: 62,
      y: 32,
      width: 19,
      height: 49,
      complianceStatus: 'violation',
      items: [
        { name: 'Hardhat', status: 'missing', confidence: 98.8 }, // Violation!
        { name: 'High-Vis Vest', status: 'present', confidence: 96.4 },
        { name: 'Gloves', status: 'present', confidence: 93.1 },
        { name: 'Safety Glasses', status: 'missing', confidence: 95.5 }
      ]
    },
    {
      id: 'WRK-203',
      name: 'E. Ruiz (Maintenance)',
      zone: 'Annealing Conveyor',
      role: 'Thermal Tech',
      x: 82,
      y: 20,
      width: 15,
      height: 40,
      complianceStatus: 'compliant',
      items: [
        { name: 'Hardhat', status: 'present', confidence: 99.1 },
        { name: 'High-Vis Vest', status: 'present', confidence: 98.0 }
      ]
    }
  ],
  'CAM-03': [
    {
      id: 'WRK-301',
      name: 'S. Al-Mansoor (Operator)',
      zone: 'Rinser Bay',
      role: 'Line Operator',
      x: 32,
      y: 28,
      width: 18,
      height: 48,
      complianceStatus: 'compliant',
      items: [
        { name: 'Hardhat', status: 'present', confidence: 97.8 },
        { name: 'High-Vis Vest', status: 'present', confidence: 98.3 },
        { name: 'Gloves', status: 'present', confidence: 96.0 }
      ]
    },
    {
      id: 'WRK-302',
      name: 'H. Tanaka (Quality Control)',
      zone: 'Capping Station',
      role: 'Inspector',
      x: 68,
      y: 30,
      width: 17,
      height: 46,
      complianceStatus: 'compliant',
      items: [
        { name: 'Hardhat', status: 'present', confidence: 99.4 },
        { name: 'High-Vis Vest', status: 'present', confidence: 97.9 },
        { name: 'Safety Glasses', status: 'present', confidence: 95.8 }
      ]
    }
  ],
  'CAM-04': [
    {
      id: 'WRK-401',
      name: 'Dr. A. Nowak (Formulation)',
      zone: 'Hood Chamber A',
      role: 'Biochemist',
      x: 36,
      y: 25,
      width: 18,
      height: 50,
      complianceStatus: 'compliant',
      items: [
        { name: 'Respirator', status: 'present', confidence: 99.6 },
        { name: 'Safety Glasses', status: 'present', confidence: 98.9 },
        { name: 'Gloves', status: 'present', confidence: 99.2 }
      ]
    },
    {
      id: 'WRK-402',
      name: 'K. Patel (Sterile Transfer)',
      zone: 'Transfer Airlock',
      role: 'Cleanroom Tech',
      x: 72,
      y: 26,
      width: 18,
      height: 49,
      complianceStatus: 'compliant',
      items: [
        { name: 'Respirator', status: 'present', confidence: 98.8 },
        { name: 'Gloves', status: 'present', confidence: 99.0 },
        { name: 'Safety Glasses', status: 'present', confidence: 97.5 }
      ]
    }
  ]
}

export const INITIAL_ALERTS: IncidentAlert[] = [
  {
    id: 'ALT-8842',
    timestamp: '14:28:12',
    cameraName: 'Camera 02: Glass Furnace & Annealing',
    cameraId: 'CAM-02',
    zone: 'ZONE-B04 (Cullet Hopper #1)',
    workerId: 'WRK-202',
    workerName: 'T. Miller (Material Loader)',
    violationType: 'Missing Hardhat & Eye Protection',
    severity: 'critical',
    status: 'dispatched',
    confidence: 98.8,
    recommendedAction: 'Immediate notification dispatched to Shift Supervisor Dave Bradley. Audio beacon queued.'
  },
  {
    id: 'ALT-8839',
    timestamp: '13:54:02',
    cameraName: 'Camera 01: Heavy Assembly Line',
    cameraId: 'CAM-01',
    zone: 'ZONE-A12 (Crane Path)',
    workerId: 'WRK-108',
    workerName: 'Contractor #4 (Electrical)',
    violationType: 'High-Vis Vest Unfastened / Missing',
    severity: 'high',
    status: 'acknowledged',
    confidence: 96.2,
    recommendedAction: 'Safety marshal dispatched. Vest corrected at 13:56:10.'
  },
  {
    id: 'ALT-8827',
    timestamp: '11:15:47',
    cameraName: 'Camera 03: High-Speed Bottling Hall',
    cameraId: 'CAM-03',
    zone: 'ZONE-C08 (Conveyor Crosswalk)',
    workerId: 'WRK-315',
    workerName: 'P. Geller (Line Maintenance)',
    violationType: 'Missing Hearing Protection in High-dB Zone',
    severity: 'moderate',
    status: 'resolved',
    confidence: 94.7,
    recommendedAction: 'Wearer donned certified earplugs upon system audible reminder.'
  }
]

export const KEY_FEATURES: KeyFeature[] = [
  {
    id: 'feature-ppe',
    title: 'AI-Powered PPE Detection',
    shortDesc: 'Deep neural networks trained to detect hardhats, reflective vests, safety goggles, gloves, and boots simultaneously in real-time.',
    detailedDesc: 'Utilizes lightweight edge computer vision models (such as YOLOv8) optimized to recognize multiple PPE classes even in challenging factory lighting, distance, and occlusions.',
    icon: 'ShieldCheck',
    badge: 'Core Computer Vision',
    technicalSpecs: [
      'Multi-class simultaneous detection: Hardhat, High-Vis Vest, Glasses, Gloves, Footwear',
      'High-confidence threshold calibration to minimize false alarms',
      'Bounding box tracking with temporal consistency across frames'
    ],
    visualMetric: {
      label: 'Detection Target Accuracy',
      value: '98.5%+'
    }
  },
  {
    id: 'feature-alerts',
    title: 'Automated Safety Alerts',
    shortDesc: 'Instant multi-channel notifications sent directly to plant safety officers the moment an unsafe condition is identified.',
    detailedDesc: 'Eliminates reliance on delayed manual walkthroughs. Dispatches instantaneous alerts containing worker zone, camera ID, snapshot proof, and timestamp.',
    icon: 'BellRing',
    badge: 'Real-Time Dispatch',
    technicalSpecs: [
      'Multi-channel dispatch: Webhook, SMS, Mobile Push, Email, and On-Floor Beacon',
      'Configurable latency under 1.5 seconds from detection to officer notification',
      'Shift-based routing logic ensuring only on-duty supervisors are notified'
    ],
    visualMetric: {
      label: 'Notification Latency',
      value: '<1.2s'
    }
  },
  {
    id: 'feature-integration',
    title: 'Camera System Integration',
    shortDesc: 'Designed to integrate directly with existing industrial CCTV infrastructure via standard RTSP and ONVIF protocols.',
    detailedDesc: 'No need to rip and replace expensive factory hardware. Connects seamlessly with IP cameras, network video recorders (NVRs), and edge surveillance appliances.',
    icon: 'Camera',
    badge: 'Universal Hardware',
    technicalSpecs: [
      'RTSP, RTMP, and ONVIF profile G/S protocol compatibility',
      'Support for 1080p and 4K streams with dynamic sub-stream resolution scaling',
      'On-premise edge appliance or secure private cloud architecture'
    ],
    visualMetric: {
      label: 'Stream Ingestion Protocol',
      value: 'RTSP / ONVIF'
    }
  },
  {
    id: 'feature-evidence',
    title: 'Image-Based Incident Evidence',
    shortDesc: 'Every safety breach automatically logs an annotated timestamped snapshot with bounding boxes for objective incident review.',
    detailedDesc: 'Creates an auditable and objective digital record. Safety managers can review the exact visual evidence, confirm violation severity, and provide constructive coaching to workers.',
    icon: 'Image',
    badge: 'Auditable Records',
    technicalSpecs: [
      'Cryptographically timestamped incident frames stored securely',
      'Visual bounding overlays denoting exact missing PPE items',
      'Exportable safety audit reports in standard PDF and CSV formats'
    ],
    visualMetric: {
      label: 'Audit Trail Retention',
      value: 'Full History'
    }
  },
  {
    id: 'feature-continuous',
    title: 'Continuous Safety Monitoring',
    shortDesc: '24/7/365 uninterrupted autonomous surveillance that never suffers from human fatigue, distraction, or blind spots.',
    detailedDesc: 'While human safety managers can only be in one zone at a time, Safety Guarantee simultaneously monitors all plant zones continuously across day, night, and weekend shifts.',
    icon: 'Clock',
    badge: '24/7 Automation',
    technicalSpecs: [
      'Continuous 30 FPS stream analysis across all designated industrial zones',
      'Fault-tolerant pipeline with automatic stream reconnect and watchdog health monitoring',
      'Zero blind spots across hazardous machinery, gantry paths, and storage bays'
    ],
    visualMetric: {
      label: 'Surveillance Uptime',
      value: '24/7/365'
    }
  },
  {
    id: 'feature-dashboard',
    title: 'Centralized Monitoring Dashboard',
    shortDesc: 'A unified single-pane-of-glass interface displaying live camera grids, zone compliance heatmaps, and trend analytics.',
    detailedDesc: 'Empowers safety directors with high-level plant compliance scores, zone risk rankings, incident heatmaps, and granular drill-downs for every monitored area.',
    icon: 'LayoutDashboard',
    badge: 'Enterprise Intelligence',
    technicalSpecs: [
      'Interactive multi-camera matrix with live status indicators',
      'Plant zone risk scoring and hourly compliance trend graphs',
      'Role-based access control for safety officers, plant managers, and auditors'
    ],
    visualMetric: {
      label: 'Unified Control',
      value: 'Single Pane'
    }
  }
]

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    step: 1,
    title: 'Camera Monitoring',
    tagline: 'Stream Ingestion & Preprocessing',
    description: 'Industrial IP cameras already installed throughout factory floors transmit live video streams via standard RTSP protocols to the Safety Guarantee edge processing unit.',
    icon: 'Cctv',
    details: [
      'Captures continuous 1080p video feeds from designated hazardous zones',
      'Applies hardware-accelerated video decoding (H.264 / H.265)',
      'Performs real-time frame extraction, lighting normalization, and noise reduction'
    ],
    dataFlow: 'Factory IP Cameras (RTSP) ──▶ Edge Ingestion Pipeline ──▶ Tensor Normalization'
  },
  {
    step: 2,
    title: 'AI Image Analysis',
    tagline: 'Deep Convolutional Feature Extraction',
    description: 'Each video frame is processed through optimized computer vision models. The neural network detects human workers and tracks their skeletal keypoints across consecutive frames.',
    icon: 'Cpu',
    details: [
      'Worker localization and person bounding box identification',
      'Temporal object tracking to maintain worker identity across occlusions',
      'Sub-region feature mapping for head, torso, hands, and feet'
    ],
    dataFlow: 'Frame Tensors ──▶ YOLO Object Localization ──▶ Anatomical Region Segmentation'
  },
  {
    step: 3,
    title: 'PPE Violation Detection',
    tagline: 'Multi-Class Compliance Classification',
    description: 'The system classifies each anatomical zone against mandated PPE requirements. If a required item (e.g., hardhat in crane zone) is missing, a violation event is immediately flagged.',
    icon: 'AlertTriangle',
    details: [
      'Verifies presence and fit of Hardhat, High-Vis Vest, Safety Eyewear, Gloves, and Boots',
      'Applies zone-specific safety rules (e.g., thermal shields required near furnace)',
      'Assigns statistical confidence scores and cross-verifies across multiple frames to eliminate false alerts'
    ],
    dataFlow: 'PPE Classifier ──▶ Zone Safety Rule Engine ──▶ Confidence Verification (>90%)'
  },
  {
    step: 4,
    title: 'Instant Safety Alerts',
    tagline: 'Automated Real-Time Dispatch',
    description: 'When a confirmed breach occurs, Safety Guarantee immediately dispatches high-priority alerts with timestamped snapshot evidence to the designated shift supervisor and logs the event.',
    icon: 'Send',
    details: [
      'Instant alert delivered to safety supervisor mobile and centralized operations dashboard',
      'Annotated visual evidence snapshot stored in auditable database',
      'Optional trigger for on-site warning beacon or audio intercom in hazardous zones'
    ],
    dataFlow: 'Event Dispatcher ──▶ Push Alert + Annotated Snapshot ──▶ Supervisor Intervention'
  }
]

export const INDUSTRIES_DATA: IndustryData[] = [
  {
    id: 'glass',
    name: 'Glass Manufacturing',
    subtitle: 'Extreme Thermal & Impact Hazard Environments',
    iconName: 'Flame',
    badgeColor: 'from-amber-500 to-orange-600',
    description: 'Glass plants combine extreme furnace temperatures (exceeding 1200°C), sharp cullet shards, and high-speed annealing lines. Missing protection can lead to severe burns or lacerations.',
    primaryHazards: [
      'Molten glass splash and radiant thermal heat',
      'Flying sharp shards and glass cullet during scoring & handling',
      'High noise levels from annealing blowers and cooling fans'
    ],
    mandatoryPPE: [
      { item: 'Heat-Resistant Hardhat & Face Shield', requirement: 'Mandatory near furnace bays', riskMitigated: 'Thermal radiation and cullet projectile impact' },
      { item: 'Kevlar-Reinforced Cut-Resistant Sleeves & Gloves', requirement: 'Mandatory on cutting & handling lines', riskMitigated: 'Severe glass lacerations and artery cuts' },
      { item: 'High-Visibility Heat Vest', requirement: 'Mandatory in forklift and crane transit zones', riskMitigated: 'Heavy machinery collisions' }
    ],
    aiBenefit: 'Safety Guarantee continuously verifies that operators within the thermal furnace zone have full face shields and heat-rated gear before opening furnace access doors.',
    simulationScenario: 'CAM-02 monitors the annealing lehr. An operator enters the cullet recycling pit without certified face protection — the system triggers an immediate supervisor alert.'
  },
  {
    id: 'food',
    name: 'Food Production',
    subtitle: 'Sanitation, Hygiene & Machinery Safety',
    iconName: 'Utensils',
    badgeColor: 'from-emerald-500 to-teal-600',
    description: 'Food processing facilities enforce strict dual mandates: preventing workplace machinery injuries while upholding stringent sanitary compliance to avoid food contamination.',
    primaryHazards: [
      'High-speed packaging, slicing, and mixing machinery',
      'Wet and greasy washdown floor slip hazards',
      'Biological contamination risks from missing hygiene attire'
    ],
    mandatoryPPE: [
      { item: 'Sanitary Hairnet, Beard Cover & Mask', requirement: 'Mandatory in all exposed food zones', riskMitigated: 'Batch contamination and regulatory violations' },
      { item: 'Cut-Resistant Chainmail Gloves', requirement: 'Mandatory during deboning and blade maintenance', riskMitigated: 'Severe blade cuts and amputations' },
      { item: 'Anti-Slip Steel-Toe Waterproof Boots', requirement: 'Mandatory in wet washdown bays', riskMitigated: 'Slip-and-fall injuries and crush accidents' }
    ],
    aiBenefit: 'Simultaneously enforces worker safety and sanitary hygiene rules, ensuring zero contamination breaches and protecting workers around high-speed slicing conveyors.',
    simulationScenario: 'Monitors the primary processing conveyor. If an employee enters the food handling line without a mandated beard cover or sanitized gloves, an alert is logged.'
  },
  {
    id: 'beverage',
    name: 'Beverage Manufacturing',
    subtitle: 'High-Speed Bottling Lines & Heavy Logistics',
    iconName: 'Beer',
    badgeColor: 'from-blue-500 to-cyan-600',
    description: 'Beverage bottling plants operate at massive throughput with rapid conveyor lines, pressurized bottle washing, wet floor conditions, and active forklift circulation.',
    primaryHazards: [
      'Pressurized glass bottle bursting risks on filling lines',
      'Continuous noise exceeding 85 dB in canning and bottling halls',
      'High-traffic forklift and automated guided vehicle (AGV) intersections'
    ],
    mandatoryPPE: [
      { item: 'ANSI-Certified Safety Eyewear', requirement: 'Mandatory along high-pressure filling lines', riskMitigated: 'Exploding glass bottle shards and chemical splashes' },
      { item: 'Class 2 High-Visibility Reflective Vest', requirement: 'Mandatory in logistics and loading bays', riskMitigated: 'Forklift and automated palletizer impact' },
      { item: 'Certified Hearing Protection (Earplugs/Earmuffs)', requirement: 'Mandatory throughout bottling halls', riskMitigated: 'Noise-induced occupational hearing loss' }
    ],
    aiBenefit: 'Provides complete visibility over forklift crossing zones, alerting whenever an operator crosses into an active transport lane without a high-visibility vest.',
    simulationScenario: 'CAM-03 scans the palletizing hub. A logistics assistant steps out of the pedestrian walkway without a reflective vest — the system issues an alert.'
  },
  {
    id: 'pharma',
    name: 'Pharmaceutical Manufacturing',
    subtitle: 'Aseptic Cleanrooms & Chemical Formulation',
    iconName: 'Pill',
    badgeColor: 'from-purple-500 to-indigo-600',
    description: 'Pharmaceutical cleanrooms require strict particulate isolation and protection against potent active pharmaceutical ingredients (APIs), biological vectors, and chemical reagents.',
    primaryHazards: [
      'Exposure to potent active powders, solvents, and sterilizing agents',
      'Particulate contamination compromising million-dollar sterile medicine batches',
      'Chemical splash risks during compounding and formulation'
    ],
    mandatoryPPE: [
      { item: 'Certified N95/P100 Respirator or PAPR Hood', requirement: 'Mandatory in powder compounding suites', riskMitigated: 'Inhalation of potent pharmaceutical powders' },
      { item: 'Full Tyvek Cleanroom Bunny Suit & Boot Covers', requirement: 'Mandatory in ISO Class 5/7 cleanrooms', riskMitigated: 'Particulate shedding and cross-contamination' },
      { item: 'Double Nitrile Sterile Gloves & Goggles', requirement: 'Mandatory during active substance transfer', riskMitigated: 'Dermal absorption and ocular exposure' }
    ],
    aiBenefit: 'Verifies cleanroom gowning compliance at airlock transition points before workers enter sterile processing suites, safeguarding pharmaceutical product purity.',
    simulationScenario: 'CAM-04 checks the aseptic transfer airlock. A technician approaches the compounding chamber with loose respirator straps — the system triggers an airlock warning.'
  },
  {
    id: 'heavy',
    name: 'Other Industrial Facilities',
    subtitle: 'Fabrication, Warehousing & Automotive Plants',
    iconName: 'Factory',
    badgeColor: 'from-slate-500 to-zinc-700',
    description: 'Applicable across heavy metal fabrication, automotive stamping, distribution warehouses, and chemical storage facilities where heavy machinery and overhead hazards prevail.',
    primaryHazards: [
      'Overhead bridge cranes carrying multi-ton payloads',
      'Falling tools and structural steel beams',
      'Forklifts, order pickers, and automated gantry tracks'
    ],
    mandatoryPPE: [
      { item: 'Industrial Hardhat (Type I/II, Class E/G)', requirement: 'Mandatory under crane and racking zones', riskMitigated: 'Falling debris and crane payload impacts' },
      { item: 'Steel-Toe Metatarsal Guard Work Boots', requirement: 'Mandatory across all active plant floors', riskMitigated: 'Heavy drop crushes and puncture wounds' },
      { item: 'High-Visibility Outerwear', requirement: 'Mandatory plant-wide', riskMitigated: 'Heavy equipment blind spots' }
    ],
    aiBenefit: 'Scales flexibly to any industrial facility using standardized IP security cameras to build a proactive, verifiable culture of safety compliance.',
    simulationScenario: 'A warehouse distribution center monitors forklift aisles. Workers crossing pedestrian intersections without high-vis gear are instantly identified.'
  }
]

export const FAQS = [
  {
    question: 'How does Safety Guarantee connect to existing factory camera systems?',
    answer: 'Safety Guarantee is designed to ingest standard RTSP (Real-Time Streaming Protocol) and ONVIF video feeds provided by virtually all modern industrial IP security cameras. No proprietary camera hardware is required, allowing facilities to utilize their existing surveillance infrastructure.'
  },
  {
    question: 'Does the system require an internet connection to run detection?',
    answer: 'The proposed architecture is designed for edge computing deployment. AI models can execute locally on on-premise edge appliances (such as NVIDIA Jetson or edge industrial PCs), ensuring zero footage leaves the factory premises, preserving plant confidentiality and guaranteeing low latency.'
  },
  {
    question: 'How does the system protect worker privacy and avoid constant surveillance concerns?',
    answer: 'Safety Guarantee is engineered as an objective safety compliance tool, not a worker micromanagement system. The AI model only classifies PPE presence/absence and zone compliance. Facilities can configure the system to anonymize facial features with real-time face blurring, retaining only the safety equipment telemetry.'
  },
  {
    question: 'What happens when camera lighting is poor or workers are partially occluded?',
    answer: 'The system incorporates image pre-processing algorithms (contrast adjustment, histogram equalization) and temporal tracking across video frames. If a worker is briefly occluded by machinery, temporal continuity prevents triggering false positive alarms until multiple consecutive frames confirm an actual violation.'
  },
  {
    question: 'What is the current development stage of this project?',
    answer: 'Safety Guarantee is an academic capstone and innovation initiative developed for our university engineering program. This website presents our proposed system architecture, target performance benchmarks, interactive simulation dashboard, and technical specifications for faculty review, prospective research partners, and industrial safety advisors.'
  }
]
