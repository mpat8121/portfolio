import * as cms from "netlify-cms-core"

const cmsConfig: cms.CmsConfig = {
  backend: {
    name: "github",
    repo: "mpat8121/portfolio",
    branch: "master",
  },
  site_url: "https://www.mickpatterson.com.au",
  show_preview_links: true,
  media_folder: "public/assets",
  public_folder: "assets",
  collections: [
    {
      name: "blog",
      label: "Blog",
      folder: "content/blog",
      create: true,
      fields: [
        { name: "path", label: "Path", widget: "string" },
        { name: "date", label: "Date", widget: "datetime" },
        { name: "image", label: "Image", widget: "image" },
        { name: "categories", label: "Categories", widget:"select", multiple: true, options: ["Azure", "Javascript", "SQL"]},
        { name: "title", label: "Title", widget: "string" },
        { name: "description", label: "Description", widget: "text" },
        { name: "body", label: "Body", widget: "markdown" },
      ],
    },
  ],
}

export default cmsConfig;