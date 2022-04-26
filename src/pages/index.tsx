import Layout from '@/components/layout'
import fetchArticles from '@/utils/fetch-articles'
import moment from 'moment'
import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage<{ articles: Array<Article & { slug: string }> }> = ({
  articles,
}) => {
  return (
    <Layout>
      <article className="prose normalized-prose md:prose-lg lg:prose-xl max-w-none iAWriterQuattro font-light mt-8 text-gray-600">
        <p>Hi I’m Shalva, a Georgian software engineer based in Amsterdam</p>
        <p>
          I'm starting this website to become my digital{' '}
          <Link href="/garden">garden 🌱</Link> where I'll share notes, articles
          & thoughts about things that interest me. Still new to digital
          gardening, but I’m learning how to grow
        </p>
        <p>
          You can reach out to me via{' '}
          <a href="mailto:shalva.gegia@gmail.com?subject=Hi">Email</a> or{' '}
          <Link href="https://twitter.com/@ShalvaGegia">
            <a target="_blank">Twitter</a>
          </Link>{' '}
          if you want to say hi. While I'm not super active on social media, I
          do check in every now and then.
        </p>
        <p>
          <Link href="/about">
            <a className="group hover:text-indigo-500 no-underline transition-colors">
              more about me
              <span className="group-hover:ml-1 transition-all"> →</span>
            </a>
          </Link>
        </p>
      </article>

      <div className="py-16">
        <div className="w-full border-t border-gray-100"></div>
      </div>

      <section>
        {articles.map((article, i) => (
          <div key={article.slug}>
            <Article article={article} />
            {i !== articles.length - 1 && (
              <div className="py-20">
                <div className="w-full border-t border-gray-100"></div>
              </div>
            )}
          </div>
        ))}
      </section>
    </Layout>
  )
}

function Article({ article }: { article: Article & { slug: string } }) {
  return (
    <article>
      {article.cover && (
        <figure className="mb-6">
          <img
            src={article.cover}
            alt={article.title}
            className="w-full rounded-md"
          />
          {/* <figcaption className="my-1 font-mono text-sm text-gray-300">
            gegia.dev
          </figcaption> */}
        </figure>
      )}

      <h2 className="text-3xl font-normal leading-normal mt-0 mb-0 text-gray-800">
        {article.title}
      </h2>
      <small className="text-gray-300">
        {moment(article.date).format('MMMM YYYY')}
      </small>

      <article
        className="prose max-w-none pt-6 text-gray-500"
        dangerouslySetInnerHTML={{ __html: article.excerpt }}
      />

      <div className="mt-3">
        <Link href={`/article/${article.slug}`}>
          <a className="font-semibold text-lg group text-gray-600 hover:text-indigo-500 transition-colors">
            read more
            <span className="transition-all group-hover:ml-1"> →</span>
          </a>
        </Link>
      </div>
    </article>
  )
}

export async function getStaticProps() {
  const articles = await fetchArticles({ type: 'article' })
  return {
    props: {
      articles,
    },
  }
}

export default Home
