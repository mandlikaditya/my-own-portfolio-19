import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Linux System Administrator Intern",
    company: "Exposy Data Labs Pvt. Ltd., India",
    period: "Apr 2023 – Sep 2023",
    highlights: [
      "Managed 12+ production Linux servers (CentOS, Ubuntu) with 99.5% uptime",
      "Troubleshot CI/CD pipeline failures and improved pipeline reliability",
      "Automated 15+ operational tasks with Bash/Python, reducing manual work by 40%",
      "Authored 20+ runbooks, SOPs, and troubleshooting guides",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Alhansat Solutions Pvt. Ltd., India",
    period: "Dec 2022 – Feb 2023",
    highlights: [
      "Built Node.js applications with Git version control and automated testing",
      "Designed responsive UI/UX prototypes in Figma",
      "Automated deployment processes using Firebase Functions",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-display text-sm text-primary mb-2 block">// experience</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Work History
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors duration-300"
            >
              <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-secondary border-2 border-primary" />
              <div className="p-6 rounded-xl border border-border bg-card hover:glow-border transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-primary" />
                    <h3 className="font-display text-lg font-semibold text-foreground">{exp.role}</h3>
                  </div>
                  <span className="font-display text-xs text-muted-foreground mt-1 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-sm text-accent mb-4 font-display">{exp.company}</p>
                <ul className="space-y-2">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1.5 text-xs">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
