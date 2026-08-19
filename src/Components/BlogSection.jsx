import React from "react";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 109,
    slug: "tasmania-may-withdraw-approved-nominations-over-false-clamis",
    title:"Tasmania May Withdraw Approved Nominations Over False Claims",
    metaTitle: "Tasmania May Withdraw Approved Nominations Over False Claims",
    metaDescription:"Tasmania may withdraw approved nominations if false or misleading information is found. Learn how this can affect your visa application.",
    date: "Aug 19, 2026",
    image: `/assets/nb71.jpg`,
  },
  {
    id: 108,
    slug: "australia-indonesia-work-and-holiday-visa-to-move-to-ballot-system",
    title:"Australia Indonesia Work and Holiday Visa to Move to Ballot System ",
    metaTitle: "Australia Indonesia Work and Holiday Visa Ballot System",
    metaDescription:"Australia's Indonesia Work and Holiday visa program is moving to a ballot system. Find out when it opens and who can express interest.",
    date: "Aug 14, 2026",
    image: `/assets/nb70.jpg`,
  },
  {
    id: 107,
    slug: "6500-subclass-407-nominations-refused-whats-behind-it",
    title:"6,500 Subclass 407 Nominations Refused: What's Behind It? ",
    metaTitle: "6,500 Subclass 407 Nominations Refused: What You Need to Know",
    metaDescription:"Around 6,500 Subclass 407 nominations have been refused. Learn why refusals are rising, what happens next and what affected applicants should do.",
    date: "Aug 14, 2026",
    image: `/assets/nb69.jpg`,
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
