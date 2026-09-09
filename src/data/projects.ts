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
  {
    id: '2',
    title: 'Multi-Agent Deep Research',
    description:
      'A multi-agent program that uses Tavily Search API to perform deep research on a given topic. Agents include models from OpenAI, Nvidia, and Anthropic.',
    tags: ['Python', 'OpenAI SDK', 'OpenRouter', 'Tavily', 'Nvidia', 'Anthropic'],
    liveUrl: '',
    repoUrl: 'https://github.com/nanatech/my-agents/blob/master/deep_research/deep_research.py',
    featured: true,
  },
]
