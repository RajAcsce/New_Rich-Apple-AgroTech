import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollReveal<T extends HTMLElement>(options?: {
  y?: number
  delay?: number
  duration?: number
  stagger?: number
  childSelector?: string
}) {
  const ref = useRef<T>(null)
  const {
    y = 30,
    delay = 0,
    duration = 0.8,
    stagger = 0.15,
    childSelector,
  } = options || {}

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const targets = childSelector ? el.querySelectorAll(childSelector) : el

    gsap.set(targets, { opacity: 0, y })

    const tween = gsap.to(targets, {
      opacity: 1,
      y: 0,
      duration,
      delay,
      stagger: childSelector ? stagger : 0,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 75%',
        once: true,
      },
    })

    return () => {
      tween.kill()
    }
  }, [y, delay, duration, stagger, childSelector])

  return ref
}
