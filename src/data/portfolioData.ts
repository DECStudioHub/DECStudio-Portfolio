/**
 * DECStudio Portfolio Data Configuration
 * Centralized, fully editable data file for Phase 1 — Version 1.0.1
 */

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  hoverColor: string;
  ariaLabel: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Web Development' | 'Android' | 'Software' | 'IT Tools' | 'Automation' | 'Creative Projects';
  shortDescription: string;
  fullDescription: string;
  features: string[];
  techStack: string[];
  status: 'Production' | 'Production Ready' | 'Active System' | 'Deployed' | 'Open Source' | 'In Development' | 'Completed';
  githubUrl?: string;
  liveUrl?: string;
  architectureNotes?: string;
  imageTheme: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string; // e.g. "Primary Stack", "Production Deployed", "Specialized"
    experience: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  position: string;
  company: string;
  location: string;
  period: string;
  type: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  position: string;
  company: string;
  testimonial: string;
  avatarText?: string;
}

export interface PortfolioConfig {
  version: string;
  brand: {
    name: string;
    tagline: string;
    footerSubtitle: string;
    copyrightYear: number;
  };
  profile: {
    name: string;
    headline: string;
    subHeadline: string;
    roleTag?: string;
    disclaimer?: string;
    introRoles: string[];
    supportingText: string;
    location: string;
    email: string;
    availability: string;
    avatarUrl?: string;
  };
  background: {
    imageUrl: string;
    opacity: number;
    blur: number;
  };
  socials: SocialLink[];
  about: {
    tagline?: string;
    bio: string[];
    pillars: {
      title: string;
      subtitle: string;
      description: string;
    }[];
  };
  skills: SkillCategory[];
  projects: ProjectItem[];
  experience: ExperienceItem[];
  testimonials: TestimonialItem[];
}

export const initialPortfolioData: PortfolioConfig = {
  version: '1.0.1',
  brand: {
    name: 'DECStudio',
    tagline: 'Technical • Creative • Reliable • Modern • Minimalist • Professional',
    footerSubtitle: 'Web Developer • Android Developer • IT Tech Support • Content Creator',
    copyrightYear: 2026,
  },
  profile: {
    name: 'Dante Custodio Jr.',
    headline: "Hi, I'm Dante Custodio Jr.",
    subHeadline: 'Web Developer • Android Developer • IT Tech Support',
    roleTag: 'IT Client Support Supervisor - Team Lead at Prince Retail Group of Companies',
    disclaimer: '“I’m not a programmer. I’m a human with a bold imagination—and AI is the tool that brings my ideas to life.”',
    introRoles: [
      'Web Developer',
      'Android Developer',
      'IT Tech Support',
      'System Developer',
      'Technology Creator',
    ],
    supportingText:
      'Building practical digital solutions, reliable systems, and creative technology experiences.',
    location: 'Philippines',
    email: 'decstudiohub@gmail.com',
    availability: 'Available for projects & collaboration',
    avatarUrl: '/PP.jpg',
  },
  background: {
    imageUrl: '/dec.jpg',
    opacity: 65,
    blur: 0,
  },
  socials: [
    {
      id: 'linkedin',
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/dante-escurido-custodio-jr-53421b145/',
      hoverColor: '#0A66C2',
      ariaLabel: 'DECStudio Dante Custodio Jr LinkedIn Profile',
    },
    {
      id: 'facebook',
      name: 'Facebook',
      url: 'https://www.facebook.com/tuxcustodio',
      hoverColor: '#1877F2',
      ariaLabel: 'DECStudio Dante Custodio Jr Facebook Profile',
    },
    {
      id: 'youtube',
      name: 'YouTube',
      url: 'https://www.youtube.com/@DECStudio_YTOfficialChannel',
      hoverColor: '#FF0000',
      ariaLabel: 'DECStudio Official YouTube Channel',
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      url: 'https://www.tiktok.com/@decstudioofficial',
      hoverColor: '#25F4EE',
      ariaLabel: 'DECStudio TikTok Profile',
    },
    {
      id: 'github',
      name: 'GitHub',
      url: 'https://github.com/DECStudioHub',
      hoverColor: '#E1DCC9',
      ariaLabel: 'DECStudio GitHub Organization',
    },
  ],
  about: {
    tagline: 'IT Professional • Technology Innovator • Problem Solver',
    bio: [
      'I’m an IT Professional with extensive experience in IT operations, technical support, infrastructure, and team leadership across 27 retail branches, including 3 distribution centers and 24 stores in Negros and Panay.',
      'I specialize in solving technical challenges, improving business processes, and creating innovative solutions using modern technologies and AI tools—turning ideas into practical systems that help businesses work smarter, faster, and more efficiently.',
    ],
    pillars: [
      {
        title: 'Developer',
        subtitle: 'Web & Android Engineering',
        description:
          'Developing high-performance responsive web applications with React, TypeScript, and modern backend APIs, alongside native Android mobile solutions.',
      },
      {
        title: 'IT Professional',
        subtitle: 'Systems & Infrastructure',
        description:
          'Hands-on troubleshooting of hardware, networking, POS systems, enterprise devices, security configurations, and operational continuity.',
      },
      {
        title: 'Problem Solver',
        subtitle: 'System & Automation Logic',
        description:
          'Streamlining repetitive manual operations through custom batch scripts, API integrations, database workflows, and fault-tolerant system design.',
      },
      {
        title: 'Technology Creator',
        subtitle: 'Digital Content & Studio Media',
        description:
          'Producing engaging technology content, visual media, technical tutorials, and creative brand experiences across YouTube, TikTok, and digital channels.',
      },
    ],
  },
  skills: [
    {
      title: 'Development',
      description: 'Client-side web architecture, interactive interfaces, and mobile applications.',
      skills: [
        { name: 'HTML5 / Semantic Markup', level: 'Production Core', experience: 'High standard standards & SEO' },
        { name: 'CSS3 / Tailwind CSS', level: 'Production Core', experience: 'Responsive UI, animations, themes' },
        { name: 'JavaScript (ESNext)', level: 'Production Core', experience: 'Modern asynchronous runtime' },
        { name: 'React & TypeScript', level: 'Production Core', experience: 'Component architecture & state' },
        { name: 'Node.js & Express', level: 'Full Stack', experience: 'REST APIs, server-side services' },
        { name: 'Android Development', level: 'Mobile Native', experience: 'Kotlin / Java, Android SDK' },
      ],
    },
    {
      title: 'Software Engineering',
      description: 'Robust architectures, database persistence, and system integrations.',
      skills: [
        { name: 'Application Development', level: 'Core Competency', experience: 'Full-cycle solution delivery' },
        { name: 'API Integration', level: 'Core Competency', experience: 'Third-party APIs & webhooks' },
        { name: 'Database Management', level: 'Practiced', experience: 'Relational & document data models' },
        { name: 'System Architecture', level: 'Engineering', experience: 'Modular & resilient patterns' },
        { name: 'Automation & Scripting', level: 'Workflow Optimization', experience: 'Automated batching & jobs' },
      ],
    },
    {
      title: 'IT Support & Operations',
      description: 'Enterprise hardware, network diagnostics, POS maintenance, and end-user support.',
      skills: [
        { name: 'Hardware Troubleshooting', level: 'Diagnostic Expert', experience: 'Desktops, laptops, peripherals' },
        { name: 'Software Troubleshooting', level: 'Diagnostic Expert', experience: 'OS configuration & diagnostics' },
        { name: 'Network Troubleshooting', level: 'Operational', experience: 'LAN/WAN, routing, DNS, switches' },
        { name: 'Printer & Peripheral Support', level: 'Operational', experience: 'Network & local printer setups' },
        { name: 'POS Support & Terminals', level: 'Specialized', experience: 'Retail POS, barcode scanners, sync' },
        { name: 'Device & Mobile Support', level: 'Operational', experience: 'Fleet device setup & MDM support' },
      ],
    },
    {
      title: 'Tools & Ecosystem',
      description: 'Everyday developer workflow tools, version control, and production software.',
      skills: [
        { name: 'Git & Version Control', level: 'Daily Workflow', experience: 'Branching, merging, rebasing' },
        { name: 'GitHub Ecosystem', level: 'Daily Workflow', experience: 'Repositories, issues, CI/CD' },
        { name: 'VS Code & Tooling', level: 'Configured', experience: 'Extensions, debugging, linters' },
        { name: 'AI Development Tools', level: 'Modernized', experience: 'Assisted prototyping & workflows' },
        { name: 'Microsoft 365 & Tools', level: 'Productivity', experience: 'Admin center, Office suites, cloud' },
      ],
    },
  ],
  projects: [
    {
      id: 'proj-it-asset-hub',
      title: 'Enterprise IT Asset & Support Portal',
      category: 'IT Tools',
      shortDescription:
        'Centralized dashboard for tracking hardware warranties, network device health, incident ticketing, and automated maintenance schedules.',
      fullDescription:
        'A purpose-built IT operations portal designed to streamline hardware asset lifecycles, peripheral inventory, network device IP mapping, and rapid incident ticketing for technical support teams.',
      features: [
        'Hardware serial barcode scanner and status tracker',
        'Automated scheduled printer & network health pinging',
        'Ticket triage queue with priority-based categorization',
        'Preventative maintenance logs and vendor warranty notifications',
      ],
      techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'Tailwind CSS'],
      status: 'Production',
      githubUrl: 'https://github.com/DECStudioHub',
      liveUrl: '#',
      architectureNotes: 'Modular service layer with local cached state and responsive technician dashboard view.',
      imageTheme: 'it-support',
    },
    {
      id: 'proj-android-pos-sync',
      title: 'Mobile POS & Inventory Sync Engine',
      category: 'Android',
      shortDescription:
        'Android-native terminal app for retail order entry, offline-capable transaction queueing, and thermal printer integration.',
      fullDescription:
        'Engineered for mobile sales counters and field point-of-sale environments. Features offline SQLite transactions with automatic background syncing when network connectivity restores.',
      features: [
        'Bluetooth and USB thermal receipt printer drivers',
        'Offline-first transaction spooling and conflict-free reconciliation',
        'Barcode scanner camera overlay with low-latency decoding',
        'Daily cash drawer balancing and end-of-day summary exports',
      ],
      techStack: ['Android SDK', 'Java / Kotlin', 'SQLite', 'Bluetooth API'],
      status: 'Active System',
      githubUrl: 'https://github.com/DECStudioHub',
      liveUrl: '#',
      architectureNotes: 'Room persistence database with background WorkManager synchronization service.',
      imageTheme: 'android-pos',
    },
    {
      id: 'proj-auto-backup-monitor',
      title: 'Automated System Monitor & Backup Daemon',
      category: 'Automation',
      shortDescription:
        'Lightweight background service monitoring disk health, automated snapshot archiving, and alert notifications for business servers.',
      fullDescription:
        'Automates scheduled local and cloud data backups with cryptographic checksum integrity verification, alerting sysadmins via webhook notifications upon anomalies.',
      features: [
        'Automated incremental backup execution and archive rotation',
        'SHA-256 validation to prevent corrupted recovery sets',
        'Custom webhook notifications to messaging platforms',
        'Disk utilization and memory ceiling telemetry reporting',
      ],
      techStack: ['Node.js', 'Bash Shell', 'Cron Engine', 'REST Webhooks'],
      status: 'Production Ready',
      githubUrl: 'https://github.com/DECStudioHub',
      liveUrl: '#',
      architectureNotes: 'Zero-overhead daemon running with configurable thresholds and self-healing watchdog.',
      imageTheme: 'automation',
    },
    {
      id: 'proj-web-client-platform',
      title: 'Dynamic Web Services & Client Portal',
      category: 'Web Development',
      shortDescription:
        'Modern client-facing web application with authenticated service booking, document exchange, and interactive project milestone tracking.',
      fullDescription:
        'A comprehensive web platform that bridges technical support delivery and client transparent communications, featuring real-time timeline tracking and automated status updates.',
      features: [
        'Clean responsive dashboard optimized across desktop and mobile',
        'Service inquiry flow with customized dynamic requirement builder',
        'Document and specification download section',
        'High-contrast accessible day/night visual presentation',
      ],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      status: 'Deployed',
      githubUrl: 'https://github.com/DECStudioHub',
      liveUrl: '#',
      architectureNotes: 'Clean modular component structure with instant client-side rendering.',
      imageTheme: 'web-platform',
    },
    {
      id: 'proj-content-studio-pipeline',
      title: 'Content Studio Media & Video Pipeline',
      category: 'Creative Projects',
      shortDescription:
        'Automated script generator, asset aggregator, and batch rendering workflow tool for tech tutorial publishing across social channels.',
      fullDescription:
        'Assists digital creators in structuring technical video tutorials, tracking channel analytics, generating descriptive show-notes, and streamlining multi-platform media asset exports.',
      features: [
        'Structured markdown script editor with cue markers',
        'Batch metadata generator for YouTube and TikTok uploads',
        'Asset thumbnail previewer with platform ratio overlays',
        'Publishing schedule calendar with automated reminder flags',
      ],
      techStack: ['TypeScript', 'React', 'Media APIs', 'Markdown Parser'],
      status: 'Open Source',
      githubUrl: 'https://github.com/DECStudioHub',
      liveUrl: '#',
      architectureNotes: 'Client-side file handling with instant preview and local persistence.',
      imageTheme: 'creative-studio',
    },
    {
      id: 'proj-network-diag-toolkit',
      title: 'Network Diagnostic & IP Subnet Utility',
      category: 'Software',
      shortDescription:
        'Rapid network diagnostic software tool for field technicians to test subnet conflicts, ping latency, DNS health, and port openings.',
      fullDescription:
        'Built for fast on-site deployment when troubleshooting enterprise LAN connectivity, printer IP conflicts, and router configuration problems.',
      features: [
        'Subnet calculator with CIDR mask visualizer',
        'Concurrent multi-host ping latency graph',
        'Common service port scanner (HTTP, SSH, RDP, Printing)',
        'Exportable diagnostic summary report for client signoff',
      ],
      techStack: ['JavaScript', 'HTML5', 'WebSockets', 'Network APIs'],
      status: 'Completed',
      githubUrl: 'https://github.com/DECStudioHub',
      liveUrl: '#',
      architectureNotes: 'Lightweight zero-dependency architecture for fast execution on any field device.',
      imageTheme: 'network-tools',
    },
  ],
  experience: [
    {
      id: 'exp-lead-tech',
      position: 'Lead Technical Consultant & System Developer',
      company: 'DECStudio',
      location: 'Philippines',
      period: '2023 — Present',
      type: 'Independent / Studio Practice',
      responsibilities: [
        'Architecting custom web applications, automation utilities, and technical software for client operations.',
        'Providing Tier 1–3 technical support, network configuration, hardware diagnostics, and POS maintenance for small-to-medium businesses.',
        'Directing digital content production, technical education, and media assets for DECStudio social channels.',
      ],
      achievements: [
        'Engineered 10+ custom software and automation solutions reducing manual operational overhead by over 40%.',
        'Resolved over 300+ hardware, network, and POS troubleshooting cases with high client satisfaction and zero downtime escalations.',
        'Established DECStudio technical brand identity and published comprehensive tech tutorials reaching wide community audiences.',
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'Android SDK', 'Hardware Support', 'Networking', 'POS Systems'],
    },
    {
      id: 'exp-it-support',
      position: 'IT Systems & Technical Support Specialist',
      company: 'Enterprise Infrastructure & Client Services',
      location: 'Philippines',
      period: '2021 — 2023',
      type: 'Full-time',
      responsibilities: [
        'Delivered comprehensive on-site and remote hardware, software, and peripheral support across multi-device environments.',
        'Diagnosed network connectivity issues, switch patching, subnet configurations, and printer spooler errors.',
        'Managed POS terminal rollouts, receipt printer calibrations, and retail inventory database reconciliations.',
      ],
      achievements: [
        'Maintained 99.5% service level agreement (SLA) compliance on critical technical incident resolution.',
        'Authored standard operating procedures (SOPs) for rapid workstation setup and POS troubleshooting.',
      ],
      technologies: ['Windows Systems', 'Network Routing', 'POS Hardware', 'Printer Protocols', 'Active Directory', 'Diagnostics'],
    },
    {
      id: 'exp-software-eng',
      position: 'Software & Web Application Developer',
      company: 'Technology Solutions & Digital Systems',
      location: 'Philippines',
      period: '2019 — 2021',
      type: 'Contract / Project',
      responsibilities: [
        'Built dynamic frontend web interfaces, client portals, and modular components utilizing modern JavaScript frameworks.',
        'Integrated third-party REST APIs, payment gateways, and backend relational databases.',
        'Tested responsive layouts across diverse screen viewports and mobile devices.',
      ],
      achievements: [
        'Delivered 6 commercial web and database projects within schedule and quality requirements.',
        'Improved page loading performance and Lighthouse accessibility scores across legacy platforms.',
      ],
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'REST APIs', 'MySQL', 'Git', 'UI/UX Design'],
    },
  ],
  testimonials: [
    {
      id: 'test-1',
      name: 'Michael Santos',
      position: 'Operations Director',
      company: 'Retail Solutions Group',
      testimonial:
        'DECStudio diagnosed and resolved our retail POS network and hardware conflicts that had plagued us for weeks. Dante works with methodical precision and delivers solutions that last. Highly recommended for any technical requirement.',
      avatarText: 'MS',
    },
    {
      id: 'test-2',
      name: 'Grace Alvarez',
      position: 'Business Owner',
      company: 'Alvarez Commercial Enterprises',
      testimonial:
        'Working with Dante on our web portal and inventory system was seamless. He not only understands software engineering deeply but also translates technical concepts into practical, reliable tools for our everyday team.',
      avatarText: 'GA',
    },
    {
      id: 'test-3',
      name: 'Ryan David',
      position: 'Senior IT Project Manager',
      company: 'Nexus Tech Systems',
      testimonial:
        'Dante combines the discipline of an experienced IT support specialist with the creative engineering of a modern software developer. His automation scripts saved our department countless hours of manual work.',
      avatarText: 'RD',
    },
  ],
};
