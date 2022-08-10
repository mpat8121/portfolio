import React from "react"
import Link from "next/link"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import {
  getPostsBySlug,
  getAllPosts,
  Post,
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
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {a11yDark} from 'react-syntax-highlighter/dist/cjs/styles/prism'

export async function getStaticProps({ params }: any) {
  const post = getPostsBySlug(params.slug)

  return {
    props: {
      ...post,
      content: post.content,
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
  const shareUrl = `${config.siteUrl}/blog/${post.slug}`
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
          <ReactMarkdown
            className="content"
            children={post.content}
            remarkPlugins={[remarkHtml]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "")
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, "")}
                    style={a11yDark as any}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              },
            }}
          />
          <footer>
            <TwitterShareButton url={shareUrl} title={post.frontMatter.title}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <FacebookShareButton url={shareUrl} quote={post.frontMatter.title}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
          </footer>
        </div>
      </article>
    </Layout>
  )
}

export default BlogPost
