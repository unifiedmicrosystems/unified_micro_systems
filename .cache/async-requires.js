// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-article-template-js": () => import("./../src/templates/articleTemplate.js" /* webpackChunkName: "component---src-templates-article-template-js" */),
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-our-story-js": () => import("./../src/pages/our-story.js" /* webpackChunkName: "component---src-pages-our-story-js" */),
  "component---src-pages-page-2-js": () => import("./../src/pages/page-2.js" /* webpackChunkName: "component---src-pages-page-2-js" */),
  "component---src-pages-reseller-business-partners-js": () => import("./../src/pages/reseller_business_partners.js" /* webpackChunkName: "component---src-pages-reseller-business-partners-js" */),
  "component---src-pages-technology-partners-js": () => import("./../src/pages/technology_partners.js" /* webpackChunkName: "component---src-pages-technology-partners-js" */),
  "component---src-pages-terms-and-conditions-js": () => import("./../src/pages/terms_and_conditions.js" /* webpackChunkName: "component---src-pages-terms-and-conditions-js" */)
}

