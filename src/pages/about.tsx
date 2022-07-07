import React from 'react'
import { Link, } from 'gatsby'
import Layout from '../components/layout/main'
import Selfie from "../images/selfie.jpg"
import SEO from '../components/seo'

export default function About() {
  return (
    <Layout>
      <SEO title="About" />

      <figure className="mt-8 mb-6">
        <img src={Selfie} alt="Shalva Gegia" className="w-full rounded-md" />
      </figure>

      <article className="prose md:prose-lg max-w-none iAWriterQuattro font-light mt-8 text-gray-600">
        <p>Hi I’m Shalva, a Georgian 🇬🇪 software engineer based in Amsterdam, Netherlands 🇳🇱</p>
        <p>
          I'm starting this website to become my digital <Link to="/garden">garden 🌱</Link> where I'll share notes,
          articles & thoughts about things that interest me. Still new to digital gardening, but I’m learning how to
          grow
        </p>

        <p>
          I work as a software engineer at{' '}
          <a href="https://stackbrowser.com?referer=gegia.dev" target="_blank">
            Stack Browser
          </a>
          , a company that reinvents the way we browse the web.
        </p>

        <p>
          You can reach out to me via <a href="mailto:shalva.gegia@gmail.com?subject=Hi">Email</a> or{' '}
          <a href="https://twitter.com/@ShalvaGegia" target="_blank">
            Twitter
          </a>{' '}
          if you want to say hi. While I'm not super active on social media, I do check in every now and then.
        </p>
      </article>
    </Layout>
  )
}
