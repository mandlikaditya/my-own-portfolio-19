import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "CI/CD & DevOps",
    icon: "⚡",
    skills: ["Git", "GitHub Actions", "GitLab", "CI/CD Pipelines", "Automated Testing", "SDLC"],
  },
  {
    title: "Cloud & Infrastructure",
    icon: "☁️",
    skills: ["AWS (EC2, S3, IAM, VPC)", "GCP", "Terraform", "Ansible", "Infrastructure as Code"],
  },
  {
    title: "Containers & Orchestration",
    icon: "🐳",
    skills: ["Docker", "Kubernetes", "Container Registries", "Auto-scaling", "Health Probes"],
  },
  {
    title: "Scripting & Languages",
    icon: "💻",
    skills: ["Bash", "Python", "JavaScript", "Node.js", "C#", "SQL"],
  },
  {
    title: "Linux & Networking",
    icon: "🐧",
    skills: ["CentOS", "Ubuntu", "RHEL", "Debian", "TCP/IP", "DNS", "VPN", "SSH"],
  },
  {
    title: "Monitoring & Observability",
    icon: "📊",
    skills: ["Prometheus", "Grafana", "Alertmanager", "CloudWatch", "Log Validation"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="section-label">// skills</span>
          <h2 className="section-title">Technical Arsenal</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Tools and technologies I use to build, deploy, and maintain scalable infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group glass-card p-6 hover:glow-border-strong transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="font-display text-sm font-semibold text-primary">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-xs bg-secondary/80 text-secondary-foreground font-display hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                  >
                    {skill}
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

export default SkillsSection;
