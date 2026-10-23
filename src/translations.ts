export type Language = 'en' | 'ar'

export interface TranslationContent {
  nav: {
    logoName: string
    logoSub: string
    home: string
    about: string
    challenge: string
    solution: string
    howItWorks: string
    features: string
    industries: string
    academic: string
    contact: string
    langToggle: string
  }
  hero: {
    badge: string
    titlePart1: string
    titlePart2: string
    subtitle: string
    exploreBtn: string
    howItWorksBtn: string
    stat1Label: string
    stat1Desc: string
    stat2Label: string
    stat2Desc: string
    stat3Label: string
    stat3Desc: string
  }
  about: {
    badge: string
    title: string
    subtitle: string
    missionTitle: string
    missionText: string
    visionTitle: string
    visionText: string
    collegeBadgeTitle: string
    collegeBadgeText: string
    highlights: {
      title: string
      desc: string
    }[]
  }
  challenge: {
    badge: string
    title: string
    subtitle: string
    cards: {
      title: string
      desc: string
      impact: string
    }[]
  }
  solution: {
    badge: string
    title: string
    subtitle: string
    cards: {
      title: string
      desc: string
      features: string[]
    }[]
  }
  howItWorks: {
    badge: string
    title: string
    subtitle: string
    steps: {
      number: string
      title: string
      desc: string
    }[]
  }
  features: {
    badge: string
    title: string
    subtitle: string
    list: {
      title: string
      desc: string
      tag: string
    }[]
  }
  industries: {
    badge: string
    title: string
    subtitle: string
    sectors: {
      name: string
      hazards: string
      ppe: string
    }[]
  }
  academic: {
    badge: string
    title: string
    subtitle: string
    explanationCards: {
      question: string
      answer: string
      tag: string
    }[]
    details: {
      label: string
      value: string
    }[]
    summaryText: string
  }
  contact: {
    badge: string
    title: string
    subtitle: string
    nameLabel: string
    namePlaceholder: string
    emailLabel: string
    emailPlaceholder: string
    subjectLabel: string
    subjectPlaceholder: string
    messageLabel: string
    messagePlaceholder: string
    submitBtn: string
    submittingBtn: string
    successTitle: string
    successMsg: string
    academicCardTitle: string
    academicCardDesc: string
  }
  footer: {
    desc: string
    quickLinks: string
    contactInfo: string
    disclaimer: string
    copyright: string
  }
}

export const translations: Record<Language, TranslationContent> = {
  en: {
    nav: {
      logoName: 'Safety Guarantee',
      logoSub: 'Industrial Safety System',
      home: 'Home',
      about: 'About Project',
      challenge: 'The Challenge',
      solution: 'Our Solution',
      howItWorks: 'How It Works',
      features: 'Features',
      industries: 'Industries',
      academic: 'Project Info',
      contact: 'Contact Us',
      langToggle: 'العربية'
    },
    hero: {
      badge: 'College Graduation Project • AI Computer Vision Initiative',
      titlePart1: 'Safety',
      titlePart2: 'Guarantee',
      subtitle: 'Transforming industrial workplace safety through AI-powered monitoring, intelligent PPE detection, and real-time alerts.',
      exploreBtn: 'Explore Our Solution',
      howItWorksBtn: 'See How It Works',
      stat1Label: '24/7 Monitoring',
      stat1Desc: 'Autonomous continuous coverage without human fatigue',
      stat2Label: '< 1.5s Response',
      stat2Desc: 'Instant automated alerts to safety supervisors',
      stat3Label: 'IP Camera Ready',
      stat3Desc: 'Integrates seamlessly with existing RTSP factory feeds'
    },
    about: {
      badge: 'Project Overview',
      title: 'About Safety Guarantee',
      subtitle: 'An artificial intelligence and computer vision research project engineered to modernize industrial safety monitoring.',
      missionTitle: 'Our Mission',
      missionText: 'To reduce preventable factory injuries by replacing periodic, intermittent safety audits with intelligent, continuous computer vision surveillance that safeguards workers across all plant operations.',
      visionTitle: 'Our Vision',
      visionText: 'To create autonomous, self-monitoring industrial environments where missing protective gear is recognized and corrected before dangerous accidents can occur.',
      collegeBadgeTitle: 'College Graduation Project',
      collegeBadgeText: 'Developed as a comprehensive engineering graduation project by students specializing in Artificial Intelligence and Computer Vision.',
      highlights: [
        {
          title: 'Autonomous Local AI',
          desc: 'Runs directly on local factory servers, ensuring zero confidential footage leaks outside the plant.'
        },
        {
          title: 'Instant Hazard Notification',
          desc: 'Dispatches high-priority push notifications and on-site alerts immediately upon detecting missing gear.'
        },
        {
          title: 'Verifiable Evidence Trail',
          desc: 'Generates timestamped visual incident snapshots for objective safety compliance reviews.'
        },
        {
          title: 'Supervisor Support',
          desc: 'Empowers safety teams with 24/7 surveillance support across multiple bays simultaneously.'
        }
      ]
    },
    challenge: {
      badge: 'The Problem',
      title: 'Challenges in Traditional Workplace Safety',
      subtitle: 'Conventional manual inspections leave dangerous blind spots in fast-paced industrial manufacturing.',
      cards: [
        {
          title: 'Difficult Continuous Monitoring',
          desc: 'Safety officers cannot physically monitor dozens of factory bays simultaneously. Manual walkthroughs happen hours apart, leaving hours of unmonitored hazards.',
          impact: 'Blind spots throughout daily operations'
        },
        {
          title: 'High Risk from Missing Equipment',
          desc: 'Workers removing hardhats, reflective vests, safety goggles, or gloves face severe risks from falling parts, flying glass, and moving machinery.',
          impact: 'Severe, preventable industrial injuries'
        },
        {
          title: 'Delayed Threat Identification',
          desc: 'Traditional monitoring relies on post-incident reporting or end-of-shift checklists. Dangerous safety breaches are only addressed after an injury has occurred.',
          impact: 'Slow, reactive safety management'
        }
      ]
    },
    solution: {
      badge: 'Our Solution',
      title: 'Intelligent AI-Powered Protection',
      subtitle: 'How Safety Guarantee uses computer vision to detect missing PPE and notify responsible personnel instantly.',
      cards: [
        {
          title: 'AI-Powered Detection System',
          desc: 'A computer vision pipeline that automatically recognizes human workers and verifies compliance with safety equipment in real time.',
          features: [
            'Simultaneous detection of Hardhats, Vests, Gloves & Goggles',
            'Robust recognition under complex factory lighting',
            'Zero manual tagging required'
          ]
        },
        {
          title: 'Automated Real-Time Alerts',
          desc: 'The moment a safety breach occurs, the system triggers immediate multi-channel notifications to assigned shift supervisors.',
          features: [
            'Instant notifications delivered in under 1.5 seconds',
            'Worker location and zone code included',
            'Optional on-site audio-visual beacon triggers'
          ]
        },
        {
          title: 'Seamless CCTV Camera Integration',
          desc: 'Designed to connect directly to standard industrial IP surveillance cameras without replacing existing infrastructure.',
          features: [
            'Compatible with standard RTSP and ONVIF streams',
            'Works with existing security camera setups',
            'Cost-effective implementation for factories'
          ]
        },
        {
          title: 'Centralized Safety Dashboard',
          desc: 'A unified management interface displaying real-time compliance metrics, zone risk rankings, and incident logs.',
          features: [
            'Live safety compliance rate indicator',
            'Timestamped incident audit logs',
            'Objective data for safety policy improvement'
          ]
        }
      ]
    },
    howItWorks: {
      badge: 'Simple 4-Step Process',
      title: 'How Safety Guarantee Works',
      subtitle: 'An automated workflow designed to protect workers from camera feed to immediate intervention.',
      steps: [
        {
          number: '01',
          title: 'Camera Monitoring',
          desc: 'Factory cameras capture video feeds from hazardous production zones and transmit them securely to the edge processing system.'
        },
        {
          number: '02',
          title: 'AI Image Analysis',
          desc: 'Optimized computer vision neural networks analyze incoming frames, locating workers and segmenting anatomical regions.'
        },
        {
          number: '03',
          title: 'PPE Violation Detection',
          desc: 'The system verifies mandatory protective gear (helmets, vests, goggles, gloves) against zone-specific safety rules.'
        },
        {
          number: '04',
          title: 'Instant Safety Alerts',
          desc: 'When an unsafe condition is detected, an automated alert with snapshot evidence is dispatched immediately to the safety officer.'
        }
      ]
    },
    features: {
      badge: 'Core Capabilities',
      title: 'Key Features of Safety Guarantee',
      subtitle: 'Engineered specifically for the demands of industrial manufacturing and safety compliance.',
      list: [
        {
          title: 'AI-Powered PPE Detection',
          desc: 'Identifies hardhats, high-visibility vests, eye shields, gloves, and boots simultaneously.',
          tag: 'Computer Vision'
        },
        {
          title: 'Automated Safety Alerts',
          desc: 'Dispatches instantaneous notifications with zone details and timestamped snapshots.',
          tag: 'Real-Time Dispatch'
        },
        {
          title: 'Camera System Integration',
          desc: 'Ingests standard RTSP and ONVIF video streams from existing industrial CCTV cameras.',
          tag: 'Universal Hardware'
        },
        {
          title: 'Image-Based Incident Evidence',
          desc: 'Automatically records timestamped snapshots with visual bounding boxes for objective review.',
          tag: 'Audit Records'
        },
        {
          title: 'Continuous Safety Monitoring',
          desc: 'Maintains 24/7 autonomous monitoring across all shifts without distraction or fatigue.',
          tag: 'Autonomous Uptime'
        },
        {
          title: 'Centralized Monitoring Dashboard',
          desc: 'Provides plant managers with a single interface to review safety trends, zones, and logs.',
          tag: 'Management HUD'
        }
      ]
    },
    industries: {
      badge: 'Target Applications',
      title: 'Adaptable to Diverse Industries',
      subtitle: 'Designed to enforce specialized safety requirements across high-risk manufacturing sectors.',
      sectors: [
        {
          name: 'Glass Manufacturing',
          hazards: '1200°C furnace heat, sharp flying cullet shards, high-speed annealing lehrs.',
          ppe: 'Mandatory: Heat-resistant hardhats, face visors, Kevlar cut-resistant sleeves.'
        },
        {
          name: 'Food Production',
          hazards: 'High-speed packaging conveyors, wet washdown slip hazards, biological hygiene risks.',
          ppe: 'Mandatory: Sanitary hairnets, beard covers, chainmail gloves, anti-slip boots.'
        },
        {
          name: 'Beverage Manufacturing',
          hazards: 'Pressurized bottling lines, wet floors, high-traffic forklift transit lanes.',
          ppe: 'Mandatory: ANSI-rated safety goggles, Class 2 reflective vests, hearing protection.'
        },
        {
          name: 'Pharmaceutical Facilities',
          hazards: 'Active pharmaceutical powders, cleanroom contamination, chemical handling.',
          ppe: 'Mandatory: Full Tyvek cleanroom gowns, certified respirators, double sterile gloves.'
        },
        {
          name: 'Heavy Facilities & Warehouses',
          hazards: 'Overhead cranes, heavy structural fabrication, forklift pedestrian crosswalks.',
          ppe: 'Mandatory: Industrial hardhats, steel-toe boots, high-visibility reflective outerwear.'
        }
      ]
    },
    academic: {
      badge: 'Project Overview & Details',
      title: 'Project Information Made Simple',
      subtitle: 'Everything you need to know about Safety Guarantee explained in clear, everyday terms.',
      explanationCards: [
        {
          question: 'What is Safety Guarantee?',
          answer: 'An AI-powered system that uses factory security cameras to automatically check whether workers are wearing required safety gear (helmets, reflective vests, goggles, and gloves).',
          tag: 'Core Concept'
        },
        {
          question: 'How does it protect workers?',
          answer: 'If a worker removes or forgets safety gear in a dangerous zone, the system immediately spots it and sends an alert to the safety supervisor in under 1.5 seconds to correct the risk.',
          tag: 'Instant Protection'
        },
        {
          question: 'Why is it needed in factories?',
          answer: 'Human safety inspectors cannot watch every factory bay 24 hours a day. The AI watches continuously with zero fatigue, eliminating blind spots and preventing serious injuries.',
          tag: 'Practical Value'
        }
      ],
      details: [
        { label: 'Project Name', value: 'Safety Guarantee – AI-Powered Workplace Safety' },
        { label: 'Project Type', value: 'Artificial Intelligence Project' },
        { label: 'Core Technology', value: 'Computer Vision & PPE Detection' },
        { label: 'Main Objective', value: 'Enhancing Industrial Safety & Protecting Workers' }
      ],
summaryText: 'Safety Guarantee is a graduation project that uses artificial intelligence and computer vision to detect PPE violations in factories, helping improve workplace safety and protect employees.'    },
    contact: {
      badge: 'Get in Touch',
      title: 'Contact the Project Team',
      subtitle: 'We welcome questions, feedback, and academic discussions about our proposed AI safety architecture.',
      nameLabel: 'Your Full Name',
      namePlaceholder: 'e.g. John Doe',
      emailLabel: 'Email Address',
      emailPlaceholder: 'name@example.com',
      subjectLabel: 'Subject / Topic',
      subjectPlaceholder: 'Academic inquiry or project question',
      messageLabel: 'Message',
      messagePlaceholder: 'Write your message or inquiry here...',
      submitBtn: 'Send Message',
      submittingBtn: 'Sending...',
      successTitle: 'Message Received!',
      successMsg: 'Thank you for your interest in the Safety Guarantee project. The student team will review your message shortly.',
      academicCardTitle: 'Get in Touch',
      academicCardDesc: 'Safety Guarantee Team'},
    footer: {
      desc: 'We welcome your questions, suggestions, and feedback about our AI-powered workplace safety solution.',
      quickLinks: 'Quick Links',
      contactInfo: 'Project Information',
      disclaimer: 'Open for Inquiries, Feedback & Collaboration',
      copyright: 'Safety Guarantee. All rights reserved.'
    }
  },
  ar: {
    nav: {
      logoName: 'Safety Guarantee',
      logoSub: 'نظام السلامة الصناعية',
      home: 'الرئيسية',
      about: 'عن المشروع',
      challenge: 'التحديات',
      solution: 'حلولنا',
      howItWorks: 'كيف يعمل',
      features: 'المميزات',
      industries: 'القطاعات',
      academic: 'معلومات المشروع',
      contact: 'تواصل معنا',
      langToggle: 'English'
    },
    hero: {
      badge: 'الرؤية الحاسوبية بالذكاء الاصطناعي',
      titlePart1: 'Safety',
      titlePart2: 'Guarantee',
      subtitle: 'نظام ذكي لمراقبة السلامة الصناعية وتحليل كاميرات المصانع بالرؤية الحاسوبية للتحقق من ارتداء معدات الوقاية الشخصية وإرسال تنبيهات فورية.',
      exploreBtn: 'استكشف حلولنا الذكية',
      howItWorksBtn: 'شاهد كيف يعمل النظام',
      stat1Label: 'مراقبة مستمرة 24/7',
      stat1Desc: 'تغطية شاملة ومستمرة دون إرهاق بشري',
      stat2Label: 'استجابة سريعة < 1.5ث',
      stat2Desc: 'إرسال تنبيهات فورية وتلقائية لمشرفي السلامة',
      stat3Label: 'جاهز لكاميرات المراقبة',
      stat3Desc: 'يتكامل مباشرة مع كاميرات المصانع الحالية عبر RTSP'
    },
    about: {
      badge: 'نبذة عن المشروع',
      title: 'عن مشروع «ضمان السلامة» (Safety Guarantee)',
      subtitle: 'مشروع بحثي وتقني يعتمد على الذكاء الاصطناعي والرؤية الحاسوبية لتحديث منظومة السلامة والصحة المهنية في المصانع.',
      missionTitle: 'رسالة المشروع',
      missionText: 'الحد من الحوادث الصناعية والإصابات الجسيمة من خلال استبدال الجولات التفتيشية اليدوية المتقطعة بنظام مراقبة آلي وذكي يعمل على مدار الساعة لضمان التزام جميع العمال بارتداء أدوات الوقاية.',
      visionTitle: 'رؤية المشروع',
      visionText: 'خلق بيئات صناعية ذكية وذاتية المراقبة ترتكز على حماية العنصر البشري، بحيث يتم اكتشاف وتصحيح أي نقص في أدوات الحماية الشخصية قبل وقوع الحوادث.',
      collegeBadgeTitle: 'مشروع تخرج جامعي متميز',
      collegeBadgeText: 'تم تطوير هذا النظام كمشروع تخرج متكامل لطلاب الهندسة المتخصصين في الذكاء الاصطناعي وتطبيقات الرؤية الحاسوبية.',
      highlights: [
        {
          title: 'معالجة محلية بالذكاء الاصطناعي',
          desc: 'يعمل النظام داخل الخوادم المحلية للمصنع، مما يضمن الحفاظ التام على سرية وخصوصية الفيديو.'
        },
        {
          title: 'تنبيه فوري للمخاطر',
          desc: 'إرسال إشعارات فورية وتنبيهات صوتية بمجرد رصد عامل بدون معدات الوقاية المطلوبة.'
        },
        {
          title: 'سجل أدلة موثق بالصور',
          desc: 'تسجيل لقطات موثقة بالوقت والتاريخ لتحديد نوع المخالفة والموقع بدقة وبشكل موضوعي.'
        },
        {
          title: 'دعم فرق ومسؤولي السلامة',
          desc: 'تمكين مشرفي السلامة من متابعة عدة مناطق إنتاجية في وقت واحد وبكفاءة غير مسبوقة.'
        }
      ]
    },
    challenge: {
      badge: 'التحديات والمشكلة',
      title: 'تحديات السلامة المهنية التقليدية بالمصانع',
      subtitle: 'طرق التفتيش اليدوية التقليدية تترك ثغرات خطيرة تزيد من احتمالية وقوع الإصابات المؤسفة.',
      cards: [
        {
          title: 'صعوبة المراقبة المستمرة',
          desc: 'لا يستطيع مسؤولو السلامة مراقبة عشرات العنابر وخطوط الإنتاج في آن واحد؛ فالجولات التفتيشية تتم على فترات متباعدة مما يترك أوقاتاً طويلة دون رقابة.',
          impact: 'وجود مناطق وثغرات غير مراقبة باستمرار'
        },
        {
          title: 'مخاطر غياب معدات الحماية (PPE)',
          desc: 'نزع الخوذة أو السترة العاكسة أو النظارات الواقية بالقرب من الرافعات والآلات الدوارة يؤدي إلى إصابات خطيرة وحوادث بالغة كان يمكن تجنبها.',
          impact: 'إصابات جسيمة يمكن تفاديها'
        },
        {
          title: 'التأخر في رصد المخالفات',
          desc: 'تعتمد الطرق التقليدية على تسجيل الحادثة بعد وقوعها، بدلاً من التدخل الاستباقي الفوري في اللحظة التي يُنزع فيها العتاد الواقي.',
          impact: 'إدارة استجابة متأخرة وبطيئة'
        }
      ]
    },
    solution: {
      badge: 'حلولنا المبتكرة',
      title: 'حلول ذكية لحماية المصانع والعاملين',
      subtitle: 'كيف يستخدم نظام «ضمان السلامة» الرؤية الحاسوبية لاكتشاف غياب معدات الوقاية وتنبيه المسؤولين في أجزاء من الثانية.',
      cards: [
        {
          title: 'نظام الكشف الذكي بالذكاء الاصطناعي',
          desc: 'نموذج رؤية حاسوبية مدرب على التعرف التلقائي على العمال والتحقق من التزامهم بأدوات السلامة في الوقت الحقيقي.',
          features: [
            'التعرف المتزامن على الخوذة، السترة، القفازات والنظارات',
            'دقة عالية حتى في ظروف الإضاءة الصناعية الصعبة',
            'يعمل تلقائياً بالكامل دون تدخل يدوي'
          ]
        },
        {
          title: 'تنبيهات فورية وتلقائية',
          desc: 'بمجرد رصد أي مخالفة لشروط السلامة، يرسل النظام إشعاراً فورياً ومباشراً لمشرف الوردية المسؤول عن المنطقة.',
          features: [
            'إرسال الإشعار في أقل من 1.5 ثانية من حدوث المخالفة',
            'تضمين موقع العامل ورقم العنبر بدقة',
            'إمكانية تشغيل صفارة إنذار ضوئية بموقع الخطر'
          ]
        },
        {
          title: 'تكامل مباشر مع كاميرات المصنع',
          desc: 'صُمم النظام ليعمل مباشرة مع شبكات كاميرات المراقبة الحالية (IP/CCTV) دون الحاجة لشراء كاميرات جديدة.',
          features: [
            'متوافق مع بروتوكولات البث القياسية RTSP و ONVIF',
            'استغلال البنية التحتية القائمة دون تكاليف باهظة',
            'حل اقتصادي وعملي لمختلف المصانع'
          ]
        },
        {
          title: 'لوحة تحكم مركزية للسلامة',
          desc: 'واجهة موحدة تعرض مؤشرات الالتزام بالسلامة، وتقييم المخاطر لكل عنبر، وسجل الحوادث والمخالفات.',
          features: [
            'مؤشر فوري لنسبة التزام المصنع بمعدات الوقاية',
            'سجل رقمي موثق ومؤرشف لكافة المخالفات',
            'تقارير تحليلية لدعم قرارات مسؤولي السلامة'
          ]
        }
      ]
    },
    howItWorks: {
      badge: '4 خطوات بسيطة',
      title: 'كيف يعمل نظام ضمان السلامة؟',
      subtitle: 'دورة عمل آلية وسلسة تضمن الانتقال من رصد الكاميرا إلى التدخل المباشر.',
      steps: [
        {
          number: '٠١',
          title: 'مراقبة الكاميرات',
          desc: 'تلتقط كاميرات المصنع الحالية بث الفيديو المباشر من مناطق العمل الحيوية وتنقلها لوحدة المعالجة المحلية.'
        },
        {
          number: '٠٢',
          title: 'تحليل الصور بالذكاء الاصطناعي',
          desc: 'تقوم الشبكات العصبية للرؤية الحاسوبية بتحليل الإطارات وتحديد أماكن العمال بدقة في كل ثانية.'
        },
        {
          number: '٠٣',
          title: 'رصد مخالفات معدات الوقاية',
          desc: 'يقوم النظام بمطابقة ما يرتديه العامل مع متطلبات السلامة المحددة لكل منطقة (الخوذة، السترة، القفازات، النظارات).'
        },
        {
          number: '٠٤',
          title: 'إرسال التنبيهات الفورية',
          desc: 'عند اكتشاف أي مخالفة، يُرسل تنبيه فوري ومرفق بصورة الدليل إلى هاتف مشرف السلامة وشاشة العمليات.'
        }
      ]
    },
    features: {
      badge: 'القدرات الأساسية',
      title: 'المميزات الرئيسية لنظام ضمان السلامة',
      subtitle: 'قدرات صُممت خصيصاً لتلبية أعلى معايير السلامة المهنية ومواكبة متطلبات الثورة الصناعية الرابعة.',
      list: [
        {
          title: 'كشف ذكي لمعدات الوقاية',
          desc: 'التعرف الآلي والمتزامن على الخوذ، السترات العاكسة، النظارات الواقية، والقفازات.',
          tag: 'رؤية حاسوبية'
        },
        {
          title: 'تنبيهات أمان فورية',
          desc: 'إرسال إشعارات فورية مع تفاصيل الموقع وصورة الدليل لمشرفي السلامة خلال ثوانٍ.',
          tag: 'استجابة لحظية'
        },
        {
          title: 'تكامل مع كاميرات المصنع',
          desc: 'الربط المباشر مع شبكات كاميرات المراقبة الحالية عبر بروتوكولات RTSP القياسية.',
          tag: 'توافق كامل'
        },
        {
          title: 'أدلة مصورة وموثقة',
          desc: 'حفظ لقطات مصورة موثقة بالتاريخ والوقت مع مربعات التحديد للمراجعة الدقيقة.',
          tag: 'سجل موثق'
        },
        {
          title: 'مراقبة مستمرة 24/7',
          desc: 'عمل مستمر على مدار كافة الورديات دون توقف أو تشتت أو إجهاد بشري.',
          tag: 'جاهزية دائمة'
        },
        {
          title: 'لوحة تحكم مركزية',
          desc: 'شاشة متابعة مركزية توفر إحصائيات التزام المصنع ومعدل الأمان لكل قسم.',
          tag: 'إدارة شاملة'
        }
      ]
    },
    industries: {
      badge: 'القطاعات المستهدفة',
      title: 'حلول ملائمة لمختلف القطاعات الصناعية',
      subtitle: 'إمكانية تخصيص قواعد الكشف الذكي وفقاً للمخاطر المحددة لكل قطاع صناعي.',
      sectors: [
        {
          name: 'صناعة الزجاج',
          hazards: 'حرارة الأفران العالية (1200 درجة)، الشظايا المتطايرة الحادة، خطوط التبريد السريعة.',
          ppe: 'إلزامي: خوذ مقاومة للحرارة، أقنعة حماية الوجه، أكمام كيفلار المقاومة للقطع.'
        },
        {
          name: 'إنتاج وصناعة الأغذية',
          hazards: 'سيور التعبئة السريعة، أرضيات الغسيل الرطبة ومخاطر الانزلاق، شروط النظافة والتعقيم.',
          ppe: 'إلزامي: أغطية الشعر واللحية، قفازات الفولاذ المقاوم للصدأ، أحذية مانعة للانزلاق.'
        },
        {
          name: 'صناعة وتعبئة المشروبات',
          hazards: 'خطوط التعبئة المضغوطة، انكسار العبوات، حركة الرافعات الشوكية في مسارات العمال.',
          ppe: 'إلزامي: نظارات واقية متوافقة مع ANSI، سترات فسفورية عاكسة، سدادات حماية السمع.'
        },
        {
          name: 'المنشآت والمصانع الدوائية',
          hazards: 'المساحيق الدوائية الفعالة، متطلبات الغرف المعقمة (Cleanrooms)، المواد الكيميائية.',
          ppe: 'إلزامي: بدلات العزل المعقمة، كمامات التنفس المعتمدة، قفازات النتريل المعقمة.'
        },
        {
          name: 'المصانع الثقيلة والمستودعات',
          hazards: 'الرافعات الجسرية، حركة المعدات الثقيلة، سقوط الأجسام في مناطق التخزين.',
          ppe: 'إلزامي: خوذ صناعية متينة، أحذية السلامة ذات المقدمة الفولاذية، سترات عاكسة.'
        }
      ]
    },
    academic: {
      badge: 'نبذة ومعلومات المشروع',
      title: 'معلومات المشروع بأسلوب بسيط وواضح',
      subtitle: 'كل ما تريد معرفته عن نظام «ضمان السلامة» مشروحاً بكلمات واضحة وسهلة الفهم.',
      explanationCards: [
        {
          question: 'ما هو نظام ضمان السلامة؟',
          answer: 'نظام ذكاء اصطناعي يتصل بكاميرات المراقبة الحالية داخل المصنع للتحقق تلقائياً من التزام العمال بارتداء أدوات الحماية والسلامة (مثل الخوذة، السترة، النظارات، والقفازات).',
          tag: 'الفكرة الأساسية'
        },
        {
          question: 'كيف يحمي العاملين ويمنع الحوادث؟',
          answer: 'بمجرد أن ينسى أو ينزع أي عامل معدات الوقاية في منطقة خطرة، يكتشف النظام ذلك على الفور ويرسل تنبيهاً لمشرف السلامة خلال أقل من 1.5 ثانية للتدخل السريع.',
          tag: 'حماية لحظية'
        },
        {
          question: 'لماذا يحتاج المصنع هذا النظام؟',
          answer: 'مشرفو السلامة لا يستطيعون التواجد في كل عنبر طول اليوم، بينما يراقب الذكاء الاصطناعي على مدار الساعة (24/7) دون إرهاق أو غفلة لمنع الإصابات.',
          tag: 'القيمة العملية'
        }
      ],
      details: [
        { label: 'اسم المشروع', value: 'نظام ضمان السلامة (Safety Guarantee)' },
        { label: 'نوع المشروع', value: 'مشروع ذكاء اصطناعي' },
        { label: 'التقنيات المستخدمة', value: 'الذكاء الاصطناعي والرؤية الحاسوبية' },
        { label: 'الهدف الرئيسي', value: 'تعزيز السلامة المهنية وحماية العاملين داخل المصانع' }
      ],
summaryText: 'يهدف مشروع ضمان السلامة (Safety Guarantee) إلى توظيف الذكاء الاصطناعي والرؤية الحاسوبية لاكتشاف مخالفات معدات الوقاية الشخصية داخل المصانع، مما يساعد على تعزيز السلامة المهنية وحماية العاملين.'    },
    contact: {
      badge: 'تواصل معنا',
      title: 'تواصل مع فريق المشروع',
      subtitle: 'نسعد باستقبال استفساراتكم وملاحظاتكم الأكاديمية والتقنية حول نظام ضمان السلامة.',
      nameLabel: 'الاسم الكامل',
      namePlaceholder: 'مثال: م. أحمد محمد',
      emailLabel: 'البريد الإلكتروني',
      emailPlaceholder: 'name@example.com',
      subjectLabel: 'موضوع الرسالة',
      subjectPlaceholder: 'استفسار أكاديمي أو تقييم للمشروع',
      messageLabel: 'الرسالة',
      messagePlaceholder: 'اكتب رسالتك أو استفسارك هنا...',
      submitBtn: 'إرسال الرسالة',
      submittingBtn: 'جارٍ الإرسال...',
      successTitle: 'تم استلام رسالتك بنجاح!',
      successMsg: 'شكراً لاهتمامك بمشروع ضمان السلامة. سيقوم فريق الطلاب بمراجعة رسالتك والتواصل معك.',
      academicCardTitle: 'قسم الهندسة وعلوم الحاسب',
      academicCardDesc: 'مشروع تخرج أكاديمي لطلبة هندسة وعلوم الحاسب. نرحب بآراء الأساتذة والمشرفين وخبراء السلامة المهنية.'
    },
    footer: {
      desc: 'مشروع «ضمان السلامة» هو نظام ذكي لمراقبة السلامة المهنية في المصانع لتقليل المخاطر عبر الرؤية الحاسوبية والتنبيهات الفورية.',
      quickLinks: 'روابط سريعة',
      contactInfo: 'معلومات المشروع',
      disclaimer: 'تنويه أكاديمي: هذا الموقع مخصص للتعريف بمشروع تخرج جامعي. جميع المواصفات والحلول المعروضة تمثل نموذجاً معمارياً وهندسياً للأغراض الأكاديمية والبحثية.',
      copyright: 'مشروع ضمان السلامة الجامعي. جميع الحقوق محفوظة.'
    }
  }
}
