import React from "react";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

const blogs = [
    {
    id:1,
    slug: "understanding-pic-4020-how-false-information-can-affect-your-australia-visa",
    title: "Understanding PIC 4020: How False Information Can Affect Your Australia Visa",
    metaTitle:"What Is PIC 4020? Australia Visa Refusals, Bans & Key Rules Explained",
    metaDescription:"PIC 4020 is a critical visa criterion that can lead to visa refusals and exclusion periods. Discover how it works, who it affects, common triggers, and what applicants can do to stay compliant.",
    date: "Jun 20, 2026",
    image: `/assets/bg77.png`,
  },
  {
    id: 2,
    slug: "australia-pr-myths-busted-what-skilled-migrants-need-to-know",
    title: "Australia PR Myths Busted: What Skilled Migrants Need to Know",
    metaTitle:"Australia PR Myths Busted: What Skilled Migrants Must Know",
    metaDescription:"Confused by Australia PR myths? Discover the facts behind common misconceptions, understand current visa requirements, and avoid mistakes that could impact your permanent residency journey.",
    date: "Jun 19, 2026",
    image: `/assets/bg76.png`,
  },  
  {
    id: 3,
    slug: "the-ministers-interview-current-and-future-migration-plans",
    title: "The Minister's Interview: Current and Future Migration Plans",
    metaTitle:"Current and Future Migration Plans Explained by the Minister",
    metaDescription:"The Minister outlines Australia’s current migration strategy and future plans. Learn about visa changes, migration targets, skilled worker pathways, and upcoming policy developments.",
    date: "Jun 17, 2026",
    image: `/assets/bg75.png`,
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
