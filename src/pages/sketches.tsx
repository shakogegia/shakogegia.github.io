import { motion } from 'framer-motion'
import { graphql } from 'gatsby'
import React from 'react'
import { IoColorPaletteOutline } from 'react-icons/io5'
import Hero from 'src/components/layout/hero'
import Layout from '../components/layout/main'
import SEO from '../components/seo'

export default function SketchesPage({ data }: any) {
  return (
    <Layout>
      <SEO title="Sketches" />

      <Hero title="Sketches" color="text-indigo-500" icon={<span>🎨</span>}>
        A collection of my sketches, drawings and paintings, mostly urban sketching.
      </Hero>

      <div className="mt-8 prose prose-lg max-w-none font-duospace text-gray-600 dark:text-gray-400">
        <p>
          My love for painting has been a constant in my life, a passion that has stayed with me through the years. Even
          as a child, I remember the thrill of picking up a brush and watching the colors dance across the page, the
          smell of the paint filling my senses. It was as if I had discovered a part of myself that I never knew
          existed, a sense of freedom and joy that I had never before experienced.
        </p>
        <p>
          As I grew older, my love for painting only deepened. I continued to explore different mediums and styles,
          finding solace and creativity in each brushstroke. In 2020, when the world was consumed by the Covid-19
          pandemic and we were all forced to stay at home, I found myself drawn to painting more than ever. I stocked up
          on supplies, filling my shelves with pencils, pens, and paints of every color. I even discovered a new love in
          urban sketching, the art of capturing the world around me in quick, vibrant strokes.
        </p>
        <p>
          The Netherlands, with its stunning cities and landscapes, is the perfect place for urban sketching. I find
          myself constantly inspired by the people, places, and atmosphere of this country, and I pour that inspiration
          into my art. Each sketch is a moment in time, a memory frozen on paper for all eternity.
        </p>
        <p>
          Through painting, I have found a sense of purpose and fulfillment. It is a passion that will always be with
          me, a constant source of joy and creativity. And I will continue to paint, to capture the beauty of the world
          around me and share it with others.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-10"
        initial="hidden"
        animate="show"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {data.allFile.edges.map((edge: any) => (
          <motion.div
            key={edge.node.childImageSharp.fluid.src}
            className="flex flex-col gap-8 rounded-md p-4 transition-colors group bg-neutral-50 hover:bg-neutral-100 dark:bg-gray-800 hover:dark:bg-gray-700"
            variants={{ hidden: { opacity: 0, y: -10 }, show: { opacity: 1, y: 0, transition: { type: 'spring' } } }}
          >
            <img src={edge.node.childImageSharp.fluid.src} className="object-contain max-h-60" />
          </motion.div>
        ))}
      </motion.div>

    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allFile(
      sort: { name: ASC }
      filter: { extension: { regex: "/(jpg)|(jpeg)|(png)/" }, sourceInstanceName: { eq: "sketches" } }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 100) {
              originalName
              ...GatsbyImageSharpFluid
            }
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  }
`
