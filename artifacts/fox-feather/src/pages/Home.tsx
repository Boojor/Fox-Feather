import { useState } from "react";
import "../fox-feather.css";

// TODO: Replace with the real destination email address
const CONTACT_EMAIL = "hello@foxandfeather.com";

const tickerWords = [
  "Perseverance", "Curiosity", "Reinvention", "Resilience",
  "Imagination", "Awareness", "Transformation", "Possibility", "The Hunt",
];

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (data.success === "true" || data.success === true) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="ff-footer__thankyou">
        <div className="ff-footer__thankyou-icon">✦</div>
        <h3 className="ff-footer__thankyou-title">Thank you!</h3>
        <p className="ff-footer__thankyou-text">We received your message and will be in touch shortly.</p>
        <button
          className="ff-btn--footer"
          onClick={() => { setName(""); setEmail(""); setMessage(""); setStatus("idle"); }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="ff-footer__form" onSubmit={handleSubmit}>
      <div className="ff-footer__form-row">
        <div className="ff-form-group ff-form-group--half">
          <label>Full name <span className="ff-required">*</span></label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="ff-form-group ff-form-group--half">
          <label>Email <span className="ff-required">*</span></label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="ff-form-group ff-form-group--full">
        <label>How can we help?</label>
        <textarea
          placeholder="Input your question here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      {status === "error" && (
        <p className="ff-footer__form-error">Something went wrong. Please try again or email us directly.</p>
      )}
      <button type="submit" className="ff-btn--footer" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send"}
      </button>
    </form>
  );
}

export default function Home() {
  return (
    <>
      {/* HEADER */}
      <header className="ff-header">
        <a href="#" className="ff-logo">
          <img className="ff-logo-icon" src="/assets/logo.svg" alt="Fox & Feather" />
        </a>
        <nav className="ff-nav">
          <a href="#concept" className="ff-nav-link">The concept</a>
          <a href="#about" className="ff-nav-link">Who we are</a>
          <a href="#contact" className="ff-nav-link ff-nav-link--bold">Drop us a line</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="ff-hero">
        <div className="ff-hero__title-row">
          <h1 className="ff-hero__title">Career Growth for<br />Creative Professionals</h1>
          <p className="ff-hero__subtitle">We help you transform creative energy into professional growth.</p>
        </div>
        <div className="ff-hero__images">
          <img className="ff-hero__image" src="/assets/hero-composed.png" alt="Creative professionals at work" />
        </div>
        {/* Mobile-only hero banner (≤480px) */}
        <div className="ff-hero__images--mobile">
          <img src="/assets/hero-mobile.png" alt="" />
        </div>
      </section>

      {/* PILLARS */}
      <section className="ff-pillars">
        <div className="ff-pillar">
          <div className="ff-pillar__header">
            <h3 className="ff-pillar__title ff-pillar__title--green">The Den</h3>
            <span className="ff-pillar__badge ff-pillar__badge--green">1</span>
          </div>
          <p className="ff-pillar__text ff-pillar__text--green">A safe space to rediscover your creative strengths. Here you'll uncover what truly drives you, set goals, and shape a clear plan that supports authentic growth.</p>
        </div>
        <div className="ff-pillar ff-pillar--middle">
          <div className="ff-pillar__header">
            <h3 className="ff-pillar__title ff-pillar__title--navy">The Hunt</h3>
            <span className="ff-pillar__badge ff-pillar__badge--navy">2</span>
          </div>
          <p className="ff-pillar__text ff-pillar__text--navy">Skill-building in action. Explore new tools, sharpen your instincts, and chase opportunities with clarity and confidence while tackling obstacles head-on.</p>
        </div>
        <div className="ff-pillar">
          <div className="ff-pillar__header">
            <h3 className="ff-pillar__title ff-pillar__title--orange">The Flight</h3>
            <span className="ff-pillar__badge ff-pillar__badge--orange">3</span>
          </div>
          <p className="ff-pillar__text ff-pillar__text--orange">Your transformation takes wing. Step boldly into new roles, projects, and possibilities - equipped to thrive and sustain your momentum.</p>
        </div>
      </section>

      {/* CONCEPT SECTION */}
      <section className="ff-concept" id="concept">
        <div className="ff-concept__intro">
          <h2 className="ff-concept__heading">When work feels heavy</h2>
          <p className="ff-concept__subheading">two forces typically pull in opposite directions</p>
        </div>

        <div className="ff-forces">
          <div className="ff-force">
            <h4 className="ff-force__title">Emotional Drag</h4>
            <p className="ff-force__text">Second-guessing every detail and feeling stuck.</p>
          </div>
          <div className="ff-forces__arrow">
            <img src="/assets/arrow.svg" alt="" />
          </div>
          <div className="ff-force">
            <h4 className="ff-force__title">Goal Pressure</h4>
            <p className="ff-force__text">Finish the project brief so the team can start development</p>
          </div>
        </div>

        <p className="ff-concept__bridge">Fox & Feather is a simple way to keep both forces moving in the same direction.</p>

        <div className="ff-moves">
          <div className="ff-moves__container">
            <div className="ff-move ff-move--fox">
              <h4 className="ff-move__title">Fox Move</h4>
              <p className="ff-move__text">List the three core sections the dev team truly needs, draft those first, and send them for a fast sanity check.</p>
            </div>
            <div className="ff-move ff-move--feather">
              <h4 className="ff-move__title">Feather Move</h4>
              <p className="ff-move__text">Pause, notice the doubt. Give yourself permission to make a first-pass draft that isn't perfect.</p>
            </div>
          </div>
          <img className="ff-moves__curve" src="/assets/flow-curve.svg" alt="" />
        </div>

        <img className="ff-concept__side-arrows ff-concept__side-arrows--left" src="/assets/concept-arrow-left.svg" alt="" />
        <img className="ff-concept__side-arrows ff-concept__side-arrows--right" src="/assets/concept-arrow-right.svg" alt="" />

        <div className="ff-flow">
          <div className="ff-flow__text">
            <p>Switch between them as often as you like.</p>
            <p>The rhythm itself creates momentum.</p>
          </div>
          <div className="ff-flow__arc-svg">
            <img src="/assets/flow-pills.svg" alt="" className="ff-flow__arc-layer" />
          </div>
        </div>

        <div className="ff-concept__fox-illustration">
          <img src="/assets/fox-illustration.png" alt="" />
        </div>
      </section>

      {/* TICKER + ABOUT */}
      <section className="ff-dark-section" id="about">
        <div className="ff-ticker">
          <div className="ff-ticker__track">
            {[...tickerWords, ...tickerWords].flatMap((word, i) => [
              <span key={`w-${i}`} className="ff-ticker__item">{word}</span>,
              <span key={`d-${i}`} className="ff-ticker__star"><img src="/assets/ticker-star.svg" alt="" width="10" height="10" /></span>,
            ])}
          </div>
        </div>

        <div className="ff-about">
          <div className="ff-about__inner">
            <div className="ff-about__text">
              <h2 className="ff-about__title">
                <span className="ff-about__title--yellow">Creativity</span><br />as Resilience
              </h2>
              <div className="ff-about__body">
                <p>We're Anna Axenov and Orly Boojor, designers who know exactly what it's like to feel stuck. Through our work, we've learned that creativity isn't just about making things it's a tool for perseverance that turns frustration into possibility.</p>
                <p>We created Fox & Feather to help you navigate those moments when you lose your way. We provide the method and tools to help you stop hitting the same walls and start finding smarter ways around, under, or over them.</p>
              </div>
              <div className="ff-about__cta-row">
                <a href="#contact" className="ff-btn ff-btn--green">Register for Updates</a>
                <a href="#" className="ff-about__more-details">More details</a>
              </div>
              <div className="ff-about__contact">
                <span className="ff-about__contact-label">Direct contact:</span>
                <span className="ff-about__contact-links">
                  <a href="mailto:Anna@ff.com">Anna@ff.com</a>
                  <span className="ff-about__contact-separator">&nbsp;|&nbsp;</span>
                  <a href="mailto:Orly@ff.com">Orly@ff.com</a>
                </span>
              </div>
            </div>
            <div className="ff-about__photo">
              <img className="ff-about__photo-desktop" src="/assets/about-photo.png" alt="Anna Axenov and Orly Boojor" />
              <img className="ff-about__photo-tablet" src="/assets/about-photo-tablet.png" alt="Anna Axenov and Orly Boojor" />
            </div>
          </div>
        </div>
      </section>

      {/* COMING SOON */}
      <section className="ff-coming-soon">
        <h2 className="ff-coming-soon__title">Coming Soon: A Creative First-Aid Pack</h2>
        <div className="ff-coming-soon__illustration">
          <img src="/assets/coming-soon.png" alt="Creative First-Aid Pack illustration" />
        </div>
        <p className="ff-coming-soon__text">Bite-size resources, <strong>no paywall, no fuss</strong> - that move you from pause to progress right now</p>
        <div className="ff-coming-soon__tags">
          <span className="ff-tag ff-tag--yellow">Work sheets</span>
          <span className="ff-tag ff-tag--mint">Recorded workshops</span>
          <span className="ff-tag ff-tag--lavender">Guides</span>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="ff-footer" id="contact">
        <div className="ff-footer__main">
          <div className="ff-footer__left">
            <div className="ff-footer__left-content">
              <p className="ff-footer__eyebrow">Any questions?<br />Want to get the latest Fox & Feather news?</p>
              <h2 className="ff-footer__title">Drop us a line</h2>
            </div>
            <div className="ff-footer__social">
              <a href="https://www.facebook.com/foxandfeather" target="_blank" rel="noopener noreferrer" className="ff-social-icon" aria-label="Facebook">
                <img src="/assets/social-facebook.svg" alt="Facebook" />
              </a>
              <a href="https://www.linkedin.com/company/fox-and-feather" target="_blank" rel="noopener noreferrer" className="ff-social-icon" aria-label="LinkedIn">
                <img src="/assets/social-linkedin.svg" alt="LinkedIn" />
              </a>
              <a href="https://www.instagram.com/foxandfeather" target="_blank" rel="noopener noreferrer" className="ff-social-icon" aria-label="Instagram">
                <img src="/assets/social-instagram.svg" alt="Instagram" />
              </a>
            </div>
          </div>
          <div className="ff-footer__right">
            <ContactForm />
          </div>
        </div>
        <div className="ff-footer__bottom">
          <p>All rights reserved to Fox & Feather 2025</p>
        </div>
      </footer>
    </>
  );
}
