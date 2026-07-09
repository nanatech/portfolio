import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { skillCategories, skills } from '../data/skills'

const experience = [
  {
    role: 'Software Engineer in Test',
    company: 'BlackLine',
    period: '2019 — Present',
    description:[
      'Managed and led all offshore and onshore QA efforts for BlackLine\'s Intercompany Hub suite.',
      'Designed and implemented a localization-ready automation testing framework using Selenium and C#.',
      'Integrated automated tests into CI/CD pipelines using Jenkins and GitHub Actions ',
      'Collaborated with AppSec teams to integrate application security into the test automation suite.',
      'Collaborated with development, product, and customer success teams to create detailed test plans, test cases, and triage application bugs.',
    ],
  },
  {
    role: 'Software Engineer in Test',
    company: 'Accruent',
    period: '2018 — 2019',
    description:
      [
        'Developed and maintained UI automation scripts using Selenium WebDriver and Python.',
        'Assessed systems stability by executing performance testing with NeoLoad.',
        'Authored detailed test plans and test cases for web applications and RESTful APIs.',
        'Logged and tracked defects in Jira with clear reproduction steps and impact analysis.',
      ],
  },
  {
    role: 'Associate Software Engineer',
    company: 'CA Technologies',
    period: '2016 — 2018',
    description:
      [
        'Designed and executed test plans for UI dashboards, metric visualization, and alerting features.',
        'Performed end - to - end testing across WebLogic, JBoss, Tomcat, and.NET servers.',
        'Deployed and maintained Java, .NET, Node.js, and PHP agents in QA and Dev environments.',
        'Collaborated with cross - functional teams to investigate missing metrics, connectivity issues, and dashboard defects.',
      ],
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

      <div className="grid gap-16 lg:grid-cols-2">
        
        <div className="lg:col-span-2">
        <SectionHeading
          eyebrow="About"
          title={'Built in New Orleans, Engineered for Quality'}
          maxWidth="max-w-full"
        />
        </div>

        <div className="space-y-6 text-zinc-400 leading-relaxed">
          <p>
            With over 8 years of experience in software testing and development, I specialize in
            building solutions that improve software quality. My focus is on automating testing processes
            and utilizing AI to improve testing efficiency, release sign off, and the overall customer experience.
          </p>
          <p>
            When I&apos;m not developing or learning new technologies, you&apos;ll find me
            hiking, shopping, traveling, volunteering, or spending time with my family.
            As a New Orleans native I enjoy cooking homemade meals and finding festivals to attend.
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
              <div className="mt-3 max-h-28 overflow-y-auto pr-2 scrollbar-hide">
                <ul className="space-y-2 text-zinc-400">
                  {job.description.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="pointer-events-none absolute bottom-0 left-0 h-6 w-full bg-gradient-to-t from-surface to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
