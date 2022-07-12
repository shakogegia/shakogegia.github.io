import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import { PropsWithChildren } from 'react'
import classNames from '../utils/classnames'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import AnimationData from './animation.json'
import { ImCommand } from 'react-icons/im'
import { IoSearchOutline } from 'react-icons/io5'
import { useThemeContext } from './theme-context'

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

        <ul className="flex iAWriterQuattro md:space-x-3">
          <NavLink className="hidden sm:block" to="/about">
            About
          </NavLink>
          <NavLink to="/notes">Notes</NavLink>
          <NavLink to="/garden">Garden 🌱</NavLink>
          <NavButton className='hidden sm:mr-4 sm:block' onClick={() => trigger('?')}>
            <IoSearchOutline className="text-xl color" />
          </NavButton>
          <NavButton className='hidden sm:mr-4 sm:block' onClick={() => trigger('k', true)}>
            <ImCommand className="text-xl color" />
          </NavButton>
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
          'text-ml inline-block transition-colors py-2 px-2 sm:px-4 text-gray-500 no-underline hover:text-indigo-500 ',
          'transition-colors dark:text-gray-300',
          className,
        )}
      >
        {children}
      </Link>
    </li>
  )
}

function NavButton(props: PropsWithChildren<{ className?: string; onClick: () => void }>) {
  return (
    <button
      className={classNames('outline-none text-xl transition-colors text-gray-500 dark:text-gray-300', props.className)}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

function ThemeToggle() {
  const {  theme, toggleTheme } = useThemeContext()
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
    <li className="flex justify-center items-center">
      <div
        className="cursor-pointer"
        onClick={() => {
          toggleTheme(theme === 'dark' ? 'light' : 'dark')
          theme && animate(theme)
        }}
      >
        <Lottie
          lottieRef={lottieRef}
          animationData={AnimationData}
          loop={false}
          autoplay={false}
          className="w-7 h-7"
        />
      </div>
    </li>
  )
}

function trigger(key: string, metaKey = true) {
  window.dispatchEvent(new KeyboardEvent('keydown', { key, metaKey }))
}
