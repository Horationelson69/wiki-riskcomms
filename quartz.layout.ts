import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.CustomHTML(`
      <div class="wiki-cta" style="
        margin: 3rem 0 1rem;
        padding: 1.5rem;
        background: linear-gradient(135deg, #0D1B3E 0%, #112248 100%);
        border-radius: 8px;
        color: #F7F7F0;
        font-family: 'IBM Plex Sans', sans-serif;
      ">
        <h3 style="margin: 0 0 0.5rem; font-size: 1.25rem; font-family: 'Space Grotesk', sans-serif; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em;">
          Stability architecture for your next crisis
        </h3>
        <p style="margin: 0 0 1rem; opacity: 0.9; color: #C8D0E0;">
          Get the frameworks, case studies, and implementation support that turn uncertainty into managed risk.
        </p>
        <a href="https://riskcomms.com" style="
          display: inline-block;
          padding: 0.75rem 1.5rem;
          background: #F5A623;
          color: #0D1B3E;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 700;
          font-family: 'Space Grotesk', sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        ">
          Explore RiskComms →
        </a>
      </div>
    `),
  ],
  footer: Component.Footer({
    links: {"RiskComms.com": "https://riskcomms.com",
      "About": "https://riskcomms.com/about",
      "RSS Feed": "https://wiki.riskcomms.com/index.xml"",
    },
  }),
}

export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.CustomHTML(`
  <div style="padding: 1rem 0; font-family: 'Space Grotesk', sans-serif; font-weight: 800; font-size: 1.5rem; text-transform: uppercase; letter-spacing: -0.01em; color: #F5A623;">
    RiskComms
  </div>
`),,
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
    Component.Graph(),
    Component.RecentNotes({ title: "Recently Updated", limit: 5, linkToMore: true }),
  ],
}

export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.CustomHTML(`
  <div style="padding: 1rem 0; font-family: 'Space Grotesk', sans-serif; font-weight: 800; font-size: 1.5rem; text-transform: uppercase; letter-spacing: -0.01em; color: #F5A623;">
    RiskComms
  </div>
`),,
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}
afterBody: [
    Component.CustomHTML(`
      <div class="wiki-cta" style="...">
        ...
      </div>
    `),
  ],afterBody: [
    Component.CustomHTML(`
      <div class="wiki-cta" style="
        margin: 3rem 0 1rem;
        padding: 1.5rem;
        background: linear-gradient(135deg, #0D1B3E 0%, #112248 100%);
        border-radius: 8px;
        color: #F7F7F0;
        font-family: 'IBM Plex Sans', sans-serif;
      ">
        <h3 style="margin: 0 0 0.5rem; font-size: 1.25rem; font-family: 'Space Grotesk', sans-serif; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em;">
          Stability architecture for your next crisis
        </h3>
        <p style="margin: 0 0 1rem; opacity: 0.9; color: #C8D0E0;">
          Get the frameworks, case studies, and implementation support that turn uncertainty into managed risk.
        </p>
        <a href="https://riskcomms.com" style="
          display: inline-block;
          padding: 0.75rem 1.5rem;
          background: #F5A623;
          color: #0D1B3E;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 700;
          font-family: 'Space Grotesk', sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        ">
          Explore RiskComms →
        </a>
      </div>
    `),
    Component.CustomHTML(`
      <div class="wiki-disclaimer" style="
        margin: 2rem 0 0;
        padding: 1rem;
        border-top: 1px solid rgba(245, 166, 35, 0.30);
        color: #8A96AA;
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 0.75rem;
        line-height: 1.5;
      ">
        <p style="margin: 0 0 0.5rem;">
          <strong>Disclaimer:</strong> The information provided in this Crisis Intelligence Wiki is for informational and educational purposes only. It does not constitute professional crisis communication or management advice.
        </p>
        <p style="margin: 0 0 0.5rem;">
          While every effort is made to ensure accuracy, this wiki may contain errors, omissions, or outdated information. RiskComms and Philippe Borremans accept no liability for any loss, damage, or consequence arising from the use of or reliance on the information contained herein.
        </p>
        <p style="margin: 0;">
          For tailored crisis communication strategies and professional guidance, please <a href="https://riskcomms.com/consulting" style="color: #F5A623; text-decoration: none;">contact RiskComms directly</a>.
        </p>
      </div>
    `),
  ],
