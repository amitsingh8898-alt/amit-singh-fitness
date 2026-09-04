import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const WA = "https://wa.me/918898851338";

const programs = [
  ["01", "Fat Loss", "Structured training, sustainable nutrition guidance and accountability designed around your lifestyle."],
  ["02", "Muscle Building", "Progressive strength training and practical nutrition to help you build lean, functional muscle."],
  ["03", "Strength & Fitness", "Build strength, conditioning, mobility and confidence with focused coaching."],
  ["04", "Online Coaching", "Personalised programming, check-ins and progress tracking wherever you train."]
];

const testimonials = [
   
["“Structured training designed around your fitness goal, current level and progress.”", "Personal Training"],
["“Clear guidance, practical workouts and consistent accountability throughout your journey.”", "Client Experience"],
["“Simple, sustainable fitness — focused on getting stronger, fitter and more confident.”", "Training Approach"]
];


function App() {
  const [form, setForm] = useState({name:"", phone:"", goal:"Fat Loss", message:""});
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const text = `Hi Amit, I want to start personal training.%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AGoal: ${form.goal}%0AMessage: ${form.message}`;
    window.open(`${WA}?text=${text}`, "_blank");
    setSent(true);
  };

  return (
    <>
      <header className="nav">
        <a className="brand" href="#home">AMIT <span>SINGH</span></a>
        <nav>
          <a href="#programs">Programs</a>
          <a href="#about">About</a>
          <a href="#results">Results</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <a className="nav-cta" href={WA} target="_blank">WhatsApp</a>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-copy">
            <p className="eyebrow">PERSONAL TRAINING • MUMBAI</p>
            <h1>BUILD A BODY<br/><i>YOU’RE PROUD OF.</i></h1>
            <p className="lead">Personalised training. Practical nutrition. Expert coaching. Real accountability.</p>
            <div className="actions">
              <a className="button primary" href="#contact">START YOUR TRANSFORMATION <span>→</span></a>
              <a className="button ghost" href={WA} target="_blank">WHATSAPP AMIT</a>
            </div>
            <div className="proof">
              <div><strong>1:1</strong><span>Personal coaching</span></div>
              <div><strong>100%</strong><span>Goal-focused plans</span></div>
              <div><strong>360°</strong><span>Training + guidance</span></div>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-label">AMIT SINGH<br/><span>PERSONAL TRAINER</span></div>
          </div>
        </section>

        <section className="statement">
          <p className="eyebrow">THE AMIT SINGH METHOD</p>
          <h2>NO GUESSWORK.<br/><span>JUST A CLEAR PLAN.</span></h2>
          <div className="method">
            {["ASSESS", "PLAN", "TRAIN", "TRACK", "TRANSFORM"].map((x,i)=><div key={x}><b>0{i+1}</b><strong>{x}</strong></div>)}
          </div>
        </section>

        <section id="programs" className="section">
          <div className="section-head">
            <div><p className="eyebrow">01 / PROGRAMS</p><h2>TRAIN FOR<br/><i>YOUR GOAL.</i></h2></div>
            <p>Every body is different. Your training should be too.</p>
          </div>
          <div className="program-grid">
            {programs.map(([n,t,d])=><article className="program" key={t}><span>{n}</span><h3>{t}</h3><p>{d}</p><a href="#contact">ENQUIRE →</a></article>)}
          </div>
        </section>

        <section id="about" className="about">
          <div className="about-image"></div>
          <div className="about-copy">
            <p className="eyebrow">02 / YOUR COACH</p>
            <h2>COACHING THAT<br/><i>MEETS YOU WHERE YOU ARE.</i></h2>
            <p>I’m Amit Singh, a personal trainer focused on helping clients get stronger, fitter and more confident through structured, sustainable training.</p>
            <p>My approach combines personalised workouts, practical nutrition guidance, progress tracking and consistent accountability — so you always know what you’re working toward.</p>
            <div className="credentials"><span>PERSONAL TRAINING</span><span>CPR</span><span>WEIGHT LOSS</span><span>BOXING</span><span>MAT PILATES</span></div>
          </div>
        </section>

        <section id="results" className="section results">
          <div className="section-head">
            <div><p className="eyebrow">03 / RESULTS</p><h2>REAL WORK.<br/><i>REAL CHANGE.</i></h2></div>
            <p>Transformation stories will be replaced with your real client results when you're ready.</p>
          </div>
          <div className="transforms">
            <div className="transform t1"><span>TRANSFORMATION</span><b>01</b></div>
            <div className="transform t2"><span>STRENGTH</span><b>02</b></div>
            <div className="transform t3"><span>FAT LOSS</span><b>03</b></div>
          </div>
        </section>

  

        <section className="testimonials">
          <p className="eyebrow">05 / CLIENT WORDS</p>
          <div className="quote-grid">{testimonials.map(([q,n])=><blockquote key={n}><p>{q}</p><footer>{n}</footer></blockquote>)}</div>
        </section>
<section className="faq">
  <p className="eyebrow">06 / FAQ</p>
  <h2>QUESTIONS?<br/><i>ANSWERS.</i></h2>

  <div className="faq-grid">
    <div>
      <strong>WHERE DO YOU TRAIN?</strong>
      <p>Personal training is available in Mumbai. Online coaching is also available.</p>
    </div>

    <div>
      <strong>WHAT GOALS DO YOU HELP WITH?</strong>
      <p>Fat loss, muscle building, strength, general fitness and better overall conditioning.</p>
    </div>

    <div>
      <strong>DO I NEED GYM EXPERIENCE?</strong>
      <p>No. Training is adapted to your current fitness level and experience.</p>
    </div>

    <div>
      <strong>HOW DO I GET STARTED?</strong>
      <p>Fill in the contact form or WhatsApp me directly. We’ll discuss your goal and the right plan.</p>
    </div>
  </div>
</section>
        <section id="contact" className="contact">
          <div>
            <p className="eyebrow">07 / START HERE</p>
            <h2>READY TO<br/><i>GET STARTED?</i></h2>
            <p>Tell me your goal. We’ll work out the right next step.</p>
            <a className="contact-line" href="tel:+918898851338">+91 88988 51338</a>
            <a className="contact-line" href="mailto:amitsingh8898@gmail.com">amitsingh8898@gmail.com</a>
          </div>
          <form onSubmit={submit}>
            <label>NAME<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your name"/></label>
            <label>PHONE<input required value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="Your number"/></label>
            <label>GOAL<select value={form.goal} onChange={e=>setForm({...form,goal:e.target.value})}><option>Fat Loss</option><option>Muscle Building</option><option>Strength</option><option>General Fitness</option><option>Online Coaching</option></select></label>
            <label>MESSAGE<textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Tell me a little about your goal"/></label>
            <button className="button primary" type="submit">SEND ON WHATSAPP →</button>
            {sent && <p className="sent">WhatsApp opened — send the message to Amit.</p>}
          </form>
        </section>
      </main>

      <footer className="footer"><span>© 2026 AMIT SINGH PERSONAL TRAINING</span><span>INSTAGRAM / YOUTUBE / FACEBOOK — COMING SOON</span></footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
