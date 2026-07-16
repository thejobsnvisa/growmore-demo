import React from "react";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

const blogs = [
{
    id:1,
    slug: "how-to-avoid-common-mistakes-when-applying-for-australia-pr",
    title: "How to Avoid Common Mistakes on Your Australia PR Application",
    metaTitle:"How to Avoid Common Australia PR Application Mistakes",
    metaDescription:"A single error can cause a visa refusal or years of delays. Learn how to avoid critical mistakes with skills assessments, points claims, and the CSOL.",
    date: "July 15, 2026",
    image: `/assets/bg91.png`,
  },    
  {
    id:2,
    slug: "subclass-491-visa-guide-your-path-to-australia-pr",
    title: "Subclass 491 Visa Guide: Your Strategic Path to Australia PR",
    metaTitle:"Subclass 491 Visa Guide: Step-by-Step Path to Australia PR",
    metaDescription:"Master the regional visa pathway. Learn how the 15-point nomination bonus unlocks Australian PR, check your eligibility, and view the 2026 processing times.",
    date: "July 13, 2026",
    image: `/assets/bg90.png`,
  },   
  {
    id:3,
    slug: "total-cost-for-australia-pr-in-2026-approximate-fees-and-expenses",
    title: "Total Cost for Australia PR in 2026: Approximate Fees and Expenses ",
    metaTitle:"Australia PR Cost Guide 2026: Visa Fees & Expenses",
    metaDescription:"Australia PR cost in 2026 explained. See visa charges, skills assessment fees, English test costs, medicals, police clearance, and more.",
    date: "July 11, 2026",
    image: `/assets/bg89.jpg`,
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
