import React from "react";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    slug: "nsw-190-invitation-round-happened-today-which-occupations-received-invitations",
    title: "NSW 190 Invitation Round Happened Today: Which Occupations Received Invitations?",
    metaTitle: "NSW 190 Invitation Round: Occupations and Points 2026",
    metaDescription: "Explore reported NSW 190 invitation results for 21 October 2026, including occupations, points scores and key steps for skilled migration applicants.",
    date: "Oct 21, 2026",
    image: `/assets/nb113.png`,
    category: "Skilled Migration Visas",
    subcategory: "Subclass 190",
  },
  {
    id: 2,
    slug: "nsw-skilled-migration-check-the-latest-190-visa-eligibility",
    title: "NSW Skilled Migration: Check the Latest 190 Visa Eligibility",
    metaTitle: "NSW Skilled Migration: Latest 190 Visa Eligibility Rules",
    metaDescription: "Check NSW subclass 190 eligibility for 2026–27, including skills assessment, residency requirements, the updated NSW Skills List and invitation process.",
    date: "Oct 16, 2026",
    image: `/assets/nb112.png`,
    category: "Skilled Migration Visas",
    subcategory: "Subclass 190",
  },
  {
    id: 3,
    slug: "tasmania-190-and-491-invitations-latest-results-and-next-round-date",
    title: "Tasmania 190 and 491 Invitations: Latest Results and Next Round Date",
    metaTitle: "Tasmania 190 & 491 Invitations: Latest Results and Next Round Date",
    metaDescription: "Check Tasmania’s 15 October 2026 invitation results for subclass 190 and 491 visas, lowest ROI scores, invitation numbers, and the next round date.",
    date: "Oct 16, 2026",
    image: `/assets/nb111.jpg`,
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
