import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Linux System Administrator Intern",
    company: "Exposy Data Labs Pvt. Ltd.",
    location: "India",
    period: "Apr 2023 – Sep 2023",
    highlights: [
      "Managed 12+ production Linux servers (CentOS, Ubuntu) maintaining 99.5% uptime through routine patching and health checks",
      "Troubleshot CI/CD pipeline failures, improved reliability, and documented pipeline configurations for the team",
      "Automated 15+ operational tasks with Bash & Python scripts, cutting manual workload by 40%",
      "Led incident response following runbooks; contributed to post-incident root cause analysis and remediation",
      "Authored 20+ runbooks, SOPs, and troubleshooting guides improving team onboarding efficiency",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Alhansat Solutions Pvt. Ltd.",
    location: "India",
    period: "Dec 2022 – Feb 2023",
    highlights: [
      "Built Node.js applications with Git version control, merge requests, and automated testing workflows",
      "Designed responsive UI/UX prototypes in Figma with object-oriented Node.js and Firebase backend",
      "Automated deployment processes improving application performance across multiple environments",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="section-label">// experience</span>
          <h2 className="section-title">Where I've Worked</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`relative flex flex-col md:flex-row ${i % 2 === 1 ? 'md:flex-row-reverse' : ''} gap-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-[12px] top-6 w-[15px] h-[15px] rounded-full border-[3px] border-primary bg-background z-10 md:left-1/2 md:-translate-x-1/2" />

                {/* Card */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? '' : ''}`}>
                  <div className="glass-card p-6 hover:glow-border-strong transition-all duration-500">
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase className="w-4 h-4 text-primary shrink-0" />
                      <h3 className="font-sans text-lg font-bold text-foreground leading-tight">{exp.role}</h3>
                    </div>
                    <p className="text-sm text-accent font-display mb-1">{exp.company}</p>
                    <p className="text-xs text-muted-foreground font-display mb-4">{exp.location} · {exp.period}</p>
                    <ul className="space-y-2">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="text-sm text-muted-foreground flex items-start gap-2 leading-relaxed">
                          <span className="text-primary mt-1 text-xs shrink-0">▸</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for other side */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
