export const config = {
  siteMeta: {
    title: "Who is simorgh3196?",
    teamName: "simorgh3196",
    description: "iOS Application Engineer",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://simorgh3196.com"
      : "http://localhost:3000",
  user: {
    qiita: "simorgh3196",
    zenn: "simorgh3196",
  },
  headerLinks: [
    {
      title: "GitHub",
      href: "https://github.com/simorgh3196",
    },
    {
      title: "Zenn",
      href: "https://zenn.dev/simorgh3196",
    },
    {
      title: "Twitter",
      href: "https://twitter.com/simorgh3196",
    },
  ],
};
