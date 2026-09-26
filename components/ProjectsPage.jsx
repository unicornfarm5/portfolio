import { useEffect } from 'react'
import projects from '../data/projects.json'
import { ProjectCard } from './ProjectCard.jsx'

export function ProjectsPage() {
  const projectId = window.location.hash.match(/^#\/projects\/([^/?#]+)/)?.[1]

  useEffect(() => {
    if (!projectId) return

    document.getElementById(projectId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [projectId])

  return (
    <>
      <section className="section-wrap py-24">
        <p className="eyebrow mb-6">Portfolio</p>
        <h1 className="section-title max-w-4xl">Selected projects</h1>
      </section>
        <section className="section-wrap space-y-40 pb-32">
        {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
      </section>
    </>
  )
}