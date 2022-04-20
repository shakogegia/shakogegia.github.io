import Footer from '@/components/footer'
import Header from '@/components/header'
import Head from 'next/head'
import { PropsWithChildren } from 'react'

export default function Layout({
  children,
  title,
}: PropsWithChildren<{ title?: string }>) {
  return (
    <div>
      <Head>
        <title>{title || 'Shalva Gegia'}</title>

        <meta charSet="UTF-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>

      <Header />

      <main className="container mx-auto max-w-4xl px-6 flex flex-col items-center">
        {children}
      </main>

      <Footer />
    </div>
  )
}
