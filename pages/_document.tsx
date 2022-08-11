import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document"

export async function getInitialProps(ctx: DocumentContext) {
  const initialProps = await Document.getInitialProps(ctx)
  return { ...initialProps }
}

const CustomDocument = () => {
  const setInitialTheme = `
  function getUserPreference() {
    if(window.localStorage.getItem('theme')) {
      return window.localStorage.getItem('theme')
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
              ? 'dark'
              : 'light'
  }
  document.body.dataset.theme = getUserPreference();
`

  return (
    <Html>
      <Head>
        <script
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          async
        ></script>
      </Head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
        <Main />
        <NextScript />
        <script dangerouslySetInnerHTML={{
            __html: `
              if (window.netlifyIdentity) {
                window.netlifyIdentity.on("init", user => {
                  if (!user) {
                    window.netlifyIdentity.on("login", () => {
                      document.location.href = "/admin/";
                    });
                  }
                });
              }
          `}}/>
      </body>
    </Html>
  )
}

export default CustomDocument
