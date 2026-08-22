import React from "react";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

const blogs = [
   {
    id: 113,
    slug: "osca-update-abs-seeks-final-feedback-on-draft-2027-osca-update-before-march-release",
    title: "OSCA UPDATE: ABS Seeks Final Feedback on Draft 2027 OSCA Update Before March Release ",
    metaTitle: "2027 OSCA Update: ABS Opens Final Consultation",
    metaDescription:
      "ABS opens final consultation on the draft 2027 OSCA update. Learn what proposed occupation changes mean for skilled migrants and employers.",
    date: "Aug 22, 2026",
    image: `/assets/nb75.png`,
  },
   {
    id: 112,
    slug: "department-policy-update-485-graduate-visa-study-gaps-may-not-automatically-affect-eligibility",
    title: "Department’s Policy update: 485 Graduate Visa: Study Gaps May Not Automatically Affect Eligibility",
    metaTitle: "485 Study Gap Clarification: What Graduates Need to Know",
    metaDescription:
      "Australia clarifies that study gaps may not automatically affect the Subclass 485 Australian Study Requirement. See key exceptions and eligibility details.",
    date: "Aug 21, 2026",
    image: `/assets/nb74.png`,
  },
  {
    id: 111,
    slug: "tasmaina-issues-93-invitations-in-first-2026-27-invitation-round",
    title: "Tasmania Issues 93 Invitations in First 2026–27 Invitation Round ",
    metaTitle: "Tasmania Issues 93 Invitations in First 2026–27 Round",
    metaDescription:
      "Tasmania issues 93 invitations in its first 2026–27 state nomination round, with 67 for Subclass 190 and 26 for Subclass 491.",
    date: "Aug 20, 2026",
    image: `/assets/nb73.png`,
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
