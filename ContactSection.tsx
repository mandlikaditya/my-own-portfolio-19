import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-28 px-6 relative">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        background: 'radial-gradient(ellipse at center, hsl(142 70% 45% / 0.2) 0%, transparent 60%)'
      }} />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="section-label">// contact</span>
          <h2 className="section-title mb-4">Let's Build Something</h2>
          <p className="text-lg text-muted-foreground">
            Open to Linux System Admin, DevOps, SRE, and Cloud Engineering opportunities.<br />
            Work Authorization: F-1 OPT / STEM OPT with EAD.
          </p>
        </motion.div>

        <motion.a
          href="mailto:adityamandlik17@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="inline-flex items-center gap-3 px-8 py-5 rounded-2xl border border-primary/30 bg-primary/5 text-foreground font-display text-lg hover:glow-border-intense transition-all duration-500 mb-8 group"
        >
          <Mail className="w-5 h-5 text-primary" />
          adityamandlik17@gmail.com
          <ArrowUpRight className="w-4 h-4 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-6"
        >
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" /> Chicago, IL
          </span>
          <a href="tel:+18722883281" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Phone className="w-4 h-4" /> (872) 288-3281
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-4 mt-8"
        >
          <a href="https://www.linkedin.com/in/aditya-mandlik-9065281a9" target="_blank" rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://github.com/mandlikaditya" target="_blank" rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300">
            <Github className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
