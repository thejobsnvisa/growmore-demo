import React from "react";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    slug: "subclass-407-visa-applicants-must-lodge-applications-from-offshore",
    title: "Subclass 407 Visa Applicants Must Lodge Applications from Offshore",
    metaTitle: "Subclass 407 Visa Applicants Must Apply from Offshore",
    metaDescription: "From 12 November 2026, most Subclass 407 visa applicants must apply from outside Australia and be offshore when their visa is granted.",
    date: "Oct 30, 2026",
    image: `/assets/nb120.jpg`,
    category: "Studying and Training Visas",
    subcategory: "Subclass 407",
  },
  {
    id: 2,
    slug: "tasmania-invites-more-skilled-migrants-in-latest-october-29-round",
    title: "Tasmania Invites More Skilled Migrants in Latest October 29 Round",
    metaTitle: "Tasmania Invites 90 Skilled Migrants in October 29 Round",
    metaDescription: "Tasmania issued 90 Subclass 190 and 491 invitations on 29 October 2026. Check the latest points scores and six-week rolling average update.",
    date: "Oct 29, 2026",
    image: `/assets/nb119.jpg`,
    category: "Skilled Migration Visas",
    subcategory: ["Subclass 190", "Subclass 491"],
  },
  {
    id: 3,
    slug: "south-australia-state-nomination-2026-27-eligibility-criteria-for-each-stream",
    title: "South Australia State Nomination 2026–27: Eligibility Criteria for Each Stream",
    metaTitle: "South Australia State Nomination 2026–27: Eligibility Guide",
    metaDescription: "Explore South Australia's 2026–27 state nomination eligibility criteria for all four streams, including onshore graduates, skilled workers and offshore applicants.",
    date: "Oct 27, 2026",
    image: `/assets/nb118.png`,
    category: "Skilled Migration Visas",
    subcategory: ["Subclass 190", "Subclass 491"],
  },
];

const BlogSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Subtitle */}
        <p className="text-[#8fd07c] font-semibold text-sm tracking-widest uppercase mb-3">
          Recent Blogs
        </p>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-medium text-[#163c3d] mb-14">
          Latest <span className="text-[#8fd07c] font-semibold">Insights</span>{" "}
          and Immigration <span className="font-semibold">Updates</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-t-3xl">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover p-4 rounded-4xl"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-[#163c3d] mb-6">
                  {blog.title}
                </h3>

                <p className="text-gray-500 text-sm mb-6 flex items-center gap-2">
                  <FaCalendar className="h-4 w-4 text-[#7cc576] font-medium" />{" "}
                  {blog.date}
                </p>

                <div className="mt-auto">
                  {/* 2. Wrap the button in a Link using the slug or ID */}
                  <Link to={`/news/${blog.slug}/`}>
                    <button className="group text-[#6dc7d1] font-semibold flex items-center gap-2 justify-end w-full transition-all duration-300">
                      <span className="relative">
                        READ MORE
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#6dc7d1] transition-all duration-300 group-hover:w-full"></span>
                      </span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
