export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageView = (url: string) => {
  ;(window as any).gtag("config", GA_TRACKING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: any) => {
  ;(window as any).gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

export const updateConsent = (accepted: boolean) => {
  ;(window as any).gtag("consent", "update", {
    analytics_storage: accepted ? "granted" : "denied",
  })
}
