import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { IoWaterOutline, IoWater } from 'react-icons/io5'

export default function Share(props: { url: string, text: string }) {
  const { site } = useStaticQuery(query)

  return (
    <div className="flex justify-center mx-auto max-w-sm">
      <div className='flex flex-col items-center text-center space-y-3 group'>
        <div>
          <IoWaterOutline className='text-3xl text-gray-600 block group-hover:hidden' />
          <IoWater className='text-3xl text-gray-600 hidden group-hover:block' />
        </div>
        <a
          className='text-xl text-gray-600 font-duospace'
          href={`https://twitter.com/intent/tweet?url=${site?.siteMetadata?.siteUrl}${encodeURIComponent(props.url)}&text=${encodeURIComponent(
            props.text,
          )}&via=${site?.siteMetadata?.twitterUsername.replace('@', '')}`}
        >
          <span className='underline'>Click here</span> to share this article with your followers on Twitter if you liked it.
        </a>
        <span className='font-mono text-sm text-gray-500'>Help this note with watering to grow.</span>
      </div>
    </div>
  )
}

const query = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        twitterUsername
      }
    }
  }
`
