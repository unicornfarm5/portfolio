export function ProjectCard({ project }) {
  return (
    <article className="group">
      <div className="mb-5 aspect-[4/3] overflow-hidden bg-[#d8d0c4]">
        <img src={project.image} alt={project.imageAlt} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <p className="eyebrow mb-2">{project.category}</p>
      <h3 className="text-3xl">{project.title}</h3>
      <p className="body-copy mt-3 max-w-md">{project.description}</p>
    </article>
  )
}