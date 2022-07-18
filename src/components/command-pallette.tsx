import { graphql, navigate, useStaticQuery } from 'gatsby'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import {
  Action, KBarAnimator, KBarPortal,
  KBarPositioner, KBarProvider, KBarResults, KBarSearch, useMatches
} from 'kbar'
import React, { PropsWithChildren, useMemo } from 'react'
import {
  IoChevronForwardOutline, IoColorPaletteOutline as IoColor, IoDocumentTextOutline as IoDocument, IoFilmOutline as IoFilm, IoHomeOutline as IoHome, IoInformationCircleOutline as IoInformation,
  IoLeafOutline as IoLeaf, IoLibraryOutline as IoLibrary, IoLogoGithub as IoGithub, IoLogoTwitter as IoTwitter, IoMailOutline as IoMail, IoSearchOutline as IoSearch
} from 'react-icons/io5'
import classNames from 'src/utils/classnames'
import { ThemeProvider, useThemeContext } from './theme-context'

function CommandPallette(props: PropsWithChildren<{}>) {
  const { site, allMdx } = useStaticQuery(query)
  const { toggleTheme } = useThemeContext()

  const { email, twitterUsername, githubUsername } = site.siteMetadata

  const actions = useMemo<Action[]>(() => {
    const items = [
      ...PAGES.map((page: any) => ({
        ...page,
        perform: () => navigate(page.url),
      })),
      {
        id: 'search',
        name: 'Search',
        keywords: 'search',
        icon: <IoSearch />,
        section: 'Navigation',
        shortcut: ['?'],
      },
      {
        id: 'email',
        name: 'Email',
        section: 'Contact',
        shortcut: ['g', 'c'],
        keywords: 'email',
        icon: <IoMail />,
        perform: () => navigate(`mailto:${email}?subject=Hi`),
      },
      {
        id: 'twitter',
        name: 'Twitter',
        section: 'Contact',
        shortcut: ['g', 't'],
        keywords: 'twitter',
        icon: <IoTwitter />,
        perform: () => navigate(`https://twitter.com/${twitterUsername}`),
      },
      {
        id: 'github',
        name: 'Github',
        section: 'Contact',
        shortcut: ['g', 'g'],
        keywords: 'github',
        icon: <IoGithub />,
        perform: () => navigate(`https://github.com/${githubUsername}`),
      },
      {
        id: 'theme',
        name: 'Theme',
        section: 'Preferences',
        icon: <IoColor />,
        keywords: 'change theme',
      },
      {
        id: 'dark',
        name: 'Dark',
        parent: 'theme',
        keywords: 'dark',
        perform: () => toggleTheme('dark'),
      },
      {
        id: 'light',
        name: 'Light',
        parent: 'theme',
        keywords: 'light',
        perform: () => toggleTheme('light'),
      },
    ]

    if (allMdx.edges.length > 0) {
      allMdx.edges.forEach(({ node }: any) => {
        items.push({
          id: node.id,
          name: node.frontmatter.title,
          keywords: `${node.frontmatter.title}`,
          perform: () => navigate(`/${node.fields.slug}`),
          parent: 'search',
        })
      })
    }

    return items
  }, [site, allMdx])

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner>
          <KBarAnimator>
            <div className="w-[600px] rounded-lg overflow-hidden shadow-2xl bg-white dark:bg-gray-800">
              <KBarSearch className="bg-transparent w-full px-4 py-4 outline-none font-mono dark:text-gray-200" />
              <RenderResults />
            </div>
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {props.children}
    </KBarProvider>
  )
}

function RenderResults() {
  const { results } = useMatches()

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) => {
        if (typeof item === 'string') {
          return (
            <div
              className={classNames(
                'px-4 py-2 text-xs DejaVuSansMono text-gray-300 dark:text-gray-500',
                'bg-transparent',
              )}
            >
              {item}
            </div>
          )
        }

        return (
          <div
            className={classNames(
              'flex justify-between',
              'px-4 py-4 iAWriterQuattro dark:text-gray-300',
              active ? 'bg-gray-50 dark:bg-gray-700 dark:text-gray-200' : 'bg-transparent',
            )}
          >
            <div className="flex items-center gap-1">
              {item.icon && <span className="mr-2">{item.icon}</span>}

              {item.ancestors.length > 0 && (
                <span className="mr-1">
                  {item.ancestors.map((ancestor: any) => (
                    <div
                      key={ancestor.name}
                      className="inline-flex items-center gap-1 text-sm text-gray-300 dark:text-gray-500"
                    >
                      <span>{ancestor.name}</span> <IoChevronForwardOutline />
                    </div>
                  ))}
                </span>
              )}

              <span>{item.name}</span>
            </div>

            <div className="flex gap-1">
              {item.shortcut?.map((shortcut, index) => (
                <span
                  key={index}
                  className="bg-gray-100 dark:bg-gray-600 px-1 text-sm rounded text-gray-600 dark:text-gray-400"
                >
                  {shortcut}
                </span>
              ))}
            </div>
          </div>
        )
      }}
    />
  )
}

const query = graphql`
  query CommandPallette {
    site {
      siteMetadata {
        title
        titleTemplate
        description
        siteUrl
        image
        twitterUsername
        githubUsername
        email
      }
    }
    allMdx(filter: { frontmatter: { published: { ne: false } } }, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
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
            slug
            keywords
          }
        }
      }
    }
  }
`

export default function CommandPalletteProvider(props: PropsWithChildren<{}>) {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }: { theme: string | null; toggleTheme: (theme: string) => void }) => {
        return (
          <ThemeProvider theme={theme} toggleTheme={toggleTheme}>
            <CommandPallette>{props.children}</CommandPallette>
          </ThemeProvider>
        )
      }}
    </ThemeToggler>
  )
}

const PAGES = [
  {
    id: 'home',
    name: 'Home',
    shortcut: ['g', 'h'],
    keywords: 'home',
    url: '/',
    section: 'Navigation',
    icon: <IoHome />,
  },
  {
    id: 'about',
    name: 'About',
    shortcut: ['g', 'a'],
    keywords: 'about me',
    icon: <IoInformation />,
    url: '/about',
    section: 'Navigation',
  },
  {
    id: 'notes',
    name: 'Notes',
    icon: <IoDocument />,
    shortcut: ['g', 'n'],
    keywords: 'writing notes articles blog post',
    url: '/notes',
    section: 'Navigation',
  },
  {
    id: 'garden',
    name: 'Garden',
    shortcut: ['g', 'g'],
    keywords: 'garden',
    icon: <IoLeaf />,
    url: '/garden',
    section: 'Navigation',
  },
  {
    id: 'library',
    name: 'Library',
    shortcut: ['h', 'l'],
    keywords: 'books library',
    icon: <IoLibrary />,
    url: '/library',
    section: 'Navigation',
  },
  {
    id: 'shows',
    name: 'Shows',
    shortcut: ['g', 's'],
    keywords: 'shows movies',
    icon: <IoFilm />,
    url: '/shows',
    section: 'Navigation',
  },
  {
    id: 'search',
    name: 'Search',
    keywords: 'search',
    icon: <IoSearch />,
    shortcut: ['?'],
  },
]
