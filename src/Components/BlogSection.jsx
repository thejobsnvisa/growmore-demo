import React from "react";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

const blogs = [
 {
    id: 1,
    slug: "can-i-do-multiple-eois-for-australia-pr",
    title: "Can I Do Multiple EOIs for Australia PR?",
    metaTitle:"How many EOI can I submit for Australia",
    metaDescription:"Can I Do Multiple EOIs for Australia PR? Find out when multiple EOIs make sense, how SkillSelect works, and what mistakes to avoid.",
    date: "Jun 25, 2026",
    image: `/assets/bg79.png`,
  }, 
  {
    id: 2,
    slug: "national-innovation-visa-explained-an-australia-pr-pathway-for-global-talent",
    title: "National Innovation Visa (Subclass 858) Explained: Pathway to Australia PR",
    metaTitle:"Australia PR via National Innovation Visa Explained",
    metaDescription:"how the National Innovation Visa (Subclass 858) works, who qualifies, nomination requirements, visa benefits, and the steps exceptional professionals, researchers, investors, and entrepreneurs can take to obtain Australia PR.",
    date: "Jun 22, 2026",
    image: `/assets/bg78.png`,
  }, 
  {
    id: 3,
    slug: "understanding-pic-4020-how-false-information-can-affect-your-australia-visa",
    title: "Understanding PIC 4020: How False Information Can Affect Your Australia Visa",
    metaTitle:"What Is PIC 4020? Australia Visa Refusals, Bans & Key Rules Explained",
    metaDescription:"PIC 4020 is a critical visa criterion that can lead to visa refusals and exclusion periods. Discover how it works, who it affects, common triggers, and what applicants can do to stay compliant.",
    date: "Jun 20, 2026",
    image: `/assets/bg77.png`,
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
