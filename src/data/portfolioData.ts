export interface SkillItem {
  name: string;
  category: 'ai' | 'software' | 'iot' | 'electronics';
  description: string;
  status?: string;
  iconType: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  skills: SkillItem[];
}

export interface ProjectDetail {
  id: string;
  title: string;
  shortTitle: string;
  headline: string;
  status: 'In Development' | 'Completed Academic Project';
  isFeatured?: boolean;
  problem: string;
  solution: string;
  description: string;
  technologies: string[];
  architectureSteps?: {
    step: string;
    label: string;
    detail: string;
    icon: string;
  }[];
  hardwareComponents?: {
    name: string;
    role: string;
    specs: string;
  }[];
  implementationStatus: {
    completed: string[];
    planned: string[];
  };
  disclaimer?: string;
  githubUrl: string;
}

export interface InternshipItem {
  id: string;
  company: string;
  title: string;
  duration: string;
  description: string;
  keyAreas: string[];
  visualType: 'fuji' | 'syrma';
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  grade: string;
  type: 'college' | 'school';
  highlights: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  status: 'Completed' | 'Ongoing Learning';
  type: 'cert' | 'learning';
  tag: string;
}

export interface LanguageItem {
  script: string;
  englishName: string;
  subtext: string;
  badge: string;
}

export interface AchievementItem {
  title: string;
  event: string;
  category: string;
  description: string;
}

export const skillCategoriesData: SkillCategory[] = [
  {
    id: "ai",
    title: "AI and Machine Learning",
    subtitle: "Actively learning and developing foundational knowledge",
    icon: "Brain",
    skills: [
      {
        name: "Artificial Intelligence Fundamentals",
        category: "ai",
        description: "Core algorithms, heuristic search, decision trees, and intelligent agent principles.",
        status: "Learning",
        iconType: "Cpu"
      },
      {
        name: "Machine Learning Fundamentals",
        category: "ai",
        description: "Supervised and unsupervised learning, regression, classification, and model evaluation metrics.",
        status: "Learning",
        iconType: "Network"
      },
      {
        name: "Computer Vision",
        category: "ai",
        description: "Image preprocessing, filtering, spatial feature maps, and real-time visual streaming.",
        status: "Learning",
        iconType: "Scan"
      },
      {
        name: "Object Detection",
        category: "ai",
        description: "Bounding box estimation, target localization, and species identification models.",
        status: "Learning",
        iconType: "Target"
      }
    ]
  },
  {
    id: "software",
    title: "Programming and Software",
    subtitle: "Languages, version control, and analytical tools",
    icon: "Code",
    skills: [
      {
        name: "Python",
        category: "software",
        description: "Primary language for data manipulation, numerical computing, and AI scripting.",
        iconType: "Terminal"
      },
      {
        name: "Java",
        category: "software",
        description: "Object-oriented programming, data structures, and algorithmic foundations.",
        iconType: "Coffee"
      },
      {
        name: "Git & GitHub",
        category: "software",
        description: "Version control, branching, repository management, and team collaboration workflows.",
        iconType: "GitBranch"
      },
      {
        name: "Microsoft Excel",
        category: "software",
        description: "Data organization, statistical functions, structured reporting, and trend analysis.",
        iconType: "FileSpreadsheet"
      }
    ]
  },
  {
    id: "iot",
    title: "Embedded Systems and IoT",
    subtitle: "Microcontrollers, telemetry, and connected devices",
    icon: "Radio",
    skills: [
      {
        name: "Arduino Fundamentals",
        category: "iot",
        description: "Firmware flashing, GPIO configuration, analog-to-digital reading, and rapid prototyping.",
        iconType: "Cpu"
      },
      {
        name: "ESP32",
        category: "iot",
        description: "Dual-core Wi-Fi/Bluetooth MCU programming, hardware UART, and edge telemetry handling.",
        iconType: "Microchip"
      },
      {
        name: "Sensor Integration",
        category: "iot",
        description: "Interfacing environmental, ultrasonic, optical, and positional transducers.",
        iconType: "Activity"
      },
      {
        name: "GPS / GSM Module Concepts",
        category: "iot",
        description: "NMEA sentence parsing via NEO-6M and cellular AT command alerting via SIM800L.",
        iconType: "Satellite"
      },
      {
        name: "IoT Fundamentals",
        category: "iot",
        description: "Client-server telemetry pipelines, sensor-to-cloud workflows, and remote device monitoring.",
        iconType: "Wifi"
      }
    ]
  },
  {
    id: "electronics",
    title: "Electronics and Engineering",
    subtitle: "Schematic design, simulation, and industrial instrumentation",
    icon: "Layers",
    skills: [
      {
        name: "EasyEDA",
        category: "electronics",
        description: "Schematic capture, electronic symbol libraries, and PCB trace routing layout.",
        iconType: "Layout"
      },
      {
        name: "Tinkercad",
        category: "electronics",
        description: "Circuit simulation, virtual multimeter probing, and digital logic verification.",
        iconType: "Box"
      },
      {
        name: "Electronics Fundamentals",
        category: "electronics",
        description: "Circuit analysis, operational amplifiers, power regulation, and signal conditioning.",
        iconType: "Zap"
      },
      {
        name: "Sensors & Instrumentation",
        category: "electronics",
        description: "Measurement principles, calibration, signal transducers, and error analysis.",
        iconType: "Gauge"
      },
      {
        name: "Basic Control Systems",
        category: "electronics",
        description: "Closed-loop feedback mechanisms, PID concepts, and system response stability.",
        iconType: "Sliders"
      },
      {
        name: "Industrial Automation Exposure",
        category: "electronics",
        description: "Industrial control rooms, PLC workflows, safety interlocks, and manufacturing shopfloor operations.",
        iconType: "Factory"
      }
    ]
  }
];

export const PORTFOLIO_DATA = {
  personal: {
    name: "NIHAARIKA R.D.",
    role: "Engineering Student",
    mainHeadline: "Building Intelligence. Connecting It to the Real World.",
    // EXACT text required: “AI & Machine Learning | Embedded Systems & Industrial Automation”
    supportingHeadline: "AI & Machine Learning | Embedded Systems & Industrial Automation",
    intro: "I’m a third-year Electrical Instrumentation and Control Engineering student exploring how artificial intelligence, intelligent hardware, and connected systems can work together to solve real-world problems.",
    statusLabel: "Exploring AI • ML • Intelligent Systems",
    email: "nihaarika1106@gmail.com",
    linkedin: "https://linkedin.com/in/nihaarika-rd",
    github: "https://github.com/Nihaarika-11",
    location: "Chennai, India",
    college: "Sri Sairam Engineering College, Chennai",
    graduationYear: "2028",
    cgpa: "8.54 / 10"
  },

  aboutCards: [
    {
      title: "AI Explorer",
      tagline: "Learning intelligent systems, machine learning concepts, and computer vision.",
      details: "Developing foundational understanding of neural networks, image processing pipelines, object detection models, and edge inference to transform sensory inputs into intelligent decisions.",
      accent: "cyan"
    },
    {
      title: "Connected Systems Enthusiast",
      tagline: "Exploring how sensors, microcontrollers, and IoT connect the physical world to intelligent software.",
      details: "Working with ESP32 microcontrollers, GPS, and GSM telemetry to capture physical phenomenon and feed structured sensor streams to computing units.",
      accent: "electric"
    },
    {
      title: "Industrial Intelligence",
      tagline: "Interested in applying AI and automation to practical engineering problems.",
      details: "Bridging instrumentation, process control, circuit design, and industrial automation to build robust, fail-safe solutions for manufacturing and community safety.",
      accent: "violet"
    }
  ],

  aboutInterests: [
    "Artificial intelligence and machine learning",
    "Computer vision and object detection",
    "Embedded systems and IoT",
    "Sensors, instrumentation, and control systems",
    "Industrial automation and intelligent monitoring"
  ],

  skillCategories: skillCategoriesData,

  projects: {
    igaard: {
      id: "i-gaard",
      title: "I-GAARD — Intelligent AI-Driven Geofence Animal Detection and Real-Time Alert System",
      shortTitle: "I-GAARD",
      headline: "AI-Powered Wildlife Detection & Geofence Warning Architecture",
      status: "In Development",
      isFeatured: true,
      problem: "Human–wildlife conflict threatens forest-edge communities, tourists, crops, and wildlife. Early detection and timely warnings can help reduce dangerous encounters.",
      solution: "I-GAARD explores an AI- and IoT-enabled wildlife monitoring system that detects animals near designated forest boundaries and triggers alerts to help protect nearby communities.",
      description: "An integrated technical system combining computer vision for species identification with edge microcontrollers, GPS geofencing perimeter logic, and GSM emergency alerting.",
      technologies: [
        "AI-Based Animal Detection",
        "Computer Vision & Object Detection",
        "ESP32 Microcontroller",
        "NEO-6M GPS Module",
        "SIM800L GSM Module",
        "Geofencing & Location-Based Alerts",
        "IoT Monitoring"
      ],
      architectureSteps: [
        {
          step: "01",
          label: "Camera / Image Input",
          detail: "Optical camera sensor captures live visual frames along forest perimeters and sends stream to the processing node.",
          icon: "Camera"
        },
        {
          step: "02",
          label: "Animal Detection",
          detail: "Computer vision model processes frame bounding boxes, identifying potential wildlife presence with confidence estimation.",
          icon: "Scan"
        },
        {
          step: "03",
          label: "Boundary Check",
          detail: "Geofence mathematical engine matches GPS coordinates against polygon boundary coordinates (Safe vs. Danger zones).",
          icon: "MapPin"
        },
        {
          step: "04",
          label: "Alert Decision",
          detail: "System evaluates classification threshold and proximity rules to confirm genuine boundary breach before triggering sirens.",
          icon: "ShieldAlert"
        },
        {
          step: "05",
          label: "GSM Notification",
          detail: "SIM800L module dispatches cellular SMS coordinates to forest rangers and sound deterrent alarms to protect local settlements.",
          icon: "BellRing"
        }
      ],
      hardwareComponents: [
        {
          name: "ESP32 DevKit V1",
          role: "Edge Processing Controller",
          specs: "Dual-core Xtensa 32-bit, UART hardware serial interfaces, low power state management."
        },
        {
          name: "NEO-6M GPS Module",
          role: "Satellite Geopositioning",
          specs: "NMEA coordinate streaming, ceramic patch antenna, precision boundary calculation."
        },
        {
          name: "SIM800L GSM Module",
          role: "Autonomous Cellular Alerting",
          specs: "Quad-band 850/900/1800/1900MHz, AT command automated SMS dispatcher without Wi-Fi dependence."
        },
        {
          name: "Acoustic Warning Unit",
          role: "Edge Deterrent & Alarm",
          specs: "High-decibel acoustic pulse and strobe relay triggered during verified danger boundary crossings."
        }
      ],
      implementationStatus: {
        completed: [
          "Formulated geofencing coordinate logic and boundary mathematical model",
          "ESP32 microcontroller firmware interfacing with NEO-6M GPS over UART",
          "SIM800L GSM command routines for emergency SMS dispatching",
          "Prototyped image input and computer vision object detection pipeline",
          "Built interactive telemetry dashboard architecture"
        ],
        planned: [
          "Hardware field enclosure fabrication with solar power backup",
          "Multi-node mesh synchronization across remote forest perimeters",
          "Edge model optimization on specialized neural accelerator hardware",
          "Pilot testing in controlled non-forest testing zones"
        ]
      },
      disclaimer: "Current Status: In Development. Features are distinguished between tested prototype components and proposed design specifications. The system is not currently deployed in live forest reserves.",
      githubUrl: "https://github.com/Nihaarika-11"
    } as ProjectDetail,

    hospital: {
      id: "hospital-management",
      title: "Hospital Management Software",
      shortTitle: "Hospital Management",
      headline: "Academic Healthcare Workflow & Data Management System",
      status: "Completed Academic Project",
      isFeatured: false,
      problem: "Healthcare facilities require structured, reliable mechanisms to organize doctor schedules, patient records, and room allocations without manual record overhead.",
      solution: "Developed an academic software project using Python, applying programming concepts to a practical healthcare-management problem.",
      description: "An academic software project engineered in Python demonstrating modular programming, clean data storage, and practical workflow organization for clinical environments.",
      technologies: [
        "Python",
        "Modular Architecture",
        "File / Data Management",
        "Record Organization",
        "Clinical Workflow Modeling"
      ],
      implementationStatus: {
        completed: [
          "Structured patient registration and admission record modules",
          "Doctor schedule assignment and appointment consultation tracking",
          "Clinical record organization using structured Python data structures",
          "Error handling and input validation for data consistency"
        ],
        planned: [
          "Future potential extension: Graphical user interface integration",
          "Future potential extension: Relational SQL database integration"
        ]
      },
      githubUrl: "https://github.com/Nihaarika-11"
    } as ProjectDetail
  },

  internships: [
    {
      id: "fuji",
      company: "Fuji Electric",
      title: "Industrial Automation & Electrical Systems Trainee",
      duration: "15-Day Internship",
      description: "Completed a 15-day internship at Fuji Electric, gaining practical exposure to industrial automation, electrical systems, and manufacturing processes. Developed an understanding of industrial operations, technical workflows, quality control, and workplace safety while strengthening problem-solving, teamwork, and technical skills through hands-on learning.",
      keyAreas: [
        "Industrial Automation",
        "Electrical Power Systems",
        "Manufacturing Processes",
        "Industrial Control Panels",
        "Quality Control & Safety Protocols"
      ],
      visualType: "fuji"
    },
    {
      id: "syrma",
      company: "Syrma SGS Technology Limited",
      title: "Electronics Manufacturing & PCB Assembly Trainee",
      duration: "15-Day Internship",
      description: "Completed a 15-day internship at Syrma SGS Technology Limited, gaining practical exposure to electronics manufacturing, PCB assembly, production processes, and quality control. Developed an understanding of industrial workflows, electronic components, testing procedures, and manufacturing operations while enhancing technical knowledge, teamwork, and problem-solving skills through hands-on learning.",
      keyAreas: [
        "Electronics Manufacturing",
        "PCB Assembly & Soldering",
        "Testing & Inspection Procedures",
        "Component Quality Verification",
        "High-Precision Assembly Lines"
      ],
      visualType: "syrma"
    }
  ],

  education: [
    {
      institution: "Sri Sairam Engineering College, Chennai",
      degree: "B.E. Electrical Instrumentation and Control Engineering",
      period: "Expected Graduation: 2028",
      grade: "Current CGPA: 8.54 / 10",
      type: "college",
      highlights: [
        "Third-Year Undergraduate Student",
        "Specialization in Instrumentation, Control Systems & Industrial Automation",
        "Interdisciplinary focus on AI & Embedded Electronics Integration"
      ]
    },
    {
      institution: "Higher Secondary Education — Class XII",
      degree: "Senior Secondary School Certificate",
      period: "Class XII Examination",
      grade: "89%",
      type: "school",
      highlights: [
        "Rigorous foundation in Physics, Chemistry, and Mathematics",
        "Distinction in science curriculum"
      ]
    },
    {
      institution: "Secondary Education — Class X",
      degree: "Secondary School Examination",
      period: "Class X Examination",
      grade: "94.6%",
      type: "school",
      highlights: [
        "Academic excellence with high percentile across all disciplines",
        "Strong foundation in analytical and quantitative sciences"
      ]
    }
  ],

  certifications: [
    {
      title: "The Joy of Computing Using Python",
      issuer: "NPTEL",
      status: "Completed",
      type: "cert",
      tag: "Programming & Algorithms"
    },
    {
      title: "Data Analytics with Python",
      issuer: "Academic Certification",
      status: "Completed",
      type: "cert",
      tag: "Data Analysis"
    },
    {
      title: "UN Sustainable Development Goals",
      issuer: "Global Initiatives / Academic Course",
      status: "Completed",
      type: "cert",
      tag: "Sustainability & Ethics"
    },
    {
      title: "AI, Machine Learning, Computer Vision & Object Detection",
      issuer: "Independent Self-Paced & Coursework",
      status: "Ongoing Learning",
      type: "learning",
      tag: "Active Focus Area"
    }
  ],

  languages: [
    {
      script: "English",
      englishName: "English",
      subtext: "Global Professional & Technical Communication",
      badge: "Fluent"
    },
    {
      script: "ಕನ್ನಡ",
      englishName: "Kannada",
      subtext: "Dravidian script of Karnataka with rich literary history",
      badge: "Native Script"
    },
    {
      script: "हिन्दी",
      englishName: "Hindi",
      subtext: "Devanagari script, widely spoken across India",
      badge: "Native Script"
    },
    {
      script: "தமிழ்",
      englishName: "Tamil",
      subtext: "Classical Dravidian script of Tamil Nadu, renowned heritage",
      badge: "Native Script"
    }
  ],

  achievements: [
    {
      title: "Overall Champion",
      event: "“Play with Words” Speech Competition",
      category: "Public Speaking & Eloquence",
      description: "Awarded Overall Championship for expressive clarity, debate structure, and persuasive communication."
    },
    {
      title: "Prizes in Sports Competitions",
      event: "Athletic & Team Tournaments",
      category: "Sports & Athletics",
      description: "Secured competitive prizes in sports tournaments, fostering discipline, agility, and sportsmanship."
    }
  ],

  softSkills: [
    { name: "Communication", desc: "Articulating complex technical concepts clearly to diverse teams." },
    { name: "Problem-Solving", desc: "Deconstructing multidimensional engineering challenges systematically." },
    { name: "Teamwork", desc: "Collaborating across hardware, software, and industrial lab teams." },
    { name: "Quick Learning", desc: "Rapidly absorbing modern frameworks, microcontroller specs, and AI concepts." },
    { name: "Adaptability", desc: "Thriving across changing technical environments from lab benches to coding IDEs." }
  ],

  interests: [
    {
      title: "Exploring New Places and Cultures",
      desc: "Immersing in diverse regional traditions, geographic terrains, and cultural viewpoints.",
      icon: "Globe"
    },
    {
      title: "Historical Stories and Civilizations",
      desc: "Studying ancient civilizations, industrial history, and pivotal moments in human invention.",
      icon: "Landmark"
    },
    {
      title: "Discovering Languages and Their Scripts",
      desc: "Appreciating orthography, phonetics, and native typographic heritage across world languages.",
      icon: "BookOpen"
    }
  ]
};
