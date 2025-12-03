import React from "react"
import Head from "next/head"
import config from "../config"
import { ArticleJsonLd } from "next-seo"
import { Post } from "../lib/blog"

const SEO = ({ title, keywords, heroImg, post, category }: any) => {
  const {
    title: configTitle,
    description: configDesc,
    keywords: configKeywords,
    social,
    siteUrl,
  } = config

  if (post) {
    const metaDescription = post.frontMatter.description || configDesc
    const metaTitle = post.frontMatter.title || configTitle
    const metaKeywords = configKeywords
    const imageSrc = post.frontMatter.image
    const image = `${siteUrl}${imageSrc}`
    const canonical = `${siteUrl}${post.slug}`

    return (
      <>
        <ArticleJsonLd
          headline={metaTitle}
          description={metaDescription}
          url={canonical}
          // openGraph={{
          //   type: "website",
          //   url: config.siteUrl,
          //   title: metaTitle,
          //   description: metaDescription,
          //   locale: "en-AU",
          //   images: [
          //     {
          //       url: image,
          //       width: 800,
          //       height: 600,
          //       alt: `hero image for ${metaTitle}`,
          //     },
          //   ],
          //   site_name: metaTitle,
          // }}
          // twitter={{
          //   handle: config.social.twitter,
          //   site: config.siteUrl,
          //   cardType: "summary",
          // }}
        />
        <meta name="keywords" content={metaKeywords.join(",")}></meta>
        <meta name="monetization" content="$ilp.uphold.com/4giKKPBDELyR"></meta>
      </>
    )
  } else {
    const url = category ? `${siteUrl}/categories/${category}` : siteUrl
    return (
      <Head>
        <title>{title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="keywords" content={keywords}></meta>
        <meta content={title} name="description" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={title} />
        <meta property="og:image" content={heroImg} />
        <meta property="og:site_name" content={title} />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:creator" content={social.twitter} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={title} />
        <meta property="twitter:image" content={heroImg} />
        <meta name="monetization" content="$ilp.uphold.com/4giKKPBDELyR"></meta>
        <link rel="canonical" href={url} />
      </Head>
    )
  }
}

export default SEO
