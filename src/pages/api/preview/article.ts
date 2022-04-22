import { NextApiRequest, NextApiResponse } from 'next'

// open /api/preview from your browser.
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setPreviewData({})
  res.redirect('/article/' + req.query.slug)
}
