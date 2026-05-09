export const data = {
  name: 'Abimanyu Bhamakerti',
  title: 'Tech Lead & Senior Fullstack Developer',
  email: 'abimanyu.bhamakerti@gmail.com',
  phone: '+62 812-9898-8735',
  github: 'github.com/AbimanyuB',
  githubUrl: 'https://github.com/AbimanyuB',
  location: 'Bogor, Jawa Barat, Indonesia',
  cvFile: '/cv/CV_Abimanyu_Bhamakerti_2026.pdf',
  profile:
    'Accomplished Tech Lead and Senior Fullstack Developer with 7+ years of experience architecting scalable enterprise systems. Expert in building high-performance web and mobile platforms using React, Node.js, and cloud infrastructure. Proven track record in leading cross-functional teams to deliver secure, complex solutions across telecommunications, healthcare, and fintech sectors.',

  stats: [
    { value: 7, suffix: '+', label: 'Years Experience' },
    { value: 15, suffix: '+', label: 'Projects Delivered' },
    { value: 3, suffix: '', label: 'Industries' },
    { value: 16, suffix: '+', label: 'Technologies' },
  ],

  skillCategories: [
    {
      category: 'Frontend',
      icon: '⚡',
      skills: [
        { name: 'React JS', level: 'Expert', percent: 95 },
        { name: 'Next JS', level: 'Expert', percent: 93 },
        { name: 'TypeScript', level: 'Expert', percent: 92 },
        { name: 'Redux / Saga', level: 'Expert', percent: 90 },
      ],
    },
    {
      category: 'Backend',
      icon: '🔧',
      skills: [
        { name: 'Node JS', level: 'Expert', percent: 95 },
        { name: 'Nest JS', level: 'Expert', percent: 92 },
        { name: 'Golang', level: 'Intermediate', percent: 60 },
        { name: 'Laravel', level: 'Advanced', percent: 78 },
      ],
    },
    {
      category: 'Mobile',
      icon: '📱',
      skills: [
        { name: 'React Native', level: 'Advanced', percent: 80 },
        { name: 'Android / Java', level: 'Advanced', percent: 75 },
        { name: 'Flutter', level: 'Advanced', percent: 72 },
      ],
    },
    {
      category: 'Database',
      icon: '🗄️',
      skills: [
        { name: 'PostgreSQL', level: 'Expert', percent: 95 },
        { name: 'MySQL', level: 'Expert', percent: 95 },
        { name: 'MongoDB', level: 'Expert', percent: 90 },
        { name: 'Redis', level: 'Expert', percent: 92 },
      ],
    },
    {
      category: 'Cloud & DevOps',
      icon: '☁️',
      skills: [
        { name: 'AWS', level: 'Advanced', percent: 80 },
        { name: 'GCP', level: 'Advanced', percent: 80 },
        { name: 'Docker', level: 'Expert', percent: 90 },
        { name: 'Jenkins', level: 'Advanced', percent: 78 },
      ],
    },
    {
      category: 'Real-time & Messaging',
      icon: '🔄',
      skills: [
        { name: 'RabbitMQ', level: 'Expert', percent: 88 },
        { name: 'Apache Kafka', level: 'Advanced', percent: 78 },
        { name: 'Socket.IO', level: 'Expert', percent: 88 },
        { name: 'WebRTC', level: 'Intermediate', percent: 62 },
      ],
    },
  ],

  experience: [
    {
      role: 'Senior Fullstack Developer',
      company: 'Aido Health',
      duration: 'Jul 2025 – Present',
      type: 'Healthcare',
      project: 'AIDO – Hospital Integration System (Financial Module)',
      stack: ['Node.js', 'Express.js', 'React.js', 'PostgreSQL', 'Redis', 'RabbitMQ', 'AWS'],
      highlights: [
        'Architected comprehensive financial system for complex hospital transactions and billing workflows',
        'Built scalable backend services ensuring high performance and reliability for financial data processing',
        'Implemented RabbitMQ task queuing for high-volume transaction processing and system integrations',
        'Leveraged Redis for distributed caching and state management improving system performance',
        'Managed AWS infrastructure and deployment pipelines ensuring 99.9% uptime',
      ],
    },
    {
      role: 'Tech Lead, Business Analyst & Fullstack Developer',
      company: 'PT. Phincon',
      duration: 'Dec 2021 – Jul 2025',
      type: 'Telecommunications & CRM',
      project: 'Web MyTelkomsel & Raisecall Omnichannel CRM',
      stack: ['Next.js', 'Nest.js', 'TypeScript', 'MySQL', 'Redis', 'Docker', 'AWS', 'Kafka', 'RabbitMQ', 'Socket.IO', 'WebRTC'],
      highlights: [
        "Led and mentored development team at MyTelkomsel — Indonesia's top telecommunications web platform",
        'Designed omnichannel CRM (RaiseCall) integrating Twitter, Facebook, WhatsApp, Telegram & voice',
        'Architected real-time communication features using Socket.IO and WebRTC',
        'Implemented event-driven architecture with RabbitMQ and Apache Kafka',
        'Acted as Business Analyst: requirement analysis, UML diagrams, YAML API specs, database design',
      ],
    },
    {
      role: 'Fullstack Developer',
      company: 'Norito',
      duration: 'Dec 2024 – Apr 2025',
      type: 'Streaming',
      project: 'Norito – Movie Streaming with Coin-Based Access',
      stack: ['Flutter', 'Node.js', 'Express.js', 'TypeScript', 'PostgreSQL', 'AWS'],
      highlights: [
        'Built Netflix-like streaming mobile application with a unique coin-based content access system',
        'Developed cross-platform Flutter frontend delivering smooth UX across iOS and Android',
        'Built backend services managing authentication, movie catalogs, coin transactions & playback',
        'Deployed and maintained infrastructure on AWS enabling high availability',
      ],
    },
    {
      role: 'Laravel & React Native Developer',
      company: 'Easim Global',
      duration: 'Nov 2023 – Mar 2024',
      type: 'Fintech / Telecom',
      project: 'eSIM Purchase & Installation App',
      stack: ['Laravel', 'React Native', 'MySQL', 'Payment Gateway'],
      highlights: [
        'Developed cross-platform mobile app enabling users to purchase eSIMs in multiple countries',
        'Built web admin panel using Laravel for managing eSIM products, users, and transactions',
        'Integrated secure international payment gateways for reliable transaction processing',
        'Published on both Apple App Store and Google Play Store',
      ],
    },
    {
      role: 'Frontend Developer',
      company: 'Unisys',
      duration: 'Mar 2023 – Nov 2023',
      type: 'Education',
      project: 'University Management SaaS Platform',
      stack: ['React.js', 'Python', 'Django', 'PostgreSQL', 'GCP', 'NGINX'],
      highlights: [
        'Built SaaS platform for universities enabling management of academic operations and course creation',
        'Developed responsive and interactive frontend interfaces using React.js',
        'Deployed application on GCP using NGINX as reverse proxy and Gunicorn as WSGI server',
      ],
    },
    {
      role: 'Fullstack Developer',
      company: 'PT. Mitracom Ekasarana',
      duration: 'Dec 2020 – Dec 2021',
      type: 'Telecommunications',
      project: 'Web MyTelkomsel',
      stack: ['Node.js', 'React.js', 'Redux-Saga', 'Docker', 'MySQL', 'Redis', 'Jenkins'],
      highlights: [
        'Developed and maintained features for MyTelkomsel web application at large-scale telco platform',
        'Built and optimized RESTful APIs using Node.js for customer services',
        'Containerized applications with Docker and automated CI/CD pipelines with Jenkins',
      ],
    },
    {
      role: 'Fullstack & Mobile Developer',
      company: 'PT. Lawencon',
      duration: 'Dec 2018 – Dec 2020',
      type: 'Telecommunications & Banking',
      project: 'MyTelkomsel Web & App + Bank Mandiri CRM',
      stack: ['Node.js', 'React.js', 'Redux-Saga', 'MySQL', 'Redis', 'Jenkins', 'Android', 'Java'],
      highlights: [
        'Developed MyTelkomsel Web and native Android app using Java',
        'Designed and developed internal CRM mobile application for Bank Mandiri',
        "Implemented key features: user login, contact management, real-time task updates",
        'Automated CI/CD pipelines with Jenkins for efficient testing and deployment',
      ],
    },
  ],

  portfolio: [
    {
      name: 'MyTelkomsel Web',
      description:
        "Indonesia's leading telecommunications portal serving millions of users. Features account management, service subscriptions, payment processing, and customer support at massive scale.",
      url: 'https://my.telkomsel.com/login/web',
      stack: ['React', 'Node.js', 'MySQL', 'Redis', 'Docker', 'AWS'],
      category: 'Telecommunications',
      gradient: 'from-red-500 via-orange-500 to-yellow-500',
      accent: '#ef4444',
    },
    {
      name: 'Norito',
      description:
        'Netflix-style movie streaming application with an innovative coin-based content access system. Features curated movie catalogs, seamless playback, and flexible purchase options.',
      url: 'https://norito.kr/',
      stack: ['React', 'Python', 'GCP', 'PostgreSQL'],
      category: 'Streaming',
      gradient: 'from-purple-600 via-violet-600 to-indigo-600',
      accent: '#7c3aed',
    },
    {
      name: 'Taalif Cloud',
      description:
        'Digital publishing platform empowering content creators to publish, manage, and distribute their work online. Features rich editing tools and streamlined content workflows.',
      url: 'https://taalif.cloud/',
      stack: ['React', 'Python', 'GCP', 'PostgreSQL'],
      category: 'Publishing',
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      accent: '#06b6d4',
    },
    {
      name: 'WebBook Cloud',
      description:
        'Digital reading platform offering e-books and webbook functionality with progress tracking, bookmarking, and personalized reading experiences.',
      url: 'https://webbook.cloud/',
      stack: ['React', 'Python', 'GCP', 'PostgreSQL'],
      category: 'E-Book Platform',
      gradient: 'from-emerald-500 via-green-500 to-teal-500',
      accent: '#10b981',
    },
    {
      name: 'Altaif Tech',
      description:
        'Modern, high-impact corporate landing page for Altaif Technology. Showcases the company\'s tech services and solutions with engaging animations and clean design.',
      url: 'https://altaiftech.com/',
      stack: ['React', 'Python', 'GCP', 'SQLite'],
      category: 'Corporate',
      gradient: 'from-violet-600 via-purple-600 to-fuchsia-600',
      accent: '#8b5cf6',
    },
    {
      name: 'Bawsala',
      description:
        'Enterprise KPI tracking and automation platform providing real-time dashboards, performance analytics, and automated reporting for organizational goal management.',
      url: 'https://bawsala.cloud/',
      stack: ['React', 'Python', 'GCP', 'PostgreSQL'],
      category: 'Analytics',
      gradient: 'from-amber-500 via-orange-500 to-red-500',
      accent: '#f59e0b',
    },
    {
      name: 'Unisys',
      description:
        'Comprehensive university management system handling academic operations, course management, graduate modules, and student administration for higher education institutions.',
      url: 'https://unisys.online/landing-page',
      stack: ['React', 'Python', 'GCP', 'PostgreSQL'],
      category: 'Education',
      gradient: 'from-rose-500 via-pink-500 to-fuchsia-500',
      accent: '#f43f5e',
    },
  ],

  education: [
    {
      degree: "Bachelor's Degree",
      field: 'Information System',
      institution: 'Bina Nusantara University',
      short: 'BINUS',
      duration: 'Mar 2021 – Jul 2023',
    },
    {
      degree: 'Diploma',
      field: 'Computer Engineering',
      institution: 'IPB University',
      short: 'IPB',
      duration: 'Feb 2015 – Oct 2018',
    },
  ],

  languages: [
    { lang: 'Bahasa Indonesia', level: 'Fluent' },
    { lang: 'English', level: 'Intermediate' },
  ],
}
