import { motion } from 'framer-motion'
import { Link } from 'gatsby'
import React from 'react'
import Selfie from '../../static/images/selfie.jpg'
import Layout from '../components/layout/main'
import SEO from '../components/seo'

export default function About() {
  return (
    <Layout className='max-w-5xl'>
      <SEO title="About" />

      <motion.div
          initial="hidden"
          animate="show"
          whileInView="show"
          variants={{ hidden: { opacity: 0, y: -10 }, show: { opacity: 1, y: 0, transition: { type: 'spring' } } }}
        >
        <figure className="mt-8 mb-6">
          <img src={Selfie} alt="Shalva Gegia" className="w-full rounded-md" />
        </figure>

        <article className="prose md:prose-lg max-w-none font-duospace font-light mt-8 text-gray-600 transition-colors dark:text-gray-300 dark:prose-a:text-gray-200">
          <p>Hi I’m Shalva, a software engineer based in Amsterdam, Netherlands 🇳🇱</p>
          <p>
            I'm starting this website to become my digital <Link to="/garden">garden 🌱</Link> where I'll
            share notes, articles & thoughts about things that interest me. Still new to digital gardening, but I’m
            learning how to grow
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
      </motion.div>

    </Layout>
  )
}
