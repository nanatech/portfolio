import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: '1',
    title: 'TaskFlow',
    description:
      'A collaborative task management app with real-time updates, drag-and-drop boards, and team workspaces.',
    tags: ['React', 'TypeScript', 'Node.js', 'Socket.io'],
    liveUrl: '#',
    repoUrl: '#',
    featured: true,
  },
  {
    id: '2',
    title: 'WeatherLens',
    description:
      'Beautiful weather dashboard with location search, 7-day forecasts, and animated weather visualizations.',
    tags: ['React', 'Tailwind CSS', 'OpenWeather API'],
    liveUrl: '#',
    repoUrl: '#',
    featured: true,
  },
  {
    id: '3',
    title: 'DevBlog',
    description:
      'A minimalist developer blog with MDX support, syntax highlighting, and dark mode.',
    tags: ['Next.js', 'MDX', 'Prisma'],
    liveUrl: '#',
    repoUrl: '#',
    featured: true,
  },
  {
    id: '4',
    title: 'Budget Tracker',
    description:
      'Personal finance tracker with expense categorization, monthly reports, and data export.',
    tags: ['Vue', 'Firebase', 'Chart.js'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: '5',
    title: 'API Gateway',
    description:
      'Lightweight API gateway with rate limiting, authentication middleware, and request logging.',
    tags: ['Go', 'Redis', 'Docker'],
    repoUrl: '#',
  },
  {
    id: '6',
    title: 'Design System',
    description:
      'Component library with accessible primitives, theming support, and Storybook documentation.',
    tags: ['React', 'Storybook', 'Radix UI'],
    liveUrl: '#',
    repoUrl: '#',
  },
]
