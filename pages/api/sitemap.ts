// pages/sitemap.xml.ts
import { NextApiRequest, NextApiResponse } from "next";

function generateSiteMap(pages: string[]): string {
  const baseUrl = "https://yourwebsite.com"; // Заменете със своя URL адрес
  const currentDate = new Date().toISOString();

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${pages
       .map((page) => {
         return `
       <url>
           <loc>${baseUrl}${page}</loc>
           <lastmod>${currentDate}</lastmod>
           <changefreq>daily</changefreq>
           <priority>1.0</priority>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;

  return xmlContent;
}

export default function Sitemap() {
  return null;
}

export async function getServerSideProps({
  res,
}: {
  res: NextApiResponse<any>;
}) {
  const pages: string[] = ["/", "/about", "/contact", "/services"];

  const sitemap = generateSiteMap(pages);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}
