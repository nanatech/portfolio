import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Container } from '../components/ui/Container'
import { ProjectCard } from '../components/projects/ProjectCard'
import { SectionHeading } from '../components/ui/SectionHeading'
import { projects } from '../data/projects'
import { resume } from '../data/resume'
import { skills } from '../data/skills'

const featuredProjects = projects.filter((p) => p.featured)
const experienceHighlights = [
  '8+ years of experience',
  '100% sanity/smoke tests passing rate',
  '90% regression tests coverage',
  '50% reduction in client incidents',
  'AI powered tools: Test Case Generation, Client Incident Investigation, Automation Failure Analysis',
]

export function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -bottom-20 left-0 h-[400px] w-[400px] rounded-full bg-fuchsia-500/10 blur-3xl" />
        </div>

        <Container className="relative">
          <div className="grid animate-fade-in items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(280px,380px)]">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
                Senior Software Engineer in Test
              </p>
              <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Building{' '}
                <span className="text-gradient">AI powered solutions </span>
                that accelerate release sign offs and enhance software quality.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
                I don't just test, I build. I'm a software engineer with a passion for building automated solutions that improve the quality of software and enhance the customer experience.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                 <Link to="/assistant">
                  <Button size="lg">
                    Chat with my AI Career Assistant
                  </Button>
                </Link>
                
                <Link to="/projects" className="hidden">
                  {/* TODO: Unhide when more projects are added */}
                  <Button variant="secondary" size="lg">View My Work</Button>
                </Link>
                <Button
                  href={resume.path}
                  download={resume.fileName}
                  variant="secondary"
                  size="lg"
                >
                  Download Resume
                </Button>
                <Link to="/contact" className="hidden">
                  {/* TODO: Unhide when contact page is updated*/}
                  <Button variant="secondary" size="lg">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:pt-9">
              <ul className="space-y-4">
                {experienceHighlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-zinc-300">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-surface-border py-24">
        <Container>
          <SectionHeading
            eyebrow="Skills"
            title="Technologies I work with"
            description="A toolkit built from years of testing and building products across the stack."
          />
          <div className="flex flex-wrap gap-3">
            {skills.slice(0, 16).map((skill) => (
              <span
                key={skill.name}
                className="rounded-lg border border-surface-border bg-surface-raised px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-accent/30 hover:text-white"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-surface-border py-24">
        <Container>
          <SectionHeading
            eyebrow="Featured Work"
            title="AI Powered Projects"
            description="Personal projects built using LLMs and AI Agents."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          {/* TODO: Unhide when more projects are added */}
          <div className="mt-12 text-center hidden">
            <Link to="/projects">
              <Button variant="secondary">View All Projects</Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
