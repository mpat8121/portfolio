import React from "react"
import Link from "next/link"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import {
  getPostsBySlug,
  getAllPosts,
  markdownToHtml,
  Post,
} from "../../lib/blog"

export async function getStaticProps({ params }: any) {
  const post = getPostsBySlug(params.slug)
  const content = await markdownToHtml(post.content || "")

  return {
    props: {
      ...post,
      content,
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts()

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

const BlogPost = (post: Post) => {
  return (
    <Layout>
      <SEO
        title={post.frontMatter.title}
        description={post.frontMatter.description || post.frontMatter.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <div className="container">
          <header className="content">
            <h1
              className="title"
              style={{ color: "var(--text)" }}
              itemProp="headline"
            >
              {post.frontMatter.title}
            </h1>
            <p className="content">{post.frontMatter.date}</p>
            <p className="content">
              <span className="tags">
                {post.frontMatter.categories.map((category, index) => {
                  return (
                    <Link
                      key={index}
                      href={`/category/${category}`}
                      style={{ color: "var(--text)" }}
                    >
                      <span key={category} className="tag">
                        {category}
                      </span>
                    </Link>
                  )
                })}
              </span>
            </p>
          </header>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        </div>
      </article>
    </Layout>
  )
}

export default BlogPost
