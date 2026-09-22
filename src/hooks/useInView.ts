import { useEffect, useRef, useState } from 'react'

/** Reveals once when element enters the viewport (desktop polish motion). */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit,
) {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || visible) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12, ...options },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [options, visible])

  return { ref, visible }
}
