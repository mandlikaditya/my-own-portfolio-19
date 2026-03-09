import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Terminal, ChevronDown, Download } from "lucide-react";

const titles = ["DevOps Engineer", "Cloud Architect", "CI/CD Specialist", "Automation Expert"];

const HeroSection = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, titleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Animated grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'linear-gradient(hsl(142 70% 45%) 1px, transparent 1px), linear-gradient(90deg, hsl(142 70% 45%) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, hsl(142 70% 45% / 0.15) 0%, transparent 70%)' }}
      />

      {/* Floating orbs */}
      <div className="absolute top-20 right-20 w-3 h-3 rounded-full bg-primary/30 animate-float" />
      <div className="absolute bottom-40 left-16 w-2 h-2 rounded-full bg-accent/40 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-40 left-1/4 w-1.5 h-1.5 rounded-full bg-primary/20 animate-float" style={{ animationDelay: '4s' }} />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8"
        >
          <Terminal className="w-4 h-4 text-primary" />
          <span className="font-display text-sm text-primary">Available for opportunities</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-sans text-6xl md:text-8xl font-bold tracking-tight mb-4"
        >
          <span className="text-foreground">Aditya</span>
          <br />
          <span className="text-gradient">Mandlik</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="h-10 flex items-center justify-center mb-6"
        >
          <span className="font-display text-xl md:text-2xl text-muted-foreground">
            {">"} {displayed}
            <span className="text-primary animate-blink">▌</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Engineering resilient cloud infrastructure, automating everything, 
          and building CI/CD pipelines that scale from zero to millions.
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mb-12"
        >
          {[
            { value: "99.5%", label: "Uptime Maintained" },
            { value: "15+", label: "Tasks Automated" },
            { value: "10+", label: "Services Deployed" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="stat-number">{stat.value}</div>
              <div className="text-xs text-muted-foreground font-display mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-display text-sm font-semibold hover:shadow-[0_0_40px_hsl(142_70%_45%/0.4)] transition-all duration-300"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-border bg-card text-foreground font-display text-sm font-semibold hover:glow-border transition-all duration-300"
          >
            View Projects
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground animate-bounce" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
