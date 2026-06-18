import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "RiskComms",
    pageTitleSuffix: " | Crisis Intelligence Wiki",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
      host: "https://plausible.riskcomms.com",
    },
    locale: "en-US",
    baseUrl: "wiki.riskcomms.com",
    ignorePatterns: ["private", "draft", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Space Grotesk",
        body: "IBM Plex Sans",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#F7F7F0",              // Near-white (headings on dark)
          lightgray: "#C8D0E0",           // Body text
          gray: "#A8B4C8",                // Muted/secondary
          darkgray: "#8A96AA",            // Faint/tertiary
          dark: "#0D1B3E",                // Deep Navy (main bg)
          secondary: "#F5A623",           // Signal Amber (accent)
          tertiary: "#F7B84B",            // Amber Hover
          highlight: "rgba(245, 166, 35, 0.15)",
          textHighlight: "rgba(245, 166, 35, 0.30)",
        },
        darkMode: {
          light: "#0D1B3E",               // Deep Navy
          lightgray: "#112248",           // Mid Navy
          gray: "#A8B4C8",                // Muted
          darkgray: "#C8D0E0",            // Body
          dark: "#F7F7F0",                // Near-white
          secondary: "#F5A623",           // Signal Amber
          tertiary: "#F7B84B",            // Amber Hover
          highlight: "rgba(245, 166, 35, 0.15)",
          textHighlight: "rgba(245, 166, 35, 0.30)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({ priority: ["frontmatter", "filesystem"] }),
      Plugin.SyntaxHighlighting({
        theme: { light: "github-light", dark: "github-dark" },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({
        enableInHtmlEmbed: false,
        highlight: true,
        wikilinks: true,
        callouts: true,
        mermaid: true,
      }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({
        markdownLinkResolution: "shortest",
        externalLinkIcon: true,
        openLinksInNewTab: true,
      }),
      //Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
