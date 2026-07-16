import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { prerender } from '@prerenderer/rollup-plugin'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    prerender({
      // Points to your compiled production assets
      staticDir: path.join(__dirname, 'dist'),
      
      // The explicit list of routes you WANT to turn into static pages
     routes : [
      "/",
      "/artificial-intelligence-use-policy/",
      "/blogs/",
      "/book-consultation/",
      "/brochures/",
      "/cancellation-and-refund-policy/",
      "/checklist-for-dama/",
      "/checklist-for-gsm-general-skilled-migration/",
      "/checklist-for-labour-agreement/",
      "/contact-us/",
      "/migrate-to-australia/",
      "/news/",
      "/our-services/dama/",
      "/our-services/employers/",
      "/our-services/employers/business-case-preparation/",
      "/our-services/employers/labour-agreement/",
      "/our-services/employers/labour-market-testing-lmt-for-sc494-and-sc482-visas/",
      "/our-services/employers/nomination-application/",
      "/our-services/employers/regional-certifying-body-approval/",
      "/our-services/employers/standard-business-sponsorship/",
      "/our-services/employers/training-plan/",
      "/our-services/gsm-general-skilled-migration/",
      "/our-services/individual/",
      "/our-services/individual/business-investor-visa/",
      "/our-services/individual/employer-sponsored-visa/",
      "/our-services/individual/family-visa/",
      "/our-services/individual/general-skilled-visa/",
      "/our-services/individual/global-talent-visa/",
      "/our-services/individual/refugee-visa/",
      "/our-services/individual/student-guardian-visa/",
      "/our-services/individual/temporary-work-short-stay-visa/",
      "/our-services/individual/visitor-evisitor-eta-visa/",
      "/our-services/individual/working-holiday-work-holiday-visa/",
      "/our-services/labour-agreement/",
      "/our-services/student-visa/",
      "/our-services/student-visa/student-visa-australia/",
      "/our-services/student-visa/student-visa-dubai/",
      "/our-services/student-visa/student-visa-uk/",
      "/points-calculator/",
      "/privacy-policy/",
      "/terms-services/",
      "/videos/",
      "/who-we-are/"
    ],

      // Configuration to keep the compilation stable on Windows/Node 24
      rendererOptions: {
        maxConcurrentRoutes: 4,
        skipThirdPartyRequests: true, // Prevents trackers/analytics from breaking the build
        renderAfterDocumentEvent: 'custom-render-trigger', // Optional: wait for app readiness
        timeout: 0,
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          '--disable-gpu'
        ]
      }
    })
  ],
  base: "/",
    build: {
    target: "es2018"
  }
});