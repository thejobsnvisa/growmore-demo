import React from "react";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

const blogs = [
   {
    id: 1,
    slug: "new-subclass-482-visa-processing-priorities-what-applicants-need-to-know",
    title: "New Subclass 482 Visa Processing Priorities: What Applicants Need to Know",
    metaTitle: "New Subclass 482 Visa Processing Priorities Under MD 121",
    metaDescription:
      "Learn about the new Subclass 482 visa processing priorities under MD 121, including priority sectors, Specialist Skills and current processing positions.",
    date: "Sep 21, 2026",
    image: `/assets/nb88.png`,
  },
  {
    id: 2,
    slug: "major-migration-changes-announced-to-tighten-australia-visa-system",
    title: "Major Migration Changes Announced to Tighten Australia’s Visa System",
    metaTitle: "Major Australia Migration Changes Announced in 2026",
    metaDescription:
      "Australia announces major migration changes affecting student dependants, Working Holiday visas, visitor visas, skilled migration and visa compliance.",
    date: "Sep 17, 2026",
    image: `/assets/nb87.png`,
  },
  {
    id: 3,
    slug: "tasmania-invitation-round-63-roi-invited-on-17-september",
    title: "Tasmania Invitation Round: 63 ROIs Invited on 17 September",
    metaTitle: "Tasmania Invitation Round: 63 ROIs Invited on 17 Sept 2026",
    metaDescription:
      "Tasmania invited 63 ROIs for Subclass 190 and 491 on 17 September 2026. See invitation scores, nomination places and latest Tasmania PR updates.",
    date: "Sep 17, 2026",
    image: `/assets/nb86.png`,
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
