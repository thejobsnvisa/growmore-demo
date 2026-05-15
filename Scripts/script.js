import { SitemapStream, streamToPromise } from "sitemap";
import { writeFileSync } from "fs";
import { news } from "../src/data/newsData.js";
import { blogs } from "../src/data/blogsData.js";

const sitemap = new SitemapStream({
  hostname: "https://www.growmore.one",
});

/* Static Pages */
const staticPages = [
  "/",
  "/who-we-are/",
  "/migrate-to-australia/",

  /* Services */
  "/our-services/individual/",
  "/our-services/employers/",
  "/our-services/student-visa/",
  "/our-services/gsm-general-skilled-migration/",
  "/our-services/dama/",
  "/our-services/labour-agreement/",

  /* Tools */
  "/points-calculator/",

  /* Media */
  "/videos/",
  "/news/",
  "/blogs/",

  /* Contact */
  "/contact-us/",
  "/book-consultation/",
  "/brochures/",

  /* Policies */
  "/privacy-policy/",
  "/terms-services/",
  "/cancellation-and-refund-policy/",
  "/artificial-intelligence-use-policy/",

  /* Checklists */
  "/checklist-for-dama/",
  "/checklist-for-gsm-general-skilled-migration/",
  "/checklist-for-labour-agreement/",

  /* Student */
  "/our-services/student-visa/student-visa-australia/",
  "/our-services/student-visa/student-visa-dubai/",
  "/our-services/student-visa/student-visa-uk/",

  /* Employer */
  "/our-services/employers/standard-business-sponsorship/",
  "/our-services/employers/labour-agreement/",
  "/our-services/employers/nomination-application/",
  "/our-services/employers/regional-certifying-body-approval/",
  "/our-services/employers/business-case-preparation/",
  "/our-services/employers/training-plan/",
  "/our-services/employers/labour-market-testing-lmt-for-sc494-and-sc482-visas/",

  /* Individual */
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

/* Add Static Pages */
staticPages.forEach((url) => {
  sitemap.write({
    url,
    changefreq: "weekly",
    priority: 0.9,
  });
});

/* Dynamic News Pages */
news.forEach((article) => {
  sitemap.write({
    url: `/news/${article.slug}/`,
    changefreq: "daily",
    priority: 0.8,
  });
});

/* Dynamic Blog Pages */
blogs.forEach((blog) => {
  sitemap.write({
    url: `/blogs/${blog.slug}/`,
    changefreq: "monthly",
    priority: 0.8,
  });
});

sitemap.end();

/* Generate sitemap.xml */
streamToPromise(sitemap)
  .then((data) => {
    writeFileSync("./public/sitemap.xml", data.toString());

    console.log("✅ sitemap.xml generated successfully");
  })
  .catch((err) => {
    console.error("❌ Sitemap generation failed:", err);
  });
