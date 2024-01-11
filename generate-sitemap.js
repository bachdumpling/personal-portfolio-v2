const fs = require("fs");
const globby = require("globby");

async function generateSitemap() {
  console.log("Generating sitemap...");
  const pages = await globby([
    "src/pages/**/*.js", // Adjust the path according to your project structure
    // "!src/pages/_*.js",
    "!src/pages/api", // Exclude API routes
    "!src/pages/components", // Exclude Components
    "!src/components", // Exclude Components
  ]);

  console.log("Pages found:", pages);

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                const path = page
                  .replace("src/pages", "")
                  .replace(".js", "")
                  .replace(".mdx", "");
                const route = path === "/index" ? "" : path;
                return `
                    <url>
                        <loc>${`https://bachle.info${route}`}</loc>
                    </url>
                `;
              })
              .join("")}
        </urlset>
    `;

  fs.writeFileSync("public/sitemap.xml", sitemap);
  console.log("Sitemap generated successfully.");
}

generateSitemap();
