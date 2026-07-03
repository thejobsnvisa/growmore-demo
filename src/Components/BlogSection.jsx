import React from "react";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

const blogs = [
{
    id: 1,
<<<<<<< HEAD
    slug: "tasmania-and-queensland-202526-state-nomination-programs-closed",
    title: "Tasmania and Queensland 2025–26 State Nomination Programs Closed",
    metaTitle: "Tasmania & Queensland Close 2025–26 State Nomination Programs | Latest News",
    metaDescription:"Tasmania and Queensland have closed their 2025–26 state nomination programs after filling allocations. Learn what this means for Australia PR applicants.",
    date: "July 3, 2026",
    image: `/assets/nb34.png`,
=======
    slug: "australia-keeps-2027-international-student-cap-unchanged",
    title: "Australia Keeps 2027 International Student Cap Unchanged at 295,000",
    metaTitle: "Australia Student Cap 2027 Unchanged at 295,000 | Latest Update",
    metaDescription:"Australia will keep the international student cap at 295,000 for 2027. Learn what this means for student visas, universities, and prospective international students.",
    date: "July 3, 2026",
    image: `/assets/nb33.png`,
>>>>>>> 7345ce8d27557f775f47fd2939270ce41fd0a7c0
  },
  {
    id: 2,
    slug: "vfs-global-announces-temporary-suspension-of-cpv-services-in-australia",
    title: "VFS Global Announces Temporary Suspension of CPV Services in Australia",
    metaTitle: "VFS Global CPV Services Suspended in Australia 2026 Update",
    metaDescription:"VFS Global has temporarily suspended CPV services in Australia from 1 July 2026. Learn impact on visa applications, delays, and next steps.",
    date: "July 2, 2026",
    image: `/assets/nb32.png`,
  },
  {
    id: 3,
<<<<<<< HEAD
    slug: "australia-visa-application-fees-increase-from-1-july-2026",
    title: "Australia Visa Application Fees Increase From 1 July 2026",
    metaTitle: "Australia Visa Application Fees Increase From 1 July 2026",
    metaDescription:"Australia visa application fees have increased from 1 July 2026. Check the latest charges for Australia PR, skilled, partner, employer-sponsored and visitor visas.",
    date: "July  1, 2026",
    image: `/assets/nb29.png`,
  },  
=======
    slug: "registered-migration-agents-face-new-online-cpd-limit-from-1-july-2026",
    title: "Registered Migration Agents Face New Online CPD Limit From 1 July 2026",
    metaTitle: "New Online CPD Limit for Registered Migration Agents 2026",
    metaDescription:"From 1 July 2026, Registered Migration Agents can complete a maximum of 6 online CPD points within any continuous 24-hour period.",
    date: "July 2, 2026",
    image: `/assets/nb31.png`,
  },
>>>>>>> 7345ce8d27557f775f47fd2939270ce41fd0a7c0
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
