import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { skillCategories, skills } from '../data/skills'

const experience = [
  {
    role: 'Senior Frontend Developer',
    company: 'Tech Company',
    period: '2022 — Present',
    description:
      'Led development of customer-facing web applications serving 100k+ users. Introduced component library and improved Core Web Vitals by 40%.',
  },
  {
    role: 'Full Stack Developer',
    company: 'Startup Inc.',
    period: '2020 — 2022',
    description:
      'Built MVP from scratch using React and Node.js. Implemented CI/CD pipeline and established engineering best practices.',
  },
  {
    role: 'Junior Developer',
    company: 'Agency Co.',
    period: '2018 — 2020',
    description:
      'Developed responsive websites and e-commerce solutions for diverse clients. Gained expertise in modern JavaScript frameworks.',
  },
]

export function AboutPage() {
  const groupedSkills = Object.entries(skillCategories).map(([category, label]) => ({
    category: category as keyof typeof skillCategories,
    label,
    items: skills.filter((s) => s.category === category),
  }))

  return (
    <Container className="py-24">
      <SectionHeading
        eyebrow="About"
        title="A bit about me"
        description="I'm a developer who loves turning ideas into polished, user-friendly products."
      />

      <div className="grid gap-16 lg:grid-cols-2">
        <div className="space-y-6 text-zinc-400 leading-relaxed">
          <p>
            With over 6 years of experience in web development, I specialize in
            building modern applications with React, TypeScript, and Node.js. I
            care deeply about code quality, performance, and creating interfaces
            that feel intuitive.
          </p>
          <p>
            When I&apos;m not coding, you&apos;ll find me exploring new
            technologies, contributing to open source, or sharing knowledge
            through blog posts and mentoring.
          </p>
          <p>
            I&apos;m always open to interesting projects and collaborations.
            Feel free to reach out if you&apos;d like to work together.
          </p>
        </div>

        <div>
          <h3 className="mb-6 text-lg font-semibold text-white">Skills</h3>
          <div className="space-y-6">
            {groupedSkills.map((group) => (
              <div key={group.category}>
                <p className="mb-3 text-sm font-medium text-zinc-500">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill.name}
                      className="rounded-md border border-surface-border bg-surface-raised px-3 py-1.5 text-sm text-zinc-300"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h3 className="mb-8 text-2xl font-bold text-white">Experience</h3>
        <div className="space-y-8">
          {experience.map((job) => (
            <div
              key={job.role}
              className="relative border-l-2 border-surface-border pl-8"
            >
              <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-accent bg-surface" />
              <p className="text-sm text-accent">{job.period}</p>
              <h4 className="mt-1 text-lg font-semibold text-white">
                {job.role}
              </h4>
              <p className="text-sm text-zinc-500">{job.company}</p>
              <p className="mt-3 text-zinc-400">{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
