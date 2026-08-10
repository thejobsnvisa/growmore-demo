import React from "react";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

const blogs = [
   {
    id: 1,
    slug: "vetassess-professional-skills-assessment-fees-to-change-from-9-september-2026",
    title:"VETASSESS Professional Skills Assessment Fees to Change from 9 September 2026",
    metaTitle: "VETASSESS Skills Assessment Fees to Increase from 9 Sep 2026",
    metaDescription:"VETASSESS skills assessment fees will increase from 9 September 2026. Check new fees, affected services, trade occupation exemption and key dates.",
    date: "Aug 10, 2026",
    image: `/assets/nb66.png`,
  },   
  {
    id: 2,
    slug: "abf-finds-sponsorship-breach-orders-nearly-120000-repayment",
    title:
      "ABF Finds Sponsorship Breach, Orders Nearly $120,000 Repayment",
    metaTitle: "ABF Sanctions NSW Sponsor for Exploiting 482 Visa Workers",
    metaDescription:"The ABF has sanctioned a NSW aged care provider for recovering sponsorship costs from 482 visa workers, ordering nearly $120,000 in repayments.",
    date: "Aug 07, 2026",
    image: `/assets/nb65.png`,
  },
  {
    id: 3,
    slug: "big-changes-proposed-for-australias-migration-review-process",
    title:
      "Big Changes Proposed for Australia's Migration Review Process",
    metaTitle: "Big Changes Proposed for Australia's Migration Review Process",
    metaDescription:
      "Australia may reform its migration review process under a proposed Bill. Learn the key changes, Senate recommendations, and what they mean for visa applicants.",
    date: "Aug 07, 2026",
    image: `/assets/nb64.jpg`,
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
