import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="font-display text-sm text-primary mb-2 block">// contact</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground">
            Open to DevOps, SRE, and Cloud Engineering opportunities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
        >
          <a
            href="mailto:adityamandlik17@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border bg-card text-sm font-display text-foreground hover:glow-border transition-all"
          >
            <Mail className="w-4 h-4 text-primary" />
            adityamandlik17@gmail.com
          </a>
          <a
            href="tel:+18722883281"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border bg-card text-sm font-display text-foreground hover:glow-border transition-all"
          >
            <Phone className="w-4 h-4 text-primary" />
            (872) 288-3281
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-4"
        >
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" /> Chicago, IL
          </span>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
