import React from "react";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

const blogs = [
    {
    id: 1,
    slug: "big-changes-proposed-for-australias-migration-review-process",
    title:
      "Big Changes Proposed for Australia's Migration Review Process",
    metaTitle: "Big Changes Proposed for Australia's Migration Review Process",
    metaDescription:
      "Australia may reform its migration review process under a proposed Bill. Learn the key changes, Senate recommendations, and what they mean for visa applicants.",
    date: "Aug 06, 2026",
    image: `/assets/nb64.jpg`,
  },
  {
    id: 2,
    slug: "planning-to-move-to-australia-gujarat-simplifies-passport-verification-process",
    title:
      "Planning to Move to Australia? Gujarat Simplifies Passport Verification Process",
    metaTitle: "Australia Visa Applicants: Gujarat Eases Passport Process",
    metaDescription:
      "Planning to move to Australia? Gujarat has simplified passport verification by removing routine police station visits, making passport applications faster.",
    date: "Aug 05, 2026",
    image: `/assets/nb63.png`,
  },
  {
    id: 3,
    slug: "tasmania-state-nomination-program-reopens-on-17-august-with-changes",
    title:
      "Tasmania State Nomination Program Reopens on 17 August with Changes",
    metaTitle: "Tasmania State Nomination Program Reopens on 17 August",
    metaDescription:
      "Tasmania opens its 2026–27 State Nomination Program on 17 August with revised priority attributes, weekly invitations and updated ROI requirements.",
    date: "Aug 05, 2026",
    image: `/assets/nb62.jpg`,
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
