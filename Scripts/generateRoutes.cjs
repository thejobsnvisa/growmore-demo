const fs = require("fs");
const path = require("path");

(async () => {
  try {
    const routes = [
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