import { graphql, Link } from 'gatsby'
import moment from 'moment'
import * as React from 'react'
import classNames from 'src/utils/classnames'
import Layout from '../components/layout/main'
import SEO from '../components/seo'

export default function GardenPage(props: any) {
  const [activeCategory, setActiveCategory] = React.useState<string | null>(null)

  const categories = React.useMemo<string[]>(() => {
    const array = props.data.allMdx.edges.map(({ node }: any) => node.frontmatter?.categories)
    return [...new Set(array.flat())].sort() as string[]
  }, [])

  return (
    <Layout>
      <SEO title="Garden" />

      <div className="flex flex-col max-w-md mx-auto align-center text-center">
        <span className="text-9xl">🌱</span>
        <h2 className=" mt-6 text-3xl font-mono transition-colors dark:text-gray-200">Digital Garden</h2>
        <h6 className=" mt-6 text-sm font-mono transition-colors text-gray-400 dark:text-gray-400">
          A collection of notes, articles and ideas I'm interested into.
        </h6>
      </div>

      <div className="my-10">
        <Topics categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      </div>

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {props.data.allMdx.edges.map(({ node }: any) => {
            const { frontmatter, fields } = node
            if (!frontmatter || !fields) return null
            const { categories = [] } = frontmatter
            if (activeCategory && !categories.includes(activeCategory)) return null
            return (
              <div key={fields.id}>
                <Link to={`/${fields.slug}`}>
                  <h3 className="text-lg font-mono transition-colors dark:text-gray-200">{fields.title}</h3>
                  <span className="text-sm text-gray-400">
                    Note {' • '} {moment(fields.date).fromNow()}
                  </span>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

function Topics({
  categories,
  activeCategory,
  setActiveCategory,
}: {
  categories: string[]
  activeCategory: string | null
  setActiveCategory: (category: string | null) => void
}) {
  return (
    <div className="flex justify-center space-x-2 sm:space-x-4 mx-auto">
      <div>
        <div
          className={classNames(
            'relative mr-6',
            'iAWriterQuattro text-gray-400',
            "after:content-[' '] after:h-[70%] after:w-0.5 after:absolute after:top-[15%] after:-right-3 after:bg-gray-300",
          )}
        >
          Topics
        </div>
      </div>
      <div className="flex flex-wrap justify-start mx-auto">
        {categories.map((category) => (
          <span
            key={category}
            className={classNames(
              'relative cursor-pointer capitalize mr-6 mb-2',
              'after:opacity-0 transition-opacity after:h-0.5 after:w-full after:absolute after:-bottom-1 after:left-0 after:bg-gradient-to-r after:from-pink-400 after:to-indigo-600',
              'hover:after:opacity-100',
              'iAWriterQuattro text-gray-500',
              category === activeCategory && 'after:opacity-100',
            )}
            onClick={() => setActiveCategory(activeCategory !== category ? category : null)}
          >
            {category}
          </span>
        ))}
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(filter: { frontmatter: { published: { ne: false } } }, sort: { fields: [frontmatter___date], order: DESC }) {
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
            featured
            date(formatString: "MMMM DD, YYYY")
            banner {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            slug
            categories
            keywords
          }
        }
      }
    }
  }
`
