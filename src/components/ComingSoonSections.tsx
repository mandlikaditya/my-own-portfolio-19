import { motion } from "framer-motion";
import { FlaskConical, BookOpen, Award, Lock } from "lucide-react";

interface ComingSoonSectionProps {
  id: string;
  label: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const sections: ComingSoonSectionProps[] = [
  {
    id: "patents",
    label: "// patents",
    title: "Patents",
    description: "Innovations and intellectual property — coming soon.",
    icon: FlaskConical,
  },
  {
    id: "research",
    label: "// research",
    title: "Research Papers",
    description: "Academic publications and research contributions — coming soon.",
    icon: BookOpen,
  },
  {
    id: "certifications",
    label: "// certifications",
    title: "Certifications",
    description: "Professional certifications and credentials — coming soon.",
    icon: Award,
  },
];

const ComingSoonSections = () => {
  return (
    <section className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="section-label">// more</span>
          <h2 className="section-title">More Coming Soon</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Expanding this portfolio with patents, research, and certifications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {sections.map((section, i) => (
            <motion.div
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 text-center group hover:border-primary/20 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                  <section.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-sans text-lg font-bold text-foreground mb-2">{section.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{section.description}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-display text-muted-foreground/60">
                  <Lock className="w-3 h-3" />
                  Coming Soon
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSections;
