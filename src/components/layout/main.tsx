import React, { PropsWithChildren, useEffect } from 'react'
import classNames from '../../utils/classnames'
import Footer from '../footer'
import Header from '../header'
import { Helmet } from "react-helmet"
import Lightense from 'lightense-images'

export default function Layout({ children, className }: PropsWithChildren<{ className?: string }>) {

  useEffect(() => {
    Lightense('img');
  }, [])

  return (
    <div className='h-vh min-h-full transition-colors dark:bg-gray-900'>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <meta name="theme-color" content="#6366f1" />

        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        />
        <script
          noModule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        />
      </Helmet>


      <Header />
      <main className={classNames('container mx-auto max-w-5xl px-6', className)}>{children}</main>
      <Footer />
    </div>
  )
}
