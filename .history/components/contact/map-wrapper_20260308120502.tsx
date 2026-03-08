"use client";

import dynamic from "next/dynamic";

const LocationMap = dynamic(
  () => import("./location-map").then((mod) => mod.LocationMap),
  {
    ssr: false,
    loading: () => (
      <div className="h-75 w-full bg-gray-100 animate-pulse rounded-lg" />
    ),
  },
);

export default function MapWrapper() {
  return <LocationMap />;
}
