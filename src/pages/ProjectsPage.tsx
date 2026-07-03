import { ProjectCard } from '../components/projects/ProjectCard'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { projects } from '../data/projects'

export function ProjectsPage() {
  return (
    <Container className="py-24">
      <SectionHeading
        eyebrow="Portfolio"
        title="All projects"
        description="A collection of work spanning web apps, APIs, and design systems."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Container>
  )
}
