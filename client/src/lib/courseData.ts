import { Video, Laptop, Award, MessageSquare } from "lucide-react";

export const courses = [
  {
    id: "generative-ai",
    title: "Comprehensive Generative AI",
    description: "This comprehensive Generative AI course provides professionals with practical skills to leverage Large Language Models (LLMs) for real-world applications.",
    price: 19999,
    originalPrice: 40000,
    discount: 50,
    image: "/attached_assets/gen-ai.gif",
    category: "Generative AI",
    duration: "8 - 10 Weeks",
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
    title: "Python Full-Stack",
    description: "An immersive, hands-on course to master full-stack development with Python, FastAPI, and MongoDB.",
    price: 27000,
    image: "/attached_assets/python-full-stack.png",
    category: "Full-Stack",
    duration: "8 Weeks",
    level: "Beginner to Intermediate",
    learningPoints: [
      "Python fundamentals for web development",
      "FastAPI backend development",
      "MongoDB database integration",
      "RESTful API design and implementation",
      "Frontend development with React",
      "Full-stack application deployment"
    ],
    curriculum: [
      { title: "Module 1: Python Fundamentals for Web Development", duration: "4 hours" },
      { title: "Module 2: FastAPI Framework Deep Dive", duration: "6 hours" },
      { title: "Module 3: MongoDB Database Integration", duration: "5 hours" },
      { title: "Module 4: Modern Frontend with React", duration: "7 hours" },
      { title: "Module 5: Full-Stack Project Development", duration: "8 hours" }
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
    title: "Python - Network Automation",
    description: "Python Automation in Network Administration – a hands-on course designed for Network Engineers, by Network Engineers.",
    price: 32000,
    image: "/attached_assets/network.png",
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
    title: "Python - DB Admin Automation",
    description: "A hands-on course crafted for Database Administrators ready to modernize their workflows.",
    price: 25000,
    image: "/attached_assets/db-automation.jpg",
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
