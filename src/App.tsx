import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ArrowRight, Phone, Mail, MapPin, 
  Brain, HeartHandshake, MessageSquare, BookOpen, 
  PlayCircle, Star, Quote, MessageCircle,
  CheckCircle, XCircle, Moon, Sun, Download, ChevronDown, ChevronUp,
  Heart, Activity, Shield
} from 'lucide-react';

// --- Components ---

const Navbar = ({ darkMode, toggleDarkMode }: { darkMode: boolean, toggleDarkMode: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Therapy', href: '#expectations' },
    { name: 'Background', href: '#credentials' },
    { name: 'Media', href: '#media' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-cream/90 backdrop-blur-md py-4 border-b border-cream-alt shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="font-serif text-3xl font-medium tracking-tight text-ink">
            Dr. Parth <span className="text-pistachio-dark italic">Yoganandi</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-ink-muted hover:text-pistachio-dark transition-colors tracking-wide uppercase">
                {link.name}
              </a>
            ))}
            <button onClick={toggleDarkMode} className="text-ink-muted hover:text-pistachio-dark transition-colors">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a href="#contact" className="px-6 py-2.5 bg-pistachio-dark text-primary-foreground text-sm font-medium tracking-wide uppercase rounded-full hover:bg-pistachio transition-colors shadow-sm">
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button onClick={toggleDarkMode} className="text-ink-muted">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="text-ink" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-cream border-b border-cream-alt py-4 px-4 shadow-lg"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-ink-muted hover:text-pistachio-dark font-medium uppercase tracking-wide text-sm"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-5 py-3 bg-pistachio-dark text-primary-foreground font-medium uppercase tracking-wide text-sm rounded-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Book Appointment
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-cream">
      {/* Abstract Background Elements - Soft Organic Shapes */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-pistachio-light/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cream-alt rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-pistachio bg-surface/50 backdrop-blur-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-pistachio-dark animate-pulse" />
              <span className="text-xs font-medium text-pistachio-dark tracking-widest uppercase">Accepting New Patients</span>
            </div>
            
            <h1 className="font-serif text-6xl md:text-8xl text-ink mb-6 leading-[1.05] font-light">
              Parth <br/>
              <span className="text-pistachio-dark italic">Yoganandi</span>
            </h1>
            
            <p className="text-lg md:text-xl text-ink-muted mb-10 leading-relaxed max-w-lg font-light">
              Though I hold an M.D. in Psychiatry, my practice is exclusively dedicated to therapeutic counseling. My primary role is to listen, understand, and guide you from a place of distress to one of clarity and peace.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="px-8 py-4 bg-pistachio-dark text-primary-foreground text-sm font-medium tracking-widest uppercase rounded-full hover:bg-pistachio transition-all shadow-md hover:shadow-lg flex items-center justify-center group">
                Get in Touch
                <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://wa.me/917383655117" target="_blank" rel="noreferrer" className="px-8 py-4 bg-surface text-ink text-sm font-medium tracking-widest uppercase rounded-full hover:bg-cream-alt border border-cream-alt transition-all shadow-sm flex items-center justify-center group">
                <MessageCircle className="mr-3 w-4 h-4 text-pistachio-dark" />
                WhatsApp Me
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative border-8 border-surface shadow-2xl bg-pistachio-light/20">
              <img 
                src="/1775981384845.png" 
                alt="Dr. Parth Yoganandi" 
                className="object-cover object-[center_15%] w-full h-full scale-[1.15] sepia-[.1] hover:sepia-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-pistachio-dark/5 mix-blend-multiply" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 bg-surface relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 relative"
          >
            <div className="absolute inset-0 bg-pistachio-light rounded-3xl translate-x-4 translate-y-4" />
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative z-10 border-4 border-surface shadow-xl bg-pistachio-light/20">
              <img 
                src="/1775981384845.png" 
                alt="Dr. Parth Yoganandi Consulting" 
                className="w-full h-full object-cover object-[center_15%] scale-[1.15]"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            <h2 className="font-serif text-5xl md:text-6xl text-ink mb-8 leading-tight">
              Sometimes, the heaviest burdens <br/>
              <span className="text-pistachio-dark italic">are carried silently.</span>
            </h2>
            
            <div className="space-y-6 text-ink-muted text-lg leading-relaxed font-light">
              <p>
                If you are feeling overwhelmed, unheard, or simply exhausted by the weight of your thoughts, please know that you do not have to navigate this alone. Beyond the medical degree and clinical expertise, my primary role is to listen. I believe that true healing begins when you feel genuinely seen and understood, rather than just diagnosed.
              </p>
              <p>
                My practice is built on a simple, unwavering foundation: creating a completely safe, confidential, and stigma-free space for you to untangle your experiences. There is no judgment here—only compassion, open dialogue, and a partnership dedicated to your well-being.
              </p>
              <p>
                You deserve to feel empowered, lighter, and back in control of your own life. Healing is a collaborative journey, and taking that first step takes immense courage. When you are ready to start your healing journey, I invite you to reach out.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
              <div className="border-l border-pistachio-dark pl-6">
                <p className="font-serif text-4xl text-ink mb-1">M.D.</p>
                <p className="text-xs text-ink-muted uppercase tracking-widest">Psychiatry</p>
              </div>
              <div className="border-l border-pistachio-dark pl-6">
                <p className="font-serif text-4xl text-ink mb-1">100%</p>
                <p className="text-xs text-ink-muted uppercase tracking-widest">Therapeutic Counseling</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Expectations = () => {
  return (
    <section id="expectations" className="py-32 bg-pistachio-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl text-ink mb-6">Therapy Journey</h2>
          <p className="text-ink-muted text-lg font-light max-w-2xl mx-auto">
            My practice is dedicated exclusively to counseling and psychotherapy. Here is what our work together will look like.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-surface p-10 rounded-[2rem] shadow-sm border border-cream-alt"
          >
            <h3 className="font-serif text-3xl text-pistachio-dark mb-6 flex items-center gap-3">
              <CheckCircle className="w-8 h-8" /> What to Expect
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-ink-muted font-light"><span className="w-1.5 h-1.5 rounded-full bg-pistachio-dark mt-2.5 shrink-0" /> A safe, confidential, and judgment-free environment.</li>
              <li className="flex items-start gap-3 text-ink-muted font-light"><span className="w-1.5 h-1.5 rounded-full bg-pistachio-dark mt-2.5 shrink-0" /> Active, empathetic listening and collaborative goal-setting.</li>
              <li className="flex items-start gap-3 text-ink-muted font-light"><span className="w-1.5 h-1.5 rounded-full bg-pistachio-dark mt-2.5 shrink-0" /> Expertise in supportive counseling, Interpersonal (relationship) issues, and motivation for deaddiction.</li>
              <li className="flex items-start gap-3 text-ink-muted font-light"><span className="w-1.5 h-1.5 rounded-full bg-pistachio-dark mt-2.5 shrink-0" /> Tools and strategies for emotional regulation and resilience.</li>
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-surface p-10 rounded-[2rem] shadow-sm border border-cream-alt"
          >
            <h3 className="font-serif text-3xl text-red-400 mb-6 flex items-center gap-3">
              <XCircle className="w-8 h-8" /> What NOT to Expect
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-ink-muted font-light"><span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 shrink-0" /> Medical treatments or psychiatric medication prescriptions.</li>
              <li className="flex items-start gap-3 text-ink-muted font-light"><span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 shrink-0" /> Instant fixes or "magic cures" for complex emotional challenges.</li>
              <li className="flex items-start gap-3 text-ink-muted font-light"><span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 shrink-0" /> Unsolicited advice telling you exactly how to live your life.</li>
              <li className="flex items-start gap-3 text-ink-muted font-light"><span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 shrink-0" /> Medical diagnoses intended for insurance billing purposes.</li>
              <li className="flex items-start gap-3 text-ink-muted font-light"><span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 shrink-0" /> Treatment for medicolegal cases and acute psychological breakdown.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Credentials = () => {
  return (
    <section id="credentials" className="py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl text-ink mb-6">Professional Background</h2>
          <p className="text-ink-muted text-lg font-light max-w-3xl mx-auto leading-relaxed">
            With a foundation as an M.D. in Psychiatry and 4+ years of clinical experience in major hospitals, I have transitioned my focus entirely to therapeutic counseling. My medical background deeply informs my understanding of the human mind, allowing me to provide holistic, empathetic, and evidence-based talk therapy.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8"
          >
            <h3 className="font-serif text-2xl text-ink mb-4">Education</h3>
            <p className="text-ink-muted font-light leading-relaxed">
              M.D. in Psychiatry<br/>
              M.B.B.S.<br/>
              Certification in basic CBT and IPT
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 border-y md:border-y-0 md:border-x border-cream-alt"
          >
            <h3 className="font-serif text-2xl text-ink mb-4">Core Focus</h3>
            <p className="text-ink-muted font-light leading-relaxed">
              Therapeutic Counseling<br/>
              Emotional Regulation<br/>
              Mental Health Literacy
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8"
          >
            <h3 className="font-serif text-2xl text-ink mb-4">Languages</h3>
            <p className="text-ink-muted font-light leading-relaxed">
              English<br/>
              Hindi<br/>
              Gujarati
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Dr. Parth didn't just prescribe medication; he took the time to explain what was happening in my brain. That understanding changed everything for me.",
      author: "S. M.",
      role: "Patient"
    },
    {
      quote: "Professional, empathetic, and incredibly knowledgeable. The environment he creates feels safe and free of any judgment.",
      author: "R. K.",
      role: "Patient"
    },
    {
      quote: "His corporate wellness workshop completely shifted how our team discusses burnout and stress. Highly recommended.",
      author: "A. D.",
      role: "HR Director"
    }
  ];

  return (
    <section id="testimonials" className="py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl md:text-6xl text-ink">Words of Trust</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white p-10 rounded-[2rem] border border-cream-alt relative shadow-sm"
            >
              <Quote className="absolute top-8 right-8 w-10 h-10 text-pistachio-light opacity-50" />
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-pistachio text-pistachio" />
                ))}
              </div>
              <p className="font-serif text-xl text-ink mb-10 leading-relaxed relative z-10 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="text-ink font-medium tracking-wide">{t.author}</p>
                <p className="text-xs text-ink-muted uppercase tracking-widest mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Media = () => {
  return (
    <section id="media" className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl text-ink mb-6">Insights & Media</h2>
          <p className="text-ink-muted text-lg font-light max-w-2xl mx-auto">
            Explore my latest thoughts, articles, and video content on mental health and emotional well-being.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* LinkedIn */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group flex flex-col bg-cream p-8 rounded-3xl border border-cream-alt hover:shadow-lg transition-all"
          >
            <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-6 text-blue-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl text-ink mb-3">LinkedIn</h3>
            <p className="text-ink-muted font-light mb-8 flex-grow">
              Read my latest articles and professional insights on emotional regulation, interpersonal relationships, and mental health.
            </p>
            <a href="https://www.linkedin.com/in/dr-parth-yoganandi-b49392184?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-full px-6 py-3 bg-blue-600 text-white text-sm font-medium tracking-widest uppercase rounded-full hover:bg-blue-700 transition-colors">
              Connect & Read
            </a>
          </motion.div>

          {/* YouTube Videos */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group flex flex-col bg-cream p-8 rounded-3xl border border-cream-alt hover:shadow-lg transition-all"
          >
            <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mb-6 text-red-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </div>
            <h3 className="font-serif text-2xl text-ink mb-3">YouTube</h3>
            <p className="text-ink-muted font-light mb-8 flex-grow">
              Watch my video series where I break down complex psychological concepts into simple, actionable advice.
            </p>
            <a href="https://youtube.com/@psych_insight_with_drparth?si=6jpWCh3QaCxjmZaA" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-full px-6 py-3 bg-red-600 text-white text-sm font-medium tracking-widest uppercase rounded-full hover:bg-red-700 transition-colors">
              Watch Videos
            </a>
          </motion.div>

          {/* Instagram */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group flex flex-col bg-cream p-8 rounded-3xl border border-cream-alt hover:shadow-lg transition-all"
          >
            <div className="w-14 h-14 rounded-full bg-pink-50 flex items-center justify-center mb-6 text-pink-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.20 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </div>
            <h3 className="font-serif text-2xl text-ink mb-3">Instagram</h3>
            <p className="text-ink-muted font-light mb-8 flex-grow">
              Follow for daily mental health tips, short insights, and updates from my practice.
            </p>
            <a href="https://www.instagram.com/psychinsight_with_dr.parth?utm_source=qr&igsh=MWhwa2R0b2trZWdyag==" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-full px-6 py-3 bg-pink-600 text-white text-sm font-medium tracking-widest uppercase rounded-full hover:bg-pink-700 transition-colors">
              Follow Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-surface relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-5xl md:text-6xl text-ink mb-6">Take the first step.</h2>
            <p className="text-ink-muted text-lg mb-16 max-w-md font-light">
              Whether you have a question or are ready to book a consultation, I'm here to help. Reach out today.
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-cream rounded-full flex items-center justify-center shrink-0 border border-cream-alt">
                  <Phone className="w-6 h-6 text-pistachio-dark" />
                </div>
                <div>
                  <h4 className="text-ink font-serif text-2xl mb-2">Phone</h4>
                  <p className="text-ink-muted font-light">+91 7383655117</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-cream rounded-full flex items-center justify-center shrink-0 border border-cream-alt">
                  <Mail className="w-6 h-6 text-pistachio-dark" />
                </div>
                <div>
                  <h4 className="text-ink font-serif text-2xl mb-2">Email</h4>
                  <p className="text-ink-muted font-light">parthyoganandi21@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-cream p-10 md:p-12 rounded-[2.5rem] border border-cream-alt shadow-sm flex flex-col items-center justify-center text-center"
          >
            <div className="w-20 h-20 bg-[#25D366]/10 rounded-full flex items-center justify-center mb-6">
              <MessageCircle className="w-10 h-10 text-[#25D366]" />
            </div>
            <h3 className="font-serif text-3xl text-ink mb-4">Let's Connect</h3>
            <p className="text-ink-muted font-light mb-10 max-w-sm">
              The fastest way to reach me is directly through WhatsApp. Click below to start a secure, private conversation.
            </p>
            <a href="https://wa.me/917383655117" target="_blank" rel="noreferrer" className="w-full py-5 bg-[#25D366] text-white text-sm font-medium tracking-widest uppercase rounded-2xl hover:bg-[#20bd5a] transition-colors flex items-center justify-center shadow-lg hover:shadow-xl">
              <MessageCircle className="mr-3 w-5 h-5" />
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-cream border-t border-cream-alt pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-16 mb-16">
          <div className="md:col-span-2">
            <a href="#" className="font-serif text-3xl font-medium tracking-tight text-ink mb-6 block">
              Dr. Parth <span className="text-pistachio-dark italic">Yoganandi</span>
            </a>
            <p className="text-ink-muted max-w-sm mb-8 font-light leading-relaxed">
              M.D. Psychiatrist dedicated exclusively to compassionate therapeutic counseling and mental health literacy.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/dr-parth-yoganandi-b49392184?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-surface border border-cream-alt flex items-center justify-center text-ink-muted hover:text-blue-600 hover:border-blue-600 transition-all shadow-sm">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
              </a>
              <a href="https://youtube.com/@psych_insight_with_drparth?si=6jpWCh3QaCxjmZaA" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-surface border border-cream-alt flex items-center justify-center text-ink-muted hover:text-red-600 hover:border-red-600 transition-all shadow-sm">
                <span className="sr-only">YouTube</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://www.instagram.com/psychinsight_with_dr.parth?utm_source=qr&igsh=MWhwa2R0b2trZWdyag==" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-surface border border-cream-alt flex items-center justify-center text-ink-muted hover:text-pink-600 hover:border-pink-600 transition-all shadow-sm">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.20 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-ink font-serif text-xl mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-ink-muted hover:text-pistachio-dark transition-colors font-light">About Me</a></li>
              <li><a href="#expectations" className="text-ink-muted hover:text-pistachio-dark transition-colors font-light">Therapy</a></li>
              <li><a href="#credentials" className="text-ink-muted hover:text-pistachio-dark transition-colors font-light">Background</a></li>
              <li><a href="#media" className="text-ink-muted hover:text-pistachio-dark transition-colors font-light">Media</a></li>
              <li><a href="#contact" className="text-ink-muted hover:text-pistachio-dark transition-colors font-light">Contact</a></li>
            </ul>
          </div>

          <div>
          </div>
        </div>
        
        <div className="border-t border-cream-alt pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-ink-muted text-sm font-light text-center md:text-left">
            © {new Date().getFullYear()} Dr. Parth Yoganandi. All rights reserved. <br className="md:hidden" />
            <span className="text-xs opacity-70 mt-2 block md:inline md:mt-0 md:ml-2">
              Disclaimer: This service is for therapeutic counseling and is not a substitute for emergency medical care. If you are in crisis, please contact your local emergency services immediately.
            </span>
          </p>
          <p className="text-ink-muted text-sm font-light italic">
            Designed for clarity & peace.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SelfCareLibrary = () => {
  const [selectedResource, setSelectedResource] = useState<any>(null);

  const resources = [
    { 
      title: "The Gratitude Ledger", 
      type: "Mindfulness Practice", 
      icon: <Heart className="w-5 h-5" />,
      description: "A daily practice to counterbalance negativity bias and rewire thought patterns.",
      content: (
        <div className="space-y-8">
          <p className="text-ink-muted font-light leading-relaxed">A daily practice to counterbalance negativity bias, rewire thought patterns, and make appreciation as natural as breathing. Based on the research of Robert Emmons and Michael McCullough.</p>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-pistachio-light/30 p-6 rounded-2xl border border-cream-alt">
              <h4 className="font-serif text-xl text-pistachio-dark mb-4">The Benefits Roster</h4>
              <ul className="space-y-3 text-ink-muted font-light">
                <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-pistachio-dark shrink-0" /> Greater connection</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-pistachio-dark shrink-0" /> Increased personal joy</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-pistachio-dark shrink-0" /> Better sleep</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-pistachio-dark shrink-0" /> Regular exercise</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-pistachio-dark shrink-0" /> Lowered physical pain</li>
              </ul>
            </div>
            <div className="bg-pistachio-light/30 p-6 rounded-2xl border border-cream-alt flex flex-col justify-center">
              <h4 className="font-serif text-xl text-pistachio-dark mb-4">The Core Equation</h4>
              <div className="text-center bg-surface p-4 rounded-xl border border-cream-alt">
                <span className="block text-sm font-medium text-ink mb-1">Hyper-Specificity</span>
                <span className="block text-pistachio-dark font-bold my-1">+</span>
                <span className="block text-sm font-medium text-ink mb-1">Heart-Centered Emotion</span>
                <span className="block text-pistachio-dark font-bold my-1">=</span>
                <span className="block text-lg font-serif text-pistachio-dark">Effective Gratitude</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-2xl text-ink border-b border-cream-alt pb-2">Zooming In: Daily Prompts</h4>
            <p className="text-sm text-ink-muted font-light">Trying to color with every gratitude crayon causes paralysis. Instead, focus the lens on just one quadrant today:</p>
            
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-surface p-5 rounded-xl border border-cream-alt">
                <h5 className="font-medium text-pistachio-dark mb-2 flex items-center gap-2"><HeartHandshake className="w-4 h-4" /> The Human Network</h5>
                <ul className="space-y-2 text-sm text-ink-muted font-light list-disc list-inside">
                  <li>What is an old relationship that really helped me get to where I am?</li>
                  <li>What positive quality have I recently picked up from a friend?</li>
                  <li>How can a perceived weakness of mine actually be a strength?</li>
                </ul>
              </div>
              <div className="bg-surface p-5 rounded-xl border border-cream-alt">
                <h5 className="font-medium text-pistachio-dark mb-2 flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Today's Open Doors</h5>
                <ul className="space-y-2 text-sm text-ink-muted font-light list-disc list-inside">
                  <li>What is an opportunity I have today that most people don't?</li>
                  <li>What one thing (entirely within my control) would make today great?</li>
                  <li>What positive quality can I find within a task I think will suck today?</li>
                </ul>
              </div>
              <div className="bg-surface p-5 rounded-xl border border-cream-alt">
                <h5 className="font-medium text-pistachio-dark mb-2 flex items-center gap-2"><MapPin className="w-4 h-4" /> The Rearview Mirror</h5>
                <ul className="space-y-2 text-sm text-ink-muted font-light list-disc list-inside">
                  <li>What obstacle have I overcome that I deeply appreciate about myself?</li>
                  <li>What is a past experience that felt terrible at the time, but I can appreciate now?</li>
                  <li>What sight did I see yesterday that I found quietly enjoyable?</li>
                </ul>
              </div>
              <div className="bg-surface p-5 rounded-xl border border-cream-alt">
                <h5 className="font-medium text-pistachio-dark mb-2 flex items-center gap-2"><Star className="w-4 h-4" /> The Ordinary Magic</h5>
                <ul className="space-y-2 text-sm text-ink-muted font-light list-disc list-inside">
                  <li>Pick one physical object nearby that I love. What exactly do I love about its design?</li>
                  <li>What do I appreciate about the specific city or room I live in?</li>
                  <li>What type of art or music do I appreciate, and why does it resonate?</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    { 
      title: "Master Your Rest", 
      type: "Sleep Hygiene Guide", 
      icon: <Moon className="w-5 h-5" />,
      description: "Actionable habits to regulate your internal clock and improve sleep quality.",
      content: (
        <div className="space-y-8">
          <p className="text-ink-muted font-light leading-relaxed">Sleep hygiene is about creating the optimal environment and routines to support your body's natural circadian rhythm.</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-pistachio-light/30 p-6 rounded-2xl border border-cream-alt">
              <h4 className="font-serif text-xl text-pistachio-dark mb-4 flex items-center gap-2"><CheckCircle className="w-5 h-5" /> The Sleep "Do's"</h4>
              <ul className="space-y-4 text-ink-muted font-light">
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-pistachio-dark mt-2 shrink-0" /><div><strong className="text-ink font-medium">Stick to a Rigid Schedule:</strong> Go to bed and wake up at the same time daily, even on weekends.</div></li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-pistachio-dark mt-2 shrink-0" /><div><strong className="text-ink font-medium">Prioritize Morning Sunlight:</strong> Get 30 mins of natural light early to help regulate your circadian rhythm.</div></li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-pistachio-dark mt-2 shrink-0" /><div><strong className="text-ink font-medium">Optimize Your Sanctuary:</strong> Keep your room dark, quiet, and cool—ideally between 65°F and 68°F.</div></li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-2xl border border-red-100 dark:border-red-900/20">
              <h4 className="font-serif text-xl text-red-600 dark:text-red-400 mb-4 flex items-center gap-2"><XCircle className="w-5 h-5" /> The Sleep "Don'ts"</h4>
              <ul className="space-y-4 text-ink-muted font-light">
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" /><div><strong className="text-ink font-medium">Ditch Pre-Bed Screens:</strong> Avoid electronics 60 minutes before bed to prevent blue light from suppressing melatonin.</div></li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" /><div><strong className="text-ink font-medium">Watch the Clock on Caffeine:</strong> Stop caffeine intake at least 8 hours before bed to avoid lingering alertness.</div></li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" /><div><strong className="text-ink font-medium">Stop "Living" in Your Bed:</strong> Use your bed only for sleep and intimacy to strengthen the brain's sleep association.</div></li>
              </ul>
            </div>
          </div>

          <div className="bg-surface p-6 rounded-2xl border border-cream-alt">
            <h4 className="font-serif text-xl text-ink mb-4 text-center">Quick Reference for Evening Preparation</h4>
            <div className="grid sm:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-pistachio-light/20 rounded-xl">
                <Activity className="w-6 h-6 text-pistachio-dark mx-auto mb-2" />
                <h5 className="font-medium text-ink text-sm mb-1">Intense Exercise</h5>
                <p className="text-xs text-ink-muted">Stop 3 hours before bedtime</p>
              </div>
              <div className="p-4 bg-pistachio-light/20 rounded-xl">
                <BookOpen className="w-6 h-6 text-pistachio-dark mx-auto mb-2" />
                <h5 className="font-medium text-ink text-sm mb-1">Bedtime Routine</h5>
                <p className="text-xs text-ink-muted">Allow 60 minutes to unwind</p>
              </div>
              <div className="p-4 bg-pistachio-light/20 rounded-xl">
                <Moon className="w-6 h-6 text-pistachio-dark mx-auto mb-2" />
                <h5 className="font-medium text-ink text-sm mb-1">Napping</h5>
                <p className="text-xs text-ink-muted">Limit to 20 mins (before late afternoon)</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    { 
      title: "Progressive Muscle Relaxation", 
      type: "Somatic Reset", 
      icon: <Activity className="w-5 h-5" />,
      description: "A 20-minute experiential guide to releasing physical tension and resetting the nervous system.",
      content: (
        <div className="space-y-8">
          <p className="text-ink-muted font-light leading-relaxed">By deliberately maximizing tension, we force the muscle to fully exhaust its contractile energy. This spike allows the body to drop into a profound state of relaxation, far deeper than attempting to relax from a baseline state.</p>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-surface p-6 rounded-2xl border border-cream-alt">
              <h4 className="font-serif text-xl text-ink mb-4">Setting the Stage</h4>
              <ul className="space-y-4 text-sm text-ink-muted font-light">
                <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-pistachio-dark shrink-0" /> Sit comfortably. Keep the body loose, light, and free.</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-pistachio-dark shrink-0" /> Quiet environment, free of distraction noises.</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-pistachio-dark shrink-0" /> Eyes closed. Avoid stray thoughts and extra movements.</li>
              </ul>
            </div>

            <div className="bg-pistachio-light/30 p-6 rounded-2xl border border-cream-alt">
              <h4 className="font-serif text-xl text-pistachio-dark mb-4">The Universal Rhythm</h4>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-1 bg-surface p-3 rounded-xl text-center border border-cream-alt">
                  <span className="block text-xl font-serif text-pistachio-dark">5s</span>
                  <span className="text-[9px] uppercase tracking-widest text-ink-muted">Tense (5/10 Dial)</span>
                </div>
                <ArrowRight className="text-pistachio-dark w-4 h-4 shrink-0" />
                <div className="flex-1 bg-surface p-3 rounded-xl text-center border border-cream-alt">
                  <span className="block text-xl font-serif text-pistachio-dark">10s</span>
                  <span className="text-[9px] uppercase tracking-widest text-ink-muted">Complete Release</span>
                </div>
              </div>
              <p className="text-xs text-ink-muted text-center italic">Take 3 deep breaths between each muscle group.</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-2xl text-ink border-b border-cream-alt pb-2">The Complete JPMR Blueprint</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-surface p-4 rounded-xl border border-cream-alt">
                <h5 className="font-medium text-pistachio-dark mb-2">Zone 1: Arms</h5>
                <ul className="text-sm text-ink-muted font-light space-y-1 list-disc list-inside">
                  <li><strong>Fists & Forearms:</strong> Clench fists separately.</li>
                  <li><strong>Biceps:</strong> Bend arm up, tense biceps.</li>
                  <li><strong>Triceps:</strong> Straighten arm, tense triceps.</li>
                </ul>
              </div>
              <div className="bg-surface p-4 rounded-xl border border-cream-alt">
                <h5 className="font-medium text-pistachio-dark mb-2">Zone 2: Head & Neck</h5>
                <ul className="text-sm text-ink-muted font-light space-y-1 list-disc list-inside">
                  <li><strong>Upper Face:</strong> Wrinkle forehead.</li>
                  <li><strong>Eyes & Jaw:</strong> Squeeze eyes, bite teeth.</li>
                  <li><strong>Neck & Shoulders:</strong> Press chin down, shrug.</li>
                </ul>
              </div>
              <div className="bg-surface p-4 rounded-xl border border-cream-alt">
                <h5 className="font-medium text-pistachio-dark mb-2">Zone 3: Core</h5>
                <ul className="text-sm text-ink-muted font-light space-y-1 list-disc list-inside">
                  <li><strong>Chest:</strong> Fill lungs, hold breath.</li>
                  <li><strong>Stomach:</strong> Pull in stomach tightly.</li>
                  <li><strong>Back:</strong> Arch back away from chair.</li>
                </ul>
              </div>
              <div className="bg-surface p-4 rounded-xl border border-cream-alt">
                <h5 className="font-medium text-pistachio-dark mb-2">Zone 4: Legs</h5>
                <ul className="text-sm text-ink-muted font-light space-y-1 list-disc list-inside">
                  <li><strong>Thighs & Glutes:</strong> Squeeze tightly together.</li>
                  <li><strong>Calves:</strong> Point toes sharply toward head.</li>
                  <li><strong>Lower Legs:</strong> Point toes away from head.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    { 
      title: "Anger Management Blueprint", 
      type: "Regulation Matrix", 
      icon: <Shield className="w-5 h-5" />,
      description: "Evidence-based interventions to regulate the mind and body during distress.",
      content: (
        <div className="space-y-8">
          <p className="text-ink-muted font-light leading-relaxed">Anger is a dual-system disruption. Effective management requires interrupting the immediate physical stress response (Body/Tactical) while strategically rewiring long-term cognitive patterns (Mind/Strategic).</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-pistachio-light/30 p-6 rounded-2xl border border-cream-alt">
              <h4 className="font-serif text-xl text-pistachio-dark mb-4">Tactical (The Body)</h4>
              <p className="text-sm text-ink-muted mb-4 italic">Goal: Interrupt the physical stress response mid-trigger.</p>
              <ul className="space-y-4 text-ink-muted font-light">
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-pistachio-dark mt-2 shrink-0" /><div><strong className="text-ink font-medium">Box Breathing:</strong> Inhale 4s, Hold 4s, Exhale 4s, Hold 4s. Instantly activates the parasympathetic nervous system (Rest/Digest).</div></li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-pistachio-dark mt-2 shrink-0" /><div><strong className="text-ink font-medium">5-4-3-2-1 Grounding:</strong> 5 things you see, 4 touch, 3 hear, 2 smell, 1 taste. Forces the brain out of reactive thoughts by processing concrete data.</div></li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-pistachio-dark mt-2 shrink-0" /><div><strong className="text-ink font-medium">Progressive Muscle Relaxation:</strong> Deliberately tensing and releasing muscle groups to physically discharge stored stress.</div></li>
              </ul>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-2xl border border-blue-100 dark:border-blue-900/20">
              <h4 className="font-serif text-xl text-blue-600 dark:text-blue-400 mb-4">Strategic (The Mind)</h4>
              <p className="text-sm text-ink-muted mb-4 italic">Goal: Rewire cognitive patterns and identify triggers post-episode.</p>
              <ul className="space-y-4 text-ink-muted font-light">
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" /><div><strong className="text-ink font-medium">Cognitive Reframing:</strong> Force automatic assumptions through a reality-testing filter. (e.g., "My coworker never listens" → "They were distracted today; it's not personal").</div></li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" /><div><strong className="text-ink font-medium">Anger Journaling:</strong> A forensic tool for uncovering hidden patterns. Log data within 1-2 hours of an episode.</div></li>
              </ul>
            </div>
          </div>

          <div className="bg-surface p-6 rounded-2xl border border-cream-alt">
            <h4 className="font-serif text-xl text-ink mb-4">The Reflection Loop (Journaling)</h4>
            <div className="flex flex-wrap gap-2 text-sm text-ink-muted font-light">
              <span className="bg-cream-alt px-3 py-1 rounded-full">1. The Event (What happened?)</span>
              <ArrowRight className="w-4 h-4 my-auto text-pistachio-dark" />
              <span className="bg-cream-alt px-3 py-1 rounded-full">2. Somatic State (What did my body feel?)</span>
              <ArrowRight className="w-4 h-4 my-auto text-pistachio-dark" />
              <span className="bg-cream-alt px-3 py-1 rounded-full">3. Cognition (What thoughts ran through my mind?)</span>
              <ArrowRight className="w-4 h-4 my-auto text-pistachio-dark" />
              <span className="bg-cream-alt px-3 py-1 rounded-full">4. Reaction (What did I do?)</span>
              <ArrowRight className="w-4 h-4 my-auto text-pistachio-dark" />
              <span className="bg-cream-alt px-3 py-1 rounded-full">5. Blueprint (What will I do differently next time?)</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="resources" className="py-32 bg-pistachio-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl text-ink mb-6">Self-Care Library</h2>
          <p className="text-ink-muted text-lg font-light max-w-2xl mx-auto">
            Explore these interactive, evidence-based guides to help you navigate difficult moments, build emotional resilience, and optimize your daily routines.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {resources.map((resource, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedResource(resource)}
              className="bg-surface p-8 rounded-[2rem] border border-cream-alt shadow-sm hover:shadow-md transition-all group cursor-pointer flex flex-col h-full"
            >
              <div className="w-14 h-14 rounded-full bg-pistachio-light/50 flex items-center justify-center text-pistachio-dark mb-6 group-hover:scale-110 transition-transform">
                {resource.icon}
              </div>
              <h3 className="font-serif text-2xl text-ink mb-3">{resource.title}</h3>
              <p className="text-ink-muted font-light mb-8 flex-grow">{resource.description}</p>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-cream-alt">
                <span className="text-xs text-ink-muted uppercase tracking-widest">{resource.type}</span>
                <span className="text-pistachio-dark text-sm font-medium tracking-wide flex items-center">
                  Open Guide <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Modal */}
      <AnimatePresence>
        {selectedResource && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedResource(null)}
              className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-surface w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-[2rem] shadow-2xl relative z-10 border border-cream-alt"
            >
              <div className="sticky top-0 bg-surface/90 backdrop-blur-md border-b border-cream-alt px-8 py-6 flex justify-between items-center z-20">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-pistachio-light/50 flex items-center justify-center text-pistachio-dark">
                    {selectedResource.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-ink leading-none mb-1">{selectedResource.title}</h3>
                    <span className="text-[10px] text-ink-muted uppercase tracking-widest">{selectedResource.type}</span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedResource(null)}
                  className="w-10 h-10 rounded-full bg-cream-alt flex items-center justify-center text-ink-muted hover:text-ink hover:bg-pistachio-light transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-8">
                {selectedResource.content}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { question: "Are the sessions completely confidential?", answer: "Yes, confidentiality is a cornerstone of my practice. Everything discussed in our sessions remains strictly between us, adhering to ethical and legal guidelines." },
    { question: "Do you prescribe medication?", answer: "No, my practice is exclusively dedicated to therapeutic counseling. I do not prescribe medication." },
    { question: "How long is a typical session?", answer: "A standard counseling session lasts for 45 to 50 minutes. The frequency of sessions will be tailored to your specific needs and goals." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl text-ink mb-6">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-surface border border-cream-alt rounded-2xl overflow-hidden shadow-sm">
              <button 
                className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-serif text-xl text-ink">{faq.question}</span>
                {openIndex === i ? <ChevronUp className="w-5 h-5 text-pistachio-dark shrink-0" /> : <ChevronDown className="w-5 h-5 text-pistachio-dark shrink-0" />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-8 pb-6 text-ink-muted font-light leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/917383655117" 
      target="_blank" 
      rel="noreferrer" 
      className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform hover:shadow-xl"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="bg-cream min-h-screen text-ink selection:bg-pistachio-light selection:text-ink font-sans transition-colors duration-300">
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <main>
        <Hero />
        <About />
        <Expectations />
        <Credentials />
        <SelfCareLibrary />
        <Media />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
