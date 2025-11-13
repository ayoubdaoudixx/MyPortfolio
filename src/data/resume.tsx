import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Ayoub Daoudi",
  initials: "AD",
  url: "https://your-portfolio-link.com",
  location: "Casablanca, Morocco",
  locationLink: "https://www.google.com/maps/place/Casablanca,+Morocco",
  description:
    "Data Scientist & AI Engineer passionate about building intelligent data-driven systems and AI-powered applications.",
  summary:
    "I am a Data Scientist and AI Engineer with hands-on experience in Machine Learning, NLP, Generative AI, and Cloud Computing. I’ve contributed to academic and industrial projects that leverage AI and automation to improve decision-making and optimize performance. My early background in customer service and extra-curricular activities helped me build strong analytical thinking and communication skills, which now complement my work as an AI engineer. My goal is to design innovative and scalable AI solutions for real-world challenges.",

  avatarUrl: "/me.png",

  skills: [
    "Python",
    "JavaScript",
    "TypeScript",
    "Java",
    "Scala",
    "SQL",
    "Spark",
    "TensorFlow",
    "PyTorch",
    "Keras",
    "Scikit-Learn",
    "Pandas",
    "NumPy",
    "OpenCV",
    "LangChain",
    "LlamaIndex",
    "Hugging Face",
    "LLM",
    "RAG",
    "Azure",
    "AWS",
    "Snowflake",
    "Git",
    "Docker",
    "Streamlit",
    "Dataiku",
    "MLOps",
    "SalesForce",
  ],

  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],

  contact: {
    email: "ayoubdaoudi2001@gmail.com",
    tel: "+212717270056",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ayoub-daoudi-7735a9228/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/",
        icon: Icons.x,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/",
        icon: Icons.github,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:ayoubdaoudi2001@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Lab-STICC — IMT Atlantique Brest",
      href: "https://imt-atlantique.fr",
      badges: [],
      location: "Brest, France",
      title: "AI & Software Engineer Intern",
      logoUrl: "/labsticc.png",
      start: "Mar 2024",
      end: "Aug 2024",
      description:
        "Developed a VS Code extension to detect GitHub Copilot usage during coding sessions. Reviewed research papers via Zotero, explored the VS Code Extension API, and designed detection scenarios using TypeScript. Applied process mining for data analysis and managed version control with GitLab.",
    },
    {
      company: "Technocolabs",
      href: "https://technocolabs.com",
      badges: [],
      location: "Indore, India",
      title: "Data Science & ML Engineer Intern",
      logoUrl: "/technocolabs.png",
      start: "Jul 2023",
      end: "Sep 2023",
      description:
        "Developed an ML web app for company bankruptcy prediction. Conducted ELT, Exploratory Data Analysis, feature engineering, and model tuning (SVM, Random Forest, XGBoost) reaching 94% accuracy. Deployed using Flask on AWS and designed a responsive front-end with HTML, CSS, and Figma.",
    },
    {
      company: "Proface",
      href: "https://technocolabs.com",
      badges: [],
      location: "Marrakesh, Maroc",
      title: "Data Scientist",
      logoUrl: "/proface.png",
      start: "Aug 2022",
      end: "Sep 2022",
      description:
        "Collect and prepare data in the context of a system that can read, extrct and recognize words in text document for retrieiving important information",
    },
  ],

  otherwork: [
    {
      company: "TELUS Digital",
      href: "https://www.telusdigital.com/",
      badges: [],
      location: "Casablanca, Maroc",
      title: "TBS B2B Customer Support",
      logoUrl: "/telus.png",
      start: "Mai 2025",
      end: "Aug 2025",
      description:
        "Assisted business clients in monitoring their Telus Wireless Business subscriptions, managing billing, plans, and device purchases.\nUtilized Salesforce to manage client data and streamline service requests.\nContributed to the sales process by recommending service add-ons and optimizing subscription plans based on client needs.",
    },

    {
      company: "Concentrix",
      href: "https://jobs.concentrix.com/fr/",
      badges: [],
      location: "Marrakesh, Morocco",
      title: "Trade Support Agent B2B",
      logoUrl: "/concentrix.png",
      start: "Oct 2024",
      end: "Feb 2025",
      description:
      "Supported travel agencies in booking and managing holiday packages through B2B channels.\nGained hands-on experience with Salesforce CRM and Amazon Connect, improving workflow efficiency and customer interaction tracking.\nDeveloped strong communication and analytical skills while assisting partners in resolving booking and account-related issues."
    },
    {
      company: "Club Sportif d'Arts et Metiers (CSAM-ENSAM)",
      href: "",
      badges: [],
      location: "Casablanca, Morocco",
      title: "President",
      logoUrl: "/csam.png",
      start: "2021",
      end: "2023",
      description:
      "Led the school’s sports club, coordinating a team of students to organize internal and inter-university sports activities.\nDeveloped strong leadership, teamwork, and negotiation skills through collaboration with faculty, sponsors, and student associations.\nEstablished partnerships and built connections with sports clubs from other universities across Morocco.\nSuccessfully organized and participated in multiple university-level competitions and national sporting events, enhancing school visibility and student engagement.."
    },
  ],

  education: [
    {
      school: "École Nationale Supérieure d'Arts et Métiers\n(ENSAM) Casablanca",
      href: "https://ensam-casa.ma",
      degree: "Diplôme d’Ingénieur – Intelligence Artificielle & Génie Informatique",
      logoUrl: "/ensam.png",
      start: "2019",
      end: "2024",
      name: "ENSAM Casablanca",
    },
    {
      school: "Lycée Boumalne Dades",
      href: "#",
      degree: "Diplôme de Baccalauréat Science Mathématique Option A",
      logoUrl: "/school.png",
      start: "2018",
      end: "2019",
      name: "ENSAM Casablanca",
    },
  ],

  projects: [
    {
      title: "LinkedShoot.AI",
      href: "https://www.linkedshoot.com/",
      dates: "2025",
      active: true,
      description:
        "Application web utilisant Google Gemini AI pour transformer des photos en portraits professionnels LinkedIn. Développée avec React, TypeScript, et Supabase pour l’authentification et la gestion des utilisateurs, incluant un système de crédits via Lemon Squeezy et une interface PWA fluide et responsive..",
      technologies: ["Gemini API", "Supabase", "Lemon Squeezy", "React", "TypeScript", "PWA"],
      links: [
        { icon: <Icons.github className="h-3 w-3" />, type: "GitHub", href: "https://github.com/" },
      ],
      image: "/linkedshot.png",
    },
    {
      title: "ATS Resume Optimizer",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Created a web-based AI tool leveraging the Gemini API to analyze and optimize resumes for ATS compatibility, including PDF upload, OCR, and real-time editing.",
      technologies: ["Gemini API", "Python", "Streamlit", "OCR"],
      links: [
        { icon: <Icons.github className="h-3 w-3" />, type: "GitHub", href: "https://github.com/" },
      ],
      image: "/project2.png",
    },
    {
      title: "Bankrupcty Predictor",
      href: "",
      dates: "2023",
      active: true,
      description:
        "Developed an ML web app for company bankruptcy prediction. Conducted ELT, Exploratory Data Analysis, feature engineering, and model tuning (SVM, Random Forest, XGBoost) reaching 94% accuracy. Deployed using Flask on AWS and designed a responsive front-end with HTML, CSS, and Figma.",
      technologies: ["Python", "Pandas", "Matplotlib", "XGBoost", "Flask", "AWS", "JavaScript" , "Figma"],
      links: [
        { icon: <Icons.github className="h-3 w-3" />, type: "GitHub", href: "https://github.com/ayoubdaoudixx/bankruptcy-predictor-ML-web-app" },
      ],
      image: "/project1.png",
    },
    {
      title: "MASI Index Performance Prediction",
      href: "https://masi-index-predictor.vercel.app/",
      dates: "2023",
      active: true,
      description:
        "Developed forecasting models (ARIMA, SARIMA, LSTM) for predicting the Moroccan MASI index using market and macroeconomic data with Pandas, Matplotlib, and Seaborn.",
      technologies: ["Python", "Pandas", "Matplotlib", "LSTM"],
      links: [
        { icon: <Icons.github className="h-3 w-3" />, type: "GitHub", href: "https://github.com/ayoubdaoudixx/masi-index-predictor" },
      ],
      image: "/project4.png",
    },
    {
      title: "Sales Insights Dashboard",
      href: "#",
      dates: "2023",
      active: true,
      description:
        "Created a Power BI dashboard to visualize and analyze sales trends for improved business insights.",
      technologies: ["Power BI", "Data Analysis", "Visualization"],
      links: [
        { icon: <Icons.github className="h-3 w-3" />, type: "GitHub", href: "https://github.com/" },
      ],
      image: "/project5.png",
    },
  ],

  // CERTIFICATIONS SECTION — repurposed from hackathons
  certification: [
    {
      title: "IBM Data Science Professional Certificate",
      dates: "In Progress ...",
      location: "Coursera",
      description:
        "Foundational certification validating knowledge of AI concepts, Azure Machine Learning, and responsible AI practices.",
      image: "/ibm.png",
      links: [],
    },
    {
      title: "Huawei Certification: HCIP 5G",
      dates: "Completed: 30 Dec 2022",
      location: "Huawei Certification",
      description:
        "Professional certification in 5G networks and services.",
      image: "/huawei5G.png",
      links: [
        {
          title: "View Certification",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "/Huawei-5G.pdf"
        }
      ],
    },
    {
      title: "Team Work Skills: Communicating Effectively in Groups",
      dates: "Completed: 10 jun 2022",
      location: "Coursera | University Of Colorado",
      description:
        "Professional certificate in team work skills, communication, and collaboration.",
      image: "/coursera.png",
      links: [
        {
          title: "View Certification",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "/Capture.png"
        }
      ],
    },
    {
      title: "Design Thinking For Innovation",
      dates: "Completed: 30 Dec 2021",
      location: "Coursera | Darden School Of Business",
      description:
        "Professional certificate in design thinking for innovation.",
      image: "/coursera.png",
      links: [
        {
          title: "View Certification",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "/Design_thinking.pdf"
        }
      ],
    },
    {
      title: "NDG Linux UNHATCHED",
      dates: "Completed: 25 Nov 2021",
      location: "Cisco Networking Academy",
      description:
        "Professional certificate in Linux for networking.",
      image: "/NDGLinux.png",
      links: [
        {
          title: "View Certification",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "/AyoubDaoudi-Système dexploit-certificate.pdf"
        }
      ],
    },
  ],
} as const;
