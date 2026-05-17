import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface AnimatedCounterProps {
  target: number
  suffix?: string
  duration?: number
  className?: string
  style?: React.CSSProperties
}

export default function AnimatedCounter({
  target,
  suffix = '+',
  duration = 2,
  className = '',
  style = {},
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || hasAnimated) return

    const proxy = { value: 0 }

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        setHasAnimated(true)
        gsap.to(proxy, {
          value: target,
          duration,
          ease: 'power2.out',
          snap: { value: 1 },
          onUpdate: () => {
            el.textContent = Math.round(proxy.value).toLocaleString() + suffix
          },
        })
      },
    })

    return () => {
      trigger.kill()
    }
  }, [target, suffix, duration, hasAnimated])

  return (
    <span ref={ref} className={className} style={style}>
      0{suffix}
    </span>
  )
}
