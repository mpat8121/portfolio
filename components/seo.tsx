import React from "react"
import Head from "next/head"
import { ArticleJsonLd } from "next-seo"
import config from "../config"
import { Post } from "../lib/blog"

interface SeoProps {
  /** Page title. Ignored when `post` is set (the post's own title is used). */
  title?: string
  description?: string
  /** Route path, e.g. "/" or "/category/sql" — used to build the canonical URL. Ignored when `post` is set. */
  path?: string
  image?: string
  post?: Post
}

const resolveImage = (image: string | undefined): string => {
  const src = image || config.image
  return src.startsWith("http") ? src : `${config.siteUrl}${src}`
}

const SEO = ({ title, description, path, image, post }: SeoProps) => {
  const metaTitle = post ? post.frontMatter.title : title || config.title
  const metaDescription = post
    ? post.frontMatter.description || config.description
    : description || config.description
  const canonicalPath = post ? `/blog/${post.slug}` : path || "/"
  const canonical = `${config.siteUrl}${canonicalPath}`
  const metaImage = resolveImage(post ? post.frontMatter.image : image)

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="robots" content="follow, index" />
        {!post && <meta name="keywords" content={config.keywords.join(", ")} />}
        <meta name="monetization" content="$ilp.uphold.com/4giKKPBDELyR" />
        <link rel="canonical" href={canonical} />

        <meta property="og:type" content={post ? "article" : "website"} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={metaImage} />
        <meta property="og:site_name" content={config.title} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={`@${config.social.twitter}`} />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={metaImage} />
      </Head>
      {post && (
        <ArticleJsonLd
          type="BlogPosting"
          headline={metaTitle}
          description={metaDescription}
          url={canonical}
          datePublished={post.frontMatter.date}
          image={metaImage}
          author={{ "@type": "Person", name: config.author }}
        />
      )}
    </>
  )
}

export default SEO
