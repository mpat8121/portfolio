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

/** Post metadata without the markdown body — for listing/card views that don't render content. */
export type PostSummary = Omit<Post, "content">

const toSummary = ({ content, ...summary }: Post): PostSummary => summary

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

/**
 * Retrieves all posts' metadata (no markdown body), sorted newest first —
 * for listing/card views that don't render post content.
 */
export const getAllPostSummaries = (): PostSummary[] => getAllPosts().map(toSummary)

/**
 * Retrieves all posts matching a given category, without markdown body content
 * @param {string} category The category to filter posts by
 * @returns {Array<PostSummary>} Posts matching the category
 */
export const getPostSummariesByCategory = (category: string): PostSummary[] => {
  const allPosts = getAllPostSummaries()
  return allPosts.filter((post) => post.frontMatter.categories.includes(category))
}

export const getAdjacentPosts = (currentPostSlug: string) => {
  const allPosts = getAllPostSummaries()
  const currentIndex = allPosts.findIndex(
    (post) => post.slug === currentPostSlug
  )
  return {
    previousPost: allPosts[currentIndex - 1] || null,
    nextPost: allPosts[currentIndex + 1] || null,
  }
}
