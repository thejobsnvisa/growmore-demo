import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/',
  // SSG Options: This creates the physical folders Googlebot needs to see
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    includedRoutes() {
      // You must list every route from your App.jsx here
      return [
        '/',
        '/who-we-are',
        '/migrate-to-australia',
        '/our-services/individual',
        '/our-services/employers',
        '/our-services/student-visa',
        '/our-services/gsm-general-skilled-migration',
        '/our-services/dama',
        '/our-services/labour-agreement',
        '/points-calculator',
        '/videos',
        '/news',
        '/blogs',
        '/contact-us',
        '/book-consultation',
        '/brochures',
        '/terms-services',
        '/privacy-policy',
        '/cancellation-and-refund-policy',
        '/artificial-intelligence-use-policy',
        // Nested Student Routes
        '/our-services/student-visa/student-visa-australia',
        '/our-services/student-visa/student-visa-dubai',
        '/our-services/student-visa/student-visa-uk',
        // Nested Employer Routes
        '/our-services/employers/standard-business-sponsorship',
        '/our-services/employers/nomination-application',
        '/our-services/employers/regional-certifying-body-approval',
        '/our-services/employers/business-case-preparation',
        '/our-services/employers/training-plan',
        '/our-services/employers/labour-market-testing-lmt-for-sc494-and-sc482-visas',
        // Nested Individual Routes
        '/our-services/individual/employer-sponsored-visa',
        '/our-services/individual/general-skilled-visa',
        '/our-services/individual/family-visa',
        '/our-services/individual/temporary-work-short-stay-visa',
        '/our-services/individual/global-talent-visa',
        '/our-services/individual/working-holiday-work-holiday-visa',
        '/our-services/individual/business-investor-visa',
        '/our-services/individual/refugee-visa',
        '/our-services/individual/visitor-evisitor-eta-visa',
        '/our-services/individual/student-guardian-visa'
      ]
    },
  },
})