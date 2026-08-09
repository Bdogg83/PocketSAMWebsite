import type { MetadataRoute } from "next";

const BASE_URL = "https://pocketsam.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/features", changeFrequency: "weekly", priority: 0.9 },
    { path: "/features/medication-tracking", changeFrequency: "monthly", priority: 0.8 },
    { path: "/features/appointments", changeFrequency: "monthly", priority: 0.8 },
    { path: "/features/daily-check-ins", changeFrequency: "monthly", priority: 0.8 },
    { path: "/features/care-tasks", changeFrequency: "monthly", priority: 0.8 },
    { path: "/features/hydration", changeFrequency: "monthly", priority: 0.7 },
    { path: "/features/doctor-ready-reports", changeFrequency: "monthly", priority: 0.8 },
    { path: "/features/care-circle-sharing", changeFrequency: "monthly", priority: 0.8 },
    { path: "/features/emergency-info", changeFrequency: "monthly", priority: 0.7 },
    { path: "/features/multi-language-support", changeFrequency: "monthly", priority: 0.6 },
    { path: "/features/privacy-minded-design", changeFrequency: "monthly", priority: 0.6 },
    { path: "/about", changeFrequency: "monthly", priority: 0.7 },
    { path: "/pricing", changeFrequency: "monthly", priority: 0.8 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
    { path: "/tutorials", changeFrequency: "monthly", priority: 0.6 },
    { path: "/blog", changeFrequency: "weekly", priority: 0.6 },
    { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  ];

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
