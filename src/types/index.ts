export interface WorkerDetection {
  id: string
  name: string
  zone: string
  role: string
  x: number // percentage
  y: number // percentage
  width: number
  height: number
  complianceStatus: 'compliant' | 'warning' | 'violation'
  items: {
    name: 'Hardhat' | 'High-Vis Vest' | 'Safety Glasses' | 'Gloves' | 'Steel-Toe Boots' | 'Respirator'
    status: 'present' | 'missing'
    confidence: number
  }[]
}

export interface CameraFeed {
  id: string
  name: string
  location: string
  zoneCode: string
  fps: number
  resolution: string
  bitrate: string
  status: 'active' | 'warning' | 'offline'
  complianceRate: number
  totalWorkers: number
  violationCount: number
  description: string
  streamType: string
}

export interface IncidentAlert {
  id: string
  timestamp: string
  cameraName: string
  cameraId: string
  zone: string
  workerId: string
  workerName: string
  violationType: string
  severity: 'high' | 'critical' | 'moderate'
  snapshotUrl?: string
  status: 'dispatched' | 'acknowledged' | 'resolved'
  confidence: number
  recommendedAction: string
}

export interface IndustryData {
  id: string
  name: string
  subtitle: string
  iconName: string
  badgeColor: string
  description: string
  primaryHazards: string[]
  mandatoryPPE: {
    item: string
    requirement: string
    riskMitigated: string
  }[]
  aiBenefit: string
  simulationScenario: string
}

export interface KeyFeature {
  id: string
  title: string
  shortDesc: string
  detailedDesc: string
  icon: string
  badge: string
  technicalSpecs: string[]
  visualMetric: {
    label: string
    value: string
  }
}

export interface HowItWorksStep {
  step: number
  title: string
  tagline: string
  description: string
  icon: string
  details: string[]
  dataFlow: string
}

export interface ContactFormData {
  fullName: string
  email: string
  organization: string
  role: string
  interest: 'academic' | 'pilot' | 'feedback' | 'investor' | 'general'
  message: string
}
