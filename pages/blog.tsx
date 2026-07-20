import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Posts from "../components/posts"
import { getAllPostSummaries, PostSummary } from "../lib/blog"

export async function getStaticProps() {
  const posts = getAllPostSummaries()
  return {
    props: { posts },
  }
}

const Blog = ({ posts }: { posts: PostSummary[] }) => (
  <Layout>
    <SEO title="All posts" path="/blog" />
    <Posts posts={posts} />
  </Layout>
)

export default Blog
