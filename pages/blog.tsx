import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Posts from "../components/posts"
import { getAllPosts, Post } from "../lib/blog"

export async function getStaticProps() {
  const posts = getAllPosts()
  return {
    props: { posts },
  }
}

const Blog = ({ posts }: { posts: Post[] }) => (
  <Layout>
    <SEO title="All posts" path="/blog" />
    <Posts posts={posts} />
  </Layout>
)

export default Blog
