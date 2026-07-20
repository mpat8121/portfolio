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
        disableStyles
        location="bottom"
        buttonText="Accept"
        enableDeclineButton={true}
        declineButtonText="Decline"
        cookieName="google-analytics"
        expires={365}
        containerClasses="cookie-consent-container"
        contentClasses="cookie-consent-content"
        buttonWrapperClasses="cookie-consent-btn-wrapper"
        buttonClasses="cookie-consent-btn cookie-consent-btn--accept"
        declineButtonClasses="cookie-consent-btn cookie-consent-btn--decline"
        ariaAcceptLabel="Accept cookies"
        ariaDeclineLabel="Decline cookies"
        onAccept={() => handleAccept(true)}
        onDecline={() => handleAccept(false)}
      >
        This site uses cookies to improve your experience. Read our{" "}
        <Link href={`/privacy`}>Privacy Policy</Link> to learn more.
      </CookieConsent>
    </>
  )
}

export default MyApp
