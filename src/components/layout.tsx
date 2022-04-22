import Footer from '@/components/footer'
import Header from '@/components/header'
import Head from 'next/head'
import Script from 'next/script'
import { PropsWithChildren } from 'react'

const me = 'Shalva Gegia'

export default function Layout({
  children,
  title,
}: PropsWithChildren<{ title?: string }>) {
  return (
    <div>
      <Head>
        <title>{title ? `${title} - ${me}` : me}</title>

        <meta charSet="UTF-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <link rel="icon" href="/hatching_chick.png" />
      </Head>

      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-110098374-1"
      />

      <Script
        id="gtm"
        dangerouslySetInnerHTML={{
          __html: `
              <!-- Global site tag (gtag.js) - Google Analytics -->
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'UA-110098374-1');
            `,
        }}
      />

      <Header />

      <main className="container mx-auto max-w-5xl px-6">{children}</main>

      <Footer />
    </div>
  )
}
