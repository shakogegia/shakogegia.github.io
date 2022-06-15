import Footer from '@/components/footer'
import Header from '@/components/header'
import Head from 'next/head'
import Script from 'next/script'
import { PropsWithChildren } from 'react'
import { NextSeo } from 'next-seo'

const me = 'Shalva Gegia'
const description =
  "I'm a software engineer based in Amsterdam, Netherlands. I'm passionate about building products that solve real-world problems."

export default function Layout({
  children,
  cover,
  title,
}: PropsWithChildren<{ title?: string; cover?: string }>) {
  const pageTitle = title ? `${title} | ${me}` : me

  const images = cover
    ? [
        {
          url: cover.startsWith('http')
            ? cover
            : `https://www.gegia.dev${cover}`,
          alt: pageTitle,
        },
      ]
    : []

  return (
    <div>
      <NextSeo
        title={pageTitle}
        description={description}
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://www.gegia.dev/',
          site_name: 'Shalva Gegia',
          images,
        }}
        twitter={{
          handle: '@ShalvaGegia',
          site: '@ShalvaGegia',
          cardType: 'summary_large_image',
        }}
      />

      <Head>
        <title>{pageTitle}</title>

        <meta charSet="UTF-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <meta name="theme-color" content="#6366f1" />

        <link rel="shortcut icon" href="/favicon.png" />
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

      <Script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      />
      <Script
        noModule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      />

      <Header />

      <main className="container mx-auto max-w-5xl px-6">{children}</main>

      <Footer />
    </div>
  )
}
