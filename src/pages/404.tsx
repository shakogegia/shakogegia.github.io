import * as React from 'react'
import { Link } from 'gatsby'

export default function NotFoundPage() {
  return (
    <main className='p-6'>
      <title>Not found</title>
      <h1 className='text-3xl'>Page not found</h1>
      <p className='mt-2'>
        Sorry{' '}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{' '}
        we couldn’t find what you were looking for.
        <br />
        <Link to="/" className='underline'>Go home</Link>.
      </p>
    </main>
  )
}
