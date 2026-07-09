import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: '1',
    title: 'Resume Conversations AI',
    description:
      'An interactive chatbot built using OpenAI SDK to answer questions related to my skills and experience.',
    tags: ['OpenAI SDK', 'Python', 'Gradio', 'Hugging Face'],
    liveUrl: 'https://huggingface.co/spaces/nanas03/career_conversation',
    repoUrl: 'https://github.com/nanatech/my-agents/tree/master/resume-agent',
    featured: true,
  },
  /*{
    id: '2',
    title: 'TestGenerator',
    description:
      'A tool to generate test cases for software testing.',
    tags: ['Python', 'Playwright', 'OpenAI SDK'],
    liveUrl: '#',
    repoUrl: '#',
    featured: true,
  },*/
]
