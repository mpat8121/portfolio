import React from "react"
import type { NextPage } from "next"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { getAllPosts, Post } from "../lib/blog"
import Posts from "../components/posts"
import config from "../config"

export async function getStaticProps() {
  const posts = getAllPosts()
  return {
    props: { posts },
  }
}

const Home: NextPage<{ posts: Post[] }> = ({ posts }) => {
  const keywords = config.keywords
  const image = config.image
  {
    return (
      <Layout>
        <SEO
          title="All posts"
          keywords={keywords}
          image={image}
        />
        <Bio />
        {posts.length === 0 ? (
          <p>No blog posts found.</p>
        ) : (
          <div className="container">
            <div className="columns">
              <Posts posts={posts} />
            </div>
          </div>
        )}
      </Layout>
    )
  }
}

export default Home
