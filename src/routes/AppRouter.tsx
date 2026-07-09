import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../components/layout/Layout'
import { AboutPage } from '../pages/AboutPage'
/*import { ContactPage } from '../pages/ContactPage'*/
import { HomePage } from '../pages/HomePage'
import { AICareerChatPage } from '../pages/AICareerChatPage'
import { NotFoundPage } from '../pages/NotFoundPage'
/*import { ProjectsPage } from '../pages/ProjectsPage'*/

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      /*{ path: 'projects', element: <ProjectsPage /> },
      { path: 'contact', element: <ContactPage /> },*/
      { path: 'assistant', element: <AICareerChatPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
