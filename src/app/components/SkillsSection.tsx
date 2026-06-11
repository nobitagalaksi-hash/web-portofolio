import { Badge } from "./ui/badge";
import {
  DatabaseIcon,
  BarChartIcon,
  UsersIcon,
  LayoutIcon,
  CodeIcon,
  TrendingUpIcon,
  TargetIcon,
  GitBranchIcon,
  FileTextIcon,
  BrainIcon,
  MessageSquareIcon,
  ZapIcon,
} from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Product Management",
      skills: [
        { name: "Product Strategy", icon: TargetIcon },
        { name: "Roadmap Planning", icon: GitBranchIcon },
        { name: "User Research", icon: UsersIcon },
        { name: "Data Analytics", icon: BarChartIcon },
      ],
    },
    {
      title: "Technical Skills",
      skills: [
        { name: "SQL & Databases", icon: DatabaseIcon },
        { name: "API Design", icon: CodeIcon },
        { name: "Web Technologies", icon: LayoutIcon },
        { name: "Agile/Scrum", icon: ZapIcon },
      ],
    },
    {
      title: "Business & Strategy",
      skills: [
        { name: "SWOT Analysis", icon: BrainIcon },
        { name: "Growth Strategy", icon: TrendingUpIcon },
        { name: "Stakeholder Mgmt", icon: MessageSquareIcon },
        { name: "Documentation", icon: FileTextIcon },
      ],
    },
  ];

  return (
    <section id="keterampilan" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">Keterampilan & Keahlian</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kombinasi keahlian teknis, manajemen produk, dan strategi bisnis untuk
            menghasilkan solusi yang berdampak.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card rounded-xl border-2 border-primary/20 p-6 space-y-4 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="font-medium mb-4">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/10 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-md bg-gradient-to-br from-primary/20 to-cyan-500/20 flex items-center justify-center shrink-0 group-hover:from-primary/30 group-hover:to-cyan-500/30 transition-all">
                        <Icon className="size-4 text-primary" />
                      </div>
                      <span className="text-sm">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">Tools & Technologies</p>
          <div className="flex flex-wrap gap-2 justify-center max-w-3xl mx-auto">
            {[
              "Figma",
              "Jira",
              "Confluence",
              "Google Analytics",
              "Mixpanel",
              "Notion",
              "Slack",
              "GitHub",
              "PostgreSQL",
              "React",
              "TypeScript",
              "REST APIs",
            ].map((tool) => (
              <Badge
                key={tool}
                variant="secondary"
                className="border border-primary/30 hover:border-primary/60 hover:bg-primary/20 transition-all cursor-default"
              >
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
