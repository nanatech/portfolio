export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  liveUrl?: string
  repoUrl?: string
  featured?: boolean
}

export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'tools' | 'other'
}

export interface SocialLink {
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'twitter' | 'email'
}

export interface NavItem {
  label: string
  path: string
}
