import React from "react";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

const blogs = [
   {
    id: 1,
    slug: "queenslands-2026-27-skilled-migration-program-is-set-to-open-on-6-november",
    title: "Queensland’s 2026–27 Skilled Migration Program Is Set to Open on 6 November",
    metaTitle: "Queensland Skilled Migration Program 2026–27: ROI Opens Soon",
    metaDescription: "Queensland's 2026–27 Skilled Migration Program opens for ROIs on 6 November. Check updated eligibility, work experience and document requirements.",
    date: "Oct 31, 2026",
    image: `/assets/ng122.jpg`,
    category: "Skilled Migration Visas",
    subcategory: ["Subclass 190","Subclass 491"],
  },
   {
    id: 2,
    slug: "protection-visa-applicants-cannot-apply-bridging-visa-b-from-1-novemeber-2026",
    title: "Protection Visa Applicants cannot apply Bridging Visa B from 1 November 2026",
    metaTitle: "Protection Visa Applicants Face BVB Ban from 1 November 2026",
    metaDescription: "New Bridging Visa B rules from 1 November 2026 restrict protection visa applicants from applying for a BVB. Check who is affected and what changes.",
    date: "Oct 31, 2026",
    image: `/assets/ng121.jpg`,
    category: "other",
    subcategory: ["Bridging Visa","Subclass 866"],
  },
  {
    id: 3,
    slug: "good-news-for-trade-students-south-australia-reverses-section-45a-enforcement-approach",
    title: "Good News for Trade Students: South Australia Reverses Section 45A Enforcement Approach",
    metaTitle: "Good News for Trade Students in South Australia: Rules Reversed",
    metaDescription: "South Australia reverses its Section 45A enforcement approach, bringing greater certainty for students and RTOs offering institution-based trade courses.",
    date: "Oct 30, 2026",
    image: `/assets/nb121.jpg`,
    category: "Studying and Training Visas",
    subcategory: "Subclass 500",
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
