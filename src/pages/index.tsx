/* eslint-disable react/no-unescaped-entities */
import Layout from '@/components/layout'
import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <Layout>
      <article className="prose md:prose-lg lg:prose-xl prose-zinc font-sans font-light mt-8">
        <p>Hi I’m Shalva, a Georgian software engineer based in Amsterdam</p>
        <p>
          I'm starting this website to become my digital{' '}
          <Link href="/garden">garden 🌱</Link> where I'll share notes, articles
          & thoughts about things that interest me.
          <br />
          Still new to digital gardening, but I’m learning how to grow
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
        <p>
          <Link href="/about">
            <a>more about me</a>
          </Link>
        </p>
      </article>

      <div className="py-8">
        <div className="w-full border-t border-gray-100"></div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}

export default Home
