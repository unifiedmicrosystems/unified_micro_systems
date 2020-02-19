const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-article-template-js": hot(preferDefault(require("/opt/lampp/htdocs/unifiedmicro_systems/src/templates/articleTemplate.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/opt/lampp/htdocs/unifiedmicro_systems/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/opt/lampp/htdocs/unifiedmicro_systems/src/pages/index.js"))),
  "component---src-pages-our-story-js": hot(preferDefault(require("/opt/lampp/htdocs/unifiedmicro_systems/src/pages/our-story.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/opt/lampp/htdocs/unifiedmicro_systems/src/pages/page-2.js"))),
  "component---src-pages-reseller-business-partners-js": hot(preferDefault(require("/opt/lampp/htdocs/unifiedmicro_systems/src/pages/reseller_business_partners.js"))),
  "component---src-pages-technology-partners-js": hot(preferDefault(require("/opt/lampp/htdocs/unifiedmicro_systems/src/pages/technology_partners.js"))),
  "component---src-pages-terms-and-conditions-js": hot(preferDefault(require("/opt/lampp/htdocs/unifiedmicro_systems/src/pages/terms_and_conditions.js")))
}

