import React from "react"
import { Post } from "../lib/blog"
import Link from "next/link"
import Image from "next/image"

const Posts = ({ posts }: { posts: Post[] }) => (
  <div className="columns is-multiline">
    {posts.map((node) => {
      const title = node.frontMatter.title || node.slug
      const { categories, image } = node.frontMatter

      return (
        <div
          className="column is-half-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd"
          key={node.slug}
        >
          <div className="card has-equal-height">
            <div className="card-image">
              <figure className="image">
                <Link
                  style={{ boxShadow: `none`, color: "var(--textLink)" }}
                  href={`/blog/${node.slug}`}
                >
                  <div style={{width: '100%', height: '300px', position: 'relative'}}>
                    <Image
                      className="blog-image"
                      width={'100'}
                      height={'300'}
                      // layout="fill"
                      src={image ? image : ""}
                      alt="Blog card feature"
                      // objectFit='contain'
                    />
                  </div>
                </Link>
              </figure>
            </div>
            <div className="card-content">
              <h1 className="title">
                <Link
                  style={{ boxShadow: `none`, color: "var(--textLink)" }}
                  href={`/blog/${node.slug}`}
                >
                  <span style={{ color: "var(--textLink)" }}>{title}</span>
                </Link>
              </h1>
              <div className="tags">
                {categories.map((category) => {
                  return (
                    <span key={category} className="tag">
                      <Link
                        style={{ boxShadow: `none`, color: "var(--textLink)" }}
                        as={`/category/${category}`}
                        href={{
                          pathname: `/category/[category]`,
                          query: { category },
                        }}
                      >
                        <span className="tag-link">{category}</span>
                      </Link>
                    </span>
                  )
                })}
              </div>
              <small>{node.frontMatter.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontMatter.description,
                }}
              />
            </div>
          </div>
        </div>
      )
    })}
  </div>
)

export default Posts
