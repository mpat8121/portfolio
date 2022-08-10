import React from "react"
import config from "../config"
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

const Blog = ({ posts }: { posts: Post[] }) => {
  return (
    <Layout>
      <SEO
        title="All posts"
        keywords={config.keywords}
        // image={image}
      />
      <Posts posts={posts} />
    </Layout>
  )
}

export default Blog
