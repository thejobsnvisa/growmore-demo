import React from "react";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    slug: "how-to-become-a-standard-business-sponsor-in-australia-complete-guide",
    title: "How to Become a Standard Business Sponsor in Australia: Complete Guide",
    metaTitle: "How to Become a Standard Business Sponsor in Australia",
    metaDescription: "Learn how to become a Standard Business Sponsor in Australia, including eligibility requirements, documents, application steps and sponsorship benefits.",
    date: "Nov 11, 2026",
    image: `/assets/ng126.jpg`,
    category: "Employer Sponsored visas",
    subcategory:["Subclass 482","Subclass 494"],
  },
  {
    id: 2,
    slug: "tasmania-state-nomination-update-96-invitations-issued-on-5-november-2026",
    title: "Tasmania State Nomination Update: 96 Invitations Issued on 5 November 2026",
    metaTitle: "Tasmania Issues 96 State Nomination Invitations ",
    metaDescription: "Tasmania issued 96 Subclass 190 and 491 invitations on 5 November 2026. Check points scores, nomination places and updated assessment rules.",
    date: "Nov 5, 2026",
    image: `/assets/ng124.jpg`,
    category: "Skilled Migration Visa",
    subcategory:["Subclass 190","Subclass 491"],
  },
  {
    id: 3,
    slug: "australia-releases-official-subclass-189-skillselect-data-20000-invitations-issued",
    title: "Australia Releases Official Subclass 189 SkillSelect Data: 20,000 Invitations Issued",
    metaTitle: "Australia Subclass 189: 20,000 SkillSelect Invitations Issued",
    metaDescription: "Australia issued 20,000 Subclass 189 invitations on 15 October 2026. Check occupation-wise minimum points scores and tie-break dates.",
    date: "Nov 2, 2026",
    image: `/assets/ng123.png`,
    category: "Skilled Migration Visa",
    subcategory: "Subclass 189",
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
