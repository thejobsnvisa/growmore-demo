import React from "react";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

const blogs = [
      {
    id: 2,
    slug: "employer-sponsored-visa-compliance-important-reminder-for-australian-businesses",
    title: "Employer Sponsored Visa Compliance: Important Reminder for Australian Businesses",
    metaTitle: "Employer Sponsored Visa Compliance in Australia: Key Update",
    metaDescription: "Understand employer sponsorship obligations in Australia, including records, payroll, duties, and compliance risks under visa programs.",
    date: "May 12, 2026",
    image: `${import.meta.env.BASE_URL}assets/bg29.png`,
  },
  {
    id: 1,
    slug: "expression-of-interest-eoi-explained-complete-guide-for-gsm-applicants",
    title: "Expression of Interest (EOI) Explained: Complete Guide for GSM Applicants",
    metaTitle: "How to File a GSM EOI: Australia Migration Guide (2026)",
    metaDescription: "Master the SkillSelect EOI process for Australia’s 189, 190, and 491 visas. Learn how to calculate points, avoid common errors, and get invited in 2026. Read the expert guide.",
    date: "May 9, 2026",
    image: `${import.meta.env.BASE_URL}assets/bg28.jpg`,
  }, 
  {
    id: 0,
    slug: "what-happens-to-your-australian-visa-if-your-relationship-ends",
    title: "What Happens to Your Australian Visa if Your Relationship Ends?",
    metaTitle: "Australia Visa Impact After Relationship Ends",
    metaDescription: "Relationship ended in Australia? Find out how it impacts your visa, PR pathway, and what steps you should take next.",
    date: "May 8, 2026",
    image: `${import.meta.env.BASE_URL}assets/bg27.png`,
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
