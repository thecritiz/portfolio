import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

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
"Developed a monitoring and alerting platform that aggregates application state data, detects missing assets and dependency failures, streams live logs, and maintains historical alert mappings. Integrated Freshdesk ticketing workflows, role-based access control, and an embedded debugging terminal to accelerate incident resolution.",
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
];
