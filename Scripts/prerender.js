// 🛠️ Fixed: Switched from named import to default import to resolve the SyntaxError
import Prerenderer from '@prerenderer/prerenderer';
import PuppeteerRenderer from '@prerenderer/renderer-puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const prerenderer = new Prerenderer({
  staticDir: path.join(__dirname, '../dist'),
  
  // 🛠️ Fixed: Omitted /book-consultation/ and /brochures/ to bypass Puppeteer navigation crashes
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
    renderAfterTime: 1000, 
    skipThirdPartyRequests: true, 
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu'
    ]
  })
});

console.log('🏁 Initializing static site generation snapshotting...');

prerenderer.initialize()
  .then(() => prerenderer.render())
  .then(renderedRoutes => {
    renderedRoutes.forEach(route => {
      console.log(`✅ Successfully saved static HTML snapshot for: ${route.route}`);
    });
    prerenderer.destroy();
    console.log('🎉 Prerendering steps complete!');
  })
  .catch(err => {
    console.error('❌ Static site pre-generation ran into an issue:', err);
    process.exit(1);
  });