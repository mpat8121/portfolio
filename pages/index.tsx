import React from "react"
import type { NextPage } from "next"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { getAllPostSummaries, PostSummary } from "../lib/blog"
import Posts from "../components/posts"

export async function getStaticProps() {
  const posts = getAllPostSummaries()
  return {
    props: { posts },
  }
}

const Home: NextPage<{ posts: PostSummary[] }> = ({ posts }) => (
  <Layout>
    <SEO title="All posts" path="/" />
    <Bio />
    {posts.length === 0 ? <p>No blog posts found.</p> : <Posts posts={posts} />}
  </Layout>
)

export default Home
