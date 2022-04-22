import Layout from '@/components/layout'
import type { NextPage } from 'next'
import Link from 'next/link'

const About: NextPage = () => {
  return (
    <Layout title="About">
      <figure className="mt-8 mb-6">
        <img
          src="/selfie.png"
          alt="stackbrowser.com"
          className="w-full rounded-md"
        />
      </figure>

      <article className="prose md:prose-lg max-w-none font-sans font-light mt-8 text-gray-600">
        <p>
          Hi I’m Shalva, a Georgian 🇬🇪 software engineer based in Amsterdam,
          Netherlands 🇳🇱
        </p>
        <p>
          I'm starting this website to become my digital{' '}
          <Link href="/garden">garden 🌱</Link> where I'll share notes, articles
          & thoughts about things that interest me. Still new to digital
          gardening, but I’m learning how to grow
        </p>

        <p>
          I work as a software engineer at{' '}
          <Link href="https://stackbrowser.com">
            <a target="_blank">Stack Browser</a>
          </Link>
          , a company that reinvents the way we browse the web.
        </p>

        <p>
          You can reach out to me via{' '}
          <a href="mailto:shalva.gegia@gmail.com?subject=Hi">Email</a> or{' '}
          <Link href="https://twitter.com/@ShalvaGegia">
            <a target="_blank">Twitter</a>
          </Link>{' '}
          if you want to say hi. While I'm not super active on social media, I
          do check in every now and then.
        </p>
      </article>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}

export default About
