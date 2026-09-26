import projects from '../data/projects.json'
import { ProjectPreview } from './ProjectPreview.jsx'

export function ProjectsSection() {
  return (
    <section id="projects" className="section-wrap py-24">
      <div className="mb-14 flex flex-wrap items-end justify-between gap-5">
        <h2 className="section-title">Selected projects</h2>
        <a href="/#/projects" className="eyebrow border-b border-current pb-2">Discover all projects ↗</a>
      </div>
      <div className="grid gap-12 md:grid-cols-2">{projects.map((project) => <ProjectPreview key={project.id} project={project} />)}</div>
    </section>
  )
}