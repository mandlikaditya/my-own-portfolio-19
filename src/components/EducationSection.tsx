import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    school: "Illinois Institute of Technology",
    location: "Chicago, IL",
    degree: "MS in Computer Science",
    period: "Expected May 2026",
    coursework: "Cloud Computing, Computer Networks, Systems Security, Distributed Systems",
  },
  {
    school: "Dr. Babasaheb Ambedkar Marathwada University",
    location: "India",
    degree: "B.Tech in Electrical Engineering",
    period: "Aug 2018 – May 2022",
    coursework: "GPA: 3.3",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-display text-sm text-primary mb-2 block">// education</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Academic Background
          </h2>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="p-6 rounded-xl border border-border bg-card hover:glow-border transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{edu.school}</h3>
                  <p className="text-sm text-accent font-display">{edu.degree}</p>
                  <p className="text-xs text-muted-foreground font-display mt-1">{edu.location} · {edu.period}</p>
                  <p className="text-sm text-muted-foreground mt-3">{edu.coursework}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
