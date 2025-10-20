import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";

const baseUrl = "https://ieee-pes-sb.web.app";

async function generateSitemap() {
  try {
    const sitemap = new SitemapStream({ hostname: baseUrl });
    const writeStream = createWriteStream("./public/sitemap.xml", {
      encoding: "utf8",
    });

    const pages = [
      { url: "/", changefreq: "weekly", priority: 1.0 },
      { url: "/about", changefreq: "monthly", priority: 0.8 },
      { url: "/team", changefreq: "monthly", priority: 0.8 },
      { url: "/events", changefreq: "monthly", priority: 0.8 },
      { url: "/contact", changefreq: "monthly", priority: 0.8 },
      { url: "/notfound", changefreq: "yearly", priority: 0.3 },
    ];

    // Write URLs
    for (const page of pages) {
      sitemap.write(page);
    }
    sitemap.end();

    // Convert to XML (already includes <?xml ...?> header)
    const xmlData = await streamToPromise(sitemap);

    // Write directly (no need to prepend XML declaration)
    writeStream.write(xmlData.toString());
    writeStream.end();

    console.log("✅ sitemap.xml generated successfully");
  } catch (err) {
    console.error("❌ Error generating sitemap:", err);
  }
}

generateSitemap();
