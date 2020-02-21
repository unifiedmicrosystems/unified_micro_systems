const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-article-template-js": hot(preferDefault(require("/opt/lampp/htdocs/unifiedmicro_systems/src/templates/articleTemplate.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/opt/lampp/htdocs/unifiedmicro_systems/src/pages/404.js"))),
  "component---src-pages-articles-js": hot(preferDefault(require("/opt/lampp/htdocs/unifiedmicro_systems/src/pages/articles.js"))),
  "component---src-pages-careers-js": hot(preferDefault(require("/opt/lampp/htdocs/unifiedmicro_systems/src/pages/careers.js"))),
  "component---src-pages-contact-centers-js": hot(preferDefault(require("/opt/lampp/htdocs/unifiedmicro_systems/src/pages/contact_centers.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/opt/lampp/htdocs/unifiedmicro_systems/src/pages/contact.js"))),
  "component---src-pages-disaster-recovery-business-continuity-js": hot(preferDefault(require("/opt/lampp/htdocs/unifiedmicro_systems/src/pages/disaster_recovery_business_continuity.js"))),
  "component---src-pages-hold-music-ivr-voice-recording-js": hot(preferDefault(require("/opt/lampp/htdocs/unifiedmicro_systems/src/pages/hold_music_ivr_voice_recording.js"))),
  "component---src-pages-hosted-solutions-js": hot(preferDefault(require("/opt/lampp/htdocs/unifiedmicro_systems/src/pages/hosted_solutions.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/opt/lampp/htdocs/unifiedmicro_systems/src/pages/index.js"))),
  "component---src-pages-it-office-setup-uae-phillippines-js": hot(preferDefault(require("/opt/lampp/htdocs/unifiedmicro_systems/src/pages/it_office_setup_uae_phillippines.js"))),
  "component---src-pages-managed-services-uae-phillippines-js": hot(preferDefault(require("/opt/lampp/htdocs/unifiedmicro_systems/src/pages/managed_services_uae_phillippines.js"))),
  "component---src-pages-network-end-point-security-js": hot(preferDefault(require("/opt/lampp/htdocs/unifiedmicro_systems/src/pages/network_end_point_security.js"))),
  "component---src-pages-open-source-software-js": hot(preferDefault(require("/opt/lampp/htdocs/unifiedmicro_systems/src/pages/open_source_software.js"))),
  "component---src-pages-our-story-js": hot(preferDefault(require("/opt/lampp/htdocs/unifiedmicro_systems/src/pages/our-story.js"))),
  "component---src-pages-reseller-business-partners-js": hot(preferDefault(require("/opt/lampp/htdocs/unifiedmicro_systems/src/pages/reseller_business_partners.js"))),
  "component---src-pages-smart-building-home-automation-js": hot(preferDefault(require("/opt/lampp/htdocs/unifiedmicro_systems/src/pages/smart_building_home_automation.js"))),
  "component---src-pages-software-development-js": hot(preferDefault(require("/opt/lampp/htdocs/unifiedmicro_systems/src/pages/software_development.js"))),
  "component---src-pages-strategic-it-planning-architecture-js": hot(preferDefault(require("/opt/lampp/htdocs/unifiedmicro_systems/src/pages/strategic_it_planning_architecture.js"))),
  "component---src-pages-structured-cabling-wireless-js": hot(preferDefault(require("/opt/lampp/htdocs/unifiedmicro_systems/src/pages/structured_cabling_wireless.js"))),
  "component---src-pages-technology-partners-js": hot(preferDefault(require("/opt/lampp/htdocs/unifiedmicro_systems/src/pages/technology_partners.js"))),
  "component---src-pages-terms-and-conditions-js": hot(preferDefault(require("/opt/lampp/htdocs/unifiedmicro_systems/src/pages/terms_and_conditions.js"))),
  "component---src-pages-unified-communications-js": hot(preferDefault(require("/opt/lampp/htdocs/unifiedmicro_systems/src/pages/unified_communications.js")))
}

