import fs from "fs"
import { join } from "path"
import matter from "gray-matter"
import format from "date-fns/format"

const postsDir = join(process.cwd(), "content", "blog")

export interface Post {
  slug: string
  frontMatter: FrontMatter
  content: string
}

interface FrontMatter {
  date: string
  excerpt: string
  categories: string[]
  [key: string]: any
}

/**
 * Retrieves a single blog post by filename
 * @param {string} slug Filename of blog post
 * @returns {Post} HTML formatted post content and metadata
 */
export const getPostsBySlug = (slug: string): Post => {
  const realSlug = slug.replace(/\.md$/, "")
  const fullPath = join(postsDir, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content, excerpt } = matter(fileContents)
  const date = format(data.date, "dd MMMM, yyyy")
  return {
    slug: realSlug,
    frontMatter: {
      ...data,
      date,
      excerpt: excerpt ? excerpt : "",
      categories: data.categories,
    },
    content,
  }
}

/**
 * Retrieves all posts matching a given category
 * @param {string} category The category to filter posts by 
 * @returns {Array<Post>} Posts matching the category
 */
export const getPostsByCategory = (category: string): Post[] => {
  const allPosts = getAllPosts()
  const categoryPosts = allPosts.filter((post) =>
    post.frontMatter.categories.includes(category)
  )
  return categoryPosts
}

/**
 * Retrieves all posts in html format
 * @returns {Post[]} Array of Posts
 */
export const getAllPosts = (): Post[] => {
  const slugs = fs.readdirSync(postsDir)
  const posts = slugs.map((slug) => getPostsBySlug(slug))
  return posts
}

