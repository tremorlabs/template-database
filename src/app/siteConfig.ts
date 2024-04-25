export const siteConfig = {
  name: "Tremor",
  url: "https://www.tremor.so",
  description:
    "The open-source library for dashboards built on top of Tailwind CSS.",
  externalLinks: {
    raw: "https://raw.tremor.so",
    blocks: "https://blocks.tremor.so",
    figma: "https://tremor.so/figma",
    github: "https://github.com/tremorlabs/tremor",
    githubIssues:
      "https://github.com/tremorlabs/tremor-blocks-issue-tracker/issues/new/choose",
    slack:
      "https://join.slack.com/t/tremor-community/shared_invite/zt-2a95vjndc-YCKurK3HVAkYtjialnT2_A",
    storybook: "https://tremor.so/storybook",
    mail: "mailto:hello@tremor.so",
    vercel:
      "https://vercel.com/templates/next.js/admin-dashboard-tailwind-postgres-react-nextjs",
    x: "https://twitter.com/tremorlabs",
  },
  baseLinks: {
    home: "/",
    about: "/about",
    changelog: "/changelog",
    pricing: "/pricing",
    imprint: "/imprint",
    privacy: "/privacy",
    terms: "/terms",
  },
};

export type siteConfig = typeof siteConfig;
