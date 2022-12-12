import React from 'react'
import Typed from 'typed.js'

export function TypeAnim() {
  const el = React.useRef(null)
  const typed = React.useRef(null)

  React.useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 30,
      loop: true,
      backDelay: 1200,
    })
    return () => typed.current.destroy()
  }, [])

  return (
    <div>
        <span>I make </span>
        <strong className="font-extrabold underline decoration-sky-500">
            <ul id="bios" className="hidden">
                {/* <li>
                    <b className="font-medium">Software</b> at work.
                </li> */}
                <li>Frontends</li>
                <li>Software</li>
                <li>Video Games</li>
                <li>Web3 Content</li>
                <li>Web Designs</li>
            </ul>
            <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
        </strong>
    </div>
  )
}