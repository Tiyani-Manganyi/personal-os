// Categorical accent colors tuned for a light theme
export const COLORS = {
  emerald: "#059669",
  blue: "#2563eb",
  amber: "#d97706",
  rose: "#e11d48",
  pink: "#db2777",
  cyan: "#0891b2",
  slate: "#64748b",
  primary: "#2563eb",
}

export const ME = {
  name: "Tiyani Manganyi",
  email: "kbmagoda2024@gmail.com",
  phone: "060 817 5627",
  location: "Pretoria, South Africa",
  linkedin: "linkedin.com/in/tiyani-manganyi-137625316",
  github: "github.com/Tiyani-Manganyi",
  portfolio: "gwende.vercel.app",
  title: "Junior Software Developer · Open to Work",
  bio: "Passionate Software Developer from South Africa, holding a Diploma in Computer Science from TUT. Specialising in full-stack development, AI integrations, and cloud engineering. 9+ projects built.",
}

export type Goal = {
  id: string
  title: string
  cat: string
  color: string
  progress: number
  milestones: string[]
  done: number[]
  notes?: string
}

export const GOALS: Goal[] = [
  {
    id: "g1",
    title: "Land a Junior Developer Role",
    cat: "Career",
    color: COLORS.emerald,
    progress: 55,
    milestones: ["Update portfolio", "Apply to 10 roles", "Build AI Resume Analyzer", "Land 3 interviews", "Get offer"],
    done: [0, 1, 2],
    notes: "Portfolio live at gwende.vercel.app · TUT sent IT Interns reminder today.",
  },
  {
    id: "g2",
    title: "Complete Graduate Programme",
    cat: "Education",
    color: COLORS.primary,
    progress: 60,
    milestones: [
      "Enroll in Graduate Track",
      "Complete AI engineering module",
      "Build production AI assistant",
      "Mentor WIL interns",
      "Graduate",
    ],
    done: [0, 1],
    notes: "Currently enrolled — Advanced AI + Cloud Architecture track.",
  },
  {
    id: "g3",
    title: "Launch Tiyani AI v2 with LLM",
    cat: "Product",
    color: COLORS.amber,
    progress: 25,
    milestones: [
      "Define v2 feature set",
      "Integrate Gemini/OpenAI",
      "Deploy dynamic portfolio Q&A",
      "Beta launch Q3 2026",
    ],
    done: [0],
    notes: "Target: Q3 2026. Enhance current AI assistant with generative AI.",
  },
  {
    id: "g4",
    title: "Become Senior Developer / Tech Lead",
    cat: "Career",
    color: COLORS.pink,
    progress: 15,
    milestones: ["Senior role applications (2027)", "Lead a project team", "Publish open-source tool", "Tech conference talk"],
    done: [],
    notes: "2027+ roadmap. Build toward team leadership and innovation.",
  },
]

export type Project = {
  id: string
  name: string
  cat: string
  color: string
  desc: string
  tech: string[]
  live: string | null
  code: string | null
  status: string
  hot?: boolean
}

export const PROJECTS: Project[] = [
  {
    id: "p1",
    name: "Doctors Appointment Website",
    cat: "WIL",
    color: COLORS.blue,
    desc: "Online booking platform for medical appointments with calendar integration, email reminders, and secure patient dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Email API"],
    live: "https://doctors-booking.vercel.app/",
    code: "https://github.com/Tiyani-Manganyi/doctors-booking",
    status: "live",
  },
  {
    id: "p2",
    name: "Fruits & Vegetable E-commerce",
    cat: "WIL",
    color: COLORS.emerald,
    desc: "Full-stack MERN platform with Stripe payments, user authentication, admin panel, and order tracking.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    live: null,
    code: "https://github.com/Tiyani-Manganyi/Fruits_and_vegetable_web",
    status: "live",
  },
  {
    id: "p3",
    name: "TUT Job Portal",
    cat: "WIL",
    color: COLORS.primary,
    desc: "Smart career matching platform for TUT students & alumni — real-time vacancies, skills-based recommendations.",
    tech: ["React", "AI Matching", "REST API", "MongoDB"],
    live: "https://4ir-ai-tut.base44.app/",
    code: "https://github.com/Tiyani-Manganyi/tut-jobportal",
    status: "live",
  },
  {
    id: "p4",
    name: "South African Case Law AI",
    cat: "Graduate",
    color: COLORS.amber,
    desc: "Semantic search + GPT over landmark SA constitutional cases. Ask a legal question and get cited answers grounded in actual judgments.",
    tech: ["NLP", "GPT", "Semantic Search", "Python"],
    live: "https://4ir-ai-tut.base44.app/",
    code: "https://github.com/Tiyani-Manganyi/sa-case-law-ai",
    status: "live",
  },
  {
    id: "p5",
    name: "LinkedIn Workflow Suggester",
    cat: "Graduate",
    color: COLORS.cyan,
    desc: "AI tool recommending career workflows, networking strategies, and profile optimisations for job seekers.",
    tech: ["AI", "React", "LinkedIn API", "Node.js"],
    live: "https://linkedin-workflow-suggester.codewords.run/",
    code: "https://github.com/Tiyani-Manganyi/linkedin-workflow",
    status: "live",
  },
  {
    id: "p6",
    name: "4IR Resume Website",
    cat: "Graduate",
    color: COLORS.pink,
    desc: "Interactive digital CV / portfolio template with modern UI, responsive design, and downloadable PDF export.",
    tech: ["HTML/CSS", "JavaScript", "PDF Export"],
    live: "https://4-ir-resume-rxi9.vercel.app/",
    code: "https://github.com/Tiyani-Manganyi/4ir-resume",
    status: "live",
  },
  {
    id: "p7",
    name: "AI Resume Analyzer",
    cat: "Graduate",
    color: COLORS.rose,
    desc: "ATS-compatibility checker, keyword optimisation, skill gap analysis. Helps job seekers pass automated screening systems.",
    tech: ["Python", "NLP", "React", "FastAPI"],
    live: "https://resume-analyzer-ashen.vercel.app/",
    code: "https://github.com/Tiyani-Manganyi/resume-analyzer",
    status: "live",
    hot: true,
  },
  {
    id: "p8",
    name: "House Price Prediction",
    cat: "Future",
    color: COLORS.slate,
    desc: "Regression model with R²=0.87 — planned to be deployed as an API and interactive dashboard.",
    tech: ["Python", "ML", "Regression", "Flask"],
    live: null,
    code: "https://github.com/Tiyani-Manganyi/house-price-prediction",
    status: "planned",
  },
  {
    id: "p9",
    name: "Customer Sentiment Dashboard",
    cat: "Future",
    color: COLORS.slate,
    desc: "Real-time social media sentiment analysis using NLP — production deployment planned Q3 2026.",
    tech: ["NLP", "Python", "React", "Real-time"],
    live: null,
    code: "https://github.com/Tiyani-Manganyi/sentiment-dashboard",
    status: "planned",
  },
]

export type Cert = {
  id: string
  name: string
  issuer: string
  year: string
  color: string
  tech: string[]
}

export const CERTS: Cert[] = [
  {
    id: "c1",
    name: "FNB App Academy — Full Stack Development",
    issuer: "FNB",
    year: "2025",
    color: COLORS.emerald,
    tech: ["React.js", "Node.js", "Express", "MongoDB", "REST APIs", "JWT Auth"],
  },
  {
    id: "c2",
    name: "Huawei ICT — Data Management & Analytics",
    issuer: "Huawei",
    year: "Feb 2026",
    color: COLORS.rose,
    tech: ["SQL", "Python (Pandas)", "Tableau", "ETL Pipelines", "Power BI", "Data Modeling"],
  },
  {
    id: "c3",
    name: "Microsoft Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    year: "Feb 2026",
    color: COLORS.blue,
    tech: ["Azure VMs", "Azure Storage", "Entra ID", "ARM Templates", "GDPR", "Azure Monitor"],
  },
  {
    id: "c4",
    name: "Diploma in Computer Science",
    issuer: "Tshwane University of Technology",
    year: "01-FEB-2026",
    color: COLORS.primary,
    tech: ["OOP (Java/Python)", "Data Structures", "Algorithms", "Software Engineering", "DB Design", "OS Concepts"],
  },
  {
    id: "c5",
    name: "Cybersecurity Essentials (UK Workforce)",
    issuer: "Knights of Safety",
    year: "Feb 2026",
    color: COLORS.amber,
    tech: ["NIST CSF", "ISO 27001", "Risk Management", "Encryption (AES)", "Incident Response", "Zero Trust"],
  },
  {
    id: "c6",
    name: "Cisco — Getting Started with Packet Tracer",
    issuer: "Cisco Networking Academy",
    year: "2025",
    color: COLORS.cyan,
    tech: ["TCP/IP Stack", "VLANs", "Routing (OSPF)", "Switching", "Cisco IOS", "Subnetting"],
  },
  {
    id: "c7",
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2024",
    color: COLORS.amber,
    tech: ["AWS EC2", "S3", "Lambda", "IAM", "CloudFront", "RDS", "CloudFormation"],
  },
  {
    id: "c8",
    name: "NLP — Text Classification Models",
    issuer: "Online",
    year: "2025",
    color: COLORS.pink,
    tech: ["NLTK", "spaCy", "scikit-learn", "Transformers (HuggingFace)", "TensorFlow", "Word2Vec"],
  },
  {
    id: "c9",
    name: "DevOps & Cloud Full Stack CV",
    issuer: "Professional",
    year: "2026",
    color: COLORS.emerald,
    tech: ["Git/GitHub", "Docker", "CI/CD (GitHub Actions)", "Agile/Scrum", "Terraform (IaC)", "Jest/Testing"],
  },
]

export type RoadmapItem = {
  year: string
  title: string
  status: "done" | "active" | "upcoming" | "future"
  color: string
  desc: string
}

export const ROADMAP: RoadmapItem[] = [
  {
    year: "2024–2025",
    title: "Work Integrated Learning (WIL)",
    status: "done",
    color: COLORS.emerald,
    desc: "12 months hands-on industry experience. Built full-stack apps, contributed to AI projects, earned cloud & agile certifications.",
  },
  {
    year: "2025–Present",
    title: "Graduate Programme (Advanced Track)",
    status: "active",
    color: COLORS.primary,
    desc: "AI engineering, scalable cloud architectures, and team leadership. Building production-grade AI assistants, mentoring WIL interns.",
  },
  {
    year: "Q3 2026",
    title: "Launch Tiyani AI v2 with LLM",
    status: "upcoming",
    color: COLORS.amber,
    desc: "Enhance AI assistant with generative AI (Gemini/OpenAI) for dynamic portfolio Q&A.",
  },
  {
    year: "2027+",
    title: "Senior Developer / Tech Lead",
    status: "future",
    color: COLORS.pink,
    desc: "Transition into a senior role, leading AI product teams and driving innovation at scale.",
  },
]

export const SKILLS = [
  { name: "JavaScript / React.js", pct: 85, color: COLORS.blue },
  { name: "Python / Django", pct: 80, color: COLORS.emerald },
  { name: "Node.js / Express", pct: 78, color: COLORS.emerald },
  { name: "MongoDB", pct: 82, color: COLORS.amber },
  { name: "NLP & AI/ML", pct: 75, color: COLORS.primary },
  { name: "AWS / Azure Cloud", pct: 70, color: COLORS.cyan },
]

export const CALENDAR_EVENTS = [
  { day: 2, time: "08:00", title: "Apply — IT Interns West Rand", color: COLORS.emerald },
  { day: 3, time: "10:00", title: "Review LinkedIn matches", color: COLORS.blue },
  { day: 4, time: "09:00", title: "Code — Tiyani AI v2", color: COLORS.primary },
  { day: 5, time: "11:00", title: "Update gwende.vercel.app", color: COLORS.amber },
  { day: 7, time: "19:00", title: "Weekly reflection", color: COLORS.pink },
  { day: 10, time: "09:00", title: "Graduate Programme session", color: COLORS.primary },
]

export type Note = {
  id: string
  title: string
  color: string
  date: string
  content: string
}

export const NOTION_NOTES: Note[] = [
  {
    id: "n1",
    title: "Job Search Strategy",
    color: COLORS.emerald,
    date: "Jun 2",
    content:
      "1. Apply to 2 roles daily\n2. Prioritize remote roles paying R20k+\n3. Follow up after 5 days\n4. Use AI Resume Analyzer before submitting\n5. Keep gwende.vercel.app updated",
  },
  {
    id: "n2",
    title: "Tiyani AI v2 — Feature Plan",
    color: COLORS.primary,
    date: "Jun 1",
    content:
      "Features for v2:\n• Gemini/OpenAI integration\n• Dynamic portfolio Q&A\n• Live GitHub project stats\n• Voice interface (done!)\n• Deploy Q3 2026",
  },
  {
    id: "n3",
    title: "Graduate Programme Notes",
    color: COLORS.amber,
    date: "May 30",
    content:
      "Topics this month:\n• AI Engineering — LLM fine-tuning\n• Cloud Architecture — multi-region\n• Team Leadership — mentoring WIL interns\n• Production deployment practices",
  },
]

export type Mail = {
  id: string
  from: string
  name: string
  avatar: string
  avatarColor: string
  subject: string
  time: string
  unread: boolean
  category: "opportunity" | "security" | "social" | "promo"
  body: string
}

export const GMAIL_INBOX: Mail[] = [
  {
    id: "m1",
    from: "noreply-olums@tut.ac.za",
    name: "TUT Portal",
    avatar: "TUT",
    avatarColor: "#1a237e",
    subject: "REMINDER: IT Interns West Rand — check if you qualify",
    time: "10:53 AM",
    unread: true,
    category: "opportunity",
    body: "Dear MISS. FLORAH SIBIYA,\n\nPLEASE CHECK THIS JOB IS MATCHED WITH YOUR FOS (QUALIFICATION)\n\nJOB: IT INTERNS WEST RAND\n\nPlease submit your application if you meet the requirements.\n\nRegards,\nTUT WIL Portal",
  },
  {
    id: "m2",
    from: "messages-noreply@linkedin.com",
    name: "LinkedIn",
    avatar: "in",
    avatarColor: "#0a66c2",
    subject: "Student Intern job openings in the past week",
    time: "2:37 PM",
    unread: true,
    category: "opportunity",
    body: "LinkedIn Job Alerts\n\nNew Student Intern & Graduate Developer openings matching your profile:\n\n• Software Developer Intern — Johannesburg\n• Junior React Developer — Remote (R15k-R20k)\n• IT Graduate Trainee — Pretoria\n\nView all opportunities on LinkedIn →",
  },
  {
    id: "m3",
    from: "notifications@vercel.com",
    name: "Vercel",
    avatar: "V",
    avatarColor: "#0f172a",
    subject: "New sign-in detected on your Vercel account",
    time: "11:57 AM",
    unread: true,
    category: "security",
    body: "Hello,\n\nYour Vercel account was recently signed-in from a new location:\n\nLocation: Pretoria, Gauteng, South Africa\nDevice: New browser\n\nIf this was you, no action needed. If not, secure your account at vercel.com/account.",
  },
  {
    id: "m4",
    from: "notify@updates.notion.so",
    name: "Notion",
    avatar: "N",
    avatarColor: "#333333",
    subject: "A new device logged into your account",
    time: "1:25 PM",
    unread: true,
    category: "security",
    body: "Notion Security Notice\n\nA new device logged into your Notion account.\n\nLogin method: Email Magic Link\nLocation: Pretoria, South Africa\n\nIf this wasn't you, revoke access immediately in Notion Settings → Security.",
  },
  {
    id: "m5",
    from: "messages-noreply@linkedin.com",
    name: "LinkedIn",
    avatar: "in",
    avatarColor: "#0a66c2",
    subject: "Your puzzle today is ready",
    time: "12:21 PM",
    unread: true,
    category: "social",
    body: "LinkedIn\n\nYour daily LinkedIn puzzle is ready!\n2 of your connections have already completed it.\n\nPlay now and see how you rank →",
  },
  {
    id: "m6",
    from: "deals@newsletters.takealot.com",
    name: "Takealot",
    avatar: "TK",
    avatarColor: "#0088cc",
    subject: "Shop Thanksalot deals — pay later with takealot.credit",
    time: "9:37 AM",
    unread: false,
    category: "promo",
    body: "Takealot Deals\n\nStand a chance to win 1 of 10 R5000 Takealot vouchers!\n\nShop now and enter automatically. Thousands of deals available.",
  },
]

export type LiNotif = {
  id: string
  type: "message" | "job" | "view" | "connection"
  from: string
  avatar: string
  avatarColor: string
  title: string
  body: string
  time: string
  unread: boolean
}

export const LI_NOTIFS: LiNotif[] = [
  {
    id: "n1",
    type: "message",
    from: "Hiring Manager",
    avatar: "HM",
    avatarColor: COLORS.blue,
    title: "New message: Junior Dev opportunity",
    body: "Hi Tiyani, I came across your portfolio at gwende.vercel.app and I'm impressed. We have a Junior Developer role that matches your profile...",
    time: "1h ago",
    unread: true,
  },
  {
    id: "n2",
    type: "job",
    from: "LinkedIn Jobs",
    avatar: "in",
    avatarColor: "#0a66c2",
    title: "Job match: React Developer — Remote",
    body: "DataFlow Analytics · React Developer · Remote · R45,000/month · Strong match based on your React.js (85%) skill.",
    time: "3h ago",
    unread: true,
  },
  {
    id: "n3",
    type: "view",
    from: "LinkedIn",
    avatar: "LI",
    avatarColor: COLORS.primary,
    title: "Your profile was viewed 14 times this week",
    body: "14 people viewed your profile this week — up 40% from last week. Your AI Resume Analyzer project is getting attention.",
    time: "Today",
    unread: false,
  },
  {
    id: "n4",
    type: "connection",
    from: "Tech Recruiter",
    avatar: "TR",
    avatarColor: COLORS.emerald,
    title: "New connection request from Senior Recruiter at Takealot",
    body: "A Senior Technical Recruiter at Takealot wants to connect with you. They hire developers for their engineering teams.",
    time: "Yesterday",
    unread: true,
  },
]
