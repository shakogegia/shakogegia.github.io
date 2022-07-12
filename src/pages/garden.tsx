import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout/main'
import SEO from '../components/seo'

export default function GardenPage(props: any) {
  const categories = React.useMemo<string[]>(() => {
    const array = props.data.allMdx.edges.map(({ node }: any) => node.frontmatter?.categories)
    return [...new Set(array.flat())] as string[]
  }, [])

  return (
    <Layout>
      <SEO title="Garden" />

      <div className="flex flex-col align-center text-center">
        <span className="text-9xl">🌱</span>
        <h2 className=" mt-6 text-3xl font-mono transition-colors dark:text-gray-200">Digital Garden</h2>
        <h6 className=" mt-6 text-md font-mono transition-colors dark:text-gray-400">Seeded</h6>
      </div>

      <div className='mt-10'>
        <div className="flex justify-center mx-auto space-x-2">
          {categories.map(category =>
            <code key={category} className="flex flex-col space-y-8">
              {category}
            </code>
          )}
        </div>
      </div>
    </Layout>
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
