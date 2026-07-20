import React from "react"
import { PostSummary } from "../lib/blog"
import Link from "next/link"
import Image from "next/image"

const Posts = ({ posts }: { posts: PostSummary[] }) => (
  <div className="container">
    <div className="columns is-multiline">
      {posts.map((post) => {
        const title = post.frontMatter.title || post.slug
        const { categories, image, dateDisplay, description } = post.frontMatter

        return (
          <div
            className="column is-half-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd"
            key={post.slug}
          >
            <article className="card has-equal-height">
              <div className="card-image">
                <figure className="image post-card-image">
                  <Link href={`/blog/${post.slug}`} className="post-card-link">
                    <Image
                      className="blog-image"
                      src={image}
                      alt={title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1216px) 50vw, 25vw"
                      style={{ objectFit: "cover" }}
                    />
                  </Link>
                </figure>
              </div>
              <div className="card-content">
                <h1 className="title">
                  <Link href={`/blog/${post.slug}`} className="post-card-link">
                    {title}
                  </Link>
                </h1>
                <div className="tags">
                  {categories.map((category) => (
                    <span key={category} className="tag">
                      <Link href={`/category/${category}`} className="tag-link">
                        {category}
                      </Link>
                    </span>
                  ))}
                </div>
                <small>{dateDisplay}</small>
                <p>{description}</p>
              </div>
            </article>
          </div>
        )
      })}
    </div>
  </div>
)

export default Posts
