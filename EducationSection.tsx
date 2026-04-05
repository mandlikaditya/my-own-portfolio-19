import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

const education = [
  {
    school: "Illinois Institute of Technology",
    location: "Chicago, IL",
    degree: "MS in Computer Science",
    period: "Aug 2024 – Present",
    coursework: ["Systems Security", "Cloud Computing", "Distributed Systems", "Computer Networks"],
  },
  {
    school: "Dr. Babasaheb Ambedkar Marathwada University",
    location: "India",
    degree: "B.Tech in Electrical Engineering",
    period: "Aug 2018 – May 2022",
    coursework: ["GPA: 3.3"],
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="section-label">// education</span>
          <h2 className="section-title">Academic Background</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card p-6 hover:glow-border-strong transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-sans text-lg font-bold text-foreground mb-1">{edu.school}</h3>
              <p className="text-sm text-accent font-display mb-1">{edu.degree}</p>
              <p className="text-xs text-muted-foreground font-display mb-4">{edu.location} · {edu.period}</p>
              <div className="flex flex-wrap gap-2">
                {edu.coursework.map((c) => (
                  <span key={c} className="px-3 py-1 rounded-lg text-xs bg-secondary/80 text-secondary-foreground font-display">
                    {c}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
