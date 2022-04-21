/* eslint-disable react/no-unescaped-entities */
import Layout from '@/components/layout'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <Layout>
      <article className="prose md:prose-lg lg:prose-xl max-w-none font-sans font-light mt-8 text-gray-600">
        <p>Hi I’m Shalva, a Georgian software engineer based in Amsterdam</p>
        <p>
          I'm starting this website to become my digital{' '}
          <Link href="/garden">garden 🌱</Link> where I'll share notes, articles
          & thoughts about things that interest me. Still new to digital
          gardening, but I’m learning how to grow
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
            <a className="group hover:text-indigo-500 no-underline transition-colors">
              more about me
              <span className="group-hover:ml-1 transition-all"> →</span>
            </a>
          </Link>
        </p>
      </article>

      <div className="py-16">
        <div className="w-full border-t border-gray-100"></div>
      </div>

      <section>
        <SamplePost />

        <div className="py-20">
          <div className="w-full border-t border-gray-100"></div>
        </div>

        <SamplePost />
      </section>
    </Layout>
  )
}

function SamplePost() {
  return (
    <article>
      <figure className="mb-6">
        <img
          src="/post.png"
          alt="stackbrowser.com"
          className="w-full rounded-md"
        />
        <figcaption className="my-1 font-mono text-sm text-gray-300">
          stackbrowser.com
        </figcaption>
      </figure>

      <h2 className="text-3xl font-normal leading-normal mt-0 mb-0 text-gray-800">
        Reinventing browser
      </h2>
      <small className="text-gray-300">2022 April</small>

      <article className="prose max-w-none pt-6 text-gray-500">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo cumque
          tenetur suscipit, ipsa rem perferendis minima possimus.
        </p>
        <p>
          Recusandae animi amet labore. Beatae quaerat aperiam quo, dolorum
          error voluptates voluptatum qui? Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Voluptas quo dolorem eius et similique
          libero dolor cum distinctio ea? Incidunt nam odio nesciunt adipisci
          nisi, cumque temporibus quisquam iste alias?
        </p>
      </article>

      <div className="mt-3">
        <Link href="/">
          <a className="font-semibold text-lg group text-gray-600 hover:text-indigo-500 transition-colors">
            read more
            <span className="transition-all group-hover:ml-1"> →</span>
          </a>
        </Link>
      </div>
    </article>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}

export default Home
