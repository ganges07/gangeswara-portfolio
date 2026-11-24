import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  ExternalLink,
  GraduationCap,
  Layers,
  Mail,
  MapPin,
  Menu,
  Monitor,
  Sparkles,
  Terminal,
  X,
  Award,
} from "lucide-react";

import "./App.css";
const profile = {
  name: "Gangeswara S.",
  email: "gangess3717@gmail.com",
  github: "https://github.com/ganges07/",
  linkedin: "https://www.linkedin.com/in/gangeswara-s-48197b327/",
  leetcode: "https://leetcode.com/u/ganges07/",
};

const projects = [
  {
    number: "01",
    name: "UVAI",
    type: "AI · FOOD REDISTRIBUTION",
    description:
      "An AI-powered food redistribution platform designed to connect surplus food providers with people and organizations in need.",
    stack: ["React", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    link: profile.github,
    icon: Sparkles,
  },
  {
    number: "02",
    name: "LibraX",
    type: "FULL STACK · WEB APPLICATION",
    description:
      "A library management and automation system with book discovery, borrowing workflows, reservations, QR functionality and role-based access.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    link: profile.github,
    icon: Layers,
  },
  {
    number: "03",
    name: "Policy Impact Simulator",
    type: "DATA · GOVERNANCE",
    description:
      "A simulation platform for exploring policy scenarios and comparing governance indicators such as efficiency, transparency, trust and corruption.",
    stack: ["React", "Python", "Flask", "Pandas", "Plotly"],
    link: profile.github,
    icon: Monitor,
  },
];

const skillGroups = [
  { title: "Programming", icon: Code2, skills: ["Java", "C", "Python", "JavaScript"] },
  { title: "Frontend", icon: Monitor, skills: ["HTML", "CSS", "React", "Tailwind CSS"] },
  { title: "Database", icon: Database, skills: ["MongoDB", "PostgreSQL", "SQL"] },
  { title: "Tools", icon: Terminal, skills: ["Git", "GitHub", "VS Code"] },
];

const certifications = [
  {
    title: "GitHub Foundations",
    issuer: "Microsoft Learn",
    link: "https://learn.microsoft.com/en-us/users/gangeswaras-2091/credentials/9676d028837323b0",
  },
  {
    title: "Oracle Cloud Infrastructure AI Foundations",
    issuer: "Oracle",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=CE93D427F921D7EF0F2C67E8CE2605CCCF40CEBFAE1B9C725CFBDC12A4B64B57",
  },
  {
    title: "MongoDB Associate Developer",
    issuer: "MongoDB",
    link: "https://www.credly.com/badges/d5ccaa4e-10984248-bdb6-ff351dd9b196/public_url",
  },
];

const activities = [
  {
    role: "IEEE Education Society Treasurer",
    period: "2026 — PRESENT",
    detail: "Contributing to student community initiatives and supporting chapter activities.",
  },
  {
    role: "IEEE Student Branch Event Coordinator",
    period: "2026 — PRESENT",
    detail: "Helping coordinate technical events and student activities.",
  },
  {
    role: "IEEE Education Society EXCOM",
    period: "2025 — 2026",
    detail: "Participated in student chapter initiatives and educational events.",
  },
];

function Heading({ label, title, description }) {
  return (
    <div className="section-heading">
      <span className="section-label"><i />{label}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Experience", "#experience"],
    ["Contact", "#contact"],
  ];

  return (
    <main>
      <header className="navbar">
        <a href="#home" className="logo">
          <span>G</span><b>gangeswara.</b>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {nav.map(([name, href]) => (
            <a key={name} href={href} onClick={() => setMenuOpen(false)}>
              {name}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>
            Let's talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-bg-orb" />
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="availability">
              <span /> OPEN TO OPPORTUNITIES
            </div>

            <p className="hero-overline">HELLO, I'M GANGESWARA</p>
            <h1>
              Building ideas
              <br />
              into <span>reality.</span>
            </h1>

            <p className="hero-description">
              I'm a Computer Science student and aspiring software developer
              passionate about creating meaningful digital experiences
              through technology.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">
                Explore my work <ArrowUpRight size={17} />
              </a>
              <a href="/resume.pdf" className="btn-outline" target="_blank" rel="noreferrer">
                <Download size={16} /> Resume
              </a>
            </div>

            <div className="hero-socials">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><BriefcaseBusiness /></a>
              <a href={profile.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode"><Terminal /></a>
              <a href={`mailto:${profile.email}`} aria-label="Email"><Mail /></a>
            </div>
          </div>

          <div className="hero-art">
            <div className="art-ring ring-one" />
            <div className="art-ring ring-two" />
            <div className="art-card">
              <span className="art-small">DEVELOPER</span>
              <div className="art-letter">G<span>.</span></div>
              <div className="art-bottom">
                <span>CREATIVE THINKER</span>
                <Sparkles size={18} />
              </div>
            </div>
            <div className="float-tag tag-one"><Code2 size={17} /> Software Development</div>
            <div className="float-tag tag-two"><Sparkles size={17} /> Generative AI</div>
          </div>
        </div>

        <a className="scroll-link" href="#about">
          <span>SCROLL TO DISCOVER</span><ArrowDownRight size={16} />
        </a>
        <span className="hero-side-note">01 / 05 — INTRODUCTION</span>
      </section>

      <section className="section" id="about">
        <div className="container">
          <Heading
            label="ABOUT ME"
            title={<>Driven by curiosity.<br /><span className="gradient-text">Focused on creating.</span></>}
            description="A little about who I am and what I enjoy doing."
          />

          <div className="about-layout">
            <article className="about-panel panel">
              <span className="card-label">MY STORY</span>
              <h3>Learning today.<br />Building tomorrow.</h3>
              <p>
                I'm a third-year B.Tech Computer Science and Business Systems
                student at KPR Institute of Engineering and Technology.
                I enjoy exploring technology, solving problems and building
                applications that address real-world needs.
              </p>
              <p>
                My interests include software development, Generative AI
                and machine learning. I believe the best way to learn
                technology is to build with it.
              </p>
              <div className="location"><MapPin size={16} /> Tirupur, India</div>
            </article>

            <div className="about-side">
              <div className="stat-panel panel">
                <span className="stat-value">03<span>+</span></span>
                <p>Featured projects</p>
              </div>
              <div className="stat-panel panel">
                <span className="stat-value">03</span>
                <p>Certifications</p>
              </div>
              <div className="education-panel panel">
                <GraduationCap size={25} />
                <div>
                  <strong>B.Tech — CSBS</strong>
                  <p>KPRIET · 2024 — 2028</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="container">
          <Heading
            label="MY TOOLKIT"
            title={<>Tools I use to <span className="gradient-text">build.</span></>}
            description="Technologies and tools I'm learning and working with."
          />

          <div className="skills-grid">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <article className="skill-card panel" key={group.title}>
                  <div className="skill-top">
                    <span className="skill-icon"><Icon size={22} /></span>
                    <span className="skill-count">0{index + 1}</span>
                  </div>
                  <h3>{group.title}</h3>
                  <div className="skill-tags">
                    {group.skills.map(skill => <span key={skill}>{skill}</span>)}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="container">
          <Heading
            label="SELECTED PROJECTS"
            title={<>Ideas turned into <span className="gradient-text">products.</span></>}
            description="A selection of projects I've worked on and learned from."
          />

          <div className="project-grid">
            {projects.map(project => {
              const Icon = project.icon;
              return (
                <article className="project-card panel" key={project.number}>
                  <div className="project-card-top">
                    <span className="project-num">{project.number} / 03</span>
                    <span className="project-icon"><Icon size={23} /></span>
                  </div>
                  <span className="project-type">{project.type}</span>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="project-stack">
                    {project.stack.map(tech => <span key={tech}>{tech}</span>)}
                  </div>
                  <a href={project.link} target="_blank" rel="noreferrer" className="project-action">
                    Explore project <ArrowUpRight size={17} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section skills-section" id="experience">
        <div className="container">
          <Heading
            label="LEADERSHIP"
            title={<>Beyond the <span className="gradient-text">classroom.</span></>}
            description="Experiences that help me learn, contribute and grow."
          />

          <div className="timeline">
            {activities.map((activity, index) => (
              <article className="timeline-item panel" key={activity.role}>
                <div className="timeline-index">0{index + 1}</div>
                <div className="timeline-content">
                  <span>{activity.period}</span>
                  <h3>{activity.role}</h3>
                  <p>{activity.detail}</p>
                  <small>KPRIET · IEEE Student Branch</small>
                </div>
                <Award className="timeline-award" size={23} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="certifications">
        <div className="container">
          <Heading
            label="CERTIFICATIONS"
            title={<>Learning with <span className="gradient-text">purpose.</span></>}
            description="A few milestones from my continuous learning journey."
          />

          <div className="cert-grid">
            {certifications.map((cert, index) => (
              <a className="cert-card panel" href={cert.link} target="_blank" rel="noreferrer" key={cert.title}>
                <div className="cert-head">
                  <Award size={22} />
                  <span>0{index + 1}</span>
                </div>
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
                <div className="cert-view">View credential <ArrowUpRight size={16} /></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container">
          <div className="contact-panel">
            <div className="contact-glow" />
            <span className="section-label"><i /> GET IN TOUCH</span>
            <h2>Have an idea?<br /><span className="gradient-text">Let's make it happen.</span></h2>
            <p>I'm always open to connecting, collaborating and exploring new opportunities.</p>
            <a href={`mailto:${profile.email}`} className="btn-primary">
              Let's talk <ArrowUpRight size={17} />
            </a>
            <div className="contact-email">{profile.email}</div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <a href="#home" className="logo"><span>G</span><b>gangeswara.</b></a>
        <p>Designed & built with curiosity.</p>
        <div className="footer-socials">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><BriefcaseBusiness /></a>
          <a href={profile.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode"><Terminal /></a>
        </div>
        <span className="copyright">© {new Date().getFullYear()} Gangeswara S.</span>
      </footer>
    </main>
  );
}
