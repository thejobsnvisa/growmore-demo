import Prerenderer from '@prerenderer/prerenderer';
import PuppeteerRenderer from '@prerenderer/renderer-puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const staticDir = path.join(__dirname, '../dist');

// Helper fallback to make sure Open Graph tags exist no matter what
function enforceMetaFallback({ html, route, title, description, image }) {
  let modifiedHtml = html;

  // Enforce Open Graph Tags if they aren't parsed by Helmet
  if (!modifiedHtml.includes('property="og:title"')) {
    modifiedHtml = modifiedHtml.replace('</head>', `<meta property="og:title" content="${title}" />\n</head>`);
  }
  if (!modifiedHtml.includes('property="og:description"')) {
    modifiedHtml = modifiedHtml.replace('</head>', `<meta property="og:description" content="${description}" />\n</head>`);
  }
  if (!modifiedHtml.includes('property="og:image"')) {
    const fullImg = image.startsWith('http') ? image : `https://www.growmore.one${image}`;
    modifiedHtml = modifiedHtml.replace('</head>', `<meta property="og:image" content="${fullImg}" />\n</head>`);
  }
  if (!modifiedHtml.includes('rel="canonical"')) {
    modifiedHtml = modifiedHtml.replace('</head>', `<link rel="canonical" href="https://www.growmore.one${route}" />\n</head>`);
  }

  return modifiedHtml;
}

const prerenderer = new Prerenderer({
  staticDir: staticDir,
  routes: [
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
  ],
  renderer: new PuppeteerRenderer({
    renderAfterTime: 2000, // ⏳ Increased to 2 seconds so React Helmet has full time to inject tags
    skipThirdPartyRequests: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu']
  })
});

console.log('🏁 Initializing static site generation snapshotting...');

prerenderer.initialize()
  .then(() => prerenderer.renderRoutes(prerenderer.options.routes)) 
  .then(async (renderedRoutes) => {
    
    // Process main static routes
    renderedRoutes.forEach(route => {
      const routePath = route.route === '/' ? '' : route.route;
      const outputDir = path.join(staticDir, routePath);
      const outputFile = path.join(outputDir, 'index.html');

      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      // Safeguard fallback injection for static routes
      let html = enforceMetaFallback({
        html: route.html,
        route: route.route,
        title: "Best Australia PR Immigration Consultant",
        description: "Best Australia PR Immigration Consultants & Migration Agents in Melbourne.",
        image: "/assets/preview-thumbnail.jpg" // Change this to your global default backup image
      });

      fs.writeFileSync(outputFile, html, 'utf8');
      console.log(`✅ Saved static HTML with OG card properties: ${route.route}`);
    });

    // Process dynamic paths (Blogs & News)
    try {
      const { blogs } = await import("../src/data/blogsData.js");
      const { news } = await import("../src/data/newsData.js");
      const baseTemplate = fs.readFileSync(path.join(staticDir, "index.html"), "utf8");

      const processDynamicArray = (items, routePrefix) => {
        items.forEach(item => {
          const route = `${routePrefix}/${item.slug}`;
          const outputDir = path.join(staticDir, routePrefix, item.slug);
          const outputFile = path.join(outputDir, "index.html");

          if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
          }

          let htmlShell = baseTemplate;
          // Wipe out any inherited static titles/descriptions from the template base
          htmlShell = htmlShell.replace(/<title>.*?<\/title>/i, '');
          htmlShell = htmlShell.replace(/<meta property="og:.*?"\s*\/?>/gi, '');
          htmlShell = htmlShell.replace(/<meta name="description".*?"\s*\/?>/gi, '');

          const freshHtml = enforceMetaFallback({
            html: htmlShell,
            route: route,
            title: item.metaTitle || item.title,
            description: item.metaDescription || item.title,
            image: item.image
          });

          fs.writeFileSync(outputFile, freshHtml, 'utf8');
          console.log(`✅ Saved dynamic HTML with unique OG values: ${route}`);
        });
      };

      processDynamicArray(blogs, '/blogs');
      processDynamicArray(news, '/news');

    } catch (dataErr) {
      console.warn('⚠️ Skipped dynamic file injection loops:', dataErr.message);
    }

    prerenderer.destroy();
    console.log('🎉 Prerendering steps complete!');
  })
  .catch(err => {
    console.error('❌ Static site pre-generation ran into an issue:', err);
    process.exit(1);
  });