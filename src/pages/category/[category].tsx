import Layout from "../../components/layout"
import Posts from "../../components/posts"
import { getAllPosts, getPostsByCategory, Post } from "../../lib/blog"

export async function getStaticProps({ params }: any) {
  console.log("GetStaticProps", params)
  const categoryPosts = getPostsByCategory(params.category)
  return {
    props: {
      categoryPosts,
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

const CategoryPage = ({ categoryPosts }: any) => {
  return (
    <Layout>
      <Posts posts={categoryPosts} />
    </Layout>
  )
}

export default CategoryPage
