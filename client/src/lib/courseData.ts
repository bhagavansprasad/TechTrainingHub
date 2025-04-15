import { Video, Laptop, Award, MessageSquare } from "lucide-react";

export const courses = [
  {
    id: "generative-ai",
    title: "Comprehensive Generative AI",
    description: "Master the fundamentals of generative AI, including deep learning, GPT architectures, and practical implementation.",
    price: 899,
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/e8b98fba33-156e28c03d3d6cdcaa35.png",
    category: "Generative AI",
    duration: "8 Weeks",
    level: "Beginner to Advanced",
    trending: true,
    learningPoints: [
      "Fundamentals of neural networks and deep learning",
      "Transformer models and attention mechanisms",
      "GPT, BERT, and other large language models",
      "Building and deploying AI applications",
      "Prompt engineering and optimization",
      "Ethical considerations in AI development"
    ],
    curriculum: [
      { title: "Module 1: Introduction to Generative AI", duration: "2 hours" },
      { title: "Module 2: Deep Learning Foundations", duration: "4 hours" },
      { title: "Module 3: Transformer Architectures", duration: "3 hours" },
      { title: "Module 4: Working with LLMs", duration: "5 hours" },
      { title: "Module 5: Building AI Applications", duration: "8 hours" }
    ],
    prerequisites: [
      "Basic Python programming knowledge",
      "Familiarity with machine learning concepts",
      "Understanding of basic statistics",
      "Strong problem-solving skills"
    ],
    includes: [
      { icon: Video, text: "40+ hours of video content" },
      { icon: Laptop, text: "15 hands-on projects" },
      { icon: Award, text: "Certificate of completion" },
      { icon: MessageSquare, text: "24/7 mentor support" }
    ],
    instructor: {
      name: "Dr. Alex Johnson",
      title: "AI Research Scientist, Former Tech Lead at OpenAI",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
    }
  },
  {
    id: "python-automation",
    title: "Python Automation",
    description: "Learn how to automate repetitive tasks, build efficient workflows, and create powerful scripts using Python.",
    price: 699,
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/attached_assets/image_1744705292792.png",
    category: "Python",
    duration: "6 Weeks",
    level: "Beginner to Intermediate",
    learningPoints: [
      "Python fundamentals for automation",
      "Working with files and data",
      "Web scraping and API integration",
      "Task scheduling and monitoring",
      "Desktop and web application automation",
      "Building automation frameworks"
    ],
    curriculum: [
      { title: "Module 1: Python for Automation", duration: "3 hours" },
      { title: "Module 2: File Operations and Data Handling", duration: "4 hours" },
      { title: "Module 3: Web Scraping with Beautiful Soup", duration: "5 hours" },
      { title: "Module 4: API Integration", duration: "4 hours" },
      { title: "Module 5: Building Automation Frameworks", duration: "6 hours" }
    ],
    prerequisites: [
      "Basic programming knowledge",
      "Familiarity with command line interfaces",
      "Understanding of web concepts (HTML, HTTP)",
      "Problem-solving aptitude"
    ],
    includes: [
      { icon: Video, text: "30+ hours of video content" },
      { icon: Laptop, text: "12 hands-on projects" },
      { icon: Award, text: "Certificate of completion" },
      { icon: MessageSquare, text: "24/7 mentor support" }
    ],
    instructor: {
      name: "Michael Chen",
      title: "Senior Python Developer, Former Software Engineer at Google",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
    }
  },
  {
    id: "network-automation",
    title: "Network Automation",
    description: "Automate and optimize network configurations, management, and monitoring using modern tools and frameworks.",
    price: 799,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    category: "Network",
    duration: "10 Weeks",
    level: "Intermediate to Advanced",
    learningPoints: [
      "Network automation fundamentals",
      "Working with Ansible and Python",
      "API-driven network management",
      "Configuration management and version control",
      "Monitoring and troubleshooting automation",
      "Security and compliance automation"
    ],
    curriculum: [
      { title: "Module 1: Introduction to Network Automation", duration: "2 hours" },
      { title: "Module 2: Python for Network Engineers", duration: "5 hours" },
      { title: "Module 3: Ansible Automation", duration: "6 hours" },
      { title: "Module 4: API-Based Network Management", duration: "5 hours" },
      { title: "Module 5: Advanced Network Automation", duration: "7 hours" }
    ],
    prerequisites: [
      "Basic networking knowledge (OSI model, TCP/IP)",
      "Familiarity with network devices and configurations",
      "Basic Python programming skills",
      "Understanding of Linux/Unix environments"
    ],
    includes: [
      { icon: Video, text: "35+ hours of video content" },
      { icon: Laptop, text: "10 hands-on projects" },
      { icon: Award, text: "Certificate of completion" },
      { icon: MessageSquare, text: "24/7 mentor support" }
    ],
    instructor: {
      name: "Linda Patel",
      title: "Network Automation Engineer, Former Network Architect at Cisco",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
    }
  },
  {
    id: "database-automation",
    title: "Database Administration Automation",
    description: "Learn how to automate database operations, maintenance, and monitoring for improved efficiency and reliability.",
    price: 749,
    image: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    category: "Database",
    duration: "8 Weeks",
    level: "Intermediate",
    learningPoints: [
      "Database automation fundamentals",
      "Scripting database operations",
      "Automated backup and recovery",
      "Performance monitoring and tuning",
      "Security automation and compliance",
      "Data migration and transformation automation"
    ],
    curriculum: [
      { title: "Module 1: Introduction to Database Automation", duration: "3 hours" },
      { title: "Module 2: Scripting for Database Operations", duration: "5 hours" },
      { title: "Module 3: Backup and Recovery Automation", duration: "4 hours" },
      { title: "Module 4: Performance Monitoring Automation", duration: "4 hours" },
      { title: "Module 5: Security and Compliance Automation", duration: "5 hours" }
    ],
    prerequisites: [
      "Basic SQL knowledge",
      "Understanding of database concepts",
      "Basic scripting or programming experience",
      "Familiarity with database systems (MySQL, PostgreSQL, etc.)"
    ],
    includes: [
      { icon: Video, text: "32+ hours of video content" },
      { icon: Laptop, text: "8 hands-on projects" },
      { icon: Award, text: "Certificate of completion" },
      { icon: MessageSquare, text: "24/7 mentor support" }
    ],
    instructor: {
      name: "Robert Kim",
      title: "Database Architect, Former Database Administrator at Oracle",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
    }
  }
];
