export function ProjectPreview({ project }) {
  const previewImage = project.images?.[0]

  return (
    <article className="group">
      <a href={`/#/projects/${project.id}`}>
        <div className="mb-5 aspect-[4/3] overflow-hidden bg-[#d8d0c4]">
          <img src={previewImage} alt={project.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        </div>
        <h3 className="text-3xl">{project.title}</h3>
        <p className="body-copy mt-3 max-w-md">{project.description}</p>
        <span className="eyebrow mt-5 inline-block border-b border-current pb-2">View project ↗</span>
      </a>
    </article>
  )
}