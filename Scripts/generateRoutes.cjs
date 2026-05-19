const fs = require("fs");
const path = require("path");

(async () => {
  const { news } = await import(
    "../src/data/newsData.js"
  );

  const { blogs } = await import(
    "../src/data/blogsData.js"
  );

  const routes = [
    "/",
    "/news",
    "/blogs",

    ...news.map(
      (item) => `/news/${item.slug}`
    ),

    ...blogs.map(
      (item) => `/blogs/${item.slug}`
    )
  ];

  const packageJsonPath = path.join(
    process.cwd(),
    "package.json"
  );

  const packageJson = JSON.parse(
    fs.readFileSync(packageJsonPath, "utf8")
  );

  packageJson.reactSnap = {
    ...packageJson.reactSnap,
    include: routes
  };

  fs.writeFileSync(
    packageJsonPath,
    JSON.stringify(packageJson, null, 2)
  );

  console.log(
    "News & blog routes generated"
  );
})();