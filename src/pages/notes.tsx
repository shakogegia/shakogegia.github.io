import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout/main'
import SEO from '../components/seo'
import Hero from 'src/components/layout/hero'

export default function NotesPage({ data: { site, allMdx }, pageContext: { articles } }: any) {
  const posts = allMdx.edges.map((edge: any) => edge.node).filter((post: any) => post !== undefined)

  return (
    <Layout>
      <SEO title="Notes" />

      <Hero title="Digital Notes" color="text-indigo-500" icon={<span>📜</span>}>
        notes on things
      </Hero>

      <div className="max-w-3xl m-auto">
        <div className="mt-12 flex flex-col space-y-8">
          {posts.map((post: any) => (
            <Link key={post.id} to={`/${post.frontmatter.slug}`} className="space-y-2 group font-duospace">
              <h3 className="text-xl font-semibold group-hover:underline transition-colors dark:text-gray-300">{post.frontmatter.title}</h3>
              <article className="max-w-none text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-400">
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
    allMdx(
      filter: { frontmatter: { published: { ne: false } } }
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
          }
        }
      }
    }
  }
`
