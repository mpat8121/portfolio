import React from "react"
import Link from "next/link"
import dynamic from "next/dynamic"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import {
  getPostsBySlug,
  getAllPosts,
  Post,
  getAdjacentPosts,
} from "../../lib/blog"
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share"
import config from "../../config"
import ReactMarkdown from "react-markdown"
import { SUPPORTED_LANGUAGES } from "../../components/supportedCodeLanguages"

const CodeBlock = dynamic(() => import("../../components/codeBlock"))

interface BlogPostProps extends Post {
  nextPost: Post | null
  previousPost: Post | null
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = getPostsBySlug(params.slug)
  const { nextPost, previousPost } = getAdjacentPosts(params.slug)
  return {
    props: {
      ...post,
      nextPost,
      previousPost,
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts()

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  }
}

const BlogPost = (post: BlogPostProps) => {
  const shareUrl = `${config.siteUrl}/blog/${post.slug}`

  return (
    <Layout>
      <SEO post={post} />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <div className="container blog-post-container">
          <header className="content blog-post-header">
            <h1 className="title" itemProp="headline">
              {post.frontMatter.title}
            </h1>
            <p className="content">{post.frontMatter.dateDisplay}</p>
            <p className="content">
              <span className="tags">
                {post.frontMatter.categories.map((category) => (
                  <Link key={category} href={`/category/${category}`}>
                    <span className="tag">{category}</span>
                  </Link>
                ))}
              </span>
            </p>
          </header>
          <div className="content blog-post-content">
            <ReactMarkdown
              components={{
                pre({ children }) {
                  return <>{children}</>
                },
                code({ node, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "")
                  const isBlock =
                    node?.position &&
                    node.position.start.line !== node.position.end.line
                  const codeText = String(children).replace(/\n$/, "")
                  const language = match?.[1]

                  if (isBlock) {
                    if (language && SUPPORTED_LANGUAGES.has(language)) {
                      return (
                        <CodeBlock language={language}>{codeText}</CodeBlock>
                      )
                    }

                    return (
                      <pre className="blog-code-block">
                        <code>{codeText}</code>
                      </pre>
                    )
                  }

                  return (
                    <code className="inline-code" {...props}>
                      {children}
                    </code>
                  )
                },
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
          <div className="has-text-centered">
            <p className="content">If you liked this post, please share it!</p>
            <TwitterShareButton url={shareUrl} title={post.frontMatter.title}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <FacebookShareButton url={shareUrl}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
          </div>
          <ul className="blog-post-nav">
            <li>
              {post.previousPost && (
                <Link href={`/blog/${post.previousPost.slug}`}>
                  ← {post.previousPost.frontMatter.title}
                </Link>
              )}
            </li>
            <li>
              {post.nextPost && (
                <Link href={`/blog/${post.nextPost.slug}`}>
                  {post.nextPost.frontMatter.title} →
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
