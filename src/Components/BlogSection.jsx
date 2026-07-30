import React from "react";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

const blogs = [
   {
    id: 95,
    slug: "ministerial-direction-119-new-processing-priorities-for-pr-and-work-visas",
    title: "Ministerial Direction 119: New Processing Priorities for PR and Work Visas ",
    metaTitle: "Ministerial Direction 119: PR and Work Visa Priorities",
    metaDescription:"Australia introduces new skilled visa processing priorities under Ministerial Direction 119. Find out if your PR or work visa application gets priority.",
    date: "July 30, 2026",
    image: `/assets/nb57.png`,
  }, 
    {
    id: 94,
    slug: "act-announces-new-migration-portal-for-202627-migration-program",
    title: "ACT Announces New Migration Portal for 2026–27 Migration Program",
    metaTitle: "ACT Migration Portal Launch for 2026–27 Program",
    metaDescription:"ACT launches a new Migration Application Portal for 2026–27. Learn about ACT nomination updates, occupation list review, and upcoming changes.",
    date: "July 29, 2026",
    image: `/assets/nb56.png`,
  }, 
  {
    id: 93,
    slug: "affected-by-icac-closure-your-subclass-186-visa-may-still-qualify",
    title: "Relaxation for Subclass 186 Visa Applicants Affected by ICAC Closure ",
    metaTitle: "ICAC Closure: Your Subclass 186 Visa May Still Qualify",
    metaDescription:"Affected by the ICAC closure? Eligible Subclass 186 visa applicants may still qualify if delays impacted their application requirements or deadlines.",
    date: "July 27, 2026",
    image: `/assets/nb55.png`,
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
