import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Container } from '../components/ui/Container'
import { ProjectCard } from '../components/projects/ProjectCard'
import { SectionHeading } from '../components/ui/SectionHeading'
import { projects } from '../data/projects'
import { skills } from '../data/skills'

const featuredProjects = projects.filter((p) => p.featured)

export function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -bottom-20 left-0 h-[400px] w-[400px] rounded-full bg-fuchsia-500/10 blur-3xl" />
        </div>

        <Container className="relative">
          <div className="max-w-3xl animate-fade-in">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
              Hello, I&apos;m a Developer
            </p>
            <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Building digital
              <br />
              <span className="text-gradient">experiences</span> that matter.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
              I craft performant, accessible web applications with modern
              technologies. Passionate about clean code, thoughtful design, and
              solving real problems.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/projects">
                <Button size="lg">View My Work</Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary" size="lg">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-surface-border py-24">
        <Container>
          <SectionHeading
            eyebrow="Skills"
            title="Technologies I work with"
            description="A toolkit built from years of building products across the stack."
          />
          <div className="flex flex-wrap gap-3">
            {skills.slice(0, 12).map((skill) => (
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
            title="Selected projects"
            description="A few things I've built recently."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/projects">
              <Button variant="secondary">View All Projects</Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
