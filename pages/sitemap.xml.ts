import { NextApiRequest, NextApiResponse } from "next";

export default async function Sitemap(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const baseUrl = "https://www.strivenex.com";
  const pages = ["/", "/about", "/contact", "booking"];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map((page: string) => {
        const path = page === "/" ? "" : page;
        return `
          <url>
            <loc>${baseUrl}${path}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.8</priority>
          </url>`;
      })
      .join("")}
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}
