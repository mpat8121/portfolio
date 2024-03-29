import Layout from "../../components/layout"
import Posts from "../../components/posts"
import SEO from "../../components/seo"
import { getAllPosts, getPostsByCategory, Post } from "../../lib/blog"

export async function getStaticProps({ params }: any) {
  const categoryPosts = getPostsByCategory(params.category)
  return {
    props: {
      categoryPosts,
      category: params.category
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

const CategoryPage = ({ categoryPosts, category }: any) => {
  return (
    <Layout>
      <SEO title={category} category={category} />
      <Posts posts={categoryPosts} />
    </Layout>
  )
}

export default CategoryPage
