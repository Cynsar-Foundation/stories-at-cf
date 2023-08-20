import { indexQuery, websiteConfigQuery } from '../lib/queries'
import { getClient, overlayDrafts } from '../lib/sanity.server'
import { PreviewSuspense } from 'next-sanity/preview'
import { lazy } from 'react'
import Landing from '../components/landing'
import Header from '../components/header'

const LandingPreview = lazy(() => import('../components/landing-preview'))

export default function IndexPage({ allPosts, preview, websiteConfig }) {
  if (preview) {
    return (
      <PreviewSuspense fallback="Loading...">
        <LandingPreview allPosts={allPosts} websiteConfig={websiteConfig} />
      </PreviewSuspense>
    )
  }
  return <Landing allPosts={allPosts} websiteConfig={websiteConfig} />
}

export async function getStaticProps({ preview = false }) {
  const allPosts = overlayDrafts(await getClient(preview).fetch(indexQuery))
  const websiteConfig = overlayDrafts(await getClient(preview).fetch(websiteConfigQuery))
  return {
    props: { allPosts, preview, websiteConfig },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  }
}


