import React from "react"
import Link from "next/link"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import {
  getPostsBySlug,
  getAllPosts,
  Post,
  getNextPost,
  getPreviousPost,
} from "../../lib/blog"
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share"
import config from "../../config"
import ReactMarkdown from "react-markdown"
import remarkHtml from "remark-html"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism"

export async function getStaticProps({ params }: any) {
  const post = getPostsBySlug(params.slug)
  const nextPost = getNextPost(params.slug)
  const previousPost = getPreviousPost(params.slug)
  return {
    props: {
      ...post,
      content: post.content,
      nextPost,
      previousPost,
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

const BlogPost = (post: any) => {
  const shareUrl = `${config.siteUrl}/blog/${post.slug}`
  return (
    <Layout>
      <SEO
        post={post}
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
                {post.frontMatter.categories.map(
                  (category: string, index: number) => {
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
                  }
                )}
              </span>
            </p>
          </header>
          <ReactMarkdown
            className="content"
            remarkPlugins={[remarkHtml]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "")
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={a11yDark as any}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >{String(children).replace(/\n$/, "")}</SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              },
            }}
          >{post.content}</ReactMarkdown>
          <div className="has-text-centered">
            <p className="content">If you liked this post, please share it!</p>
            <TwitterShareButton url={shareUrl} title={post.frontMatter.title}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <FacebookShareButton url={shareUrl} quote={post.frontMatter.title}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
          </div>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {post.previousPost && (
                <Link href={`${config.siteUrl}/blog/${post.previousPost.slug}`}>
                  <a style={{ color: "var(--text)" }}>
                    ← {post.previousPost.frontMatter.title}
                  </a>
                </Link>
              )}
            </li>
            <li>
              {post.nextPost && (
                <Link href={`${config.siteUrl}/blog/${post.nextPost.slug}`}>
                  <a style={{ color: "var(--text)" }}>
                    {post.nextPost.frontMatter.title} →
                  </a>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </article>
    </Layout>
  )
}

export default BlogPost
