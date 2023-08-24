import Layout from './layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Container from './container'
import Intro from './intro'
import HeroPost from './hero-post'
import MoreStories from './more-stories'


export default function Landing({ allPosts,websiteConfig, preview }) {
  const [heroPost, ...morePosts] = allPosts || []
  return (
    <>
   
      <Layout preview={preview}>
        <Head>
          <title>{`Stories at Cynsar Foundation captured by its members ${CMS_NAME}`}</title>
        </Head>
        <Container>
          <Intro data={websiteConfig} false />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              authors={heroPost.authors}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}
