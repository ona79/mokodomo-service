import { MetadataRoute } from "next";
import { services } from "@/lib/data";

const BASE_URL = "https://mokodomo-tech.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { url: `${BASE_URL}/`, priority: 1 },
    { url: `${BASE_URL}/mentions-legales`, priority: 0.3 },
  ];

  const serviceRoutes = services.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes].map((r) => ({
    url: r.url,
    lastModified: new Date(),
    priority: r.priority,
  }));
}
