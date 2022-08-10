import "typeface-montserrat"
import "typeface-merriweather"
import { AppProps } from "next/app"
import "../styles/global.scss"
import Script from "next/script"
import { useEffect } from "react"
import { useRouter } from "next/router"
import * as gtag from "../lib/gtag"
import BuyMeACoffee from "../components/BuyMeACoffee"
import CookieConsent from "react-cookie-consent"
import Link from "next/link"

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageView(url)
    }
    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  const handleAccept = (accepted: boolean) => {
    gtag.updateConsent(accepted);
  }

  return (
    <>
      <Script
        id="Adsense-id"
        data-ad-client="ca-pub-8451772669867652"
        async
        strategy="afterInteractive"
        onError={(e) => {
          console.error("Script failed to load", e)
        }}
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8451772669867652"
        crossOrigin="anonymous"
      />
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-QJ2G5N2PPW`}
      />
      <Script
        id="gtag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QJ2G5N2PPW', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <BuyMeACoffee />
      <Component {...pageProps} />
      <CookieConsent
        // style={{ width: '94%'}}
        buttonStyle={{
          background: "var(--consent-accept)",
          color: "var(--consent-accept-text)",
        }}
        location="bottom"
        buttonText="Accept"
        enableDeclineButton={true}
        declineButtonText="Decline"
        cookieName="google-analytics"
        onAccept={() => handleAccept(true)}
        onDecline={() => handleAccept(false)}
      >
        This site uses cookies to improve your experience. Our{" "}
        <Link href={`/privacy`}>
          <a style={{ color: "var(--consent-accept-text)" }}>Privacy Policy</a>
        </Link>{" "}
        has more details
      </CookieConsent>
    </>
  )
}

export default MyApp
