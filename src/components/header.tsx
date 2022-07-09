import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import { PropsWithChildren } from 'react'
import classNames from '../utils/classnames'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import AnimationData from './animation.json'

export default function Header() {
  return (
    <header className="w-full">
      <nav className="container mx-auto md:max-w-5xl flex items-center justify-between p-6">
        <Link
          to="/"
          className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-indigo-600"
        >
          Shalva Gegia
        </Link>

        <ul className="flex iAWriterQuattro space-x-3">
          <NavLink className="hidden sm:block" to="/about">
            About
          </NavLink>
          <NavLink to="/notes">Notes</NavLink>
          <NavLink to="/garden">Garden 🌱</NavLink>
          <ThemeToggle />
        </ul>
      </nav>
    </header>
  )
}

function NavLink({ to, children, className }: PropsWithChildren<{ to: string; className?: string }>) {
  return (
    <li>
      <Link
        to={to}
        className={classNames(
          'text-ml inline-block transition-colors py-2 px-4 text-gray-500 no-underline hover:text-indigo-500 ',
          'transition-colors dark:text-gray-300',
          className,
        )}
      >
        {children}
      </Link>
    </li>
  )
}

function ThemeToggle() {
  const lottieRef = React.useRef<LottieRefCurrentProps>(null)

  useEffect(() => {
    lottieRef.current?.setSpeed(1.5)

    if (document.body.classList.contains('dark')) {
      lottieRef.current?.goToAndStop(145, true)
    }
  }, [])

  function animate(theme: string) {
    if (theme === 'dark') {
      lottieRef.current?.playSegments([145, 220], true)
    } else {
      lottieRef.current?.playSegments([0, 70], true)
    }
  }

  return (
    <ThemeToggler>
      {({ theme, toggleTheme }: { theme: string | null; toggleTheme: (theme: string) => void }) => {
        if (theme == null) return null
        return (
          <li className="flex justify-center items-center">
            <div
              className="cursor-pointer"
              onClick={() => {
                toggleTheme(theme === 'dark' ? 'light' : 'dark')
                animate(theme)
              }}
            >
              <Lottie lottieRef={lottieRef} animationData={AnimationData} loop={false} autoplay={false} className="w-7 h-7" />
            </div>
          </li>
        )
      }}
    </ThemeToggler>
  )
}
