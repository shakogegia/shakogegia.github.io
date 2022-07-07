import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout/main'
import { IoUnlinkOutline, IoLinkOutline } from 'react-icons/io5'
import SEO from '../components/seo'

export default function IndexPage({ data: { site, allMdx } }: any) {
  return (
    <Layout>
      <SEO title="Home" />
      
      <article className="prose normalized-prose md:prose-lg lg:prose-xl max-w-none iAWriterQuattro font-light mt-8 text-gray-600">
        <p>Hi I’m Shalva, a Georgian software engineer based in Amsterdam</p>
        <p>
          I'm starting this website to become my digital <Link to="/garden">garden 🌱</Link> where I'll share notes,
          articles & thoughts about things that interest me. Still new to digital gardening, but I’m learning how to
          grow
        </p>
        <p>
          You can reach out to me via <a href="mailto:shalva.gegia@gmail.com?subject=Hi">Email</a> or{' '}
          <a href="https://twitter.com/@ShalvaGegia" target="_blank">
            Twitter
          </a>{' '}
          if you want to say hi. While I'm not super active on social media, I do check in every now and then.
        </p>
        <p>
          <Link to="/about" className="group hover:text-indigo-500 transition-colors">
            <span>more about me</span>
            <span className="group-hover:ml-1 transition-all"> →</span>
          </Link>
        </p>
      </article>

      <div className="py-12">
        <div className="w-full border-t border-gray-100"></div>
      </div>

      <section>
        <h3 className="text-2xl font-semibold">Personal</h3>
        <div className="flex flex-col space-y-4 mt-4">
          <Item href="/library">📚 Books I read</Item>
          <Item href="/shows">📽 Shows I watch</Item>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold">Favorites</h3>
        <div className="flex flex-col space-y-4 mt-4">
          {allMdx.edges.map(({ node }: any) => (
            <Item key={node.id} href={node.frontmatter.slug}>
              {node.frontmatter.title}
            </Item>
          ))}
        </div>
      </section>
    </Layout>
  )
}

function Item(props: React.PropsWithChildren<{ href: string }>) {
  return (
    <Link
      to={props.href}
      className="inline-flex space-x-2 text-lg iAWriterDuospace hover:underline hover:text-indigo-500 transition-colors group"
    >
      <div className="inline-flex mt-1">
        <span className="inline-flex group-hover:hidden">
          <IoUnlinkOutline />
        </span>

        <span className="hidden group-hover:inline-flex">
          <IoLinkOutline />
        </span>
      </div>

      <span>{props.children}</span>
    </Link>
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
      filter: { frontmatter: { published: { ne: false }, featured: { eq: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
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
