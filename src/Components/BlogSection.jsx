import React from "react";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    slug: "major-push-to-restore-priority-for-offshore-skilled-workers-partners-mia-advocacy",
    title: "Major Push to Restore Priority for Offshore Skilled Workers & Partners: MIA advocacy",
    metaTitle: "MIA Calls to Restore Priority for Offshore Workers & Partners",
    metaDescription:
      "MIA urges Australia to restore visa processing priority for offshore skilled workers and partners following changes under Ministerial Directions 117 and 119.",
    date: "Sep 5, 2026",
    image: `/assets/nb82.jpg`,
  },
  {
    id: 2,
    slug: "tasmania-invites-59-rois-for-state-nomination-in-latest-round",
    title: "Tasmania Invites 59 ROIs for State Nomination in Latest Round",
    metaTitle: "Tasmania Invites 59 ROIs for State Nomination",
    metaDescription:
      "Tasmania invited 59 ROIs for state nomination on 3 September 2026, including Subclass 190 and 491. Check scores, places and latest updates.",
    date: "Sep 3, 2026",
    image: `/assets/nb81.png`,
  },
  {
    id: 3,
    slug: "tra-qualification-update-check-your-occupation-before-skills-assessment",
    title: "TRA Qualification Update: Check Your Occupation Before Skills Assessment",
    metaTitle: "TRA Qualification Update: Check Your Occupation",
    metaDescription:
      "TRA has updated its Australian Qualifications by Occupation reference. Check your occupation, qualification and requirements before your TRA skills assessment.",
    date: "Sep 1, 2026",
    image: `/assets/nb80.png`,
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
