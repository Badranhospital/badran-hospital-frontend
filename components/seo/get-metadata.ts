import type { Metadata } from "next";

interface MetadataProps {
  title: string;
  description: string;
  lang: string;
  path: string;
  image?: string;
}

export function generatePageMetadata({
  title,
  description,
  lang,
  path,
  image,
}: MetadataProps): Metadata {
  // Omit the hospital suffix if the title already includes it, or use standard suffix
  const fullTitle =
    title.includes("Badran Hospital") || title.includes("مستشفى بدران")
      ? title
      : `${title} | ${lang === "ar" ? "مستشفى بدران" : "Badran Hospital"}`;

  const url = `https://www.badranhospital.com/${lang}${path}`;
  const ogImage = image || "/dr.badran.webp";

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: `/en${path}`,
        ar: `/ar${path}`,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      type: "website",
      locale: lang === "ar" ? "ar_EG" : "en_US",
      siteName: lang === "ar" ? "مستشفى بدران" : "Badran Hospital",
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}
