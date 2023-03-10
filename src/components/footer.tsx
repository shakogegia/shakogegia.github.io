import React from 'react'

export default function Footer() {
  return (
    <footer className="bottom-0 mt-10 text-center w-full py-4 px-6 font-mono">
      <small className="text-gray-500">
        Copyright © Shalva Gegia 2022
        {' • '}
        <a href="https://twitter.com/@ShalvaGegia" target="_blank" className="underline" rel="noopener">
          Twitter
        </a>
        {' • '}
        <a href="https://github.com/shakogegia" target="_blank" className="underline" rel="noopener">
          Github
        </a>
      </small>
    </footer>
  )
}
