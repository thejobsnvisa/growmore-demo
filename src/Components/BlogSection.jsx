import React from "react";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

const blogs = [
   {
    id: 0,
    slug: "a-smart-way-to-boost-your-australia-pr-score-through-naati",
    title: "A Smart Way to Boost Your Australia PR Score Through NAATI",
    metaTitle:"Need More PR Points? How NAATI Can Strengthen Your EOI",
    metaDescription:"Find out how NAATI CCL can help skilled migrants gain 5 extra Australia PR points and improve their ranking in invitation rounds.",
    date: "Jun 11, 2026",
    image: `/assets/bg72.png`,
  }, 
  {
    id: 1,
    slug: "who-can-apply-for-a-protection-visa-in-australia-full-breakdown",
    title: "Who Can Apply for a Protection Visa in Australia? Full Breakdown",
    metaTitle:"Who Can Apply for a Protection Visa in Australia? Full Guide",
    metaDescription:"who can apply for a Protection Visa in Australia, eligibility criteria, required documents, visa benefits, and key restrictions.",
    date: "Jun 10, 2026",
    image: `/assets/bg71.png`,
  },  
  {
    id: 2,
    slug: "bridging-visa-e-subclass-050-051-eligibility-work-rights-and-conditions",
    title: "Bridging Visa E (Subclass 050 & 051): Eligibility, Work Rights and Conditions",
    metaTitle:"Bridging Visa E Australia: Eligibility, Conditions & Rights",
    metaDescription:"A complete guide to Bridging Visa E in Australia. Learn the differences between Subclass 050 and 051, work rights, conditions, and key rules.",
    date: "Jun 09, 2026",
    image: `/assets/bg69.png`,
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
