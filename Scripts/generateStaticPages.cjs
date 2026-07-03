const fs = require("fs");
const path = require("path");

(async () => {
  try {
    // Import blog and news data
    const { blogs } = await import("../src/data/blogsData.js");
    const { news } = await import("../src/data/newsData.js");

    const distDir = path.join(process.cwd(), "dist");

    // Read the base Vite HTML
    const template = fs.readFileSync(
      path.join(distDir, "index.html"),
      "utf8"
    );

    const helmetRoutes = [];

    function createPage({
      route,
      title,
      description,
      image,
    }) {
      const pageDir = path.join(
        distDir,
        route.replace(/^\/+/, "")
      );

      fs.mkdirSync(pageDir, {
        recursive: true,
      });

      const imageUrl = image
        ? image.startsWith("http")
          ? image
          : `https://www.growmore.one${image}`
        : "";

      let html = template;

      // ---------- TITLE ----------
      html = html.replace(
        /<title>.*?<\/title>/i,
        `<title>${title}</title>`
      );

      // If there isn't a title tag
      if (!html.includes("<title>")) {
        html = html.replace(
          "</head>",
          `<title>${title}</title></head>`
        );
      }

      // Add meta tags (description / og / twitter) for pages when description or image is provided
      if (description || image) {
        const meta = `
<meta name="description" content="${description}" />

<link rel="canonical" href="https://www.growmore.one${route}/" />

<meta property="og:type" content="article" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${description}" />
<meta property="og:image" content="${imageUrl}" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:url" content="https://www.growmore.one${route}/" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${title}" />
<meta name="twitter:description" content="${description}" />
<meta name="twitter:image" content="${imageUrl}" />
`;

        html = html.replace("</head>", `${meta}\n</head>`);
      }

      fs.writeFileSync(
        path.join(pageDir, "index.html"),
        html
      );

      if (description || image) {
        helmetRoutes.push(route);
      }

      console.log("Generated:", route);
    }

    // Home page
    createPage({
      route: "/",
      title: "Growmore Immigration",
      description:
        "Growmore Immigration Australia",
      image: "/logo.webp",
    });

    // Blogs page
    createPage({
      route: "/blogs/",
      title: "Blogs | Growmore Immigration",
      description:
        "Latest immigration blogs.",
      image: "/logo.webp",
    });

    // News page
    createPage({
      route: "/news/",
      title: "News | Growmore Immigration",
      description:
        "Latest immigration news.",
      image: "/logo.webp",
    });

    // Individual blogs
    blogs.forEach((blog) => {
      createPage({
        route: `/blogs/${blog.slug}/`,
        title: blog.metaTitle || blog.title,
        description:
          blog.metaDescription ||
          blog.title,
        image: blog.image,
      });
    });

    // Individual news
    news.forEach((item) => {
      createPage({
        route: `/news/${item.slug}/`,
        title:
          item.metaTitle || item.title,
        description:
          item.metaDescription ||
          item.title,
        image: item.image,
      });
    });

    const packageJsonPath = path.join(process.cwd(), "package.json");
    const packageJson = JSON.parse(
      fs.readFileSync(packageJsonPath, "utf8")
    );

    packageJson.reactSnap = {
      ...(packageJson.reactSnap || {}),
      include: [...new Set(helmetRoutes)].sort(),
    };

    fs.writeFileSync(
      packageJsonPath,
      JSON.stringify(packageJson, null, 2) + "\n"
    );

    console.log(
      "✅ Static pages generated successfully."
    );
    console.log(
      `✅ Updated reactSnap include with ${helmetRoutes.length} routes.`
    );
  } catch (err) {
    console.error("❌ Failed to generate static pages:", err);
    process.exit(1);
  }
})();