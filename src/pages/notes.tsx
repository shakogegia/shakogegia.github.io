import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout/main'
import SEO from '../components/seo'

export default function NotesPage({ data: { site, allMdx }, pageContext: { articles } }: any) {
  const posts = allMdx.edges.map((edge: any) => edge.node).filter((post: any) => post !== undefined)

  return (
    <Layout>
      <SEO title="Notes" />

      <div className="max-w-3xl m-auto">
        <div className="flex flex-col align-center text-center iAWriterDuospace">
          <span className="text-9xl">📜</span>
          <h2 className=" mt-6 text-3xl">Digital Notes</h2>
          <h6 className=" mt-6 text-md">notes on things</h6>
        </div>

        <div className="mt-12 flex flex-col space-y-8">
          {posts.map((post: any) => (
            <Link key={post.id} to={`/${post.frontmatter.slug}`} className="space-y-2 group iAWriterDuospace">
              <h3 className="text-xl font-semibold group-hover:underline">{post.frontmatter.title}</h3>
              <article className="max-w-none text-gray-500 group-hover:text-gray-700">
                {post.excerpt}
              </article>
            </Link>
          ))}
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
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
          }
        }
      }
    }
  }
`
