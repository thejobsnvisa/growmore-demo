import Prerenderer from '@prerenderer/prerenderer';
import PuppeteerRenderer from '@prerenderer/renderer-puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const staticDir = path.join(__dirname, '../dist');

// 1. Dynamic Meta Helper: Injects the tags missing from un-rendered shells
function injectDynamicMeta({ html, route, title, description, image }) {
  const imageUrl = image.startsWith('http') ? image : `https://www.growmore.one${image}`;
  
  // Replace or append title
  if (html.includes('<title>')) {
    html = html.replace(/<title>.*?<\/title>/i, `<title>${title}</title>`);
  } else {
    html = html.replace('</head>', `<title>${title}</title>\n</head>`);
  }

  const metaBlock = `
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

  return html.replace('</head>', `${metaBlock}\n</head>`);
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
    renderAfterTime: 1500,
    skipThirdPartyRequests: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu']
  })
});

console.log('🏁 Initializing unified static page generation...');

prerenderer.initialize()
  .then(() => prerenderer.renderRoutes(prerenderer.options.routes)) 
  .then(async (renderedRoutes) => {
    // 2. Write standard pre-rendered pages (React Helmet handles these natively in-browser)
    renderedRoutes.forEach(route => {
      const routePath = route.route === '/' ? '' : route.route;
      const outputDir = path.join(staticDir, routePath);
      const outputFile = path.join(outputDir, 'index.html');

      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      let html = route.html;
      if (!html.includes('rel="canonical"')) {
        html = html.replace('</head>', `\n<link rel="canonical" href="https://www.growmore.one${route.route}" />\n</head>`);
      }

      fs.writeFileSync(outputFile, html, 'utf8');
      console.log(`✅ Saved static HTML (with browser Helmet): ${route.route}`);
    });

    // 3. Process dynamic paths using your data files
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

          const freshHtml = injectDynamicMeta({
            html: baseTemplate,
            route: route,
            title: item.metaTitle || item.title,
            description: item.metaDescription || item.title,
            image: item.image
          });

          fs.writeFileSync(outputFile, freshHtml, 'utf8');
          console.log(`✅ Saved dynamic HTML (with injected OG Data): ${route}`);
        });
      };

      processDynamicArray(blogs, '/blogs');
      processDynamicArray(news, '/news');

    } catch (dataErr) {
      console.warn('⚠️ Skipped dynamic file injection loops (Verify path structures):', dataErr.message);
    }

    prerenderer.destroy();
    console.log('🎉 System processing complete!');
  })
  .catch(err => {
    console.error('❌ Static site pre-generation ran into an issue:', err);
    process.exit(1);
  });