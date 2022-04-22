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

        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐣</text></svg>"
        />
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
