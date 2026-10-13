import React from "react";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    slug: "victoria-skilled-migration-2026-27-new-points-test-and-priority-occupations-revealed",
    title: "Victoria Skilled Migration 2026–27: New Points Test and Priority Occupations Revealed",
    metaTitle: "Victoria Skilled Migration 2026–27: Points Test & Jobs",
    metaDescription: "Explore Victoria’s 2026–27 Skilled Migration Points Test, scoring criteria and priority occupations for subclass 190 and 491 Australia PR pathways.",
    date: "Oct 13, 2026",
    image: `/assets/nb108.png`,
    category: "Skilled Migration Visas",
    subcategory: [
      "Subclass 190",
      "Subclass 491",
    ],
  },
  {
    id: 2,
    slug: "victoria-announces-roi-and-visa-nomination-fees-for-its-2026-27-migration-program",
    title: "Victoria Announces ROI and Visa Nomination Fees for Its 2026–27 Migration Program",
    metaTitle: "Victoria ROI and Nomination Fees 2026–27",
    metaDescription: "Victoria introduces ROI and visa nomination fees for 2026–27. Check subclass 190 and 491 fees, GST rules and payment conditions before applying.",
    date: "Oct 13, 2026",
    image: `/assets/nb107.png`,
    category: "Skilled Migration Visas",
    subcategory: [
      "Subclass 190",
      "Subclass 491",
    ],
  },
  {
    id: 3,
    slug: "opposition-unveils-australia-first-migration-plan-with-major-visa-reforms",
    title: "Opposition Unveils Australia-First Migration Plan with Major Visa Reforms",
    metaTitle: "Australia-First Migration Plan: Major Visa Reforms Proposed",
    metaDescription: "Australia’s Opposition proposes major visa reforms, including abolishing subclass 485 visas, restricting student dependants and expanding skilled migration.",
    date: "Oct 9, 2026",
    image: `/assets/nb106.png`,
    category: "Other",
    subcategory: "Other",
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
