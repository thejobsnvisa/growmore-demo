const fs = require("fs");

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

  fs.writeFileSync(
    "./react-snap-routes.json",
    JSON.stringify(routes, null, 2)
  );

  console.log(
    "News & blog routes generated"
  );
})();