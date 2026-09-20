import { useEffect, useState } from 'react'

export function ProjectImage({ src, alt }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [isOpen])

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)} aria-label={`Open larger view of ${alt}`} className="group block w-full cursor-zoom-in overflow-hidden text-left">
        <img src={src} alt={alt} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" />
      </button>

      {isOpen && (
        <div role="dialog" aria-modal="true" aria-label={`Larger view of ${alt}`} className="fixed inset-0 z-[60] flex items-center justify-center bg-[#242323]/90 p-6" onClick={() => setIsOpen(false)}>
          <button type="button" onClick={() => setIsOpen(false)} aria-label="Close larger image" className="absolute right-6 top-6 text-4xl leading-none text-[#f4f0e9]">&times;</button>
          <img src={src} alt={alt} className="max-h-[90vh] max-w-[92vw] object-contain" onClick={(event) => event.stopPropagation()} />
        </div>
      )}
    </>
  )
}