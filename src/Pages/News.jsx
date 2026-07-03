import React from "react";
import NewsSection from "../Components/NewsSection";
import { Helmet } from "react-helmet-async";


const News = () => {
  const url = "https://www.growmore.one/news/";
  return (
    <>
      <Helmet>
        <title>
          Australia Migration News & Visa Updates | Latest Immigration News 2026
        </title>

        <meta
          name="description"
          content="Stay updated with the latest Australia migration news, visa changes, immigration policies, state nominations, PR updates, and government announcements. Get accurate, timely visa updates for 2026."
        />

        {/* ✅ Canonical for homepage */}
        <link rel="canonical" href={url} />

        {/* ✅ OG */}
        <meta
          property="og:title"
          content="Australia Migration News & Visa Updates | Latest Immigration News 2026"
        />
        <meta
          property="og:description"
          content="Stay updated with the latest Australia migration news, visa changes, immigration policies, state nominations, PR updates, and government announcements. Get accurate, timely visa updates for 2026."
        />
        <meta property="og:url" content={url} />
        <meta property="og:image" content="https://www.growmore.one/logo.jpg" />
      </Helmet>
      <div>
        <section className="bg-[#28535B] py-16 md:py-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-15">
            <h1 className="text-3xl md:text-5xl font-semibold text-white mb-3">
              News
            </h1>
            <p className="text-white font-semibold">Home &gt;News</p>
          </div>
        </section>{" "}
        <NewsSection />
      </div>
    </>
  );
};

export default News;
