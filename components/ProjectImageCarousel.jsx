import { useState } from 'react'
import { ProjectImage } from './ProjectImage.jsx'

export function ProjectImageCarousel({ project, images }) {
  const [startIndex, setStartIndex] = useState(0)
  const lastStartIndex = Math.max(0, images.length - 2)

  const showPrevious = () => {
    setStartIndex((currentIndex) => currentIndex === 0 ? lastStartIndex : currentIndex - 1)
  }

  const showNext = () => {
    setStartIndex((currentIndex) => currentIndex === lastStartIndex ? 0 : currentIndex + 1)
  }

  return (
    <div className="mt-16">
      <div className="flex items-center gap-2 sm:gap-4">
        <button type="button" onClick={showPrevious} aria-label="Show previous project images" className="shrink-0 bg-transparent px-0 font-sans text-4xl leading-none transition hover:opacity-60 sm:text-5xl">
          &lt;
        </button>

        <div className="grid min-w-0 flex-1 gap-6 sm:grid-cols-2">
          {images.slice(startIndex, startIndex + 2).map((image, index) => {
            const imageIndex = startIndex + index + 1

            return (
              <figure key={image}>
              <ProjectImage src={image} alt={`${project.title} image ${imageIndex + 1}`} />
                <figcaption className="mt-2 font-sans text-sm">{project.imageCaptions?.[imageIndex] ?? image}</figcaption>
              </figure>
            )
          })}
        </div>

        <button type="button" onClick={showNext} aria-label="Show next project images" className="shrink-0 bg-transparent px-0 font-sans text-4xl leading-none transition hover:opacity-60 sm:text-5xl">
          &gt;
        </button>
      </div>
    </div>
  )
}