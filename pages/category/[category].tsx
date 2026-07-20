import Layout from "../../components/layout"
import Posts from "../../components/posts"
import SEO from "../../components/seo"
import { getAllPosts, getPostSummariesByCategory, PostSummary } from "../../lib/blog"

interface CategoryPageProps {
  categoryPosts: PostSummary[]
  category: string
}

export async function getStaticProps({ params }: { params: { category: string } }) {
  const categoryPosts = getPostSummariesByCategory(params.category)
  return {
    props: {
      categoryPosts,
      category: params.category,
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts()

  const uniqueHolder: any = {}
  posts.forEach((post) => {
    const categories = post.frontMatter.categories
    categories.forEach((category) => {
      if (!uniqueHolder[category]) uniqueHolder[category] = category
    })
  })
  const uniqueCategories: string[] = Object.values(uniqueHolder)
  const paths = uniqueCategories.map((category) => ({
    params: {
      category,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

const CategoryPage = ({ categoryPosts, category }: CategoryPageProps) => {
  return (
    <Layout>
      <SEO title={`Category: ${category}`} path={`/category/${category}`} />
      <Posts posts={categoryPosts} />
    </Layout>
  )
}

export default CategoryPage
