import { motion } from 'framer-motion'
import { graphql } from 'gatsby'
import React from 'react'
import classNames from 'src/utils/classnames'
import Layout from '../components/layout/main'
import SEO from '../components/seo'
import Hero from 'src/components/layout/hero'

type CardProps = React.PropsWithChildren<{ href?: string; className?: string; wide?: boolean; label?: string }>
type FilmProps = {
  src: string
  srcSet?: string
  label?: string
  wide?: boolean
}

export default function FilmPage({ data }: any) {
  return (
    <Layout>
      <SEO title="Films" />

      <Hero title="Film Photography">best things in life are analog</Hero>

      <div className="prose prose-lg max-w-none my-5 font-duospace text-gray-600 dark:text-gray-400">
        <p>
          Have you ever tried shooting on film? It's one of my favorite hobbies and something that brings me so much
          joy. There's just something about the process that makes it feel like a true art form.
        </p>
        <p>
          One of the things I love most about film photography is the sense of anticipation that comes with waiting for
          the results. With digital photography, you can see the image right away, but with film, you have to wait until
          the film is developed to see what you've captured. It's like opening a present on Christmas morning!
        </p>
        <p>
          And the colors and grain of film are just so beautiful. There's a certain organic feel to the images that
          digital photography can't quite replicate. And printing my own photos in the darkroom is a satisfying and
          peaceful experience. I love the smell of the chemicals and the quiet solitude of the process.
        </p>
        <p>
          But my absolute favorite thing is watching slides on my film projector when I come back from a trip. It's like
          I'm reliving those moments all over again, and it's a truly nostalgic experience.
        </p>
        <p>
          All in all, film photography is more than just a hobby for me. It's a passion that brings me so much happiness
          and fulfillment. If you haven't tried it yet, I highly recommend giving it a shot and remember shoot negative
          stay positive
        </p>
      </div>

      <motion.div
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:grid-flow-row-dense"
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
          <Film
            key={edge.node.childImageSharp.fluid.src}
            src={edge.node.childImageSharp.fluid.src}
            srcSet={edge.node.childImageSharp.fluid.srcSet}
            wide={edge.node.childImageSharp.fluid.originalName.includes('wide')}
            label={edge.node.childImageSharp.fluid.originalName.replaceAll('_', ' ').split('-')[0].split('.')[0]}
          />
        ))}
      </motion.div>
    </Layout>
  )
}

function Card({ className, label, wide, children }: CardProps) {
  return (
    <motion.div
      className={classNames(
        wide ? 'aspect-[2] col-span-2' : 'aspect-square',
        'relative overflow-hidden rounded-md group bg-neutral-50 hover:bg-neutral-100 dark:bg-gray-800 hover:dark:bg-gray-700',
        className,
      )}
      variants={{ hidden: { opacity: 0, y: -10 }, show: { opacity: 1, y: 0, transition: { type: 'spring' } } }}
    >
      {label && <span className="absolute left-4 top-3 text-sm tracking-tight text-neutral-400">{label}</span>}
      {children}
    </motion.div>
  )
}

function Film({ src, srcSet, label, wide = false }: FilmProps) {
  return (
    <Card wide={wide}>
      <div className="relative w-full h-full">
        <img src={src} className="w-full h-full object-cover no-lightense" srcSet={srcSet} />

        <div className="absolute left-4 bottom-2">
          <span
            className={classNames('text-white/70 px-2 py-1 rounded-md transition-colors', 'group-hover:bg-black/70 ')}
          >
            {label}
          </span>
        </div>
      </div>
    </Card>
  )
}

export const pageQuery = graphql`
  query {
    allFile(
      sort: { name: ASC }
      filter: { extension: { regex: "/(jpg)|(jpeg)|(png)/" }, sourceInstanceName: { eq: "film" } }
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
