import { usePreview } from '../lib/sanity'
import { indexQuery, websiteConfigQuery } from '../lib/queries'
import Landing from './landing'

export default function LandingPreview({ allPosts, websiteConfig }) {
  const previewAllPosts = usePreview(null, indexQuery)
  const previewWebsiteConfig = usePreview(null, websiteConfigQuery)
  return <Landing data={previewAllPosts ?? allPosts}  websiteConfig={previewWebsiteConfig ?? websiteConfig} preview />
}
