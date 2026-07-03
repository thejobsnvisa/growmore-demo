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

      if ((description || image) && !route.includes("/blogs/") && !route.includes("/news/")) {
        helmetRoutes.push(route);       
      }

      console.log("Generated:", route);
    }
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

    // Additional static routes from App (create basic pages for client routes)
    const extraRoutes = [
      "/",
      "/who-we-are/",
      "/migrate-to-australia/",
      "/our-services/individual/",
      "/our-services/employers/",
      "/our-services/student-visa/",
      "/our-services/gsm-general-skilled-migration/",
      "/our-services/dama/",
      "/our-services/labour-agreement/",
      "/points-calculator/",
      "/videos/",
      "/news/",
      "/blogs/",
      "/contact-us/",
      "/book-consultation/",
      "/brochures/",
      "/checklist-for-dama/",
      "/checklist-for-gsm-general-skilled-migration/",
      "/checklist-for-labour-agreement/",
      "/terms-services/",
      "/artificial-intelligence-use-policy/",
      "/privacy-policy/",
      "/cancellation-and-refund-policy/",
      "/our-services/student-visa/student-visa-australia/",
      "/our-services/student-visa/student-visa-dubai/",
      "/our-services/student-visa/student-visa-uk/",
      "/our-services/employers/standard-business-sponsorship/",
      "/our-services/employers/labour-agreement/",
      "/our-services/employers/nomination-application/",
      "/our-services/employers/regional-certifying-body-approval/",
      "/our-services/employers/business-case-preparation/",
      "/our-services/employers/training-plan/",
      "/our-services/employers/labour-market-testing-lmt-for-sc494-and-sc482-visas/",
      "/our-services/individual/employer-sponsored-visa/",
      "/our-services/individual/general-skilled-visa/",
      "/our-services/individual/family-visa/",
      "/our-services/individual/temporary-work-short-stay-visa/",
      "/our-services/individual/global-talent-visa/",
      "/our-services/individual/working-holiday-work-holiday-visa/",
      "/our-services/individual/business-investor-visa/",
      "/our-services/individual/refugee-visa/",
      "/our-services/individual/visitor-evisitor-eta-visa/",
      "/our-services/individual/student-guardian-visa/",
    ];

    // Try to load per-page metadata if available
    let pagesMeta = {};
    try {
      const imported = await import("../src/data/pagesMeta.js");
      pagesMeta = imported.pagesMeta || {};
    } catch (e) {
      // no pagesMeta available, continue with defaults
    }
    // Default metadata for non-article pages (used when no per-page meta exists)
    const defaultDescription =
      "Growmore Immigration can assist you in migrating to Australia. Check eligibility criteria, expert migration support, and start your journey today.";
    const defaultImage = "/assets/i1.png";

    extraRoutes.forEach((r) => {
      const key = r.replace(/\/+$/,'') || "/";
      const meta = pagesMeta[key] || pagesMeta[`${key}/`] || {};

      // derive a human friendly title if none provided
      const defaultTitle =
        r === "/"
          ? "GrowMore - Home"
          : "GrowMore - " + r.replace(/\/+$/,'').split('/').filter(Boolean).pop().replace(/-/g,' ');

      createPage({
        route: r,
        title: meta.title || defaultTitle,
        // if no page-specific description/image, use site-wide defaults
        description: meta.description || defaultDescription,
        image: meta.image || defaultImage,
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