import Script from "next/script"

const Adsense = () => {
  return (
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
  )
}

export default Adsense