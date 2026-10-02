import React from "react";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    slug: "australia-tightens-student-visa-and-dependant-rules-from-2-october",
    title: "Australia Tightens Student Visa and Dependant Rules From 2 October",
    metaTitle: "Australia Tightens Student Visa Rules From 2 October 2026",
    metaDescription: "Australia tightens Student visa and dependant rules from 2 October 2026, changing onshore applications, family inclusion and subsequent entrants.",
    date: "Oct 2, 2026",
    image: `/assets/nb100.png`,
  },
  {
    id: 2,
    slug: "tasmania-latest-invitation-round-issues-72-invitations-on-1-october-2026",
    title: "Tasmania’s Latest Invitation Round Issues 72 Invitations on 1 October 2026",
    metaTitle: "Tasmania Invitation Round: 72 Invitations on 1 October 2026",
    metaDescription: "Tasmania issued 72 skilled migration invitations on 1 October 2026. Check subclass 190 and 491 scores, remaining nomination places and assessment thresholds.",
    date: "Oct 2, 2026",
    image: `/assets/nb99.png`,
  },
  {
    id: 3,
    slug: "act-plans-october-invitations-while-nomination-quota-remains-unclear",
    title: "ACT Plans October Invitations While Nomination Quota Remains Unclear",
    metaTitle: "ACT Plans October Invitations Amid Nomination Uncertainty",
    metaDescription: "ACT plans its first 2026–27 skilled migration invitation round for October. Check nomination updates, Canberra Matrix rules and ACT occupation list changes.",
    date: "Oct 1, 2026",
    image: `/assets/nb98.png`,
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
