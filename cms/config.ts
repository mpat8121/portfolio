import * as cms from "netlify-cms-core"

const cmsConfig: cms.CmsConfig = {
  backend: {
    name: "github",
    repo: "mpat8121/portfolio",
    branch: "master",
  },
  media_folder: "public/assets",
  public_folder: "assets",
  collections: [
    {
      name: "blog",
      label: "Blog",
      folder: "content/blog",
      create: true,
      fields: [
        { name: 'path', label: 'Path' },
        { name: 'date', label: 'Date', widget: 'datetime' },
        { name: 'image', label: 'Image', widget: 'image' },
        { name: 'title', label: 'Title' },
        { name: 'description', label: 'Description' },
        { name: 'body', label: 'Body', widget: 'markdown' },
      ],
    },
  ],
}

export default cmsConfig;