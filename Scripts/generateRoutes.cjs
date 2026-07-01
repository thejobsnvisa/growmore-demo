const fs = require("fs");
const path = require("path");

(async () => {
  try {
    const { news } = await import("../src/data/newsData.js");
    const { blogs } = await import("../src/data/blogsData.js");

    const routes = [
      "/",
      "/news",
      "/blogs",
      ...news.map((item) => `/news/${item.slug}`),
      ...blogs.map((item) => `/blogs/${item.slug}`),
    ];

    // Remove duplicates & sort
    const uniqueRoutes = [...new Set(routes)].sort();

    const packageJsonPath = path.join(process.cwd(), "package.json");

    const packageJson = JSON.parse(
      fs.readFileSync(packageJsonPath, "utf8")
    );

    packageJson.reactSnap = {
      ...(packageJson.reactSnap || {}),
      include: uniqueRoutes,
    };

    fs.writeFileSync(
      packageJsonPath,
      JSON.stringify(packageJson, null, 2) + "\n"
    );

    console.log(`✅ Generated ${uniqueRoutes.length} routes for react-snap.`);
  } catch (err) {
    console.error("❌ Failed to generate routes:", err);
    process.exit(1);
  }
})();