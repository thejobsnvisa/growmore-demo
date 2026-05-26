import React from "react";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

const blogs = [
   {
    id: 0,
    slug: "vetassess-skills-assessment-guide-key-tips-for-a-positive-outcome",
    title: "VETASSESS Skills Assessment Guide: Key Tips for a Positive Outcome",
    metaTitle:"VETASSESS Skills Assessment Guide for Australia PR",
    metaDescription:"How to improve your VETASSESS skills assessment with proper occupation selection, strong evidence, and ANZSCO-aligned documents.",
    date: "May 26, 2026",
    image: `/assets/bg62.png`,
  },{
    id: 1,
    slug: "migrate-to-australia-as-a-construction-worker-why-demand-is-still-strong-in-2026",
    title: "Migrate to Australia as a Construction Worker: Why Demand Is Still Strong in 2026",
    metaTitle:"Migrate to Australia as a Construction Worker in 2026",
    metaDescription:"Planning to migrate to Australia as a construction worker? Discover visa options, demand trends, and PR pathways for 2026.",
    date: "May 25, 2026",
    image: `/assets/bg61.png`,
  },
  {
    id: 2,
    slug: "how-company-specific-labour-agreements-work-in-australia",
    title: "How Company Specific Labour Agreements Work in Australia",
    metaTitle:"How Company Specific Labour Agreements Work in Australia",
    metaDescription:"Learn how Company Specific Labour Agreements work in Australia, including eligibility, concessions, sponsorship requirements, and employer obligations.",
    date: "May 23, 2026",
    image: `/assets/bg60.png`,
  }
  
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
