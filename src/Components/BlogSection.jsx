import React from "react";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

const blogs = [
   {
    id: 1,
    slug: "482-visa-at-no-cost-heres-why-its-possible",
    title: "482 Visa at No Cost? Here's Why It's Possible",
    metaTitle: "482 Visa at No Cost? How You Can Get Sponsored Free",
    metaDescription:"how to get an Australian 482 Visa at zero cost. Learn about legal employer-paid sponsorship rules, fee coverage, and zero-deduction regulations.",
    date: "July 22, 2026",
    image: `/assets/bg95.jpg`,
  },   
  {
    id: 2,
    slug: "labour-market-testing-australia-what-employers-must-know",
    title: "Labour Market Testing Australia: What Employers Must Know",
    metaTitle: "Labour Market Testing Australia: 2026 Employer Guide & LMT Rules",
    metaDescription:"Sponsoring overseas workers on the Skills in Demand 482 visa? Master Australia’s strict 28-day Labour Market Testing rules to avoid an automatic nomination refusal.",
    date: "July 18, 2026",
    image: `/assets/bg94.png`,
  }, 
  {
    id: 3,
    slug: "need-a-skills-assessment-for-australia-pr-find-the-right-assessing-authority",
    title: "Need a Skills Assessment for Australia PR? Find the Right Assessing Authority",
    metaTitle:"Need a Skills Assessment for Australia PR? Find Out Here",
    metaDescription:"Need a skills assessment for Australia PR? Find the right assessing authority and get expert guidance from Growmore Immigration.",
    date: "July 17, 2026",
    image: `/assets/bg93.jpg`,
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
