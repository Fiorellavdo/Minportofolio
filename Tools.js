/* =====================================================================
   VERKTYG  (visas på Om mig)
   ---------------------------------------------------------------------
   Varje verktyg: { name, icon }
     icon = Simple Icons-slug (https://simpleicons.org) för riktig logga,
            eller null för en enkel färgprick (verktyg utan egen logga).
   Lägg till/ta bort fritt – grupperna byggs automatiskt.
   ===================================================================== */

window.TOOLS = [
  {
    group: "Sociala medier & annonser",
    items: [
      { name: "Instagram", icon: "instagram" },
      { name: "TikTok", icon: "tiktok" },
      { name: "Facebook", icon: "facebook" },
      { name: "LinkedIn", icon: "linkedin" },
      { name: "YouTube", icon: "youtube" },
      { name: "Meta Ads", icon: "meta" },
      { name: "LinkedIn Ads", icon: "linkedin" },
      { name: "Google Ads", icon: "googleads" }
    ]
  },
  {
    group: "Marknadsföring & analys",
    items: [
      { name: "SEO", icon: null },
      { name: "Content marketing", icon: null },
      { name: "Paid social", icon: null },
      { name: "GA4", icon: "googleanalytics" },
      { name: "Looker Studio", icon: "looker" },
      { name: "Power BI", icon: null },
      { name: "Google Search Console", icon: "googlesearchconsole" },
      { name: "Google Trends", icon: "googletrends" },
      { name: "Semrush", icon: "semrush" },
      { name: "Screaming Frog", icon: null },
      { name: "GTM", icon: "googletagmanager" }
    ]
  },
  {
    group: "Content & design",
    items: [
      { name: "Canva", icon: "canva" },
      { name: "Figma", icon: "figma" },
      { name: "CapCut", icon: "capcut" },
      { name: "Adobe (grund)", icon: "adobe" },
      { name: "Shopify", icon: "shopify" },
      { name: "WordPress", icon: "wordpress" },
      { name: "Squarespace", icon: "squarespace" },
      { name: "Wix", icon: "wix" },
      { name: "One.com", icon: null },
      { name: "Framer", icon: "framer" },
      { name: "Klaviyo", icon: "klaviyo" },
      { name: "Mailchimp", icon: "mailchimp" },
      { name: "HubSpot", icon: "hubspot" },
      { name: "Brevo", icon: "brevo" },
      { name: "Microsoft 365", icon: "microsoft365" },
      { name: "Dropbox", icon: "dropbox" }
    ]
  },
  {
    group: "AI & utveckling",
    items: [
      { name: "ChatGPT", icon: "openai" },
      { name: "Claude", icon: "claude" },
      { name: "Jasper", icon: null },
      { name: "HTML/CSS", icon: "html5" },
      { name: "JavaScript", icon: "javascript" },
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Node.js", icon: "nodedotjs" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "GitHub", icon: "github" }
    ]
  }
];