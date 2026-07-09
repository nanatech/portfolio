import type { Skill } from '../types'

export const skills: Skill[] = [
  { name: 'Selenium WebDriver', category: 'tools' },
  { name: 'Playwright', category: 'tools' },
  { name: 'UI', category: 'testing' },
  { name: 'API', category: 'testing' },
  { name: 'Performance Testing', category: 'testing' },
  { name: 'Security Testing', category: 'testing' },
  { name: 'Git', category: 'tools' },
  { name: 'Jira', category: 'tools' },
  { name: 'Postman', category: 'tools' },
  { name: 'Burp Suite', category: 'tools' },
  { name: 'OpenAI SDK', category: 'tools' },
  { name: 'Python', category: 'languages' },
  { name: 'Java', category: 'languages' },
  { name: 'C#', category: 'languages' },
  { name: 'MSSQL', category: 'databases' },
  { name: 'PostgreSQL', category: 'databases' },
]

export const skillCategories: Record<Skill['category'], string> = {
  languages: 'Languages',
  tools: 'Tools & DevOps',
  testing: 'Testing',
  databases: 'Databases',
}
