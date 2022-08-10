import Script from "next/script"

const BuyMeACoffee = () => {
  return (
    <Script
      src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
      data-name="BMC-Widget"
      data-cfasync="false"
      data-id="mickp"
      data-description="Support me on Buy me a coffee!"
      data-message="Buying a single beer makes all the work worth it!"
      data-color="#40DCA5"
      data-position="Right"
      data-x_margin="18"
      data-y_margin="18"
      onLoad={() => {
        const event = new Event("DOMContentLoaded", {
          bubbles: false,
          cancelable: false,
        })
        window.dispatchEvent(event)
      }}
    />
  )
}

export default BuyMeACoffee