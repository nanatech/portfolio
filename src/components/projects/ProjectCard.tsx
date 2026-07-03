import type { Project } from '../../types'
import { Badge } from '../ui/Badge'
import { Card } from '../ui/Card'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card hover className="flex h-full flex-col">
      <div className="mb-4 flex items-start justify-between">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        {project.featured && (
          <span className="rounded-full bg-fuchsia-500/10 px-2 py-0.5 text-xs font-medium text-fuchsia-400">
            Featured
          </span>
        )}
      </div>

      <p className="mb-6 flex-1 text-sm leading-relaxed text-zinc-400">
        {project.description}
      </p>

      <div className="mb-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>

      <div className="flex gap-4 text-sm">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent-hover transition-colors hover:text-white"
          >
            Live Demo &rarr;
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-zinc-500 transition-colors hover:text-white"
          >
            Source Code
          </a>
        )}
      </div>
    </Card>
  )
}
