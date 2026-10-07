import React from "react";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 141,
    slug: "australia-changes-concurrent-enrolment-rules-for-international-students",
    title: "Australia Changes Concurrent Enrolment Rules for International Students",
    metaTitle: "Australia Changes Concurrent Enrolment Rules for Students",
    metaDescription: "Australia has changed concurrent enrolment rules for international students. Learn how the new 12-month restriction affects new and existing enrolments.",
    date: "Oct 7, 2026",
    image: `/assets/nb103.png`,
    category: "Studying and Training Visas",
    subcategory: "Subclass 500",
  },
  {
    id: 140,
    slug: "nt-190-and-491-nominations-mostly-closed-for-2026-27-who-can-still-apply",
    title: "NT 190 and 491 Nominations Mostly Closed for 2026–27: Who Can Still Apply?",
    metaTitle: "NT 190 & 491 Nominations Mostly Closed for 2026–27",
    metaDescription: "NT 190 and 491 nominations are mostly closed for 2026–27. Find out who may still apply under the NT nomination exceptions.",
    date: "Oct 6, 2026",
    image: `/assets/nb102.jpg`,
    category: "Skilled Migration Visas",
    subcategory: [
      "Subclass 190",
      "Subclass 491",
    ],
  },
  {
    id: 139,
    slug: "no-more-card-surcharges-for-australian-visa-payments-from-october",
    title: "No More Card Surcharges for Australian Visa Payments from October",
    metaTitle: "Australia Visa Card Surcharges End from October 2026",
    metaDescription: "From 1 October 2026, the Department of Home Affairs will stop charging card payment surcharges on eligible Australian visa payments.",
    date: "Oct 3, 2026",
    image: `/assets/nb101.png`,
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
