import React, { Suspense, lazy, useEffect, useRef } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import PageTracker, { trackWidgetEvent } from "./PageTracker";

/* ---------- Lazy Load Pages ---------- */
const Home = lazy(() => import("./Pages/Home"));
const WhoWeAre = lazy(() => import("./Pages/WhoWeAre"));
const Migrate = lazy(() => import("./Pages/Migrate"));
const IndividualVisa = lazy(() => import("./Pages/IndividualVisa"));
const EmployerVisa = lazy(() => import("./Pages/EmployerVisa"));
const StudentVisa = lazy(() => import("./Pages/StudentVisa"));
const GeneralSkilledMigration = lazy(() => import("./Pages/GeneralSkilledMigration"));
const DAMA = lazy(() => import("./Pages/DAMA"));
const LabourAgreement = lazy(() => import("./Pages/LabourAgreement"));
const PointsCalculator = lazy(() => import("./Pages/PointsCalculator"));
const Videos = lazy(() => import("./Pages/Videos"));
const News = lazy(() => import("./Pages/News"));
const Blogs = lazy(() => import("./Pages/Blogs"));
const ContactUs = lazy(() => import("./Pages/ContactUs"));
const BookConsultation = lazy(() => import("./Pages/BookConsultation"));
const Brochures = lazy(() => import("./Pages/Brochures"));
const Terms = lazy(() => import("./Pages/Terms"));
const Policy = lazy(() => import("./Pages/Policy"));
const Refund = lazy(() => import("./Pages/Refund"));
const AI = lazy(() => import("./Pages/AI"));

/* Articles */
const NewsArticle = lazy(() => import("./Pages/NewsArtical"));
const BlogsArtical = lazy(() => import("./Pages/BlogsArtical"));

/* Checklist */
const Checklist = lazy(() => import("./Components/Checklist"));
const Checklistgsm = lazy(() => import("./Components/Checklistgsm"));
const Checklistlabour = lazy(() => import("./Components/Checklistlabour"));

/* Student */
const StudentAustralia = lazy(() => import("./Pages/StudentAustralia"));
const StudentDubai = lazy(() => import("./Pages/StudentDubai"));
const StudentUk = lazy(() => import("./Pages/StudentUk"));

/* Employer */
const EmployerVisaBusiness = lazy(() => import("./Pages/EmployerVisaBusiness"));
const EmployerVisaLabour = lazy(() => import("./Pages/EmployerVisaLabour"));
const EmployerVisaEmployer = lazy(() => import("./Pages/EmployerVisaEmployer"));
const EmployerVisaRegional = lazy(() => import("./Pages/EmployerVisaRegional"));
const EmployerVisaStrategic = lazy(() => import("./Pages/EmployerVisaStrategic"));
const EmployerVisaTraining = lazy(() => import("./Pages/EmployerVisaTraining"));
const EmployerVisaLMT = lazy(() => import("./Pages/EmployerVisaLMT"));

/* Individual */
const IndividualVisaEmployer = lazy(() => import("./Pages/IndividualVisaEmployer"));
const IndividualVisaGsm = lazy(() => import("./Pages/IndividualVisaGsm"));
const IndividualVisaFamily = lazy(() => import("./Pages/IndividualVisaFamily"));
const IndividualVisaWork = lazy(() => import("./Pages/IndividualVisaWork"));
const IndividualVisaGlobal = lazy(() => import("./Pages/IndividualVisaGlobal"));
const IndividualVisaHoliday = lazy(() => import("./Pages/IndividualVisaHoliday"));
const IndividualVisaBusiness = lazy(() => import("./Pages/IndividualVisaBusiness"));
const IndividualVisaRefugee = lazy(() => import("./Pages/IndividualVisaRefugee"));
const IndividualVisaETA = lazy(() => import("./Pages/IndividualVisaETA"));
const IndividualVisaGurdian = lazy(() => import("./Pages/IndividualVisaGurdian"));

/* ---------- Loader ---------- */
function Loader() {
  return (
    <div className="min-h-screen flex items-center justify-center"></div>
  );
}

/* ---------- App ---------- */
function App() {
  // 1. Define a React Ref to target the custom ElevenLabs element safely
  const widgetRef = useRef(null);

  useEffect(() => {
    const scriptSrc = "https://unpkg.com/@elevenlabs/convai-widget-embed";
    let script = document.querySelector(`script[src="${scriptSrc}"]`);

    const bindShadowClick = () => {
      const widget = document.querySelector("elevenlabs-convai");
      if (!widget || widget.__shadowClickBound) return;

      console.log("🎯 ElevenLabs Element located. Intercepting Shadow UI...");

      // Set a small polling interval to wait until the component renders its internal Shadow DOM
      const shadowInterval = setInterval(() => {
        if (widget.shadowRoot) {
          // ElevenLabs renders their main active interactive container internally
          const _START_CALL_BTN = widget.shadowRoot.querySelector('.elevenlabs-convai-start-button') || 
                               widget.shadowRoot.querySelector('button') ||
                               widget.shadowRoot.activeElement;

          // If the internal shadow DOM elements are ready, attach click binding directly
          if (widget.shadowRoot.innerHTML.includes('Start a call') || widget.shadowRoot.innerHTML.includes('svg')) {
            clearInterval(shadowInterval);
            
            // Listen to all click interactions originating from within the closed Shadow DOM box
            widget.shadowRoot.addEventListener('click', () => {
              console.log("💥 Deep Shadow DOM Click Action Intercepted!");
              
              // Direct state check fallback to match click behavior
              const isCurrentlyActive = widget.status === "active" || widget.getAttribute("status") === "active";
              
              if (!isCurrentlyActive) {
                trackWidgetEvent("Voice Agent: Conversation Started");
              } else {
                trackWidgetEvent("Voice Agent: Conversation Ended");
              }
            });

            widget.__shadowClickBound = true;
            console.log("🚀 Secure Shadow DOM event pipeline linked successfully.");
          }
        }
      }, 500);
    };

    // Use a MutationObserver to target the runtime injection lifecycle
    const observer = new MutationObserver(() => {
      const widget = document.querySelector("elevenlabs-convai");
      if (widget) {
        bindShadowClick();
        observer.disconnect();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    if (!script) {
      script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      script.type = "text/javascript";
      document.body.appendChild(script);
    } else {
      const existingWidget = document.querySelector("elevenlabs-convai");
      if (existingWidget) bindShadowClick();
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <PageTracker />
      <Navbar />
   
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Main */}
          <Route path="/" element={<Home />} />
          <Route path="/who-we-are/" element={<WhoWeAre />} />
          <Route path="/migrate-to-australia/" element={<Migrate />} />

          {/* Services */}
          <Route path="/our-services/individual/" element={<IndividualVisa />} />
          <Route path="/our-services/employers/" element={<EmployerVisa />} />
          <Route path="/our-services/student-visa/" element={<StudentVisa />} />
          <Route path="/our-services/gsm-general-skilled-migration/" element={<GeneralSkilledMigration />} />
          <Route path="/our-services/dama/" element={<DAMA />} />
          <Route path="/our-services/labour-agreement/" element={<LabourAgreement />} />

          {/* Tools */}
          <Route path="/points-calculator/" element={<PointsCalculator />} />

          {/* Media */}
          <Route path="/videos/" element={<Videos />} />
          <Route path="/news/" element={<News />} />
          <Route path="/news/:slug/" element={<NewsArticle />} />
          <Route path="/blogs/" element={<Blogs />} />
          <Route path="/blogs/:slug/" element={<BlogsArtical />} />

          {/* Contact */}
          <Route path="/contact-us/" element={<ContactUs />} />
          <Route path="/book-consultation/" element={<BookConsultation />} />
          <Route path="/brochures/" element={<Brochures />} />

          {/* Checklists */}
          <Route path="/checklist-for-dama/" element={<Checklist />} />
          <Route path="/checklist-for-gsm-general-skilled-migration/" element={<Checklistgsm />} />
          <Route path="/checklist-for-labour-agreement/" element={<Checklistlabour />} />

          {/* Policies */}
          <Route path="/terms-services/" element={<Terms />} />
          <Route path="/artificial-intelligence-use-policy/" element={<AI />} />
          <Route path="/privacy-policy/" element={<Policy />} />
          <Route path="/cancellation-and-refund-policy/" element={<Refund />} />

          {/* Student */}
          <Route path="/our-services/student-visa/student-visa-australia/" element={<StudentAustralia />} />
          <Route path="/our-services/student-visa/student-visa-dubai/" element={<StudentDubai />} />
          <Route path="/our-services/student-visa/student-visa-uk/" element={<StudentUk />} />

          {/* Employer */}
          <Route path="/our-services/employers/standard-business-sponsorship/" element={<EmployerVisaBusiness />} />
          <Route path="/our-services/employers/labour-agreement/" element={<EmployerVisaLabour />} />
          <Route path="/our-services/employers/nomination-application/" element={<EmployerVisaEmployer />} />
          <Route path="/our-services/employers/regional-certifying-body-approval/" element={<EmployerVisaRegional />} />
          <Route path="/our-services/employers/business-case-preparation/" element={<EmployerVisaStrategic />} />
          <Route path="/our-services/employers/training-plan/" element={<EmployerVisaTraining />} />
          <Route path="/our-services/employers/labour-market-testing-lmt-for-sc494-and-sc482-visas/" element={<EmployerVisaLMT />} />

          {/* Individual */}
          <Route path="/our-services/individual/employer-sponsored-visa/" element={<IndividualVisaEmployer />} />
          <Route path="/our-services/individual/general-skilled-visa/" element={<IndividualVisaGsm />} />
          <Route path="/our-services/individual/family-visa/" element={<IndividualVisaFamily />} />
          <Route path="/our-services/individual/temporary-work-short-stay-visa/" element={<IndividualVisaWork />} />
          <Route path="/our-services/individual/global-talent-visa/" element={<IndividualVisaGlobal />} />
          <Route path="/our-services/individual/working-holiday-work-holiday-visa/" element={<IndividualVisaHoliday />} />
          <Route path="/our-services/individual/business-investor-visa/" element={<IndividualVisaBusiness />} />
          <Route path="/our-services/individual/refugee-visa/" element={<IndividualVisaRefugee />} />
          <Route path="/our-services/individual/visitor-evisitor-eta-visa/" element={<IndividualVisaETA />} />
          <Route path="/our-services/individual/student-guardian-visa/" element={<IndividualVisaGurdian />} />
        </Routes>
      </Suspense>

      {/* 4. Link the ref to the Web Component */}
      <elevenlabs-convai 
        ref={widgetRef} 
        agent-id="agent_5201ksmd3c0zfkg82bgbk6p727yn" 
      />
      <Footer />
    </Router>
  );
}

export default App;