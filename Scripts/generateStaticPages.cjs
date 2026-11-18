
const fs = require("fs");
const path = require("path");

(async () => {
  try {
    const { blogs } = await import("../src/data/blogsData.js");
    const { news } = await import("../src/data/newsData.js");

    const distDir = path.join(process.cwd(), "dist");

    const templatePath = path.join(distDir, "index.html");

    if (!fs.existsSync(templatePath)) {
      throw new Error("dist/index.html not found. Run vite build first.");
    }

    const template = fs.readFileSync(templatePath, "utf8");

    const SITE_URL = "https://www.growmore.one";

    function escapeHtml(value = "") {
      return String(value)
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    }

    function normalizeRoute(route) {
      const clean = `/${String(route || "")
        .replace(/^\/+|\/+$/g, "")}`;

      return clean === "/" ? "/" : `${clean}/`;
    }

    function setMeta(html, attribute, key, content) {
      const escapedContent = escapeHtml(content);
      const regex = new RegExp(
        `<meta\\s+[^>]*${attribute}=["']${key}["'][^>]*>`,
        "i"
      );

      const tag = `<meta ${attribute}="${key}" content="${escapedContent}" />`;

      if (regex.test(html)) {
        return html.replace(regex, tag);
      }

      return html.replace("</head>", `  ${tag}\n</head>`);
    }

    function createPage({ route, title, description, image }) {
      const normalizedRoute = normalizeRoute(route);
      const canonicalUrl = `${SITE_URL}${normalizedRoute}`;

      const imageUrl = image
        ? /^https?:\/\//i.test(image)
          ? image
          : `${SITE_URL}/${String(image).replace(/^\/+/, "")}`
        : "";

      const relativePath = normalizedRoute.replace(/^\/+|\/+$/g, "");

      const pageDir = path.join(distDir, relativePath);

      fs.mkdirSync(pageDir, { recursive: true });

      let html = template;

      const safeTitle = escapeHtml(title || "Growmore Immigration");
      const safeDescription = escapeHtml(
        description || title || "Growmore Immigration"
      );

      // Page title
      html = html.replace(
        /<title>[\s\S]*?<\/title>/i,
        `<title>${safeTitle}</title>`
      );

      if (!/<title>/i.test(html)) {
        html = html.replace(
          "</head>",
          `<title>${safeTitle}</title>\n</head>`
        );
      }

      // Description
      html = setMeta(html, "name", "description", safeDescription);

      // Open Graph
      html = setMeta(html, "property", "og:type", "article");
      html = setMeta(html, "property", "og:title", safeTitle);
      html = setMeta(html, "property", "og:description", safeDescription);
      html = setMeta(html, "property", "og:url", canonicalUrl);

      if (imageUrl) {
        html = setMeta(html, "property", "og:image", imageUrl);
      }

      // Twitter
      html = setMeta(
        html,
        "name",
        "twitter:card",
        "summary_large_image"
      );
      html = setMeta(html, "name", "twitter:title", safeTitle);
      html = setMeta(html, "name", "twitter:description", safeDescription);

      if (imageUrl) {
        html = setMeta(html, "name", "twitter:image", imageUrl);
      }

      // Canonical URL
      const canonicalTag =
        `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`;

      if (/<link\s+[^>]*rel=["']canonical["'][^>]*>/i.test(html)) {
        html = html.replace(
          /<link\s+[^>]*rel=["']canonical["'][^>]*>/i,
          canonicalTag
        );
      } else {
        html = html.replace("</head>", `  ${canonicalTag}\n</head>`);
      }

      fs.writeFileSync(
        path.join(pageDir, "index.html"),
        html,
        "utf8"
      );

      console.log("Generated:", normalizedRoute);
    }

    // Generate individual blog pages
    (blogs || []).forEach((blog) => {
      if (!blog.slug) return;

      createPage({
        route: `/blogs/${blog.slug}`,
        title: blog.metaTitle || blog.title,
        description: blog.metaDescription || blog.title,
        image: blog.image,
      });
    });

    // Generate individual news pages
    (news || []).forEach((item) => {
      if (!item.slug) return;

      createPage({
        route: `/news/${item.slug}`,
        title: item.metaTitle || item.title,
        description: item.metaDescription || item.title,
        image: item.image,
      });
    });

    console.log("Static blog and news metadata pages generated successfully.");
  } catch (error) {
    console.error("Static page generation failed:", error);
    process.exit(1);
  }
})();
