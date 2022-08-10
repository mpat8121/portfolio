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
      </Head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default CustomDocument
