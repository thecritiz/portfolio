import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";

/* ------------------------------------------------------------------ */
/*  HERO & ABOUT                                                      */
/* ------------------------------------------------------------------ */

export const HERO_CONTENT = `
Software Engineer focused on building scalable backend systems, real-time applications, and AI-powered products. My experience spans distributed systems, observability platforms, video streaming infrastructure, and full-stack web development using React, Node.js, PostgreSQL, and cloud-native technologies.

I enjoy solving complex engineering problems, optimizing system performance, and designing products that are reliable, maintainable, and built to scale.
`;

export const ABOUT_TEXT = `
I'm a Software Engineer with experience building production-facing systems across backend engineering, real-time communication, and intelligent applications. At Amagi Media Labs, I work on large-scale media and ad-tech platforms, debugging distributed services, analyzing system telemetry, and improving operational reliability.

Outside of work, I build products ranging from WebRTC-based video conferencing platforms to real-time monitoring and alerting systems. I'm particularly interested in distributed systems, observability, databases, and the intersection of software engineering and AI.
`;

/* ------------------------------------------------------------------ */
/*  EXPERIENCE                                                        */
/* ------------------------------------------------------------------ */

export const EXPERIENCES = [
{
year: "Oct 2025 – Present",
role: "Technical Operations Intern",
company: "Amagi Media Labs",
description:
"Diagnosed and resolved production issues in large-scale ad-tech systems by analyzing backend logs, SQL datasets, and REST API responses. Debugged containerized microservices running on Kubernetes, investigated pod-level failures, and validated fixes across staging and production environments. Built internal Python/SQL scripts to automate data validation and reduce manual investigation time. Collaborated with backend engineers to reproduce bugs, verify fixes, and improve system observability through detailed incident reports and dashboards.",
technologies: [
"Python",
"SQL",
"REST APIs",
"Kubernetes",
"Docker",
"Linux",
"JIRA",
"Monitoring & Logs",
],
},
{
year: "Apr 2025 – May 2025",
role: "Software Development Intern",
company: "Matrix Media Solutions Pvt Ltd",
description:
"Built a React + Express full-stack system that automated manual order processing, reduced data-entry effort by 60%, and introduced real-time delivery tracking. Developed internal tooling and services to streamline issue resolution workflows.",
technologies: ["React", "Express.js", "PostgreSQL", "Node.js"],
},
{
year: "May 2024 – Jun 2024",
role: "Data Analytics Intern",
company: "Webrasta Technologies",
description:
"Analyzed multi-quarter business datasets using Python and Pandas, uncovering growth trends and operational insights. Developed visualization dashboards that informed marketing strategy and campaign planning.",
technologies: ["Python", "Pandas", "Matplotlib", "JavaScript"],
},
];

/* ------------------------------------------------------------------ */
/*  PROJECTS                                                          */
/* ------------------------------------------------------------------ */

export const PROJECTS = [
{
title: "Herd",
image: project1,
description:
"Peer-to-peer video conferencing platform built with WebRTC and Socket.io for low-latency communication.",
fullDescription:
"Built a real-time video conferencing platform supporting peer-to-peer media streaming, signaling, ICE negotiation, and dynamic participant management. Optimized bandwidth utilization and media delivery while maintaining low-latency communication across multiple participants.",
technologies: [
"React",
"Node.js",
"WebRTC",
"Socket.io",
"PostgreSQL",
],
github: "https://multicam-frontend.vercel.app/",
},

{
title: "Sentinel",
image: project2,
description:
"Real-time observability and alerting platform for operational monitoring and incident management.",
fullDescription:
"Developed a monitoring and alerting platform that aggregates application state data, detects missing assets and dependency failures, streams live logs, and maintains historical alert mappings. Integrated Freshdesk workflows, role-based access control, and an embedded debugging terminal to accelerate incident resolution.",
technologies: [
"React",
"Node.js",
"PostgreSQL",
"WebSockets",
"Freshdesk API",
],
},

{
title: "Finia",
image: project3,
description:
"AI-powered budgeting and spending optimization platform.",
fullDescription:
"Built a finance platform leveraging predictive analytics and NLP-based expense categorization to provide budgeting recommendations, spending insights, and financial forecasting through an intuitive dashboard.",
technologies: [
"Next.js",
"Express",
"MongoDB",
"OpenAI",
"Chart.js",
],
},

{
title: "Flick-Finder",
image: project4,
description:
"Facial emotion-based movie recommendation system using computer vision and deep learning.",
fullDescription:
"Developed a full-stack recommendation engine that detects user emotions from images using OpenCV and a CNN trained on FER2013, then recommends movies through a TF-IDF and cosine similarity ranking pipeline. Built with React and FastAPI for real-time inference.",
technologies: [
"React",
"FastAPI",
"OpenCV",
"TensorFlow",
"Keras",
"Pandas",
],
github: "https://github.com/thecritiz/expression-upgraded",
},

{
title: "Distect",
image: project5,
description:
"Real-time attentiveness monitoring using facial landmark analysis.",
fullDescription:
"Built a focus monitoring system using MediaPipe FaceMesh and OpenCV to analyze facial landmarks and detect attention levels in real time. Achieved 92% detection accuracy with sub-100ms latency through an optimized computer vision pipeline.",
technologies: [
"React",
"FastAPI",
"MediaPipe",
"OpenCV",
"Python",
],
github: "https://github.com/thecritiz/distraction-detect",
},
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
/*  BLOG                                                              */
/* ------------------------------------------------------------------ */

export const BLOGS = [
{
title: "Enhancing Gait Representations for Zero-Shot Person Identification",
date: "July 2025",
description:
"A deep dive into zero-shot gait-based person re-identification using pose sequences, deep embeddings, and privacy-preserving features.",
link: "https://medium.com/@thecritizz/enhancing-gait-representations-for-zero-shot-person-identification-challenges-methods-and-future-e1732572ee78",
},
{
title: "Follow My Blog on Medium",
date: "Ongoing",
description:
"Writing about software engineering, distributed systems, computer vision, observability, and AI-powered applications.",
link: "https://medium.com/@thecritizz",
},
];
