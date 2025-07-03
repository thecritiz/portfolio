import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

 // Facial-expression system
// If you keep only one project, you can delete project2–4 imports

/* ------------------------------------------------------------------ */
/*  HERO & ABOUT                                                      */
/* ------------------------------------------------------------------ */

export const HERO_CONTENT = `I'm an aspiring full-stack developer and final-year B.Tech (CSE) student who loves turning data-driven ideas into production-ready web apps. Through internships at Matrix Media Solutions and Webrasta Technologies, I’ve built real-time dashboards, automation pipelines, and end-to-end React + Node solutions with PostgreSQL/MongoDB backends. My goal is to keep shipping clean, scalable code that solves real business problems.`;

export const ABOUT_TEXT = `Currently finishing my B.Tech at Christ University, I’ve accumulated hands-on experience in JavaScript/TypeScript, React, Node.js, Express, SQL, and Python data-science tooling (Pandas, Seaborn). I enjoy collaborative problem-solving—whether that’s automating order workflows or extracting insights from multi-gigabyte datasets. When I’m not coding, you’ll find me exploring new ML libraries or contributing to open-source.`;

/* ------------------------------------------------------------------ */
/*  EXPERIENCE                                                        */
/* ------------------------------------------------------------------ */

export const EXPERIENCES = [
  {
    year: "Apr 2025 – May 2025",
    role: "Software Development Intern",
    company: "Matrix Media Solutions Pvt Ltd",
    description:
      "Built a React + Express full-stack system that automated manual order processing, cut data-entry time by 60%, and added real-time delivery-status tracking. Implemented a maintenance-logging microservice for faster issue resolution.",
    technologies: ["React", "Express.js", "PSQL", "Node.js"],
  },
  {
    year: "May 2024 – Jun 2024",
    role: "Data Analytics Intern",
    company: "Webrasta Technologies",
    description:
      "Cleaned and analysed multi-quarter business datasets with Pandas, surfaced a 25% user-growth vs 8% revenue-growth gap, and built Seaborn/Matplotlib dashboards that informed marketing strategy and campaign scheduling.",
    technologies: ["Python", "Pandas", "Seaborn", "JavaScript"],
  },
];

/* ------------------------------------------------------------------ */
/*  PROJECTS                                                          */
/* ------------------------------------------------------------------ */

export const PROJECTS = [
  {
    title: "Facial Emotion-Based Movie Recommender",
    image: project1,
    description: "Real-time web app that recommends movies based on a user’s facial emotion. Built with React frontend, FastAPI backend, OpenCV for detection, and Keras CNN for emotion classification.",
    fullDescription:
      "Developed a full-stack real-time movie recommendation system driven by facial emotion recognition. The app captures a selfie via webcam or uploads an image, uses OpenCV and a CNN trained on FER2013 to classify the emotion, and maps it to movie genres (e.g., 'happy' → Comedy, 'sad' → Drama). A TF-IDF and cosine similarity pipeline ranks and returns the most suitable movies from a preprocessed dataset. FastAPI handles inference, and the React frontend provides a smooth, animated UI using TailwindCSS and Framer Motion.",
    technologies: [
      "FastAPI",
      "React.js",
      "TailwindCSS",
      "OpenCV",
      "TensorFlow/Keras",
      "Pandas",
    ],
    github: "https://github.com/thecritiz/expression-upgraded",
  },
  // more...
];



/* ------------------------------------------------------------------ */
/*  CONTACT                                                           */
/* ------------------------------------------------------------------ */

export const CONTACT = {
  address: "Bengaluru, Karnataka, India",
  phoneNo: "+91 75959 72638",
  email: "main.adityapandey@gmail.com",
};
/* ------------------------------------------------------------------ */
/*  BLOG                                                           */
/* ------------------------------------------------------------------ */
/* ------------------------------------------------------------------ */
/*  BLOG                                                              */
/* ------------------------------------------------------------------ */

export const BLOGS = [
  {
    title: "Zero-Shot Gait Re-identification: A Privacy-Conscious Approach",
    date: "June 2025",
    description:
      "An in-depth technical guide on building a gait-based person re-identification system using pose, motion, and zero-shot learning — ideal for privacy-respecting surveillance.",
    link: "https://medium.com/@thecritizz/zero-shot-gait-reidentification-a-privacy-conscious-approach-xyz123",
  },
  {
    title: "Follow My Blog on Medium",
    date: "Ongoing",
    description:
      "I regularly post about full-stack projects, machine learning, CV-based systems, and deployment pipelines. Stay updated with hands-on guides and technical insights.",
    link: "https://medium.com/@thecritizz",
  },
];
