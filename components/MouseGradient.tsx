'use client'

import { useEffect, useRef } from 'react'

const MouseGradient = () => {
    const gradientRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const x = e.clientX
            const y = e.clientY

            if (gradientRef.current) {
                gradientRef.current.style.background = `
          radial-gradient(
            500px circle at ${x}px ${y}px,
            rgba(74, 222, 128, 0.08),
            transparent 100%
          )
        `
            }
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <div
            ref={gradientRef}
            className="fixed inset-0 z-[-1] pointer-events-none transition-all duration-100 ease-linear"
        />
    )
}

export default MouseGradient
