import { motion } from 'framer-motion'
import { graphql, Link } from 'gatsby'
import * as React from 'react'
import { featured as featuredBooks } from 'src/resources/library'
import classNames from 'src/utils/classnames'
import Layout from '../components/layout/main'
import SEO from '../components/seo'

import Rome from '../../static/film/rome-porta400-1.jpg'
import Rome2 from '../../static/film/rome-porta400-2.png'
import Flowers from '../../static/film/flowers.jpg'
import SketchesArt from '../../static/images/sketch.png'

export default function IndexPage({ data: { allMdx } }: any) {
  return (
    <Layout>
      <SEO title="Home" />

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:grid-flow-row-dense"
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
        <About />

        {allMdx.edges.map(({ node }: any) => (
          <Card label="Notes" key={node.id} href={node.frontmatter.slug} wide={node.frontmatter.featuredwide}>
            {node.frontmatter.featuredtype === 'image' ? (
              <img
                className={classNames(
                  'absolute left-1/2 -translate-x-1/2 top-[20%] w-[80%] object-contain transition-transform group-hover:scale-105',
                  'rounded-lg shadow-xl',
                  'no-lightense',
                )}
                src={node.frontmatter.featuredbanner.childImageSharp.fluid.src}
                srcSet={node.frontmatter.featuredbanner.childImageSharp.fluid.srcSet}
              />
            ) : (
              <div className="relative h-full flex flex-col justify-end font-light text-neutral-600">
                {node.frontmatter.featuredbanner && (
                  <div
                    className={classNames('absolute left-[10%] right-[10%] bottom-[10%] top-4 z-0 group-hover:z-10')}
                  >
                    <img
                      className="h-full w-full max-w-full max-h-full object-contain no-lightense transition-transform group-hover:scale-105"
                      src={node.frontmatter.featuredbanner.childImageSharp.fluid.src}
                      srcSet={node.frontmatter.featuredbanner.childImageSharp.fluid.srcSet}
                    />
                  </div>
                )}
                <div
                  className={classNames(
                    'flex flex-col h-full justify-end z-0 p-5',
                    node.frontmatter.featuredtype !== 'article' &&
                      'transition-opacity bg-gradient-to-t from-neutral-50 group-focus-within:opacity-0 group-hover:opacity-20',
                  )}
                >
                  <h3 className="font-serif text-3xl">{node.frontmatter.title}</h3>
                  {node.frontmatter.featuredtype === 'article' && (
                    <>
                      <span className="mt-2 mb-4 block text-sm -tracking-[0.03em] text-neutral-400">
                        {node.frontmatter.date}
                      </span>
                      <p className="leading-relaxed line-clamp-3 sm:line-clamp-4">{node.excerpt}</p>
                    </>
                  )}
                </div>
              </div>
            )}
          </Card>
        ))}

        <Notes />
        <Film label={`250D • Ektar 100`} src={Flowers} />
        <Library />
        <Film label={`Rome • Portra 400`} src={Rome} />
        <Sketches />
        {/* <Film label={`Rome • Portra 400`} src={Rome2} wide /> */}
      </motion.div>
    </Layout>
  )
}

function Card({
  href = '',
  className,
  label,
  wide,
  children,
}: React.PropsWithChildren<{ href?: string; className?: string; wide?: boolean; label?: string }>) {
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
      <Link to={href}>{children}</Link>
    </motion.div>
  )
}

function About() {
  return (
    <motion.div
      className={classNames('aspect-[2] row-span-2 col-span-2 p-8 sm:pl-0')}
      variants={{ hidden: { opacity: 0, y: -10 }, show: { opacity: 1, y: 0, transition: { type: 'spring' } } }}
    >
      <div className="text-2xl leading-10 font-mono font-extralight transition-colors text-neutral-400 dark:text-gray-400">
        <p>Hi I’m Shalva, a web developer based in Amsterdam</p>
        <br />
        <p>
          I'm starting this website to become my digital
          <span className="decoration-dashed text-neutral-600"> garden 🌱 </span>
          where I'll share notes, articles & thoughts about things that interest me. Still new to digital gardening, but
          I’m learning how to grow
        </p>
        <br />
        <p>
          You can reach out to me via{' '}
          <a className="decoration-dashed text-neutral-600" href="mailto:shalva.gegia@gmail.com?subject=Hi">
            Email
          </a>{' '}
          or{' '}
          <a className="decoration-dashed text-neutral-600" href="https://twitter.com/@ShalvaGegia" target="_blank">
            Twitter
          </a>{' '}
          if you want to say hi. While I'm not super active on social media, I do check in every now and then.
        </p>
      </div>
    </motion.div>
  )
}

function Notes() {
  return (
    <Card href="/notes">
      <div className="h-full flex flex-col items-center justify-center p-10">
        <span className="text-9xl flex justify-center mb-6">📜</span>
        <h3 className="text-center font-serif text-2xl text-neutral-600 leading-relaxed font-extralight tracking-wide">
          Notes
        </h3>
        <p className="text-center text-neutral-400 font-light text-sm">notes, articles & thoughts about things</p>
      </div>
    </Card>
  )
}

function Sketches() {
  return (
    <Card href="/sketches">
      <div className="h-full flex flex-col items-center justify-center p-10">
        <div className="">
          <img src={SketchesArt} className="w-full h-full no-lightense" />
        </div>

        <h3 className="text-center font-serif text-2xl text-neutral-600 leading-relaxed font-extralight tracking-wide">
          Sketches
        </h3>
        <p className="text-center text-neutral-400 font-light text-sm">
          painting is my hobby, I love to paint with watercolors
        </p>
      </div>
    </Card>
  )
}

function Film({ src, label, wide = false }: { src: string; label: string, wide?: boolean }) {
  return (
    <Card wide={wide}>
      <div className="relative w-full h-full">
        <img src={src} className="w-full h-full object-cover no-lightense" />

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

function Library() {
  return (
    <Card href="/library">
      <div className="h-full flex flex-col items-center justify-center p-10">
        <div className="relative grid grow grid-cols-3">
          <img
            className="no-lightense rounded-md shadow-lg group-hover:shadow-xl rotate-[-20deg] transition-transform translate-x-5 translate-y-2 group-hover:rotate-[-25deg] group-hover:translate-x-3 group-hover:scale-105"
            src={featuredBooks[0]?.cover}
          />
          <img
            className="no-lightense rounded-md shadow-lg group-hover:shadow-xl z-10 transition-transform group-hover:translate-y-[-10px] group-hover:scale-110"
            src={featuredBooks[1]?.cover}
          />
          <img
            className="no-lightense rounded-md shadow-lg group-hover:shadow-xl transition-transform rotate-[20deg] -translate-x-5 translate-y-2 group-hover:rotate-[25deg] group-hover:-translate-x-3 group-hover:scale-105"
            src={featuredBooks[2]?.cover}
          />
        </div>
        <div className="flex flex-col flex-1">
          <h3 className="text-center font-serif text-2xl text-neutral-600 leading-relaxed font-extralight tracking-wide">
            Library
          </h3>
          <p className="text-center text-neutral-400 font-light text-sm">Books</p>
        </div>
      </div>
    </Card>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      filter: { frontmatter: { published: { eq: true }, featured: { eq: true } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 300)
          id
          fields {
            title
            slug
            date
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            banner {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            slug
            keywords
            featuredwide
            featuredtype
            featuredbanner {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
