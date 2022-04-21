import type { NextPage } from 'next'
import moment from 'moment'
import Layout from '@/components/layout'
import fetchArticle from '@/utils/fetch-article'
import fetchArticles from '@/utils/fetch-articles'

const ArticlePage: NextPage<{ article: Article }> = ({ article }) => {
  return (
    <Layout>
      <article className="mt-8">
        {article.cover && (
          <figure className="mb-6">
            <img
              src={article.cover}
              alt={article.title}
              className="w-full rounded-md"
            />
            {/* <figcaption className="my-1 font-mono text-sm text-gray-300">
              caption
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
          className="prose prose-img:inhe max-w-none pt-6 text-gray-500"
          dangerouslySetInnerHTML={{ __html: article.content }}
        ></article>
      </article>
    </Layout>
  )
}

export async function getStaticProps({
  params,
}: {
  params: { article: string }
}) {
  const article = await fetchArticle(params.article)

  return {
    props: {
      article,
    },
  }
}

export async function getStaticPaths() {
  const articles = await fetchArticles()

  const paths = articles.map((article) => ({
    params: { article: article.slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default ArticlePage
