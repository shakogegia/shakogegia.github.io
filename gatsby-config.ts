import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Shalva Gegia`,
    description:
      "I'm a software engineer based in Amsterdam, Netherlands. I'm passionate about building products that solve real-world problems.",
    siteUrl: `https://gegia.dev`,
    titleTemplate: '%s · Shalva Gegia',
    image: '/images/meta.png',
    twitterUsername: '@ShalvaGegia',
    githubUsername: 'shakogegia',
    email: 'shalva.gegia@gmail.com',
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  trailingSlash: "never",
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-root-import',
    'gatsby-plugin-dark-mode',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'static/images/favicon.png',
      },
    },
    'gatsby-remark-images',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `./static/sketches/`,
        name: "sketches",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-110098374-1',
        head: false,
        exclude: ['/preview/**'],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }: any) => {
              return allMdx.edges.map((edge: any) => {
                return Object.assign({}, edge.node.frontmatter, {
                  title: edge.node.fields.title,
                  description: edge.node.excerpt,
                  url: site.siteMetadata.siteUrl + '/' + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + '/' + edge.node.fields.slug,
                })
              })
            },
            query: `
              {
                allMdx(
                  filter: {frontmatter: {published: {ne: false}}}
                  sort: {frontmatter: {date: DESC}}
                ) {
                  edges {
                    node {
                      id
                      parent {
                        ... on File {
                          name
                          sourceInstanceName
                        }
                      }
                      excerpt(pruneLength: 250)
                      frontmatter {
                        title
                        date
                      }
                      fields {
                        title
                        slug
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/feed.xml',
            title: 'Shalva Gegia',
            copyright: 'Shalva Gegia',
            language: 'en',
          },
          {
            serialize: ({ query: { site, allMdx } }: any) => {
              return allMdx.edges.map((edge: any) => {
                return Object.assign({}, edge.node.frontmatter, {
                  title: edge.node.fields.title,
                  description: edge.node.excerpt,
                  url: site.siteMetadata.siteUrl + '/' + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + '/' + edge.node.fields.slug,
                })
              })
            },
            query: `
              {
                allMdx(
                  filter: {frontmatter: {published: {ne: false}, categories: {in: "film"}}}
                  sort: {frontmatter: {date: DESC}}
                ) {
                  edges {
                    node {
                      id
                      parent {
                        ... on File {
                          name
                          sourceInstanceName
                        }
                      }
                      excerpt(pruneLength: 250)
                      frontmatter {
                        title
                        date
                      }
                      fields {
                        title
                        slug
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/feed/film.xml',
            title: 'Shalva Gegia',
            copyright: 'Shalva Gegia',
            language: 'en',
          },
        ],
      },
    },
  ],
}

export default config
