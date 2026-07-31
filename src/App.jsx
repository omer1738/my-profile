import React from "react";
import "./App.css";
import me from "./me.png";

export default function App() {
  const profileData = {
    name: "omar aldibsawi",
    title: "Software Engineer",
    bio: "Software Engineering graduate passionate about Artificial Intelligence, Machine Learning, Data Analysis, and full-stack web development. Experienced in building modern web applications and solving real-world problems through technology. ",
    email: "Omerkhaled1738@gmail.com",
    github: "https://github.com/omer1738",
    linkedin: "https://www.linkedin.com/in/omer-aldibsawi-47a0713b9/?skipRedirect=true",
    
    
    career: [
      {
        role: "Fullstack web devlopment internship",
        company: "mr.bit academy ,Turkey ",
        period: "8/2024 - 9/2024",
        description: "Completed a Web Development internship at MR. Bit Academy in Istanbul, Turkey, where I gained practical experience in front-end technologies including HTML, CSS, and JavaScript, as well as back-end development using PHP. "
      },
      {
        role: " (internship 2) IT sppourt centre  ",
        company:"Protium technology , UAE ",
        period: "8/2025 - 9/2025",
        description: "Completed my second internship at an IT Support Center, where I gained hands-on experience in IT support operations, software maintenance, troubleshooting, and managing large volumes of data while ensuring system reliability and performance."
      }
    ],

  
    education: [
      {
        degree: "bachelor in software engineering",
        institution: "Uskudar university, istanbul turkey ",
        period: "2022 - 2026",
        details: "Graduated with (GPA 3.61/4.0). Focus on Data Structures, Algorithms, and Software Engineering Principles."
      }
    ],

   
    projects: [
      {
        title: "Pathwise - Job application website",
        description: "PathWise is a web-based job platform inspired by professional networking systems that connects job seekers with employment opportunities. Users can create an account, search for jobs using AI-powered recommendations based on location and relevance, and apply for available positions. The platform also includes an administrative dashboard for managing users and job postings efficiently. This project allowed me to gain practical experience in building a complete, real-world application while improving my problem-solving and software development skills",
        tech: ["React", "Next.js", "Tailwind CSS", "clerck","Sanity","AI-powered Search","Git&Github"],
        link: "https://pathwise-blush.vercel.app/"
      },
      {
      title: "Machine Learning Projects",
      description: "A collection of machine learning projects covering the complete workflow from data preprocessing and exploratory data analysis to model training, evaluation, and prediction. These projects demonstrate the practical application of supervised learning algorithms, feature engineering, and data visualization techniques while solving real-world problems using Python and popular machine learning libraries.",
      tech: ["Python", "NumPy", "Pandas", "Matplotlib", "Scikit-learn", "Jupyter Notebook", "Git & GitHub"],
      link: "https://github.com/omer1738/ML-Projects"
    },
      /*{
        title: "MicroService API Gateway",
        description: "Lightweight proxy server with rate limiting, JWT authentication, and automated logging for microservice ecosystems.",
        tech: ["Go", "Docker", "Redis", "PostgreSQL"],
        link: "#"
      }*/
    ]
  };

  return (
    <div className="portfolio-container">
      {}
      <nav className="navbar">
       
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#career">Career</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact" className="btn-contact">Contact</a></li>
        </ul>
      </nav>

      {}
      <section id="about" className="hero">
        <div className="hero-content">
          <span className="badge">Welcome to my portfolio</span>
          <h1>Hi, I'm <span className="highlight">{profileData.name}</span></h1>
          <p className="title">{profileData.title}</p>
          <p className="bio">{profileData.bio}</p>
          
          <div className="hero-actions">
            <a href="#contact" className="btn primary">Get In Touch</a>
            <a href={profileData.github} target="_blank" rel="noreferrer" className="btn secondary">GitHub</a>
            <a href={profileData.linkedin} target="_blank" rel="noreferrer" className="btn secondary">LinkedIn</a>
          </div>
        </div>







        {}
        <div className="hero-photo-wrapper">
    <img
    src={me}
    alt="Omar Aldibsawi"
    className="profile-photo"
  />
  </div>
      </section>





      

      {}
      <section id="career" className="section">
        <h2 className="section-title">Career Experience</h2>
        <div className="timeline">
          {profileData.career.map((item, index) => (
            <div key={index} className="timeline-card">
              <div className="card-header">
                <h3>{item.role} <span className="company">@ {item.company}</span></h3>
                <span className="period">{item.period}</span>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {}
      <section id="education" className="section">
        <h2 className="section-title">Education</h2>
        <div className="timeline">
          {profileData.education.map((item, index) => (
            <div key={index} className="timeline-card">
              <div className="card-header">
                <h3>{item.degree}</h3>
                <span className="period">{item.period}</span>
              </div>
              <h4 className="institution">{item.institution}</h4>
              <p>{item.details}</p>
            </div>
          ))}
        </div>
      </section>

      {}
      <section id="projects" className="section">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {profileData.projects.map((proj, index) => (
            <div key={index} className="project-card">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <div className="tech-stack">
                {proj.tech.map((t, idx) => (
                  <span key={idx} className="tech-tag">{t}</span>
                ))}
              </div>
              <a href={proj.link} className="project-link">View Project  &rarr;</a>
            </div>
          ))}
        </div>
      </section>

      {}
      <footer id="contact" className="footer">
        <h2>Let's Build Something Together</h2>
        <p>Feel free to reach out for opportunities, collaborations, or just a friendly chat.</p>
        <a href={`mailto:${profileData.email}`} className="email-link">{profileData.email}</a>
        <div className="footer-copyright">
          © {new Date().getFullYear()} {profileData.name}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}