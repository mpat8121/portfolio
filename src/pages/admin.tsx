import dynamic from "next/dynamic"
import Head from "next/head";
import config from "../cms/config"

const CMS = dynamic(
    () =>import ('netlify-cms-app').then((cms) => cms.default.init({config}) as any),
    { ssr: false, loading: () => <p>Loading Admin...</p> },
  );

const AdminPage: React.FC = () => {
    return (
        <>
          <Head>
            <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" async></script>
          </Head>
          <CMS />
        </>
      );
}

export default AdminPage
