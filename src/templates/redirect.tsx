import React, { useEffect } from 'react'
import { navigate } from 'gatsby'

export default function RedirectPage({ pageContext }: any) {
  useEffect(() => {
    const url = pageContext.redirect.startsWith('/') ? pageContext.redirect : `/${pageContext.redirect}`
    navigate(url)
  }, [pageContext])
  return <div></div>
}
