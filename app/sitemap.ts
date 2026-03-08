import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.badranhospital.com";

  // All static paths that should be indexed
  const routes = [
    "",
    "/about",
    "/center-of-excellence",
    "/contact",
    "/faq",
    "/find-a-doctor",
    "/health-hub",
    "/medical-tourism",
    "/privacy-policy",
    "/terms-conditions",
  ];

  // generate pairs for both `en` and `ar`
  const sitemapEntries: MetadataRoute.Sitemap = [];

  routes.forEach((route) => {
    sitemapEntries.push(
      {
        url: `${baseUrl}/en${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: route === "" ? 1 : 0.8,
        alternates: {
          languages: {
            ar: `${baseUrl}/ar${route}`,
            en: `${baseUrl}/en${route}`,
          },
        },
      },
      {
        url: `${baseUrl}/ar${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: route === "" ? 1 : 0.8,
        alternates: {
          languages: {
            ar: `${baseUrl}/ar${route}`,
            en: `${baseUrl}/en${route}`,
          },
        },
      },
    );
  });

  return sitemapEntries;
}
