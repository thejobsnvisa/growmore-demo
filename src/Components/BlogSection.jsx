import React from "react";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

const blogs = [
{
    id: 1,
    slug: "how-australia-counts-regional-visa-places-critical-updates-for-applicants",
    title: "How Australia Counts Regional Visa Places: Critical Updates for Applicants",
    metaTitle: "Regional Visa Allocation: How Australia Counts Your PR Places",
    metaDescription:"Navigating the regional pathway? Learn exactly how the Department of Home Affairs calculates and counts regional visa places to avoid application traps.",
    date: "July 10, 2026",
    image: `/assets/nb42.png`,
  },
  {
    id: 2,
    slug: "victoria-great-south-coast-dama-raises-nomination-fees-from-1-july-2026",
    title: "Victoria’s Great South Coast DAMA Raises Nomination Fees from 1 July 2026",
    metaTitle: "Great South Coast DAMA Fee Increase: New 1 July 2026 Rates",
    metaDescription:"Victoria’s Great South Coast DAMA has updated its regional nomination fees. Review the new tiered structure for employers and find out how it impacts your PR pathway sponsorship.",
    date: "July 10, 2026",
    image: `/assets/nb41.png`,
  },
  {
    id: 3,
    slug: "northern-territory-closes-2025-26-skilled-migration-next-steps-for-pr",
    title: "Northern Territory Closes 2025–26 Skilled Migration: Next Steps for PR",
    metaTitle: "NT State Nomination Filled: 2025–26 Skilled Migration Update",
    metaDescription:"Missed out on the NT state nomination before allocations were exhausted? Get the latest details on application processing freezes and steps to maximize your EOI for the reopening.",
    date: "July 10, 2026",
    image: `/assets/nb40.jpg`,
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
