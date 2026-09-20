import { ProjectImageCarousel } from './ProjectImageCarousel.jsx'
import { ProjectImage } from './ProjectImage.jsx'

export function ProjectCard({ project }) {
  const [firstImage, ...additionalImages] = project.images
  const useCarousel = additionalImages.length > 2

  return (
    <article id={project.id} className="border-t-2 border-current pb-32 pt-8">
      <div>
        <h2 className="section-title max-w-5xl text-4xl">{project.title}</h2>
        {project.subtitle && <h2 className="mt-4 text-2xl">{project.subtitle}</h2>}
      </div>

      <div className="mt-12 grid items-start gap-10 md:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="body-copy">{project.description}</p>
          <ul className="mt-6 flex flex-wrap gap-2 font-sans text-sm">
            {project.keySkills.map((skill) => <li key={skill} className="border border-current px-3 py-1">{skill}</li>)}
          </ul>
          <div className="mt-8 flex flex-wrap gap-5 font-sans text-sm">
            {project.link && <a href={project.link} target="_blank" rel="noreferrer" className="underline">View project ↗</a>}
            {project.githubRepo && <a href={project.githubRepo} target="_blank" rel="noreferrer" className="underline">GitHub ↗</a>}
          </div>
        </div>

        <div>
          <figure>
            <ProjectImage src={firstImage} alt={`${project.title} image 1`} />
            <figcaption className="mt-2 font-sans text-sm">{project.imageCaptions?.[0] ?? firstImage}</figcaption>
          </figure>

          <div className="mt-8 space-y-8">
            {project.sections.map((section) => (
              <section key={section.heading}>
                <h3 className="mb-2 text-2xl">{section.heading}</h3>
                <p className="body-copy">{section.text}</p>
              </section>
            ))}

            {project.techStack && (
              <section>
                <h3 className="mb-2 text-2xl">Tech stack</h3>
                <ul className="body-copy list-disc space-y-2 pl-5">
                  {project.techStack.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
              </section>
            )}
          </div>
        </div>
      </div>

      {useCarousel && <ProjectImageCarousel project={project} images={additionalImages} />}

      {!useCarousel && additionalImages.length > 0 && (
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {additionalImages.map((image, index) => {
            const imageIndex = index + 1

            return (
              <figure key={image}>
                <ProjectImage src={image} alt={`${project.title} image ${imageIndex + 1}`} />
                <figcaption className="mt-2 font-sans text-sm">{project.imageCaptions?.[imageIndex] ?? image}</figcaption>
              </figure>
            )
          })}
        </div>
      )}
    </article>
  )
}