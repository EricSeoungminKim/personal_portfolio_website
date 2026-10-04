import Link from "next/link";
import { email, github, linkedin } from "@/data/portfolio";

export default function ContactPage() {
  return (
    <section className="contact-page section-shell">
      <div className="subpage-top"><Link href="/" className="text-link">← Back home</Link><span>CONTACT / LOS ANGELES</span></div>
      <div className="eyebrow"><span>START A CONVERSATION</span></div>
      <h1>Have a project<br />in <em>mind?</em></h1>
      <p>Whether it’s an engineering challenge, a product idea, or a conversation about building things well, I’d like to hear from you.</p>
      <a className="contact-email" href={"mailto:" + email}>{email}<span aria-hidden="true">↗</span></a>
      <div className="contact-page-links"><a href={github} target="_blank" rel="noopener noreferrer">GITHUB ↗</a><a href={linkedin} target="_blank" rel="noopener noreferrer">LINKEDIN ↗</a><a href="/Seoungmin_Kim_Resume.pdf" target="_blank" rel="noopener noreferrer">RÉSUMÉ ↗</a></div>
    </section>
  );
}
