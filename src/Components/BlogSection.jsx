import React from "react";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 98,
    slug: "major-fnq-dama-update-makes-workforce-planning-easier-for-employers",
    title: "Major FNQ DAMA Update Makes Workforce Planning Easier for Employers",
    metaTitle: "Major FNQ DAMA Update Makes Workforce Planning Easier",
    metaDescription:"Learn the latest FNQ DAMA updates, including five-year endorsements, upfront concessions, AI report guidance and employer sponsorship rules.",
    date: "Aug 03, 2026",
    image: `/assets/nb60.png`,
  }, 
  {
    id: 97,
    slug: "ministerial-direction-120-new-priority-order-for-subclass-858-visa",
    title: "Ministerial Direction 120: New Priority Order for Subclass 858 Visa  ",
    metaTitle: "Ministerial Direction 120: Subclass 858 Visa Priority Changes",
    metaDescription:"Australia's MD 117 updates Family visa processing priorities from 25 July 2026. Learn the new priority order for Partner, Child and Parent visas.",
    date: "July 30, 2026",
    image: `/assets/nb59.png`,
  },
   {
    id: 96,
    slug: "ministerial-direction-117-new-family-visa-priority-order",
    title: "Ministerial Direction 117: New Family Visa Priority Order ",
    metaTitle: "Ministerial Direction 117: Family Visa Priority Order",
    metaDescription:"Australia's MD 117 updates Family visa processing priorities from 25 July 2026. Learn the new priority order for Partner, Child and Parent visas.",
    date: "July 30, 2026",
    image: `/assets/nb58.jpg`,
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
