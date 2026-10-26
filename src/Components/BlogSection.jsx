import React from "react";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    slug: "victoria-subclass-190-visa-nomination-program-is-now-open-for-2026-27",
    title: "Victoria’s Subclass 190 Visa Nomination Program Is Now Open for 2026–27",
    metaTitle: "Victoria Subclass 190 Visa Nomination Opens for 2026–27",
    metaDescription: "Victoria’s Subclass 190 nomination program is now open for 2026–27, with 900 places available. Check eligibility, allocation and nomination fees.",
    date: "Oct 26, 2026",
    image: `/assets/nb116.png`,
    category: "Skilled Migration Visas",
    subcategory: ["Subclass 190", "Subclass 491"]
  },
  {
    id: 2,
    slug: "latest-tasmania-state-nomination-invitation-update-23-october-2026",
    title: "Latest Tasmania State Nomination Invitation Update: 23 October 2026",
    metaTitle: "Latest Tasmania State Nomination Update: 23 October 2026",
    metaDescription: "Check Tasmania's latest 23 October 2026 nomination update, including Subclass 190 and 491 invitations, points scores, available places and processing figures.",
    date: "Oct 23, 2026",
    image: `/assets/nb115.png`,
    category: "Skilled Migration Visas",
    subcategory: ["Subclass 190", "Subclass 491"]
  },
  {
    id: 3,
    slug: "south-australia-general-skilled-migration-program-update",
    title: "South Australia’s General Skilled Migration Program Update",
    metaTitle: "South Australia Opens 2026–27 Skilled Migration ROIs",
    metaDescription: "South Australia opens ROIs for its 2026–27 skilled migration program. Check eligibility, priority industries, nomination streams and application fees.",
    date: "Oct 22, 2026",
    image: `/assets/nb114.jpg`,
    category: "Skilled Migration Visas",
    subcategory: ["Subclass 190", "Subclass 491"]
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
