import React from "react";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    slug: "registered-migration-agents-face-new-online-cpd-limit-from-1-july-2026",
    title: "Registered Migration Agents Face New Online CPD Limit From 1 July 2026",
    metaTitle: "New Online CPD Limit for Registered Migration Agents 2026",
    metaDescription:"From 1 July 2026, Registered Migration Agents can complete a maximum of 6 online CPD points within any continuous 24-hour period.",
    date: "July 2, 2026",
    image: `/assets/nb31.png`,
  }, 
  {
    id: 2,
    slug: "australia-visa-application-fees-increase-from-1-july-2026",
    title: "Australia Visa Application Fees Increase From 1 July 2026",
    metaTitle: "Australia Visa Application Fees Increase From 1 July 2026",
    metaDescription:"Australia visa application fees have increased from 1 July 2026. Check the latest charges for Australia PR, skilled, partner, employer-sponsored and visitor visas.",
    date: "July  1, 2026",
    image: `/assets/nb29.png`,
  },  
   {
     id: 3,
    slug: "major-australia-immigration-changes-effective-from-1-july-2026",
    title: "Major Australia Immigration Changes Effective From 1 July 2026",
    metaTitle: "Australia’s Massive 1 July Immigration Changes Are Live: What's New",
    metaDescription:"Massive visa fee hikes and new skilled salary thresholds take effect across Australia today, 1 July 2026. Here is the breakdown of who is affected.",
    date: "July 1, 2026",
    image: `/assets/nb30.png`,
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
                  <Link to={`/blogs/${blog.slug}/`}>
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
