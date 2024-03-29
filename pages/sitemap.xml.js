// pages/sitemap.xml.js
export default function Sitemap() {
  return null;
}

export async function getServerSideProps({ res }) {
  const pages = ["/", "/about", "/contact", "/contact", "/booking"];

  const baseUrl = "https://strivenex.com";
  const currentDate = new Date().toISOString();

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map(
        (page) => `
      <url>
        <loc>${baseUrl}${page}</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    `
      )
      .join("")}
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemapContent);
  res.end();

  return {
    props: {}, // Важно е да върнете празен обект за props
  };
}
