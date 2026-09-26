import { useEffect, useRef, useState } from 'react'

export function Mascot() {
  const [animationKey, setAnimationKey] = useState(0)
  const [showHeart, setShowHeart] = useState(false)
  const [showGreeting, setShowGreeting] = useState(false)
  const [position, setPosition] = useState({ x: null, y: null })
  const feedbackTimer = useRef(null)
  const dragOffset = useRef({ x: 0, y: 0 })
  const hasDragged = useRef(false)
  const hasIntroduced = useRef(false)

  useEffect(() => () => window.clearTimeout(feedbackTimer.current), [])

  function handleClick() {
    if (hasDragged.current) {
      hasDragged.current = false
      return
    }

    setAnimationKey((currentKey) => currentKey + 1)
    window.clearTimeout(feedbackTimer.current)

    if (!hasIntroduced.current) {
      hasIntroduced.current = true
      setShowGreeting(true)
      setShowHeart(false)
      feedbackTimer.current = window.setTimeout(() => setShowGreeting(false), 1400)
      return
    }

    setShowHeart(true)
    setShowGreeting(false)
    feedbackTimer.current = window.setTimeout(() => setShowHeart(false), 900)
  }

  function handlePointerDown(event) {
    const bounds = event.currentTarget.getBoundingClientRect()
    dragOffset.current = {
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
    }
    hasDragged.current = false
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  function handlePointerMove(event) {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) return

    const bounds = event.currentTarget.getBoundingClientRect()
    const nextX = event.clientX - dragOffset.current.x
    const nextY = event.clientY - dragOffset.current.y
    const maxX = window.innerWidth - bounds.width
    const maxY = window.innerHeight - bounds.height

    if (Math.abs(nextX - bounds.left) > 2 || Math.abs(nextY - bounds.top) > 2) {
      hasDragged.current = true
    }

    setPosition({
      x: Math.max(0, Math.min(nextX, maxX)),
      y: Math.max(0, Math.min(nextY, maxY)),
    })
  }

  function handlePointerUp(event) {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
  }

  return (
    <div
      className={`fixed z-[60] w-16 sm:w-20 ${position.x === null ? 'right-4 top-[5.75rem] sm:right-6 sm:top-[6.5rem]' : ''}`}
      style={position.x === null ? undefined : { left: position.x, top: position.y }}
    >
      {showGreeting && (
        <img
          src="/assets/hi-from-thea.png"
          alt="Hej fra Thea"
          className="mascot-greeting pointer-events-none absolute -top-14 left-1/2 h-20 w-auto -translate-x-1/2 object-contain"
        />
      )}
      {showHeart && (
        <img
          src="/assets/heart.png"
          alt=""
          aria-hidden="true"
          className="mascot-heart pointer-events-none absolute -top-10 left-1/2 h-8 w-8 -translate-x-1/2 object-contain"
        />
      )}
      <button
        key={animationKey}
        type="button"
        onClick={handleClick}
        onDragStart={(event) => event.preventDefault()}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        aria-label="Tryk på Thea"
        className="mascot-wiggle-trigger block w-full cursor-grab touch-none select-none appearance-none border-0 bg-transparent p-0 active:cursor-grabbing"
      >
        <img
          src="/assets/favicon-thea.png"
          alt="Thea"
          draggable="false"
          className="block h-auto w-full"
        />
      </button>
    </div>
  )
}