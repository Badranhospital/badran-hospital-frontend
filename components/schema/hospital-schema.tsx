import Script from "next/script";

export function HospitalSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    name: "Badran Hospital",
    url: "https://www.badranhospital.com",
    logo: "https://www.badranhospital.com/dr.badran.webp",
    image: "https://www.badranhospital.com/dr.badran.webp",
    description:
      "Badran Hospital provides professional, humane medical care with over 45 years of trusted service. Find top specialists in Cardiology, Oncology, Orthopedics, and more.",
    telephone: "+201000000000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3 Al Ahrar St., Dokki",
      addressLocality: "Mohandessein",
      addressRegion: "Giza",
      postalCode: "12311",
      addressCountry: "EG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.0401,
      longitude: 31.2057,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
  };

  return (
    <Script
      id="hospital-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
