import { HeroSection } from "@/components/home/hero-sec";
import { AboutSection } from "@/components/home/about-sec";
import { CenterOfExcellence } from "@/components/home/coe-sec";
import { MedicalServices } from "@/components/home/services-sec";
import { HealthHub } from "@/components/home/health-hub";
import { HospitalGallery } from "@/components/home/hospital-gallery";
import { getDictionary, hasLocale } from "@/app/dictionaries";
import { notFound } from "next/navigation";
import { generatePageMetadata } from "@/components/seo/get-metadata";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as any);
  return generatePageMetadata({
    title:
      lang === "ar"
        ? "مستشفى بدران - حيث تلتقي الخبرة بالرعاية المتقدمة"
        : "Badran Hospital - Where Expertise Meets Advanced Care",
    description: dict.about.hero.description,
    lang,
    path: "/",
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen">
      <HeroSection dict={dict.home.hero} lang={lang} />
      <AboutSection dict={dict.home.about} lang={lang} />
      <CenterOfExcellence dict={dict.home.coe} lang={lang} />
      <MedicalServices dict={dict.home.services} />
      <HealthHub dict={dict.healthHub} lang={lang} />
      <HospitalGallery dict={dict.home.gallery} lang={lang} />
    </main>
  );
}
