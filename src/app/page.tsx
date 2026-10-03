import Image from "next/image";
import Link from "next/link";
import { ProjectFeature } from "@/app/_components/project-feature";
import { Reveal } from "@/app/_components/reveal";
import { email, experience, github, hackathons, linkedin, projects } from "@/data/portfolio";

export default function HomePage() {
  return (
    <>
      <section className="hero section-shell" id="top">
        <div className="hero-kicker"><span className="status-dot" /> SOFTWARE ENGINEER <span className="hero-kicker-divider" /> LOS ANGELES, CA</div>
        <h1 className="hero-name"><span>SEOUNGMIN</span><span>KIM<span className="hero-period">.</span></span></h1>
        <div className="hero-bottom">
          <div className="hero-intro">
            <p>Building <em>dependable systems</em> and digital products that make complex things feel simple.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">Explore my work <span aria-hidden="true">↘</span></a>
              <a className="text-link" href="/Seoungmin_Kim_Resume.pdf" target="_blank" rel="noopener noreferrer">View résumé <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="portrait-block">
            <div className="portrait-shape"><Image src="/headshot.jpg" alt="Portrait of Seoungmin Kim" width={200} height={200} priority /></div>
            <span className="portrait-note">UCLA ’27 <span aria-hidden="true">↗</span><br />ELECTRICAL ENGINEERING</span>
          </div>
        </div>
        <div className="hero-footer"><span>SCROLL TO EXPLORE</span><span>01 — 05</span></div>
      </section>

      <div className="ticker" aria-hidden="true"><div className="ticker-track">ENGINEERED WITH INTENT <span>✳</span> BUILT FOR PEOPLE <span>✳</span> ENGINEERED WITH INTENT <span>✳</span> BUILT FOR PEOPLE <span>✳</span></div></div>

      <section className="work-section" id="work">
        <div className="section-shell">
          <Reveal className="section-heading work-heading">
            <div className="eyebrow"><span>01 / SELECTED WORK</span><span>2025 — 2026</span></div>
            <div className="heading-row"><h2>Ideas into <em>impact.</em></h2><p>From infrastructure to interface, I build and ship across the full stack.</p></div>
          </Reveal>
          <div className="project-list">
            {projects.map((project, index) => <Reveal key={project.slug} delay={index * 0.07}><ProjectFeature project={project} /></Reveal>)}
          </div>
          <Reveal className="work-outro"><Link href="/projects" className="text-link text-link-light">A closer look at the projects <span aria-hidden="true">↗</span></Link></Reveal>
        </div>
      </section>

      <section className="experience-section section-shell" id="experience">
        <Reveal className="section-heading">
          <div className="eyebrow"><span>02 / EXPERIENCE</span><span>THINGS I’VE BUILT WITH OTHERS</span></div>
          <div className="heading-row"><h2>Where I’ve <em>worked.</em></h2><p>Engineering at the intersection of product, reliability, and real-world use.</p></div>
        </Reveal>
        <div className="experience-list">
          {experience.map((item, index) => <Reveal className="experience-row" key={item.company} delay={index * 0.06}>
            <span className="experience-number">0{index + 1}</span>
            <div className="experience-main"><h3>{item.role}</h3><p>{item.company} <span className="experience-location">/ {item.location}</span></p><p className="experience-description">{item.description}</p></div>
            <span className="experience-period">{item.period}</span>
          </Reveal>)}
        </div>
      </section>

      <section className="hackathons-section" id="hackathons">
        <div className="section-shell">
          <Reveal className="section-heading">
            <div className="eyebrow"><span>03 / HACKATHONS</span><span>IDEAS MADE TOGETHER</span></div>
            <div className="heading-row"><h2>Built in a <em>weekend.</em></h2><p>Short deadlines, new teammates, and ideas made real.</p></div>
          </Reveal>
          <div className="hackathon-grid">
            {hackathons.map((item, index) => <Reveal key={item.event} className="hackathon-card" delay={index * 0.08}>
              <div className="hackathon-card-top"><span>0{index + 1} / {item.event}</span><span aria-hidden="true">✳</span></div>
              <div><p className="hackathon-result">{item.result}</p><h3>{item.project}</h3><p className="hackathon-description">{item.description}</p></div>
              <a className="text-link" href={item.url} target="_blank" rel="noopener noreferrer">View on Devpost <span aria-hidden="true">↗</span></a>
            </Reveal>)}
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="section-shell about-grid">
          <Reveal className="about-title"><div className="eyebrow"><span>04 / ABOUT</span></div><h2>Curious by<br />nature.<br /><em>Practical</em><br />by design.</h2></Reveal>
          <Reveal className="about-copy" delay={0.1}>
            <p className="about-lead">I’m Seoungmin, an Electrical Engineering student at UCLA. I like software that holds up in the details and feels straightforward to use.</p>
            <p>I’ve worked on newsroom APIs, an iOS finance app, a paper-trading engine, and tools for job seekers. The common thread is turning complicated systems into clear, dependable products.</p>
            <div className="about-facts"><div><span>BASED IN</span><strong>Los Angeles, CA</strong></div><div><span>EDUCATION</span><strong>UCLA · B.S. Electrical Engineering, 2027</strong></div><div><span>FOCUS</span><strong>Software engineering · Product systems</strong></div></div>
            <div className="about-links"><a className="text-link" href={github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a className="text-link" href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></div>
          </Reveal>
        </div>
      </section>

      <section className="contact-section section-shell" id="contact">
        <Reveal>
          <div className="eyebrow"><span>05 / CONTACT</span><span>HAVE AN IDEA?</span></div>
          <h2>Let’s make<br /><em>something</em> work.</h2>
          <a className="contact-email" href={"mailto:" + email}>{email}<span aria-hidden="true">↗</span></a>
          <div className="contact-bottom"><span>GOOD THINGS START WITH A CONVERSATION.</span><Link href="/contact" className="text-link">More ways to connect ↗</Link></div>
        </Reveal>
      </section>
    </>
  );
}
