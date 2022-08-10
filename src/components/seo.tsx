import React from "react"
import Head from "next/head"
import config from "../config"

const SEO = ({
  description,
  lang,
  meta,
  image: metaImage,
  keywords,
  title,
  pathname,
}: any) => {
  const {
    title: configTitle,
    description: configDesc,
    keywords: configKeywords,
    siteUrl,
  } = config

  const metaDescription = description || configDesc
  const metaTitle = title || configTitle
  const metaKeywords = keywords || configKeywords
  const imageSrc = metaImage
  const image = `${siteUrl}${imageSrc}`
  const canonical = pathname ? `${siteUrl}${pathname}` : ''
  
  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="robots" content="follow, index" />
      <meta name="keywords" content={metaKeywords.join(",")}></meta>
      <meta content={metaDescription} name="description" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={metaTitle} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={config.social.twitter} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={image} />
      <meta name="monetization" content="$ilp.uphold.com/4giKKPBDELyR"></meta>
      <link rel="canonical" href={canonical} />
    </Head>
  )
}

export default SEO
