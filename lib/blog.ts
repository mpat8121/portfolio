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
  /** Raw ISO 8601 date, suitable for sorting and structured data */
  date: string
  /** Human-readable date for display, e.g. "02 June, 2022" */
  dateDisplay: string
  excerpt: string
  categories: string[]
  title: string
  description: string
  image: string
  path?: string
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
  const frontMatterData = data as Omit<FrontMatter, "date" | "dateDisplay" | "excerpt">
  return {
    slug: realSlug,
    frontMatter: {
      ...frontMatterData,
      date: new Date(data.date).toISOString(),
      dateDisplay: format(data.date, "dd MMMM, yyyy"),
      excerpt: excerpt ? excerpt : "",
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
 * Retrieves all posts in html format, sorted newest first
 * @returns {Post[]} Array of Posts
 */
export const getAllPosts = (): Post[] => {
  const slugs = fs.readdirSync(postsDir)
  const posts = slugs
    .filter((slug) => slug.toLowerCase().endsWith(".md"))
    .map((slug) => getPostsBySlug(slug))
  return posts.sort((a, b) => (a.frontMatter.date < b.frontMatter.date ? 1 : -1))
}

export const getAdjacentPosts = (currentPostSlug: string) => {
  const allPosts = getAllPosts()
  const currentIndex = allPosts.findIndex(
    (post) => post.slug === currentPostSlug
  )
  return {
    previousPost: allPosts[currentIndex - 1] || null,
    nextPost: allPosts[currentIndex + 1] || null,
  }
}
