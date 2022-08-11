import dynamic from "next/dynamic"
import config from "../cms/config"

const CMS = dynamic(
  () =>
    import("netlify-cms-app").then(
      (cms: any) => cms.init({ config }) as any
    ),
  { ssr: false, loading: () => <p>Loading Admin...</p> }
)

const AdminPage: React.FC = () => {
  return <CMS />
}

export default AdminPage
